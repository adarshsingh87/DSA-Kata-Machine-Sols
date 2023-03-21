export default function linear_search(haystack: number[], needle: number): boolean {
  for(const i of haystack) {
    if( i === needle) {
      return true
    }
  }
  return false
}
