var nums = [1, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0];
var count=0;
var zcount=0;
var end=0;
while(count<nums.length) {
    if(nums[count]===0) {
        end=count;
        while(nums[count]===0) {
            zcount++;
            count++;
        } 
        while(count) {
            count--;
            end++;
            
            
        }
}
}