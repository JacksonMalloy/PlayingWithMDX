import { Link } from 'gatsby'
import React from 'react'
import { useUI } from '../../Context'

export const Message = () => {
  const { serverState } = useUI()

  return (
    <aside>
      {serverState.status ? (
        <>
          <h1>{serverState.status.message}</h1>
        </>
      ) : (
        <>
          <h1>
            Hello! I would love to chat!{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p>Feel free to ask me anything. </p>
          <Link to="/" className="left-key">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
        </>
      )}
    </aside>
  )
}
