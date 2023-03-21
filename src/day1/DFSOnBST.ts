export default function dfs(head: BinaryNode<number> | null, needle: number): boolean {
  if(!head) return false
  if(head.value === needle) return true
  if(head.value < needle) return false || dfs(head.right, needle)
  return false || dfs(head.left, needle)
}
