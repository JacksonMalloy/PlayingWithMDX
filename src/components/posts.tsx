import React from 'react'
import { IMdxProps, NodeType } from '../Types'
import { Card } from './card'

const renderCards = (data: NodeType[]) => {
  return data
    .filter(({ node }) => {
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
          <>
            <small>{date}</small>
            <h3 style={{ marginBottom: 0 }}>{title}</h3>
            <div>
              {tags.map((tag, i) => {
                return <code key={i}>{tag}</code>
              })}
            </div>
          </>
        </Card>
      )
    })
}

export const Posts = ({ data }: IMdxProps) => {
  return <section className="container">{renderCards(data)}</section>
}
