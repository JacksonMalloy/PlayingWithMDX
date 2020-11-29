import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import Code from './components/code'
import { GlobalStyles } from './GlobalStyles'
import { Footer } from './components/footer'
import { h1Extract, h2Extract, h3Extract, h4Extract, h5Extract } from './createMediaQuery'

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

  small {
    margin: 0.3rem 1rem;
  }

  /* type-scale x1.5 for desktop */
  h1 {
    margin: 2rem 1rem;
    /* line-height: 9rem; */

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

  p,
  ol {
    font-size: 1.5rem;
    line-height: 2.5rem;

    @media (max-width: 576px) {
      font-size: 1rem;
      line-height: 1.5rem;
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

  @media (max-width: 576px) {
    blockquote {
      font-size: 1rem;

      p {
        margin: 0;
        line-height: 1.5rem;
      }
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
    <ExtendStyledLayout>
      <StyledContainer>
        <MDXProvider components={components}>
          <GlobalStyles />
          {children}
        </MDXProvider>
      </StyledContainer>
      {/* <Footer /> */}
    </ExtendStyledLayout>
  )
}

export default Layout
