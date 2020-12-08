import React from 'react'
import { useUI } from '../../Context'

export const Message = () => {
  const { serverState } = useUI()

  return (
    <aside>
      {serverState.status ? (
        <h1>{serverState.status.message}</h1>
      ) : (
        <>
          <h1>Hello! I would love to chat! 👋</h1>
          <p>Feel free to ask me anything. </p>
        </>
      )}
    </aside>
  )
}
