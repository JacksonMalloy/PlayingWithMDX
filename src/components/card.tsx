import { Link } from 'gatsby'
import React, { ReactChild } from 'react'
import styled from 'styled-components'

interface ICard {
  children: ReactChild
  to: string
}

export const Card = ({ children, to }: ICard) => {
  return <StyledCard to={to}>{children}</StyledCard>
}

const StyledCard = styled(Link)`
  /* Override Layout component underline on link */
  text-decoration: none !important;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  margin-left: 2rem;
  border-radius: 0.5rem;
  box-shadow: var(--pulse-secondary-color) -2px -2px 9px 0px, var(--pulse-primary-color) 2px 2px 9px 0px;

  /* if backdrop support: very transparent and blurred */
  @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
    background-color: var(--backdrop-color);
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
  }

  small {
    text-align: left;
    font-size: 1rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 0.5rem;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;

    code {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      background: var(--text-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-color: white;

      /* Safari Fallback */
      color: var(--code);
    }
  }

  h3,
  h4 {
    margin-top: 0;
    margin-bottom: 0;
  }

  &:hover {
    animation-duration: 0.5s;
    animation-name: shadowPulse;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;

    @keyframes shadowPulse {
      from {
        box-shadow: var(--pulse-secondary-color) -2px -2px 9px 0px, var(--pulse-primary-color) 2px 2px 9px 0px;
      }

      to {
        box-shadow: var(--pulse-primary-color) 4px 4px 18px 0px, var(--pulse-secondary-color) -4px -4px 18px 0px;
      }
    }

    h3,
    h4 {
      background: var(--text-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      /* Safari Fallback */
      color: var(--code);
    }
  }

  @media (max-width: 584px) {
    margin: 0.5rem;

    div {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      grid-gap: 0.5rem;
      justify-content: left;
      align-items: left;

      code {
        text-align: left;
        justify-content: left;
        align-items: left;
        padding: 0;
      }
    }

    small {
      font-size: 0.7rem !important;
      padding: 0 0.5rem !important;
    }

    div,
    h3,
    h4,
    small {
      margin: 0 !important;
      padding: 0.5rem;
    }
  }
`
