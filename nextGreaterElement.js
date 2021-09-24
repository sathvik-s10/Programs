/*The next greater element of some element x in an array is the first greater element 
that is to the right of x in the same array. You are given two distinct 0-indexed 
// integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and 
// determine the next greater element of nums2[j] in nums2. 
// If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next 
// greater element as described above. */
var nextGreaterElement = function(nums1, nums2) {
    var output = []
    var map = new Map()
    var n = nums2.length
 for(var i = 0; i < n; i++) {
     if(!map[nums2[i]]) map.set(nums2[i], i)
 }
    for(var i = 0; i < nums1.length; i++) {
        for(var j = map.get(nums1[i]) + 1; j < n && nums2[j] <= nums1[i]; j++) {}
            if(j === n) output.push(-1)
            else output.push(nums2[j])
    }
    return output
};
nextGreaterElement([4,1,2], [1,3,4,2])
// copied faster solution than accepted one
var nextGreaterElement = function(nums1, nums2) {
    const map1 = {};
    const stack = [];

    nums2.forEach(n => {
      while (stack.length > 0  && stack[stack.length - 1] < n) {
        map1[stack.pop()] = n;
      }
      stack.push(n);
    });

    var res = nums1.map(n => map1[n] || -1);
    return res;
  };

nextGreaterElement([2, 1, 5, 3, 4], [5, 2, 1, 4, 3])