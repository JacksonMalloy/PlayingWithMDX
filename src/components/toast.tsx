import React from 'react'
import { useUI } from '../Context'
import styled from 'styled-components'

const StyledToast = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: repeating-linear-gradient(45deg, var(--primary), var(--primary) 10px, var(--primary) 10px);
  color: var(--text);
  z-index: 8;

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

  @media (min-width: 700px) {
    display: none;
  }
`

export const Toast = () => {
  const { displayToast, toastMessage, closeToast } = useUI()

  // if (displayToast) {
  //   return (
  //     <StyledToast>
  //       <p className="toast-message">{toastMessage}</p>
  //       <button onClick={closeToast} className="close-toast">
  //         ✖
  //       </button>
  //     </StyledToast>
  //   )
  // }

  return null
}
