/**
 * Approach of the solution using binary search algorithm
 * Complexity (Worst case scenario O(NLogN))
 * Avg case: O(NLogN)
 */
export function pairMatchesbinarySearch(arr, n) {
  const sorted = arr.sort((a,b) => a - b);
  const responses = [];
  for(let i = 0; i < sorted.length; i++) {
    const value1 = sorted[i];
    // Binary search for the match
    let lessIdx = i;
    let greaterIdx = sorted.length;
    let found = false;
    while(lessIdx < greaterIdx && !found) {
      let middleIdx = Math.floor(lessIdx + ((greaterIdx - lessIdx) / 2));
      if(sorted[middleIdx] + value1 === n) {
        responses.push([sorted[middleIdx], value1])
        found = true;
      } else if(sorted[middleIdx] + value1 > n) {
        greaterIdx = middleIdx;
      } else {
        lessIdx = middleIdx + 1;
      }
    }
  }
  return responses;
}

/**
 * Approach of the solution using hash tables approach
 * Note that JS dictionaries use Hashing
 * Complexity (Worst case scenario O(N^2) This complexity is very rare, and in general it performs O(NlogN))
 * Avg case: O(NLogN)
 */
export function pairMatchesHashApproach(arr, n) {
  const dict = {};
  const responses = [];
  for(const value of arr) {
    dict[value] = 1;
  }
  for(const value of arr) {
    if(dict[n - value]) {
      responses.push([value, n - value]);
      // Marks the responses, to avoid duplication
      dict[value] = 0;
      dict[n - value] = 0;
    }
  }
  return responses;
}
