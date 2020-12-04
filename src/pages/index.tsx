import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Layout'
import { About } from '../components/about'
import { Drawer } from '../components/drawer'

const IndexPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data

  return (
    <>
      <Layout>
        <Drawer />

        <About />
      </Layout>
    </>
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
