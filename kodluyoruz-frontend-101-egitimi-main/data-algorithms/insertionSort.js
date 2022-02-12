let firstArr = [22, 27, 16, 2, 18, 6];

function insertionSort(arr) {
  let arrL = arr.length;

  for (let i = 1; i < arrL; i++) {
    // keep the data valuee
    let currentData = arr[i];
    // get index number of previous data
    let j = i - 1;
    // compare the values of the dataset efore the current retained value
    while (j > -1 && currentData < arr[j]) {
      // edit dataset up to current index if conditions are met
      arr[j + 1] = arr[j];
      j--;
    }
    // assign current value to index
    arr[j + 1] = currentData;
    console.log(arr);
  }
  return arr;
}

console.log("RESULT: " + insertionSort(firstArr));
