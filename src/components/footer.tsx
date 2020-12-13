import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  padding: 1rem;
  background-color: var(--primary);
  color: var(--text);
  width: 100%;
  max-width: 1920px;
  justify-content: center;
  padding: 3rem;

  button {
    background-color: transparent;
    border: none;
    padding: 1rem;
    cursor: pointer;
  }
`

export const Footer = ({ isContact }) => {
  if (isContact) {
    return null
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <StyledFooter>
      <button onClick={scrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-up"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </StyledFooter>
  )
}
