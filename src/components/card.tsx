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
    box-shadow: rgba(255, 0, 0, 0.2) 4px 4px 18px 0px, rgba(153, 50, 204, 0.2) -4px -4px 18px 0px;

    h3 {
      background: var(--text-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 700px) {
    padding: 0.5rem;
    /* margin: 0.5rem; */

    div,
    h3,
    small {
      margin: 0;
      padding: 0.5rem;
    }

    small {
      font-size: 0.7rem;
    }

    div {
      display: flex;
      justify-content: flex-start;
    }
  }
`
