import React from 'react'
import { Card } from './card'

const renderProjects = (data) => {
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
        <Card key={i} to={`${path}`}>
          <small>{date}</small>
          <h3 style={{ marginBottom: 0 }}>{title}</h3>
          <div>
            {tags.map((tag, i) => {
              return <code key={i}>{tag}</code>
            })}
          </div>
        </Card>
      )
    })
}

export const Project = ({ data }) => {
  return (
    <section className="container">
      <h1>Projects</h1>
      {renderProjects(data)}
    </section>
  )
}
