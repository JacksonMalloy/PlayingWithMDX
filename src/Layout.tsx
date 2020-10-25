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
  ol {
    margin: 0 1rem 2rem 1rem;
  }

  /* type-scale x1.5 for desktop */
  h1 {
    margin: 2rem 1rem;
    font-size: 7.594rem;
    line-height: 9rem;
  }

  h2 {
    font-size: 5.063rem;
  }

  h3 {
    font-size: 3.375rem;
  }

  h4 {
    font-size: 2.25rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  p,
  ol {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  code {
    background-color: #011627;
    color: rgb(214, 222, 235);
    padding: 0.1rem 0.4rem;
    margin: 0 0.2rem;
    border-radius: 0.5rem;
  }

  blockquote {
    border-left: 1rem solid #cccccc;
    margin-left: 2rem;
    background-color: #f2f2f2;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 1rem;
    font-size: 1.5rem;

    p {
      margin: 0;
      line-height: 2.5rem;
    }
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
