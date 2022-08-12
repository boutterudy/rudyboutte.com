/**
 * Function which is returning an array with duplicated elements removed
 *
 * @param a Array to remove duplicated elements
 * @returns Array without duplicated elements
 */
const unique = (a: Array<any>) => {
  const seen: any = {}
  const out = []
  const len = a.length
  let j = 0
  for (let i = 0; i < len; i++) {
    const item = a[i]
    if (seen[item] !== 1) {
      seen[item] = 1
      out[j++] = item
    }
  }
  return out
}

export { unique }
