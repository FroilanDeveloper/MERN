/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {}

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */

function mergeSort(nums) {
  if (nums.length <= 1) return nums
  let mid = Math.floor(nums.length / 2)
  // Recursive calls
  let left = mergeSort(nums.slice(0, mid))
  let right = mergeSort(nums.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}

console.log(mergeSort(numsOrdered));
console.log(mergeSort(numsRandomOrder));
console.log(mergeSort(numsReversed));

// Solution
function merge(left, right) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length || rightIndex < right.length){
    if(left[leftIndex]<right[rightIndex]){
      resultArr.push(left[leftIndex]);
      leftIndex += 1;
    }
    else if(left[leftIndex] > right[rightIndex]){
      resultArr.push(right[rightIndex]);
      rightIndex += 1;
    }
    else{
      if(leftIndex < left.length){
        resultArr.push(left[leftIndex]);
        leftIndex += 1;
      }
      if(rightIndex < right.length){
        resultArr.push(right[rightIndex]);
        rightIndex += 1;
      }
    }
    //console.log(`leftIndex=${leftIndex}, left.length=${left.length},rightIndex=${rightIndex},right.length=${right.length}, ${resultArr}`);
  }

  return resultArr;
}

// Solution
function merge2(arrX, arrY) {
  // make copies of input arrays
  let x = [...arrX];
  let y = [...arrY];
  // create a new array to push values to as we go through the
  let newArray = [];

  while (x.length > 0 && y.length > 0) {
    // choose the smallest value between the 0 index of both subarrays
    if (x[0] < y[0]) {
      newArray.push(x.shift())
    }
    else {
      newArray.push(y.shift())
    }
  }

  // if we didn't go through the whole array yet we need to add the leftover values to the end and return
  // return newArray
  return [ ...newArray, ...x, ...y ]
}