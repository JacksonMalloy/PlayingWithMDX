import { Link } from 'gatsby'
import React from 'react'

type NavItem = {
  children: [] | NavItem | NavItem[]
  frontmatter: null | {
    date: string
    featured: boolean
    path: string
    published: boolean
  }
  name: string
  relativeDir: string
}
interface ITreeNav {
  items: any
  depth?: number
}

export const TreeNavigation = ({ items, depth = 0 }: ITreeNav): any => {
  if (!items || !items.length) {
    return null
  }

  return items.map((item: NavItem, index: number) => {
    const { relativeDir, name, frontmatter } = item
    const linkTo = frontmatter
      ? frontmatter.path
      : relativeDir
      ? `/${relativeDir}/${name}/`
      : name === 'home'
      ? '/'
      : `/${name}`

    const removeSnakeCase = () => {
      const regex = /-/gi
      return item.name.replace(regex, ' ')
    }

    if (depth && item && item.name === 'six12creative') {
      return (
        <React.Fragment key={`${index}-${item.name}`}>
          <Link style={{ marginLeft: depth * 30 }} to={linkTo} className={`depth-${depth}`} activeClassName="active">
            <small>CURRENT</small>
            <span>{removeSnakeCase()}</span>
          </Link>
          <TreeNavigation items={item.children} depth={depth + 1} />
        </React.Fragment>
      )
    }

    if (depth && item && item.frontmatter && item.frontmatter.featured && item.frontmatter.published) {
      return (
        <React.Fragment key={`${index}-${item.name}`}>
          <Link style={{ marginLeft: depth * 30 }} to={linkTo} className={`depth-${depth}`} activeClassName="active">
            <small>FEATURED</small>
            <span>{removeSnakeCase()}</span>
          </Link>
          <TreeNavigation items={item.children} depth={depth + 1} />
        </React.Fragment>
      )
    }

    if (!depth) {
      return (
        <React.Fragment key={`${index}-${item.name}`}>
          <Link style={{ marginLeft: depth * 30 }} to={linkTo} className={`depth-${depth}`} activeClassName="active">
            {removeSnakeCase()}
          </Link>{' '}
          <TreeNavigation items={item.children} depth={depth + 1} />
        </React.Fragment>
      )
    }

    return null
  })
}
