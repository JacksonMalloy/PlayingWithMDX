import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export const TreeNavigation = ({ items, depth = 0 }) => {
  if (!items || !items.length) {
    return null
  }

  return items.map((item, index) => {
    const { relativeDirectory, name } = item
    const linkTo = relativeDirectory ? `/${relativeDirectory}/${name}/` : name === 'home' ? '/' : `/${name}`

    const removeSnakeCase = () => {
      const regex = /-/gi
      return item.name.replace(regex, ' ')
    }

    if (depth && item.childMdx && item.childMdx.frontmatter.featured && item.childMdx.frontmatter.published) {
      return (
        <React.Fragment key={`${index}-${item.name}`}>
          <Link style={{ marginLeft: depth * 30 }} to={linkTo} className={`depth-${depth}`}>
            {removeSnakeCase()}
          </Link>

          <TreeNavigation items={item.children} depth={depth + 1} />
        </React.Fragment>
      )
    }

    if (!depth) {
      return (
        <React.Fragment key={`${index}-${item.name}`}>
          <Link style={{ marginLeft: depth * 30 }} to={linkTo} className={`depth-${depth}`}>
            {removeSnakeCase()}
          </Link>{' '}
          <TreeNavigation items={item.children} depth={depth + 1} />
        </React.Fragment>
      )
    }

    return null
  })
}
