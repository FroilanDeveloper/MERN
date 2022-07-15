/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums) {
  var nums = nums;
    for (let i = 0; i < nums.length-1; i++){
      for(let j=0; j < nums.length-1; j++){
        if(nums[j] > nums[j+1]){
          nums = swap(nums, j, j+1)
        }
      }
  }  
  return nums;
}

function swap(arr, n, m) {
  let temp = arr[n];
  arr[n] = arr[m];
  arr[m] = temp;
  return arr;
}

console.log(bubbleSort(numsOrdered));
console.log(bubbleSort(numsRandomOrder));

function bubbleSort2(nums) { 
  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
        if (nums[y] > nums[y + 1]) {
            let temp = nums[y];
            nums[y] = nums[y + 1];
            nums[y + 1] = temp;
        }
    }
}

return nums
}

// group 5
function bubbleSort5(nums) {
var temp = 0;
while(!sortedArr(nums)){
for(let i = 0; i < nums.length-1; i++){
  if(nums[i] >= nums[i+1]){
    temp = nums[i+1];
    nums[i+1] = nums[i];
    nums[i] = temp;
  }
}
}
return nums;
}

function sortedArr(numArr){
for(var i = 0; i < numArr.length-1; i++){
if(numArr[i]> numArr[i+1]) return false
}
return true;
}


// Group 6
function bubbleSort6(nums, n = nums.length) {
  if (n == 1) {
    return nums;
  }
  for (var i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }
  return bubbleSort6(nums, n - 1);
}


