export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let q = [head];

    while (q.length > 0) {
        let next = q.shift();
        if (next) {
            if (next.value === needle) return true;
            if(next.left ) q.push(next.left);
            if(next.right) q.push(next.right);
        }
    }

    return false
}
