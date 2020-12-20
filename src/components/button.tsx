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
  background-color: var(--code);

  @media (max-width: 700px) {
    top: 3.5rem;
  }

  &:hover {
    background-color: var(--button-hover);
  }

  color: var(--primary);
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
`

const Button = (props: any) => <StyledButton {...props} />

export default Button
