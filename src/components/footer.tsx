import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  padding: 1rem;
  background-color: #f5f5f5;
  width: 100%;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <a href="/">Contact</a>
    </StyledFooter>
  )
}
