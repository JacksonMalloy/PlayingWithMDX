type TreeNode = {
  node: {
    childMdx: {
      frontmatter: {
        date: string
        featured: boolean
        path: string
        published: boolean
      }
    }
    name: string
    relativeDirectory: string
  }
}

type NodeType = {
  childMdx: {
    frontmatter: {
      date: string
      featured: boolean
      path: string
      published: boolean
    }
  }
  name: string
  relativeDirectory: string
}

export const getTreeItems = (data: TreeNode[]) => {
  // Create array of nodes
  const getBaseDirectories = (data: TreeNode[]) => {
    let baseDirectories: NodeType[] = []

    data.forEach(({ node }) => {
      return baseDirectories.push(node)
    })

    return baseDirectories
  }

  const baseDirectories = getBaseDirectories(data)

  // Set up data structure to include relativeDirs array
  const configureRelativeDirectory = () => {
    return baseDirectories.map(({ name, childMdx, relativeDirectory }) => {
      return {
        name,
        frontmatter: childMdx ? childMdx.frontmatter : null,
        relativeDir: relativeDirectory.substring(relativeDirectory.lastIndexOf('/') + 1),
      }
    })
  }

  const directoryList = configureRelativeDirectory()

  // Can we do this recursively?
  const configuredDirectoryList = directoryList.map((item, _index, array) => {
    const node = array
      // Filter children matching relative directories
      .filter((child) => {
        return child.relativeDir === item.name
      })
      // Append children array to first level
      .map((firstChild) => {
        // Filter children matching relative directories
        const node = array
          .filter((child) => {
            return child.relativeDir === firstChild.name
          })
          // Append children array to second level
          .map((child) => {
            return { ...child, children: [] }
          })

        return { ...firstChild, children: node }
      })

    const newItem = { ...item, children: node }

    return newItem
  })

  const filteredDirectories = [
    { name: 'home', frontmatter: null, relativeDir: '', children: [] },
    ...configuredDirectoryList.filter((dir) => {
      // Remove copies of directorys at base level
      return !dir.relativeDir && dir.children.length
    }),
    { name: 'contact', frontmatter: null, relativeDir: '', children: [] },
  ]

  return filteredDirectories
}
