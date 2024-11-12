/**
 * Function which is returning an array with duplicated elements removed
 *
 * @param a Array to remove duplicated elements
 * @returns Array without duplicated elements
 */
const unique = <T extends string | number | symbol>(a: Array<T>): Array<T> => {
  const seen: Record<T, boolean> = Object.create(null)
  const out: Array<T> = []
  const len = a.length
  let j = 0
  for (let i = 0; i < len; i++) {
    const item = a[i]
    if (!seen[item]) {
      seen[item] = true
      out[j++] = item
    }
  }
  return out
}

export { unique }
