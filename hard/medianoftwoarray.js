// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// const findMedianSortedArrays = function(nums1, nums2) {
// // take the two array and concat then sort them
// // find the length if even divide two middle number
// //if odd median = middle number

// if(!nums1.length && !nums2.length) return 'empty inputs'
// let median = 0;
// let newArr = nums1.concat(nums2).sort((a,b) => a -b)
// if(newArr.length % 2 === 1)median = newArr[Math.floor(newArr.length/2)]
//  else if(newArr.length % 2 === 0 ) {
//     let leftNum = newArr[Math.floor((newArr.length/2) -1)];
//      let rightNum = newArr[Math.ceil(newArr.length/2 )];
//      median = (leftNum + rightNum) /2;
// }
// return median;

// //The overall run time complexity should be O(log (m+n)).
// };

// console.log(findMedianSortedArrays([],[]))// 'empty inputs

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (a1, a2) {
  // a function for finding median of array
  let median = function (a, start, end) {
    let n = end - start + 1;

    // checking if length is even or odd
    if (n % 2 == 0) {
      return (a[start + n / 2] + a[start + (n / 2 - 1)]) / 2;
    } else {
      return a[start + n / 2];
    }
  };

  // a recursive function that returns the median of the array
  let findMedian = function (a1, a2, start_a1, start_a2, end_a1, end_a2) {
    // base case
    if (end_a1 - start_a1 == 1) {
      return (
        (Math.max(a1[start_a1], a2[start_a2]) +
          Math.min(a1[end_a1], a2[end_a2])) /
        2
      );
    }
    // median of the first array
    let m1 = median(a1, start_a1, end_a1);
    // median of the second array
    let m2 = median(a2, start_a2, end_a2);

    if (m1 == m2) {
      return m1;
    }

    // if the median of the first array is smaller then recursively call the function
    else if (m1 < m2) {
      return findMedian(
        a1,
        a2,
        (end_a1 + start_a1 + 1) / 2,
        start_a2,
        end_a1,
        (end_a2 + start_a2 + 1) / 2
      );
    } else {
      return findMedian(
        a1,
        a2,
        start_a1,
        (end_a2 + start_a2 + 1) / 2,
        (end_a1 + start_a1 + 1) / 2,
        end_a2
      );
    }
  };

  return findMedian(a1, a2, 0, 0, a1.length - 1, a2.length - 1);
};

// O(log n) -  solution
// O(1) - space remains constant , no extra used
