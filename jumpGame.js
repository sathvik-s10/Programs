//(copied solution) given nums, where at ith idx, you can jump up to ith idx+i, return if
//you can reach the end
var func = function(nums) {
    var reach=0;
    for(let i = 0; i<=reach && reach<nums.length-1; i++) {
        reach=math.max(reach, nums[i]+i);
    } return reach>nums.length-2;
}
console.log(func([4, 1, 0, 0]));

//my unfinished solution

var func = function(nums, highnum, count) {
    while(count<nums.length-1) {
        if(nums[count]<1) {
            return false;
        }
        var idx=nums[count];
        while(idx>0) {
            if(nums[count]+count>=nums.length-1) {
                return true;
            }
            count++;
            if(nums[count]>highnum) {
                highnum=count;
            } 
            idx--;
        }
        count=highnum;
    } 
    return true;
}
console.log(func([4, 1, 0, 0], 1, 0));