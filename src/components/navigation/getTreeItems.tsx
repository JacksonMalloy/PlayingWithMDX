export const getTreeItems = (data: { node: any }[]) => {
  // Create array of nodes
  const getBaseDirectories = (data: { node: any }[]) => {
    let baseDirectories: any[] = []

    data.forEach(({ node }) => {
      baseDirectories.push(node)
    })

    return baseDirectories
  }

  const baseDirectories = getBaseDirectories(data)

  // Set up data structure to include relativeDirs array
  const configureRelativeDirectoriesArray = () => {
    return baseDirectories.map(({ name, childMdx, relativeDirectory }) => {
      return {
        name,
        frontmatter: childMdx ? childMdx.frontmatter : null,
        relativeDirs: relativeDirectory.includes('/')
          ? relativeDirectory.split('/')
          : !relativeDirectory
          ? []
          : [relativeDirectory],
      }
    })
  }

  const test = configureRelativeDirectoriesArray()

  // console.log({ baseDirectories })

  const tacos = [
    {
      name: 'test',
      relativeDirs: ['work', 'SIX12'],
    },
    {
      name: 'multi-stage-transitions',
      relativeDirs: ['projects'],
    },
    { name: 'test', relativeDirs: ['work', 'SIX12'] },
    {
      name: 'SIX12',
      relativeDirs: ['work'],
    },
  ]

  const tttt = [
    { name: 'multi-stage-transitions', relativeDirs: ['projects'], children: [] },
    {
      name: 'work',
      relativeDirs: [''],
      children: [
        {
          name: 'SIX12',
          relativeDirs: ['work'],
          children: [{ name: 'test', relativeDirs: ['work', 'SIX12'], children: [] }],
        },
      ],
    },
  ]

  console.log({ test })

  const getUniqueRelativeDirectories = (data: { node: any }[]) => {
    let uniqueRelativeDirectories: [] = []

    data.forEach(({ node }) => {
      if (node.relativeDirectory) {
        const arrayOfValues = Object.values(node)
        uniqueRelativeDirectories.push(arrayOfValues[1])
      }
    })

    return [...new Set(uniqueRelativeDirectories)]
  }

  const uniqueRelativeDirs = getUniqueRelativeDirectories(data)

  // console.log({ uniqueRelativeDirs })

  const groupByKey = (list: any[], key: string) =>
    list.reduce((hash, obj) => ({ ...hash, [obj[key]]: (hash[obj[key]] || []).concat(obj) }), {})

  const groupedKeys = groupByKey(test, 'relativeDirs')

  // console.log({ groupedKeys })

  const connectChildren = () => {
    let baseNavigation: any[] = [{ name: 'home', relativeDirectory: '', children: [] }]

    // const recursiveFunction = (items, depth = 0) => {
    //   if (!items || !items.length) {
    //     return null
    //   }

    //   for (const t of items) {
    //     if (depth === 2) {
    //       return
    //     }

    //   return recursiveFunction(items, depth++)
    // }

    // const asdf = recursiveFunction(test)

    baseDirectories.forEach((directory, index, array) => {
      // Load up base directories that have relative directories
      if (Object.keys(groupedKeys).includes(directory.name)) {
        const updatedDir = { ...directory, ...{ children: groupedKeys[directory.name] } }
        baseNavigation.push(updatedDir)
      }
      if (!uniqueRelativeDirs.includes(directory.name) && !directory.relativeDirectory) {
        const updatedDir = { ...directory, ...{ children: [] } }
        baseNavigation.push(updatedDir)
      }
      console.log({ directory })
    })

    return baseNavigation
  }

  const folders = connectChildren()

  console.log({ folders })

  return folders
}
