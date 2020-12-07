import { SwipeEventData, useSwipeable } from 'react-swipeable'
import { useUI } from '../Context'

export const useSwipe = () => {
  const { openNavigation, openToast } = useUI()

  const config = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const handleLeftSwipe = (eventData: SwipeEventData) => {
    if (eventData.dir === 'Right') {
      console.log('opened')
      openNavigation()
    }
  }

  const handleRightSwipe = (eventData: SwipeEventData) => {
    if (eventData.dir === 'Right') {
      console.log('opened')
      //   openNavigation()
    }
  }

  const handlers = useSwipeable({
    onSwiped: (eventData) => handleLeftSwipe(eventData),
    ...config,
  })

  return { handlers }
}
