// finds product of every number other than nums[idx] and pushes it
var func = function(nums) {
    var map = new Map();
    var output = [];
    for(var idx = 0; idx<nums.length; idx++) {
        var storage = 1;
        for(var count = idx+1; count<nums.length; count++) {
            storage*=nums[count];
        } 
        output.push(storage*map.get(nums[idx-1]) || storage);
        map.set(nums[idx], map.get(nums[idx-1])* nums[idx] || nums[idx]);
    } return output;
}
console.log(func([1, 2, 3, 4]));