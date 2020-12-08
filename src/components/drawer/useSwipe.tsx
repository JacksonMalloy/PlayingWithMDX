import { useSwipeable } from 'react-swipeable'
import { useUI } from '../../Context'

export const useSwipe = () => {
  const { openNavigation, closeNavigation, setDrawerPosition, drawerPosition } = useUI()

  const config = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const handlers = useSwipeable({
    onSwiped: ({ dir, deltaX }) => {
      if (dir === `Right`) {
        if (deltaX > 100) {
          openNavigation()
        }
      } else if (dir === `Left`) {
        if (deltaX < -100) {
          closeNavigation()
        }
      }
    },
    onSwiping: (eventData) => setDrawerPosition(eventData),
    ...config,
  })

  return { handlers }
}
