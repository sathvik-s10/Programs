//finds every combination of 3 numbers in main array that equal target
var main = function(nums, target) {
    const map = new Map();
    var output = [];
    for(var idx = 0; idx<nums.length; idx++) {
        for(var j=idx+1; j<nums.length; j++) {
            if(map.get(target-nums[idx]-nums[j])) {
                output.push([nums[idx], nums[j], map.get(target-nums[idx]-nums[j])]);
            }
            map.set(nums[j], nums[j]);
        }
    } return output;
}
console.log(main([1, -1, 0, 100, 976], 1076));