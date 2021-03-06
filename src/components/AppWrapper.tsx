import React, { useEffect, useState } from 'react'
import WithUser from '../core/components/WithUser/WithUser'
import App from './App'
import { Utils } from '../Utils'
import * as Sentry from '@sentry/react'
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert'
import styles from './App.module.css'
import { trackers } from '../core/trackers/trackers'
import FeatureFlagProvider from '../core/components/FeatureFlagProvider/FeatureFlagProvider'
import bridge from '@vkontakte/vk-bridge'
import { Themes } from '../constants'
import { ThemeContext } from '../context/theme'

function AppWrapper(): JSX.Element {
  const [popout, setPopout] = useState<JSX.Element | null>(null)
  const [theme, setTheme] = useState<Themes>(Themes.bright_light)

  useEffect(() => {
    bridge.send('VKWebAppInit')
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === 'VKWebAppUpdateConfig') {
        // @ts-ignore
        setTheme(data.scheme || Themes.bright_light)
      }
    })
  }, [])

  useEffect(() => {
    const schemeAttribute = document.createAttribute('scheme')
    schemeAttribute.value = theme
    document.body.attributes.setNamedItem(schemeAttribute)
  }, [theme])

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
                  <p className={styles.errorMessage}>{errorMessage}</p>
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

  return (
    <WithUser>
      {({ loadingUser, user, setUser, refreshUser }) => {
        return (
          <FeatureFlagProvider user={user}>
            <ThemeContext.Provider value={theme}>
              <App
                user={user}
                loadingUser={loadingUser}
                setUser={setUser}
                refreshUser={refreshUser}
                popout={popout}
              />
            </ThemeContext.Provider>
          </FeatureFlagProvider>
        )
      }}
    </WithUser>
  )
}

export default AppWrapper
