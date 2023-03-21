export default function post_order_search(head: BinaryNode<number> | null): number[] {
    if(head===null) return []
    return [
        ...post_order_search(head.left),
        ...post_order_search(head.right),
        head.value,
    ];
}
