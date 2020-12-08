import React from 'react'
import styled from 'styled-components'

export const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>
}

export const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0rem;
  justify-self: center;
  justify-items: center;
  padding: 0rem;
  padding-right: 10%;

  aside {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  @media (max-width: 700px) {
    display: flex;

    aside {
      display: none;
    }
  }

  .container {
    grid-column: 2 / 4;
    max-width: 960px;
  }
`
