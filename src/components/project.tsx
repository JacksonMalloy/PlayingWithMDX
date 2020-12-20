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

interface IProject {
  data: any
  title: string
  description: string
  lineBreak: boolean
}

// Pass Edges
export const Project = ({ data, title, description, lineBreak }: IProject) => {
  return (
    <section className="container">
      {/* {lineBreak && (
        <>
          <br />

          <br />
        </>
      )} */}
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      {/* <blockquote style={{ textAlign: 'center' }}>{description}</blockquote> */}
      {renderProjects(data)}
    </section>
  )
}
