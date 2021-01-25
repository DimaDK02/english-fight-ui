import { battleActions, battleReducer } from './battle-reducer'

describe('battleReducer', () => {
  describe('setBattle action', () => {
    it('sets passed battle and activeQuestion', () => {
      const initialState = {
        battle: null,
        activeQuestion: null,
        hasNextQuestion: false,
      }
      const action = {
        type: battleActions.setBattle,
        payload: {
          id: 1,
          questions: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        },
      }
      const actual = battleReducer(initialState, action)
      const expected = {
        battle: {
          id: 1,
          questions: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        },
        activeQuestion: { id: 1 },
        hasNextQuestion: true,
      }
      expect(actual).toEqual(expected)
    })
  })

  describe('updateQuestion action', () => {
    it('updates questions and activeQuestion', () => {
      const initialState = {
        battle: {
          id: 1,
          questions: [
            {
              id: 1,
              question: 'test',
            },
            {
              id: 2,
              question: 'cat',
            },
            {
              id: 3,
              question: 'car',
            },
          ],
        },
        activeQuestion: {
          id: 2,
          question: 'cat',
        },
        hasNextQuestion: true,
      }
      const action = {
        type: battleActions.updateQuestion,
        payload: {
          id: 2,
          question: 'dog',
        },
      }
      const actual = battleReducer(initialState, action)
      const expected = {
        battle: {
          id: 1,
          questions: [
            {
              id: 1,
              question: 'test',
            },
            {
              id: 2,
              question: 'dog',
            },
            {
              id: 3,
              question: 'car',
            },
          ],
        },
        activeQuestion: {
          id: 2,
          question: 'dog',
        },
        hasNextQuestion: true,
      }
      expect(actual).toEqual(expected)
    })
  })

  describe('goToNextQuestion action', () => {
    it('moves activeQuestion to the next question when it will be the last', () => {
      const initialState = {
        battle: {
          id: 1,
          questions: [
            {
              id: 1,
              question: 'cat',
            },
            {
              id: 2,
              question: 'dog',
            },
          ],
        },
        activeQuestion: {
          id: 1,
          question: 'cat',
        },
        hasNextQuestion: true,
      }
      const action = {
        type: battleActions.goToNextQuestion,
      }
      const actual = battleReducer(initialState, action)
      const expected = {
        battle: {
          id: 1,
          questions: [
            {
              id: 1,
              question: 'cat',
            },
            {
              id: 2,
              question: 'dog',
            },
          ],
        },
        activeQuestion: {
          id: 2,
          question: 'dog',
        },
        hasNextQuestion: false,
      }
      expect(actual).toEqual(expected)
    })

    it('moves activeQuestion to the next when it will not be the last', () => {
      const initialState = {
        battle: {
          id: 1,
          questions: [
            {
              id: 1,
              question: 'cat',
            },
            {
              id: 2,
              question: 'dog',
            },
            {
              id: 3,
              question: 'car',
            },
          ],
        },
        activeQuestion: {
          id: 1,
          question: 'cat',
        },
        hasNextQuestion: true,
      }
      const action = {
        type: battleActions.goToNextQuestion,
      }
      const actual = battleReducer(initialState, action)
      const expected = {
        battle: {
          id: 1,
          questions: [
            {
              id: 1,
              question: 'cat',
            },
            {
              id: 2,
              question: 'dog',
            },
            {
              id: 3,
              question: 'car',
            },
          ],
        },
        activeQuestion: {
          id: 2,
          question: 'dog',
        },
        hasNextQuestion: true,
      }
      expect(actual).toEqual(expected)
    })

    it('throws error if user is already on the last question', () => {
      const initialState = {
        battle: {
          id: 1,
          questions: [
            {
              id: 1,
              question: 'cat',
            },
            {
              id: 2,
              question: 'dog',
            },
          ],
        },
        activeQuestion: {
          id: 2,
          question: 'dog',
        },
        hasNextQuestion: false,
      }
      const action = {
        type: battleActions.goToNextQuestion,
      }
      expect(() => battleReducer(initialState, action)).toThrow(
        'Вы уже на последнем вопросе'
      )
    })
  })
})
