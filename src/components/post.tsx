import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { useSwipe } from './useSwipe'

const StyledPost = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  small {
    text-align: left;
    font-size: 1rem;
  }

  div {
    display: flex;

    margin: 1rem;

    @media (max-width: 415px) {
      flex-direction: column;
    }
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0 !important;
  }
`

const renderPosts = (data) => {
  return data
    .filter(({ node }, i) => {
      const {
        frontmatter: { published },
      } = node

      return published
    })

    .map(({ node }, i) => {
      const {
        frontmatter: { date, path, tags, title },
      } = node

      return (
        <StyledPost key={i} to={`${path}`}>
          <small>{date}</small>
          <h3>{title}</h3>
          <div>
            {tags.map((tag, i) => {
              return <code key={i}>{tag}</code>
            })}
          </div>
        </StyledPost>
      )
    })
}

export const Post = ({ data }) => {
  const { handlers } = useSwipe()

  return (
    <section {...handlers}>
      <h1>Blog</h1>
      {renderPosts(data)}
    </section>
  )
}
