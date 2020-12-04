import React, { FC, useMemo } from 'react'
// import { v4 as uuidv4 } from 'uuid'

export interface State {
  displayToast: boolean
}

const initialState = {
  displayToast: false,
  displayNavigation: false,
}

type TOAST_VARIANTS = 'WARNING' | 'ERROR' | 'SUCCESS'

type Action =
  | {
      type: 'OPEN_TOAST'
      message: string
      variant: TOAST_VARIANTS
    }
  | {
      type: 'CLOSE_TOAST'
    }
  | {
      type: 'OPEN_NAVIGATION'
    }
  | { type: 'CLOSE_NAVIGATION' }

export const UIContext = React.createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_TOAST': {
      return {
        ...state,
        displayToast: true,
      }
    }
    case 'CLOSE_TOAST': {
      return {
        ...state,
        displayToast: false,
      }
    }
    case 'OPEN_NAVIGATION': {
      return {
        ...state,
        displayNavigation: true,
      }
    }
    case 'CLOSE_NAVIGATION': {
      return {
        ...state,
        displayNavigation: false,
      }
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState)

  const closeToast = () => dispatch({ type: 'CLOSE_TOAST' })
  const openToast = (message: string, variant: TOAST_VARIANTS) => dispatch({ type: 'OPEN_TOAST', message, variant })

  const openNavigation = () => dispatch({ type: 'OPEN_NAVIGATION' })
  const closeNavigation = () => dispatch({ type: 'CLOSE_NAVIGATION' })

  const value = useMemo(
    () => ({
      ...state,

      openNavigation,
      closeNavigation,

      // ALERTS
      openToast,
      closeToast,
    }),
    [state]
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC = ({ children }) => <UIProvider>{children}</UIProvider>
