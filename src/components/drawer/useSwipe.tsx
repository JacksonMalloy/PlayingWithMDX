import { useSwipeable } from 'react-swipeable'
import { useUI } from '../../Context'

export const useSwipe = () => {
  const { setDrawerPosition } = useUI()

  const config = {
    delta: 100, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const handlers = useSwipeable({
    onSwiped: ({ velocity, dir }) => {
      console.log({ velocity })

      if (dir === `Right` && velocity > 1.5) {
        setDrawerPosition({ isOpen: true, sliding: true, dir: 'RIGHT' })
        setTimeout(() => {
          setDrawerPosition({ isOpen: true, sliding: false, dir: 'RIGHT' })
        }, 50)
      } else if (dir === `Left`) {
        setDrawerPosition({ isOpen: false, sliding: true, dir: 'LEFT' })
        setTimeout(() => {
          setDrawerPosition({ isOpen: false, sliding: false, dir: 'LEFT' })
        }, 50)
      } else return null
    },
    ...config,
  })

  return { handlers }
}
