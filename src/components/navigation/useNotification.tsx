import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useUI } from '../../Context'
import Link from 'gatsby-link'

export const useNotification = () => {
  const { navCount } = useUI()

  //   const handleStorageNotifications = ({ nullCheck, count, type, message }) => {
  //     const storageItem = localStorage.getItem('notification')
  //     const notificationsArray = storageItem ? JSON.parse(storageItem) : null

  //     if (!nullCheck) {
  //       if (navCount === count) {
  //         if (!notificationsArray) {
  //           localStorage.setItem('notification', `[${type}]`)
  //         } else {
  //           notificationsArray.push(`${type}`)
  //           const updatedStorageItem = JSON.stringify(notificationsArray)
  //           console.log({ notificationsArray })
  //           localStorage.setItem('notification', `${updatedStorageItem}`)
  //         }
  //         setTimeout(() => toast(message), 2000)
  //       }
  //     }
  //   }

  useEffect(() => {
    const storageItem = localStorage.getItem('notification')
    const hasBeenNotifiedSwipe = storageItem ? JSON.parse(storageItem).includes('swipe-notification') : null
    const hasBeenNotifiedContact = storageItem ? JSON.parse(storageItem).includes('contact-notification') : null
    const notificationsArray = storageItem ? JSON.parse(storageItem) : null

    if (!hasBeenNotifiedSwipe) {
      if (navCount === 4) {
        if (!notificationsArray) {
          localStorage.setItem('notification', '["swipe-notification"]')
        } else {
          const updatedStorageItem = JSON.stringify(notificationsArray.push('swipe-notification'))
          localStorage.setItem('notification', `${updatedStorageItem}`)
        }
        setTimeout(
          () =>
            toast(
              () => {
                return (
                  <>
                    <h5 className="toast-message">Hey! Sorry to interrupt. Did you know you can swipe to navigate?</h5>
                    <button onClick={() => toast.remove('1')} className="toast-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </>
                )
              },
              {
                duration: 20000,
                icon: '👏',
                role: 'status',
                ariaLive: 'polite',
                id: '1',
              }
            ),
          800
        )
      }
    }

    if (!hasBeenNotifiedContact) {
      if (navCount === 10) {
        if (!notificationsArray) {
          localStorage.setItem('notification', '["contact-notification"]')
        } else {
          notificationsArray.push('contact-notification')
          const updatedStorageItem = JSON.stringify(notificationsArray)
          console.log({ notificationsArray })
          localStorage.setItem('notification', `${updatedStorageItem}`)
        }
        setTimeout(
          () =>
            toast(
              () => {
                return (
                  <>
                    <h5 className="toast-message">Looks like you're getting the hang of it!</h5>
                    <button onClick={() => toast.remove('2')} className="toast-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </>
                )
              },
              {
                duration: 2000000,
                icon: '👏',
                role: 'status',
                ariaLive: 'polite',
                id: '2',
              }
            ),
          800
        )

        setTimeout(
          () =>
            toast(
              () => {
                return (
                  <>
                    <h5 className="toast-message">
                      Don't be shy!
                      <Link to="/contact/">Send me a message!</Link>😊
                    </h5>
                    <button onClick={() => toast.remove('3')} className="toast-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </>
                )
              },
              {
                duration: 2000000,
                icon: '👏',
                role: 'status',
                ariaLive: 'polite',
                id: '3',
              }
            ),
          1600
        )
      }
    }
  }, [navCount])

  return
}
