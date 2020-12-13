import React from 'react'
import { Project } from '../components/project'
import Layout from '../Layout'

const ProjectsPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data
  return (
    <Layout viewportLimit="1920px">
      <Project data={edges} />
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
  }
`
