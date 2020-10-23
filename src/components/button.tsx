import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  top: 1.5rem;
  border: none;
  box-shadow: none;
  text-decoration: none;
  margin: 8px;
  padding: 8px 12px;
  background-color: #e2e8f022;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
`

const Button = (props: any) => <StyledButton {...props} />

export default Button
