import { Link } from 'gatsby'
import React from 'react'
import Image from './image'
import styled from 'styled-components'
import { useSwipe } from './drawer/useSwipe'

const Header = (): React.ReactElement => {
  const { handlers } = useSwipe()

  return (
    <StyledHeader {...handlers}>
      <Link to="/" className="image">
        <Image />
      </Link>
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

  .image {
    grid-column: 4 / 4;
    justify-self: center;
    grid-row: 1 / 3;
    align-self: center;
    padding: 1rem;
  }
`
