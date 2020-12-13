import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export const Card = ({ children, to }) => {
  return <StyledCard to={to}>{children}</StyledCard>
}

const StyledCard = styled(Link)`
  /* Override Layout component underline on link */
  text-decoration: none !important;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  transition: 0.2s ease-in-out;

  small {
    text-align: left;
    font-size: 1rem;
  }

  div {
    display: flex;
    margin: 1rem;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  &:hover {
    transition: 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.06) 4px 4px 18px 0px, var(--secondary) -4px -4px 8px 0px;
  }

  @media (max-width: 700px) {
    padding: 0.5rem;
    margin: 0.5rem;

    div,
    h3,
    small {
      margin: 0;
      padding: 0.5rem;
    }
  }
`
