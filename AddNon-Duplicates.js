//adds all non duplicates
var func = function(nums, count) {
    var map = new Map();
    for(let idx of nums) {
        map.set(idx, map.get(idx)+1 || 1);
        if(map.get(idx)===1) {
            count+=idx;
        } 
    } return count;
}
console.log(func([1, 1, 2, 2, 3], 0));