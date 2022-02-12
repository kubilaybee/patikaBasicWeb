let firstArr = [22, 27, 16, 2, 18, 6];

function insertionSort(arr) {
  let arrLength = arr.length;

  for (let i = 1; i < arrLength; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let tempData = arr[i];
        arr[i] = arr[j];
        arr[j] = tempData;
      }
      console.log(arr);
    }
  }
  return arr;
}

console.log("RESULT: " + insertionSort(firstArr));
