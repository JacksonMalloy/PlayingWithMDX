import { graphql } from 'gatsby'
import React from 'react'
import { Drawer } from '../components/drawer'
import { Grid } from '../components/grid'
import Sidebar from '../components/sidebar'
import { Work } from '../components/work'
import Layout from '../Layout'

const WorkPage = ({ data }) => {
  const {
    allFile: { edges },
  } = data

  return (
    <Layout viewportLimit="1920px">
      <Drawer />

      <Grid>
        <Work />
        <Sidebar data={edges} />
      </Grid>
    </Layout>
  )
}

export default WorkPage

export const query = graphql`
  query {
    allMdx(filter: { slug: { regex: "/work/" } }) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
            published
          }
        }
      }
    }
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
