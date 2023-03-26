export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    let seen = new Array(graph.length).fill(false);
    let prev = new Array(graph.length).fill(-1);
    seen[source] = true;
    let q = [source];

    do {
        let curr = q.shift() as number;

        if (curr === needle) break;

        let adgs = graph[curr];
        for (let i = 0; i < adgs.length; i++) {
            if (adgs[i] === 0) continue;
            if (seen[i]) continue;
            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
        seen[curr] = true;
    } while (q.length);

    let curr = needle;
    let out = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    if (out.length) {
        out.push(source);
        return out.reverse();
    }
    return null;
}
