import React from 'react'
import { graphql } from 'gatsby'
import { Post } from '../components/post'
import Layout from '../Layout'

const DeveloperPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data

  return (
    <Layout viewportLimit="1920px">
      <Post data={edges} />
    </Layout>
  )
}

export default DeveloperPage

export const query = graphql`
  query {
    allMdx(filter: { slug: { regex: "/developers/" } }) {
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
