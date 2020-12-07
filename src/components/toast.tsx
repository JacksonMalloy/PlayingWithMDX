import React from 'react'
import { useUI } from '../Context'
import styled from 'styled-components'

const StyledToast = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: repeating-linear-gradient(45deg, var(--primary), var(--secondary) 10px, var(--primary) 10px);
  color: var(--text);
  display: none;

  .toast-message {
    padding: 0;
    margin: 0;
    align-self: center;
    margin-left: 1rem;
    font-family: 'Source Sans Pro Black';
  }

  .close-toast {
    border: none;
    background-color: transparent;
    color: var(--text);
    font-size: 2rem;
    padding: var(--space);
    margin-right: 1rem;
    height: 100%;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: block;
  }
`

export const Toast = () => {
  const { displayToast, toastMessage, closeToast } = useUI()

  if (displayToast) {
    return (
      <StyledToast>
        <p className="toast-message">{toastMessage}</p>
        <button onClick={closeToast} className="close-toast">
          ✖
        </button>
      </StyledToast>
    )
  }

  return null
}
