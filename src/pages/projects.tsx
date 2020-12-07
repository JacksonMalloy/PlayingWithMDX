import { graphql } from 'gatsby'
import React from 'react'
import { Grid } from '../components/grid'
import Layout from '../Layout'

const ProjectsPage = () => {
  return (
    <Layout viewportLimit="1920px">
      <Grid>
        <h1>Coming Soon!</h1>
      </Grid>
    </Layout>
  )
}
export default ProjectsPage

export const query = graphql`
  query {
    allMdx(filter: { slug: { regex: "/projects/" } }) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
            published
            featured
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
              featured
            }
          }
        }
      }
    }
  }
`
