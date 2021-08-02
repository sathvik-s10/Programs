//finds all combos of 4 nums in arr that = target
var foursum = function(nums, t) {
    nums.sort();
    var output=[];
    for(var idx=0; idx<nums.length-3; idx++) {
        for(let count = idx+1; count<nums.length-2; count++) {
            var l=count+1; r=nums.length-1;
            while(r>l) {
                if(nums[idx]+nums[count]+nums[l]+nums[r]<t) {
                    l++;
                } if(nums[idx]+nums[count]+nums[l]+nums[r]>t) {
                    r--;
                } else{output.push([nums[idx], nums[count], nums[l], nums[r]]);
                r--; l++;
                }
            }
        }
    } return output;
}
console.log(foursum([1, 2, 3, 4, 5], 10));