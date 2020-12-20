import { useSwipeable } from 'react-swipeable'
import { useUI } from '../../Context'

export const useSwipe = () => {
  const { setDrawerPosition, setNavCount, navCount } = useUI()

  const config = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const handlers = useSwipeable({
    onSwiped: ({ dir, initial }) => {
      if (dir === `Right` && initial[0] < 80) {
        setNavCount(navCount + 1)
        setDrawerPosition({ isOpen: true, sliding: true, dir: 'RIGHT' })
        setTimeout(() => {
          setDrawerPosition({ isOpen: true, sliding: false, dir: 'RIGHT' })
        }, 50)
      } else if (dir === `Left`) {
        setNavCount(navCount + 1)
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
