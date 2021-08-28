var score = 0;
var maxScore = 0;

var maxResult = function(nums, k, i, score) {

if (i > nums.length) {
    return score;
}

if(i === nums.length-1) {
    maxScore = Math.max(score, maxScore);
    return score
}

for(var step = 1; step <=k; step++) {
    var curScore = nums[i + step];
    var res = maxResult(nums, k, i  + step, score + curScore);
}

};

maxResult([1, -1, -2, -1000, 500], 2, 0, 0);
console.log(maxScore);