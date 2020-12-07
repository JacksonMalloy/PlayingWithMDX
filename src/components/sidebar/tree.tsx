import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

interface ItemInterface {
  name: string
  relativeDirectory: string
  children?: [ItemInterface]
}

export const TreeNavigation = ({ items, depth = 0 }) => {
  if (!items || !items.length) {
    return null
  }

  return items.map((item, index) => {
    const { relativeDirectory, name } = item

    console.log({ item })

    const linkTo = relativeDirectory ? `/${relativeDirectory}/${name}/` : name === 'home' ? '/' : `/${name}`

    return (
      <React.Fragment key={`${index}-${item.name}`}>
        <StyledTreeItem style={{ paddingLeft: depth * 30 }} to={linkTo}>
          {item.name}
        </StyledTreeItem>
        {item.childMdx && item.childMdx.frontmatter.featured && (
          <TreeNavigation items={item.children} depth={depth + 1} />
        )}
      </React.Fragment>
    )
  })
}

const StyledTreeItem = styled(Link)`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans Regular';
`
