import 'core-js/features/map'
import 'core-js/features/set'
import React from 'react'
import { render as renderReact } from 'react-dom'
import bridge from '@vkontakte/vk-bridge'
import App from './components/App'
import { Utils } from './Utils'
import { ErrorBoundary } from './components/ErrorBoundary'

// Init VK  Mini App
bridge.send('VKWebAppInit')

function render() {
  renderReact(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
  )
}
render()

if (!Utils.isProductionMode) {
  if (module.hot) {
    module.hot.accept('./components/App', render)
  }

  // eslint-disable-next-line no-unused-expressions
  import('./eruda')
}