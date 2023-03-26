function walk(
    graph: WeightedAdjacencyList,
    atNode: number,
    needle: number,
    seen: boolean[],
    path: number[],
) {
  if (seen[atNode]) return false;
  
  seen[atNode] = true;

  path.push(atNode);
  
  if (atNode === needle) {
      return true;
  }

    const graphAdj = graph[atNode];
    for (let i = 0; i < graphAdj.length; i++) {
        let edge = graphAdj[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
  let path: number[] = []
  let seen = new Array(graph.length).fill(false)
  walk(graph, source, needle, seen, path)
  if(path.length) return path
  return null
}
