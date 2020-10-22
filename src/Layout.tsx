import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from './components/code'

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
  display: flex;
  justify-content: center;
`

const components = {
  code: Code,
}

const Layout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <StyledLayout>
        <GlobalStyles />
        {children}
      </StyledLayout>
    </MDXProvider>
  )
}

export default Layout
