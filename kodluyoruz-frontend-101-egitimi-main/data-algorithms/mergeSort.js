let secArr = [16, 21, 11, 8, 12, 22];

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smallest to data before push array
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

// split the dataset
function mergeSort(splitArr) {
  // find the half index
  const half = splitArr.length / 2;
  // length controll
  if (splitArr.length < 2) {
    return splitArr;
  }
  // divede the array
  const left = splitArr.splice(0, half);
  console.log(left, splitArr);
  return merge(mergeSort(left), mergeSort(splitArr));
}
console.log("Second Arr: " + secArr);
console.log("RESULT: " + mergeSort(secArr));
