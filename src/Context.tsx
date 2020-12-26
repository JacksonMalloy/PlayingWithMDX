import React, { FC, useMemo } from 'react'
import { ManagedThemeContext } from './Theme'
// import { v4 as uuidv4 } from 'uuid'

export interface State {
  displayToast: boolean
  toastMessage: string
  displayNavigation: boolean
  serverState: { submitting: boolean; status: boolean }
  drawerPosition: { isOpen: boolean; sliding: boolean; dir: string }
  navCount: number
}

const initialState = {
  displayToast: false,
  toastMessage: '',
  displayNavigation: false,
  serverState: { submitting: false, status: null },
  drawerPosition: { isOpen: false, sliding: false, dir: 'RIGHT' },
  navCount: 0,
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
  | {
      type: 'SET_SERVER_STATE'
      serverState: any
    }
  | {
      type: 'SET_DRAWER_POSITION'
      drawerState: any
    }
  | {
      type: 'SET_NAV_COUNT'
      navCount: number
    }

export const UIContext = React.createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_TOAST': {
      return {
        ...state,
        displayToast: true,
        toastMessage: action.message,
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
    case 'SET_SERVER_STATE': {
      return {
        ...state,
        serverState: { submitting: action.serverState.submitting, status: action.serverState.status },
      }
    }
    case 'SET_DRAWER_POSITION': {
      return {
        ...state,
        drawerPosition: action.drawerState,
      }
    }
    case 'SET_NAV_COUNT': {
      return {
        ...state,
        navCount: action.navCount,
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

  const setServerState = (serverState: any) => dispatch({ type: 'SET_SERVER_STATE', serverState })

  const setDrawerPosition = (drawerState: any) => dispatch({ type: 'SET_DRAWER_POSITION', drawerState })

  const setNavCount = (navCount: number) => dispatch({ type: 'SET_NAV_COUNT', navCount })

  const value = useMemo(
    () => ({
      ...state,

      openNavigation,
      closeNavigation,

      // ALERTS
      openToast,
      closeToast,

      setServerState,
      setDrawerPosition,

      setNavCount,
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

export const ManagedUIContext: FC = ({ children }) => (
  <ManagedThemeContext>
    <UIProvider>{children}</UIProvider>
  </ManagedThemeContext>
)
