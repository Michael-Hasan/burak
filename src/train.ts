function getHighestIndex(arr: number[]): number {
  if (!Array.isArray(arr) || arr.length === 0) return -1;

  let maxVal = arr[0];
  let maxIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
      maxIdx = i;
    }
  }

  return maxIdx;
}
console.log(getHighestIndex([5, 21, 12, 21, 8]));
