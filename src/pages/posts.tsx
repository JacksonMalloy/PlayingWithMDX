import React from 'react'
import { graphql } from 'gatsby'
import { Post } from '../components/post'
import Layout from '../Layout'
import Navigation from '../components/navigation'
import { Drawer } from '../components/drawer/drawer'
import { Grid } from '../components/grid'

const PostsPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data

  return (
    <Layout viewportLimit="1920px">
      <Drawer />
      <Grid>
        <Post data={edges} />
        <Navigation />
      </Grid>
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
