import React from 'react'
import Terser from 'terser'
import Layout from './src/Layout'

const COLOR_MODE_KEY = 'color-mode'
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'

function setColorsByTheme() {
  const colorModeKey = '🔑'
  const colorModeCssProp = '⚡️'

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkFromMQ = mql.matches
  const persistedPreference = localStorage.getItem(colorModeKey)

  let colorMode = 'light'

  const hasUsedToggle = typeof persistedPreference === 'string'

  if (hasUsedToggle) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light'
  }

  let root = document.documentElement

  root.style.setProperty(colorModeCssProp, colorMode)

  document.body.dataset.theme = colorMode
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme).replace('🔑', COLOR_MODE_KEY).replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP)

  let calledFunction = `(${boundFn})()`

  calledFunction = Terser.minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
