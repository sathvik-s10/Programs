// finds if you can reach any index with 0 if you can move arr[idx]
//steps backward or forward
//for some reason doesnt work in leetcode but works here
var map = new Map();
var canReach = function(arr, start) {
    if((start < 0 && start > arr.length-1) || map.get(start)) {
         return false;
    }

    if(arr[start] === 0) return true;

    map.set(start, 1);

    var left =  canReach(arr, start-arr[start]);
    //console.log("left: " + left + " start : " + start);
    var right = canReach(arr, start+arr[start]);
    //console.log("right: " + right + " start : " + start);

    return left || right;
};

console.log(canReach([4,2,3,0,3,1,2], 0));