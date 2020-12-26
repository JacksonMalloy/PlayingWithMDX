export type NodeType = {
  node: {
    frontmatter: {
      title: string
      path: string
      tags: string[]
      date: string
      published: boolean
      featured: boolean
    }
  }
}

export interface IMdx {
  data: {
    allMdx: {
      edges: NodeType[]
    }
  }
}

export interface IMdxProps {
  data: NodeType[]
}

export interface IMdxWithNodes {
  edges: NodeType[]
}
