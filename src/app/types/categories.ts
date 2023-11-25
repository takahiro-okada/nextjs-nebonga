interface Node {
  id: string
  name: string
  children: Children
  uri: string // Node は Children 型の children プロパティを持つ
}

interface Edge {
  node: Node
}

interface Children {
  edges: Edge[]
}

interface Categories {
  id: string // JSONデータに基づいて、idは文字列である必要があります
  name: string
  children: Children
  uri: string
}

export default Categories
