import React from 'react'
import { ManagedUIContext } from './Context'

export const Provider = ({ children }) => {
  return <ManagedUIContext>{children}</ManagedUIContext>
}
