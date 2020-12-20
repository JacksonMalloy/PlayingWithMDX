import React from 'react'
import styled from 'styled-components'
import { useToaster } from 'react-hot-toast'

const StyledNotification = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  z-index: 112394876123894760;
`

const StyledToast = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 90%;
  background: var(--text);
  transition: all 0.5s ease-out;
  opacity: ${({ toast }) => (toast.visible ? 1 : 0)};
  transform: ${({ offset }) => `translateY(-${offset}px)`};
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 0.7rem;
  display: flex;
  justify-content: space-between;

  .toast-message {
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    flex-direction: column;

    a {
      color: var(--primary);
      font-family: inherit;
      text-align: center;
      text-decoration: underline;
      text-decoration-color: var(--secondary);
    }
  }

  .toast-button {
    justify-self: flex-start;
    border: none;
    background-color: transparent;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: var(--primary);
      stroke: var(--primary);
    }
  }
`

export const Notifications = () => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers
  return (
    <StyledNotification onMouseEnter={startPause} onMouseLeave={endPause}>
      {toasts.map((toast) => {
        const offset = calculateOffset(toast.id, {
          reverseOrder: false,
          margin: 8,
        })
        const ref = (el) => {
          if (el && !toast.height) {
            const height = el.getBoundingClientRect().height
            updateHeight(toast.id, height)
          }
        }

        return (
          <StyledToast offset={offset} key={toast.id} ref={ref} toast={toast}>
            {toast.message()}
          </StyledToast>
        )
      })}
    </StyledNotification>
  )
}
