import { Link } from 'gatsby'
import React from 'react'
import Image from './image'
import styled from 'styled-components'
import { useSwipe } from './drawer/useSwipe'
import { useUI } from '../Context'

const Header = ({ isContact }): React.ReactElement => {
  const { handlers } = useSwipe()
  const { setDrawerPosition } = useUI()

  const handleClick = () => {
    setDrawerPosition({ isOpen: true, sliding: true, dir: 'RIGHT' })
    setTimeout(() => {
      setDrawerPosition({ isOpen: true, sliding: false, dir: 'RIGHT' })
    }, 50)
  }

  return (
    <StyledHeader {...handlers} isContact={isContact}>
      {/* <Link to="/" className="image">
        <Image />
      </Link> */}
      <button onClick={handleClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  max-width: 1920px;

  @media (min-width: 700px) {
    display: none;
  }

  .image {
    grid-column: 1 / 1;
    justify-self: center;
    grid-row: 1 / 3;
    align-self: center;
    padding: 1rem;
  }

  button {
    justify-self: center;
    grid-row: 1 / 3;
    align-self: center;
    padding: 1rem;
    margin: 1rem;
    grid-column: 4 / 4;
    grid-row: 1 / span 2;
    justify-self: center;
    background-color: transparent;
    border: none;

    @media (min-width: 700px) {
      display: none;
    }
  }
`
