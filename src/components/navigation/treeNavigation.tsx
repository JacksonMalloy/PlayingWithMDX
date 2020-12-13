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
          <StyledTreeItem style={{ marginLeft: depth * 30 }} to={linkTo}>
            {removeSnakeCase()}
          </StyledTreeItem>

          <TreeNavigation items={item.children} depth={depth + 1} />
        </React.Fragment>
      )
    }

    if (!depth) {
      return (
        <React.Fragment key={`${index}-${item.name}`}>
          <StyledTreeItem style={{ marginLeft: depth * 30 }} to={linkTo}>
            {removeSnakeCase()}
          </StyledTreeItem>{' '}
          <TreeNavigation items={item.children} depth={depth + 1} />
        </React.Fragment>
      )
    }

    return null
  })
}

const StyledTreeItem = styled(Link)`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  opacity: 1;
  transition: opacity 0.1s;

  &:hover {
    color: var(--text);
    opacity: 0.8;
    transition: opacity 0.1s;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    color: var(--text);
    opacity: 0.8;
    transition: opacity 0.1s;
    text-decoration: underline;
  }
`
