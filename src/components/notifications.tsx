import React from 'react'
import styled from 'styled-components'
import { useToaster } from 'react-hot-toast'

const StyledNotification = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
`

const StyledToast = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 80%;
  background: papayawhip;
  transition: all 0.5s ease-out;
  opacity: ${({ toast }) => (toast.visible ? 1 : 0)};
  transform: ${({ offset }) => `translateY(-${offset}px)`};
  border-radius: 1rem;
  padding: 1rem;

  .toast-message {
    font-size: 0.7rem;
    margin: 0;
    padding: 0;
    z-index: 10;
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
            <h4 className="toast-message">{toast.message}</h4>
          </StyledToast>
        )
      })}
    </StyledNotification>
  )
}
