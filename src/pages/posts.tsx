import React from 'react'
import { graphql } from 'gatsby'
import { Posts } from '../components/posts'
import Layout from '../Layout'

const PostsPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data

  return (
    <Layout viewportLimit="1920px">
      <Posts data={edges} />
    </Layout>
  )
}

export default PostsPage

export const query = graphql`
  query {
    allMdx(filter: { slug: { regex: "/posts/" } }) {
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
