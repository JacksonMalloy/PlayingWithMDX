import React from 'react'
import { graphql } from 'gatsby'
import { Posts } from '../components/posts'
import Layout from '../Layout'

type PostType = {
  node: {
    frontmatter: {
      title: string
      path: string
      tags: string[]
      date: string
      published: boolean
      featured: boolean
    }
  }
}
export interface IDeveloperProps {
  data: {
    allMdx: {
      edges: PostType[]
    }
  }
}

const DeveloperPage = ({ data }: IDeveloperProps) => {
  const {
    allMdx: { edges },
  } = data

  return (
    <Layout viewportLimit="1920px">
      <Posts data={edges} />
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
