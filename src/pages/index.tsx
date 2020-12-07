import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Layout'
import { About } from '../components/about'
import { Drawer } from '../components/drawer'
import styled from 'styled-components'
import Sidebar from '../components/sidebar'

export const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0rem;
  justify-self: center;
  padding: 0 10rem;

  aside {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .about {
    grid-column: 2 / 4;
  }
`

const IndexPage = ({ data }) => {
  const {
    allFile: { edges },
  } = data

  return (
    <>
      <Layout viewportLimit="1920px">
        <Drawer />
        <StyledGrid>
          <About />
          <Sidebar data={edges} />
        </StyledGrid>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "pages" }, name: { regex: "/^(?!index|404).*$/" } }) {
      edges {
        node {
          name
          relativeDirectory
          childMdx {
            frontmatter {
              path
              date
              published
            }
          }
        }
      }
    }
  }
`
