import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  position: 'absolute';
  top: 0;
  right: 0;
  border: 'none';
  box-shadow: 'none';
  text-decoration: 'none';
  margin: '8px';
  padding: '8px 12px';
  background: '#E2E8F022';
  color: 'white';
  border-radius: '8px';
  cursor: 'pointer';
  color: '#E2E8F0';
  font-size: '14px';
  font-family: 'sans-serif';
  line-height: '1';
`

const Button = (props: any) => <StyledButton {...props} />

export default Button
