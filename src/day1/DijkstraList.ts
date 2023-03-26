function hasUnvisited(seen: boolean[], dists: number[]) {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}
function getLowestUnvisited(seen: boolean[], dists: number[]) {
    let index = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < dists.length; i++) {
        if (seen[i]) continue;

        if (dists[i] < lowestDistance) {
            lowestDistance = dists[i];
            index = i
        }
    }
    return index;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    let seen = new Array(arr.length).fill(false);
    let dists = new Array(arr.length).fill(Infinity);
    let prev = new Array(arr.length).fill(-1);
    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        let curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;

        let adjs = arr[curr];
        for (let i = 0; i < adjs.length; i++) {
            let edge = adjs[i];
            if (seen[edge.to]) continue;

            let dist = dists[curr] + edge.weight;

            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }
    }

    let curr = sink;
    let out = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    out.push(source);
    return out.reverse();
}
