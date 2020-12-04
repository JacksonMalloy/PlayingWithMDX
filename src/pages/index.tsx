import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Layout'
import { About } from '../components/about'
import { Drawer } from '../components/drawer'

const IndexPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data

  const sayHello = () => {
    const date = new Date()

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const options = {
      hour: 'numeric',
      hourCycle: 'h24',
      timeZone: timezone,
    }

    // To use browsers default locale pass empty array
    const dateTime = new Intl.DateTimeFormat([], options).format(date)

    if (parseInt(dateTime) >= 4 && parseInt(dateTime) < 12) {
      return 'Good Morning! 🌞'
    }

    if (parseInt(dateTime) >= 12 && parseInt(dateTime) < 16) {
      return 'Good Afternoon! 🍲'
    }

    if ((parseInt(dateTime) >= 16 && parseInt(dateTime) <= 24) || parseInt(dateTime) < 4) {
      return 'Good Evening! 🌃'
    }
  }

  return (
    <>
      <Layout>
        <Drawer />

        <h1>{sayHello()}</h1>
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
