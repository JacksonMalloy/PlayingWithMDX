import { graphql, useStaticQuery } from 'gatsby'
import { getTreeItems } from './getTreeItems'

export const useNavigation = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query Nav {
        allFile(filter: { sourceInstanceName: { eq: "pages" }, name: { regex: "/^(?!index|404).*$/" } }) {
          edges {
            node {
              name
              relativeDirectory
              childMdx {
                frontmatter {
                  path
                  date
                  published
                  featured
                }
              }
            }
          }
        }
      }
    `
  )

  const items = getTreeItems(allFile.edges)

  return items
}
