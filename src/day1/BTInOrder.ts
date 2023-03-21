export default function in_order_search(head: BinaryNode<number>): number[] {
    if (!head.left) {
        if (!head.right) return [head.value];
        return [head.value, ...in_order_search(head.right)];
    }
    if (!head.right) {
        if (!head.left) return [head.value];
        return [head.value, ...in_order_search(head.left)];
    }
    return [
      ...in_order_search(head.left),
      head.value,
        ...in_order_search(head.right),
    ];
}
