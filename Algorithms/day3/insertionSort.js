/* 
  - Visualization with playing cards (scroll down):
      https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization:
      https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
  - Stable sort, efficient for small data sets or mostly sorted data sets.
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  - this sort splits the array into two portions (conceptually, not literally).
  - the left portion will become sorted, the right portion
      (that hasn't been iterated over yet) is unsorted.
  // can shift OR swap target element until it reaches desired position
  // shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position available to shift items)
  4. if item to the left of current is greater than current item, shift the
      left item to the right.
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat
  // swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move  to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */

function insertionSort(inputnums) {
  // make a copy of array
  const nums = [...inputnums];
  // set length equal to length of nums
  let length = nums.length;
  // start at index 1
  for (let i = 1; i < length; i++) {
    // create a current variable to hold current value of index i
    let current = nums[i];
    // set j equal to i-1 since i starts at 1st index
    let j = i - 1;
    // while current value is greater than the j index of nums (j is 1 less than i, so current and nums[j] are the index right next to each other.)
    while (j >= 0 && current < nums[j]) {
      // set nums[j+1] = current j index to swap values
      nums[j + 1] = nums[j];
      // decrement
      j--;
    }
    //finish swap
    nums[j + 1] = current;
  }
  // return sorted array
  return nums;
}

// function insertionSort(nums) {
  //   temp_arr = [nums[0]];
  //   for(let i = 1; i < nums.length; i++){
  //     if(nums[i] >= nums[i-1]){
  //       temp_arr.push(nums[i])
  //     }
  //     else{
  //       for(let j = 1; j < nums.length; j++){
  //         temp = 0;
  //         if(nums[j] < nums[j-1]){
  //           temp = nums[j-1];
  //           temp_arr[j-1] = nums[j];
  //           temp_arr[j] = temp;
  //         }
  //         else{
  //           continue;
  //         }
  //       }
  //     }
  //   }
  //   return temp_arr;
  // }

console.log(insertionSort(numsRandomOrder));
