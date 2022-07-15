/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];

// original : [11, 8, 14, 3, 6, 2, 7]
// if we pick 7 as the pivot
// new.    :  [ 3, 6, 2, 7, 11, 8, 14]
// return the pivot index :3

/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partition(nums = [], left = 0, right = nums.length - 1) {
  const pivotValue = nums[right];
  let pivotIndex = left;
  for (let i = left; i < right; i++) {
    if (nums[i] < pivotValue) {
      [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
      pivotIndex++;
    }
  }
  [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
  return pivotIndex;
}

// console.log(partition(nums1));
// console.log(partition(nums2));
// console.log(partition(nums3));
// console.log(partition(nums4));

function quickSort(nums) {
  var smaller = [];
  var larger = [];
  if (nums.length <= 1) return nums;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] < nums[0]) smaller.push(nums[i]);
    if (nums[i] >= nums[0]) larger.push(nums[i]);
  }
  return quickSort(smaller).concat(nums[0], quickSort(larger));
}
// console.log(quickSort(nums1));
// console.log(quickSort(nums2));
// console.log(quickSort(nums3));
// console.log(quickSort(nums4));

function partition(nums = [], left = 0, right = nums.length - 1) {
  let pivot = nums[Math.floor((left + right) / 2)];
  i = left;
  j = right;

  while (i <= j) {
    while (nums[i] < pivot) {
      i++;
    }

    while (nums[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
  return i;
}

// [7, 3, 2, 6, 8, 10, 14, 11];
//.             i
//                      j

// pivot: 10

function quickSort(nums, left = 0, right = nums.length - 1) {
  let index;
  if (nums.length > 1) {
    index = partition(nums, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(nums, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(nums, index, right);
    }
  }
  return nums;
}
// first call to quick sort
// var result = quickSort(items, 0, items.length - 1);

// const nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
// const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
// const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

console.log(quickSort(nums1));
console.log(quickSort(nums2));
console.log(quickSort(nums3));

// solutions
function quickSort(nums) {
  var smallArray = [];
  var largeArray = [];
  //defining an empty array for smaller numbers than pivot and larger numbers than pivot
  if (nums.length <= 1) return nums;
  //edge case, is the length less than or equal to one? if this is true, return that array. :)

  for (var i = 1; i < nums.length; i++) {
    //forloop to go through all the numbers in the array
    if (nums[i] < nums[0]) smallArray.push(nums[i]);
    //if nums @ i is less than the pivot number (nums[0]) add to smallArray.
    if (nums[i] >= nums[0]) largeArray.push(nums[i]);
    //if nums @ i is greater than the pivot number (nums[0]) add to largeArray.
  }
  return quickSort(smallArray).concat(nums[0], quickSort(largeArray));
  //now we recursively call quickSort to go through the small array's contents. this will then use .concat to add nums[0] after that is processed. Then we concatenate the function to run quickSort with the large Array. :'D
}
// 4th quickSort : [ 6, 7] : return [2].

// third quickSort : [3, 6, 2, 7]
// smallArray= [2]
// largeArray = [ 6, 7]
// pivot: nums[0] : 3
// line 111   [2] concat with [3] quickSort(largeArray)

// second quickSort(smallArray) : [8, 3 ,6 , 2, 7]
// smallArray = [3, 6, 2, 7]
// pivot: 8
// line 111

// first quickSort -- still running line 111
// pivot: 0 , nums[0] : 11
// i : 3, nums[i]: 3
// smallArray =[8, 3 ,6 , 2, 7]
// largeArray =[ 14]
// nums=[11, 8, 14, 3, 6, 2, 7];

console.log(quickSort(nums1));
console.log(quickSort(nums2));
console.log(quickSort(nums3));
console.log(quickSort(nums4));
