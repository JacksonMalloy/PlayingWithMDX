import { graphql } from 'gatsby'
import React from 'react'
import { StyledGrid } from '.'
import Sidebar from '../components/sidebar'
import { Work } from '../components/work'
import Layout from '../Layout'

const WorkPage = ({ data }) => {
  const {
    allFile: { edges },
  } = data

  return (
    <Layout viewportLimit="1920px">
      <StyledGrid>
        <Work />
        <Sidebar data={edges} />
      </StyledGrid>
    </Layout>
  )
}

export default WorkPage

export const query = graphql`
  query WorkQuery {
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
