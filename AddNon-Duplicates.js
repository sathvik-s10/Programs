var func = function(nums, count) {
    var map = new Map();
    for(let idx of nums) {
        if(map.get(idx)===2) {
            count-=idx;
            map.set(idx, 1);
        } else{count+=idx;
        map.set(idx, idx);
        }
    } return count;
}
console.log(func([1, 1, 2, 2, 3], 0));