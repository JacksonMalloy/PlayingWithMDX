export const getTreeItems = (data: { node: any }[]) => {
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

  const getBaseDirectories = (data: { node: any }[]) => {
    let baseDirectories: any[] = []

    data.forEach(({ node }) => {
      baseDirectories.push(node)
    })

    return baseDirectories
  }

  const baseDirectories = getBaseDirectories(data)

  const groupByKey = (list: any[], key: string) =>
    list.reduce((hash, obj) => ({ ...hash, [obj[key]]: (hash[obj[key]] || []).concat(obj) }), {})

  const groupedKeys = groupByKey(baseDirectories, 'relativeDirectory')

  const connectChildrenToBase = () => {
    let baseNavigation: any[] = [{ name: 'home', relativeDirectory: '', children: [] }]

    baseDirectories.forEach((directory, index, array) => {
      if (Object.keys(groupedKeys).includes(directory.name)) {
        const updatedDir = { ...directory, ...{ children: groupedKeys[directory.name] } }
        baseNavigation.push(updatedDir)
      }

      if (!uniqueRelativeDirs.includes(directory.name) && !directory.relativeDirectory) {
        const updatedDir = { ...directory, ...{ children: [] } }
        baseNavigation.push(updatedDir)
      }
    })

    return baseNavigation
  }

  const folders = connectChildrenToBase()

  return folders
}
