/**
 * Function which is returning an array with duplicated elements removed
 *
 * @param a Array to remove duplicated elements
 * @returns Array without duplicated elements
 */
const unique = (a: Array<any>) => {
  var seen: any = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for (var i = 0; i < len; i++) {
    var item = a[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out;
};

export { unique };
