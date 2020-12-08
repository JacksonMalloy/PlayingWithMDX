import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Layout'
import { About } from '../components/about'
import { Drawer } from '../components/drawer'
import Navigation from '../components/navigation'
import { Grid } from '../components/grid'

const IndexPage = ({ data }) => {
  const {
    allFile: { edges },
  } = data

  return (
    <Layout viewportLimit="1920px">
      <Drawer />
      <Grid>
        <About />
        <Navigation data={edges} />
      </Grid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
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
