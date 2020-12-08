import { useSwipeable } from 'react-swipeable'
import { useUI } from '../../Context'

export const useSwipe = () => {
  const { openNavigation, closeNavigation } = useUI()

  const config = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === `Right`) {
        openNavigation()
      } else if (eventData.dir === `Left`) {
        closeNavigation()
      }
    },
    ...config,
  })

  return { handlers }
}
