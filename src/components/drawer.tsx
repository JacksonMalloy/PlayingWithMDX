import React from 'react'
import { useUI } from '../Context'
import styled from 'styled-components'
import { SwipeEventData, useSwipeable } from 'react-swipeable'
import Navigation from './navigation'
import { useSwipe } from './useSwipe'

export const Drawer = () => {
  const { displayNavigation, closeNavigation } = useUI()
  const { handlers } = useSwipe()

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
`
