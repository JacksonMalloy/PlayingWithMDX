import React from 'react'
import { useUI } from '../Context'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'

const StyledDrawer = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Drawer = () => {
  const { displayNavigation, closeNavigation } = useUI()

  const config = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const handleLeftSwipe = (eventData) => {
    if (eventData.dir === 'Left') {
      console.log('closed')
      closeNavigation()
    }
  }

  const handlers = useSwipeable({
    onSwiped: (eventData) => handleLeftSwipe(eventData),
    ...config,
  })

  if (displayNavigation) {
    return (
      <StyledDrawer {...handlers}>
        <>FIXED</>
      </StyledDrawer>
    )
  }

  return null
}
