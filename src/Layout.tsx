import React, { ReactChild } from 'react'
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
import Link from './components/link'
import { Grid } from './components/grid'
import Navigation from './components/navigation'
import { Drawer } from './components/drawer/drawer'
import Container from './Container'
import './fonts/font.css'
import { Notifications } from './components/notifications'
import { IFrame } from './components/iframe'
import Video from './components/video'
import { TeamStream } from './components/six12creative/TeamStream'
import { DOCK31ImagePanels } from './components/six12creative/DOCK31ImagePanels'
import { SoloStream } from './components/six12creative/SoloStream'
import Waves from './components/waves'
import Comments from './components/Comments'

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
    font-weight: 800;
  }

  @media (max-width: 775px) {
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
  ol,
  li,
  ul {
    ${pFontSizes()}
    font-weight: 800;
    line-height: 2.5rem;
    text-indent: 50px;

    @media (max-width: 900px) {
      text-indent: 35px;
    }

    @media (max-width: 576px) {
      padding: 0.1rem;
      margin-bottom: 0.5rem;
      text-indent: 20px;
    }

    @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
      background-color: var(--backdrop-color);
      -webkit-backdrop-filter: blur(16px);
      backdrop-filter: blur(16px);
    }

    background-color: transparent;
  }

  code {
    background-color: var(--secondary);
    color: var(--function-color);
    padding: 0.3rem 0.5rem;
    margin: 0 0.2rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;

    @media (max-width: 576px) {
      font-size: 0.7rem;
    }
  }

  li {
    list-style: disc inside;
    text-indent: 0px;
    padding: 0 1rem;
    margin-top: 2rem;

    p {
      margin-top: -rem;
      text-indent: 0px;
    }
  }

  blockquote {
    /* border-left: 0.5rem solid #663399; */
    border-radius: 0.2rem;
    background-color: hsla(0, 0%, 100%, 0.6);
    padding: var(--space);
    margin: 1rem 2rem;
    ${bqFontSizes()}
    line-height: 2.5rem;
    border-radius: 1rem;
    font-weight: 800;

    /* if backdrop support: very transparent and blurred */
    @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
      background-color: var(--backdrop-color);
      -webkit-backdrop-filter: blur(16px);
      backdrop-filter: blur(16px);
    }

    p {
      margin: 0;
      padding: 0 var(--space);
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

  a {
    font-weight: 800;
    color: var(--link-primary);
  }

  mark {
    ${pFontSizes()}
    font-weight: 800;
    line-height: 2.5rem;
    background-color: var(--link-primary);
    color: var(--primary);
    padding: 0 0.5rem;
  }
`

export const ExtendStyledLayout = styled(StyledLayout)({
  ...h1FontSizes(),
})

const components = {
  code: Code,
  a: Link,
  DOCK31ImagePanels: DOCK31ImagePanels,
  TeamStream: TeamStream,
  SoloStream: SoloStream,
  Video: Video,
  IFrame: IFrame,
  Comments: Comments,
}

interface ILayout {
  children: ReactChild | ReactChild[]
  isContact?: boolean
}

const Layout = ({ children, isContact }: ILayout) => {
  return (
    <ManagedUIContext>
      <ExtendStyledLayout>
        <Notifications />
        <Header />
        <Container>
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
          <Waves />
        </Container>
        <Footer isContact={isContact} />
      </ExtendStyledLayout>
    </ManagedUIContext>
  )
}

export default Layout
