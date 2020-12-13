import React from 'react'
import { useUI } from '../../Context'
import styled from 'styled-components'
import Navigation from '../navigation'
import { useSwipe } from './useSwipe'

// Perhaps add motion animations
export const Drawer = () => {
  const { drawerPosition } = useUI()
  const { handlers } = useSwipe()

  return (
    <StyledDrawer
      {...handlers}
      dir={drawerPosition.dir}
      sliding={drawerPosition.sliding}
      isOpen={drawerPosition.isOpen}
    >
      <Navigation drawer />
    </StyledDrawer>
  )
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
  transition: ${(props) => 'transform 0.2s ease'};
  transform: ${(props) => {
    if (!props.sliding && !props.isOpen) return 'translateX(calc(-100%))'
    if (!props.sliding && !props.isOpen) return 'translateX(calc(-100%))'
    if (props.dir === 'right') return 'translateX(calc(2 * (-80% - 20px)))'
    if (props.isOpen) return 'translateX(0%)'
    if (!props.isOpen) return 'translateX(-100%)'

    return 'translateX(0%)'
  }};
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  align-items: center;
  padding-bottom: 4.5rem;
  overflow-y: auto;
`
