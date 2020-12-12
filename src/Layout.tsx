import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import Code from './components/code/code'
import { GlobalStyles } from './GlobalStyles'
import { Footer } from './components/footer'
import {
  bqFontSizes,
  h1FontSizes,
  h2FontSizes,
  h3FontSizes,
  h4FontSizes,
  h5FontSizes,
  pFontSizes,
  preFontSizes,
  smallFontSizes,
} from './createMediaQuery'
import Header from './components/header'
import { ManagedUIContext } from './Context'
import { Toast } from './components/toast'
import Link from './components/link'
import { Grid } from './components/grid'
import Navigation from './components/navigation'
import { Drawer } from './components/drawer/drawer'
import Container from './Container'
import './fonts/font.css'

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
    text-align: center;
    ${h1FontSizes()}
  }

  h2 {
    ${h2FontSizes()}
  }

  h3 {
    ${h3FontSizes()}
  }

  h4 {
    ${h4FontSizes()}
  }

  h5 {
    ${h5FontSizes()}
  }

  small {
    ${smallFontSizes()}
  }

  @media (max-width: 700px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 0.5rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  p,
  ol {
    ${pFontSizes()}
    line-height: 2.5rem;

    @media (max-width: 576px) {
      padding: 0.5rem;
      margin-bottom: 0.5rem;
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
    ${bqFontSizes()}
    line-height: 2.5rem;
    border-radius: 1rem;

    p {
      margin: 0;
      padding: 0 var(--space);
    }

    code {
      padding: 0;
    }

    @media (max-width: 576px) {
      margin: var(--space);
    }
  }

  pre {
    ${preFontSizes()}
    line-height: 1.5rem;
    font-family: 'Fira Mono Regular';
    width: 100%;
    padding: var(--space);
    overflow-x: auto;
    position: relative;
    margin-bottom: 1rem;

    span {
      font-family: inherit;
    }

    @media (max-width: 576px) {
      margin-bottom: 0.5rem;
    }
  }
`

export const ExtendStyledLayout = styled(StyledLayout)({
  ...h1FontSizes(),
})

const components = {
  code: Code,
  a: Link,
}

const Layout = ({ children, viewportLimit, isContact }) => {
  return (
    <ManagedUIContext>
      <ExtendStyledLayout>
        <Toast />
        <Header isContact />
        <Container viewportLimit={viewportLimit}>
          <MDXProvider components={components}>
            <GlobalStyles />
            <Drawer />
            {isContact ? (
              <>{children}</>
            ) : (
              <Grid>
                <Navigation />
                <section className="container">{children}</section>
              </Grid>
            )}
          </MDXProvider>
        </Container>
      </ExtendStyledLayout>
    </ManagedUIContext>
  )
}

export default Layout
