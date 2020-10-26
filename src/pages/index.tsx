import React from 'react'
import { graphql } from 'gatsby'
import { Post } from '../components/post'
import Layout from '../Layout'

const IndexPage = ({ data }) => {
  console.log({ data })

  const {
    allMdx: { edges },
  } = data

  return (
    <Layout>
      <Post data={edges} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx {
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
  }
`
