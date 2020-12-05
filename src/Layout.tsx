import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import Code from './components/code'
import { GlobalStyles } from './GlobalStyles'
import { Footer } from './components/footer'
import {
  bqExtract,
  h1Extract,
  h2Extract,
  h3Extract,
  h4Extract,
  h5Extract,
  pExtract,
  preExtract,
} from './createMediaQuery'
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
    color: var(--text);
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
      padding: var(--space);
    }
  }

  p,
  ol {
    ${pExtract()}
    line-height: 2.5rem;

    @media (max-width: 576px) {
      padding: var(--space);
    }
  }

  code {
    background-color: var(--secondary);
    color: var(--code);
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
    background-color: var(--secondary);
    padding: var(--space);
    margin: 1rem 2rem;
    ${bqExtract()}
    line-height: 2.5rem;

    p {
      margin: 0;
      padding: 0 var(--space);
    }

    code {
      padding: 0;
    }
  }

  pre {
    ${preExtract()}
    line-height: 1.5rem;
    font-family: 'Fira Mono Regular';
    width: 100%;
    padding: var(--space);
    overflow-x: auto;
    position: relative;

    span {
      font-family: inherit;
    }
  }
`

const ExtendStyledLayout = styled(StyledLayout)({
  ...h1Extract(),
})

export const StyledContainer = styled.section`
  max-width: ${({ viewportLimit }) => viewportLimit || '700px'};
`

const components = {
  code: Code,
}

const Layout = ({ children, viewportLimit }) => {
  return (
    <ManagedUIContext>
      <ExtendStyledLayout>
        <Header />
        <StyledContainer viewportLimit={viewportLimit}>
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
