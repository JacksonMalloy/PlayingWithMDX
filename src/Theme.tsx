import React, { FC, ReactChildren } from 'react'

const COLOR_MODE_KEY = 'color-mode'
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'

export const ThemeContext = React.createContext()

export const ManagedThemeContext = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<string | null>(null)

  React.useEffect(() => {
    const root = window.document.documentElement

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(INITIAL_COLOR_MODE_CSS_PROP)

    rawSetColorMode(initialColorValue)
  }, [])

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue: string) {
      localStorage.setItem(COLOR_MODE_KEY, newValue)
      document.body.dataset.theme = newValue
      rawSetColorMode(newValue)
    }

    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
