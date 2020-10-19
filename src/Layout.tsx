import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import styled from 'styled-components'

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledContainer = styled.section`
  max-width: 1600px;
  min-width: 320px;
  padding: 1rem;
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyles />
      {children}
    </StyledLayout>
  )
}

export default Layout
