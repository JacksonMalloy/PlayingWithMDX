import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 2.5rem;
  border: none;
  box-shadow: none;
  text-decoration: none;
  margin: 8px;
  padding: 8px 12px;
  background-color: var(--constant-color);
  color: var(--secondary);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8rem;
  line-height: 1;

  @media (max-width: 775px) {
    top: 3.5rem;
  }

  &:hover {
    background-color: var(--button-hover);
  }
`

const Button = (props: any) => <StyledButton {...props} />

export default Button
