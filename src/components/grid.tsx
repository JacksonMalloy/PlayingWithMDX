import React, { ReactChild } from 'react'
import styled from 'styled-components'

interface IGrid {
  children: ReactChild | ReactChild[]
}

export const Grid = ({ children }: IGrid) => {
  return <StyledGrid>{children}</StyledGrid>
}

export const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0rem;
  justify-self: center;
  justify-items: center;
  padding: 0rem;

  aside {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    min-height: 100vh;
    width: 100%;
  }

  @media (max-width: 775px) {
    display: flex;

    aside {
      display: none;
    }
  }

  .container {
    grid-column: 2 / 4;
    max-width: 960px;
    width: 100%;
    justify-self: left;

    a {
      text-decoration: underline;
    }
  }
`
