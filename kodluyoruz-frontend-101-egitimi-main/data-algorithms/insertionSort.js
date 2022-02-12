let firstArr = [22, 27, 16, 2, 18, 6];

function insertionSort(arr) {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let currentData = arr[i];
    let j = i - 1;
    while (j > -1 && currentData < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentData;
    console.log(arr);
  }
  return arr;
}

console.log("RESULT: " + insertionSort(firstArr));
