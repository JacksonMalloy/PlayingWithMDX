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
      <Link to="/" className="image">
        <Image />
      </Link>
      <button onClick={handleClick}>X</button>
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
  background-color: var(--secondary);
  max-width: 1920px;

  .image {
    grid-column: 1 / 1;
    justify-self: center;
    grid-row: 1 / 3;
    align-self: center;
    padding: 1rem;
  }

  button {
    grid-column: 4 / 4;
    justify-self: center;
    grid-row: 1 / 3;
    align-self: center;
    padding: 1rem;
    margin: 1rem;

    @media (min-width: 700px) {
      display: none;
    }
  }
`
