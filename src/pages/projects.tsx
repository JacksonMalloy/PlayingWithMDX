import { graphql } from 'gatsby'
import React from 'react'
import { Posts } from '../components/posts'
import Layout from '../Layout'
import { IMdx } from '../Types'

const ProjectsPage = ({ data }: IMdx) => {
  const {
    allMdx: { edges },
  } = data

  return (
    <Layout viewportLimit="1920px">
      <Posts data={edges} />
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
