import React from 'react'
import styled from 'styled-components'

interface IExternalLink {
  children: string
  to: string
}

export const ExternalLink = ({ children, to }: IExternalLink) => {
  return (
    <StyledLink href={to} target="_blank" rel="noreferrer" className="external-link">
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginLeft: '0.2rem' }}
        className="feather feather-external-link"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </StyledLink>
  )
}

const StyledLink = styled.a`
  &:hover {
    background: var(--text-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    /* Fallback for safari */
    color: var(--code);
  }
`
