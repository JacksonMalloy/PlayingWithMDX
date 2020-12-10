import { useSwipeable } from 'react-swipeable'
import { useUI } from '../../Context'

export const useSwipe = () => {
  const { openNavigation, closeNavigation, setDrawerPosition, drawerPosition } = useUI()

  const config = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: true, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const handlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (dir === `Right`) {
        setDrawerPosition({ isOpen: true, sliding: true, dir: 'RIGHT' })
        setTimeout(() => {
          setDrawerPosition({ isOpen: true, sliding: false, dir: 'RIGHT' })
        }, 50)
      } else if (dir === `Left`) {
        setDrawerPosition({ isOpen: false, sliding: true, dir: 'LEFT' })
        setTimeout(() => {
          setDrawerPosition({ isOpen: false, sliding: false, dir: 'LEFT' })
        }, 50)
      }
    },
    onSwiping: (eventData) => setDrawerPosition(eventData),
    ...config,
  })

  return { handlers }
}
