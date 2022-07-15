/* 
https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
    }
  }
  return nums;
}

function selectionSort(nums) {
  let size = nums.length;
  //define size of array as a variable
  while (size > 1) {
    let maxVal = Number.MIN_VALUE;
    //this declares the smallest value in the given array
    let index;
    //declaring variable to store max value
    for (let i = 0; i < size; i++) {
      //loop through array to find largest number
      if (nums[i] > maxVal) {
        //if the index value is greater than the declared value in maxVal:
        maxVal = nums[i];
        //set maxVal to the value of nums[i]
        index = i;
        //
      }
    }
    // When the largest value is found, it swaps with the value at the end of the array
    nums[index] = nums[size - 1];
    nums[size - 1] = maxVal;
    size--;
  }
  return nums;
}

console.log(selectionSort(numsOrdered));
console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));

function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minValue = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minValue]) {
        minValue = j;
      }
    }
    nums = swap(nums, i, minValue);
  }
  return nums; //return something?
}

function swap(arr, n, m) {
  let temp = arr[n];
  arr[n] = arr[m];
  arr[m] = temp;
  return arr;
}

console.log(selectionSort(numsOrdered));
console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));
console.log(selectionSort(expected));
