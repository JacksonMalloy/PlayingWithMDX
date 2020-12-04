import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import Code from './components/code'
import { GlobalStyles } from './GlobalStyles'
import { Footer } from './components/footer'
import { h1Extract, h2Extract, h3Extract, h4Extract, h5Extract } from './createMediaQuery'
import Header from './components/header'
import { ManagedUIContext } from './Context'

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
    color: #011627;
    margin: 0 1rem 2rem 1rem;
  }

  small {
    margin: 0.3rem 1rem;
  }

  h1 {
    margin: 2rem 1rem;
    ${h1Extract()}
  }

  h2 {
    ${h2Extract()}
  }

  h3 {
    ${h3Extract()}
  }

  h4 {
    ${h4Extract()}
  }

  h5 {
    ${h5Extract()}
  }

  @media (max-width: 700px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 0 1rem;
    }
  }

  p,
  ol {
    font-size: 1.5rem;
    line-height: 2.5rem;

    @media (max-width: 576px) {
      font-size: 1rem;
      line-height: 2rem;
      padding: 0 1rem;
    }
  }

  code {
    background-color: #fdfaf6;
    color: #663399;
    padding: 0.1rem 0.6rem;
    margin: 0 0.2rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;

    @media (max-width: 576px) {
      font-size: 0.7rem;
    }
  }

  blockquote {
    /* border-left: 0.5rem solid #663399; */
    border-radius: 0.2rem;
    background-color: #fdfaf6;
    padding: 1rem;
    margin: 2rem;
    font-size: 1.5rem;
    line-height: 2.5rem;

    p {
      margin: 0;
      padding: 0 1rem;
    }

    code {
      padding: 0;
    }
  }

  @media (max-width: 576px) {
    blockquote {
      font-size: 1rem;
      line-height: 2rem;
    }
  }

  pre {
    font-size: 1rem;
    line-height: 1.5rem;

    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }
`

const ExtendStyledLayout = styled(StyledLayout)({
  ...h1Extract(),
})

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
    <ManagedUIContext>
      <ExtendStyledLayout>
        <Header />
        <StyledContainer>
          <MDXProvider components={components}>
            <GlobalStyles />
            {children}
          </MDXProvider>
        </StyledContainer>
      </ExtendStyledLayout>
    </ManagedUIContext>
  )
}

export default Layout
