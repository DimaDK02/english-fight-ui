import React, { useEffect, useState } from 'react'
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner'
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert'
import '@vkontakte/vkui/dist/vkui.css'
import { AppService } from './AppService'
import './constant-styles.css'
import { Utils } from '../Utils'
import * as Sentry from '@sentry/react'
import './App.css'
import { trackers } from '../core/trackers/trackers'
import { Epic, Panel, Tabbar, TabbarItem, View } from '@vkontakte/vkui'
import { GameInstance } from '../models/game-model'
import { BattleService } from './panels/BattleService'
import Home from './panels/Home'
import Battle from './panels/Battle'
import Results from './panels/Results'
import { Icon28HomeOutline, Icon28UsersOutline } from '@vkontakte/icons'
import ScoreboardHome from './panels/ScoreboardHome'
import { GameModes, GameType, NOTIFICATIONS_STATUSES } from '../constants'
import { UserInstance } from '../core/user-model'
import ChooseGameType from './panels/ChooseGameType'
import { VkPixelTracker } from '../core/trackers/VkPixelTracker'

const App = (): JSX.Element => {
  const [user, setUser] = useState<UserInstance | null>(null)
  const [popout, setPopout] = useState<JSX.Element | null>(<ScreenSpinner />)
  const [activeStory, setActiveStory] = useState('game')
  const [activePanel, setActivePanel] = useState('home')
  const [battle, setBattle] = useState<GameInstance | null>(null)
  const [gameType, setGameType] = useState<GameType | null>(null)
  const [gameMode, setGameMode] = useState<GameModes | null>(null)

  useEffect(() => {
    if (Utils.isProductionMode) {
      Sentry.init({
        dsn: process.env.REACT_APP_SENTRY_DSN,
        beforeSend(event, hint) {
          if (event.exception) {
            const errorMessage =
              hint &&
              hint.originalException &&
              hint.originalException instanceof Error &&
              hint.originalException.message
                ? hint.originalException.message
                : ''
            setPopout(
              <Alert
                actions={[
                  {
                    mode: 'default',
                    title: 'ОК',
                    autoclose: true,
                  },
                ]}
                onClose={() => setPopout(null)}
              >
                <h2>Возникла ошибка =(</h2>
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
                <p>Попробуй еще раз</p>
              </Alert>
            )
          }
          return event
        },
      })
    }
    trackers.init()
    trackers.reachGoal('open app')
  }, [])

  async function fetchUser(isInitialRequest: boolean) {
    try {
      const fetchedUser = await AppService.fetchUserData()
      setUser(fetchedUser)
      if (isInitialRequest) {
        if (
          fetchedUser.notificationsStatus === NOTIFICATIONS_STATUSES.ALLOW &&
          !AppService.areNotificationsEnabledOnVkSide
        ) {
          setUser(await AppService.blockNotifications())
        }
        trackers.identify(fetchedUser.id, fetchedUser.vkId)
      }
    } finally {
      setPopout(null)
    }
  }

  useEffect(() => {
    fetchUser(true)
  }, [])

  const onFinishGame = async (localBattle: GameInstance) => {
    const updatedBattle = await BattleService.getBattle(localBattle.id)
    setBattle(updatedBattle)
    setActivePanel('results')
    trackers.reachGoal('finish-game')
    VkPixelTracker.reachGoal('conversion')
    fetchUser(false)
  }

  const goToHomePanel = () => setActivePanel('home')

  const goToChooseGameTypePanel = (gameModeToSet: GameModes) => {
    if (gameModeToSet !== gameMode) setGameMode(gameModeToSet)
    setActivePanel('choose-game-type')
  }

  const onStartBattle = (chosenGameType: GameType) => {
    if (chosenGameType !== gameType) setGameType(chosenGameType)
    if (gameMode === GameModes.single) {
      setActivePanel('battle')
    } else {
      setActivePanel('lobby')
    }
    trackers.reachGoal('start-game', { type: chosenGameType, mode: gameMode })
  }

  const onOpenScoreboard = () => {
    setActiveStory('scoreboard')
    setActivePanel('scoreboard-home')
  }

  return (
    <Epic
      activeStory={activeStory}
      tabbar={
        <Tabbar>
          <TabbarItem
            text="Главная"
            selected={activeStory === 'game'}
            onClick={() => {
              setActiveStory('game')
              setActivePanel('home')
            }}
          >
            <Icon28HomeOutline />
          </TabbarItem>
          <TabbarItem
            text="Рейтинг"
            selected={activeStory === 'scoreboard'}
            onClick={onOpenScoreboard}
          >
            <Icon28UsersOutline />
          </TabbarItem>
        </Tabbar>
      }
    >
      <View id="game" activePanel={activePanel} popout={popout}>
        <Panel id="home">
          <Home
            user={user}
            onStartSingleGame={() => goToChooseGameTypePanel(GameModes.single)}
            onStartMultiplayerGame={() => {
              goToChooseGameTypePanel(GameModes.multi)
            }}
            onUpdateUser={(updatedUser) => setUser(updatedUser)}
          />
        </Panel>
        <Panel id="choose-game-type">
          <ChooseGameType onGoBack={goToHomePanel} onChoose={onStartBattle} />
        </Panel>
        <Panel id="battle">
          <Battle
            onGoBack={() => goToChooseGameTypePanel(gameMode)}
            onFinishGame={onFinishGame}
            gameType={gameType}
          />
        </Panel>
        <Panel id="results">
          <Results
            user={user}
            onRetry={() => onStartBattle(gameType)}
            onGoBack={goToHomePanel}
            battle={battle}
            onUpdateUser={(updatedUser) => setUser(updatedUser)}
          />
        </Panel>
      </View>
      <View id="scoreboard" activePanel={activePanel} popout={popout}>
        <Panel id="scoreboard-home">
          <ScoreboardHome user={user} />
        </Panel>
      </View>
    </Epic>
  )
}

export default App
