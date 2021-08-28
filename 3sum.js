//finds every combination of 3 numbers in main array that equal target
var main = function(nums, target) {
    nums.sort()
    const hash = new Set();
    var output = [];
    for(var idx = 0; idx < nums.length; idx++) {
        var l = idx + 1
        var r = nums.length - 1
 while(l < r) {
       if(nums[l] + nums[r] + nums[idx] < target) l++
     if(nums[l] + nums[r] + nums[idx] > target) r--
     if(nums[l] + nums[r] + nums[idx] === target && !(nums[l], nums[r], nums[idx]) in hash) {
        output.push([nums[l], nums[r], nums[idx]])
        hash.add(nums[r], nums[l], nums[idx])
         l++
         r--
     }
       }
    } 
    
    return output;
}