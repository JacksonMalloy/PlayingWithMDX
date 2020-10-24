import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import Code from './components/code'
import { GlobalStyles } from './GlobalStyles'

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 1rem 2rem 1rem;
  }

  h1 {
    margin: 2rem 1rem;
  }
`

export const StyledContainer = styled.section`
  width: 700px;

  @media (max-width: 715px) {
    width: 600px;
  }

  @media (max-width: 615px) {
    width: 500px;
  }

  @media (max-width: 515px) {
    width: 400px;
  }

  @media (max-width: 415px) {
    width: 300px;
  }

  min-width: 320px;
`

const components = {
  code: Code,
}

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledContainer>
        <MDXProvider components={components}>
          <GlobalStyles />
          {children}
        </MDXProvider>
      </StyledContainer>
    </StyledLayout>
  )
}

export default Layout
