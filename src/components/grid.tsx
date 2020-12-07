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
  padding: 0 10rem;

  aside {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .container {
    grid-column: 2 / 4;
    max-width: 960px;
  }
`
