import React from 'react'
import { useUI } from '../Context'
import styled from 'styled-components'
import { SwipeEventData, useSwipeable } from 'react-swipeable'
import { Link } from 'gatsby'
import Navigation from './navigation'
// import Image from './image'

export const Drawer = () => {
  const { displayNavigation, closeNavigation } = useUI()

  const config = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const handleLeftSwipe = (eventData: SwipeEventData) => {
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
        <Navigation />
      </StyledDrawer>
    )
  }

  return null
}

const StyledDrawer = styled.nav`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: var(--primary);
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  padding: 1rem;
  align-items: center;
  padding-bottom: 4.5rem;
  overflow-y: auto;

  .nav-about {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
  }

  .nav-posts {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
  }

  .nav-work {
    grid-row: 4 / 5;
    grid-column: 3 / 4;
  }

  .nav-projects {
    grid-row: 5 / 6;
    grid-column: 3 / 4;
  }

  .nav-contact {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
  }
`
