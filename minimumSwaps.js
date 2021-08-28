// what is the minumum number of swaps in the initial array to get the expected output
// if you can do 2 swaps at a time?
var minSwaps = function(nums, expNums) {

    var swaps = 0

    for(var i = 0; i<nums.length; i++) {
        if(nums[i] != expNums[i]) {
                swaps++
        }
    }

    return Math.round(swaps/2)
}

console.log(minSwaps([5, 4, 2, 3, 1], [5, 2, 3, 4, 1]))