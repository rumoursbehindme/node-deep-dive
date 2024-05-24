// ###Median of Two Sorted Arrays
/*

```Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.```

    // The overall run time complexity should be O(log (m+n)).
    ```
Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```
*/
// var findMedianSortedArrays = function (nums1, nums2) {

//     const newArray = [...nums1, ...nums2];
//     const sortedArray = newArray.sort((a, b) => a - b);
//     const len = sortedArray.length;
//     const mid = Math.floor(len / 2);
//     if (len % 2 != 0) {
//         return sortedArray[mid];
//     }

//     return (sortedArray[mid-1] + sortedArray[mid]) / 2;

// };```
const findMedianSortedArrays = function (nums1, nums2) {
    const mergeArray = [];
    for (let j = 0, i = 0; i < nums1.length || j < nums2.length;) {
        if (nums1[i] != undefined && (nums2[j] === undefined || nums1[i] <= nums2[j])) {
            mergeArray.push(nums1[i++]);
        }
        else {
            mergeArray.push(nums2[j++]);
        }
    }
    const len = mergeArray.length
    const mid = Math.floor(len / 2);
    if (len % 2) {
        return mergeArray[mid];
    }
    return (mergeArray[mid] + mergeArray[mid - 1]) / 2;
};

const nums1 = [202, 456, 712];
const nums2 = [87, 91, 97];

console.log(findMedianSortedArrays(nums1, nums2))