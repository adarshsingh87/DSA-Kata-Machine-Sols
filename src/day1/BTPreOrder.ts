export default function pre_order_search(head: BinaryNode<number>): number[] {
  if(!head.left) {
    if (!head.right) return [head.value]
    return [head.value, ...pre_order_search(head.right)]
  }
  if(!head.right){
      if (!head.left) return [head.value];
      return [head.value, ...pre_order_search(head.left)];
  }
  return [head.value, ...pre_order_search(head.left), ...pre_order_search(head.right)]  
}
