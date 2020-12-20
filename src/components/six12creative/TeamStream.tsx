import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { Card } from '../card'
import styled from 'styled-components'

export const TeamStream = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          slug: { regex: "/work/six12creative/" }
          frontmatter: { solo: { eq: false }, title: { ne: "Six12creative" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              tags
              date(formatString: "MMMM DD, YYYY")
              published
              featured
              solo
            }
          }
        }
      }
    }
  `)

  const renderCards = () => {
    return data.allMdx.edges.map(
      (
        {
          node: {
            frontmatter: { title, tags, date, path },
          },
        },
        i
      ) => {
        return (
          <Card to={`${path}`} key={i}>
            <small>{date}</small>
            <h4 style={{ marginBottom: 0 }}>{title}</h4>
            <div>
              {tags.map((tag, i) => {
                return <code key={i}>{tag}</code>
              })}
            </div>
          </Card>
        )
      }
    )
  }

  return <StyledStreamGroup>{renderCards()}</StyledStreamGroup>
}

const StyledStreamGroup = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
`
