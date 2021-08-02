var frequencySort = function(nums) {
    const m1 = new Map();
    for (let n of nums) {
        m1.set(n, (m1.get(n) + 1) || 1);
    }
    return nums.sort((a, b) => m1.get(a) - m1.get(b) || b - a)
};
console.log(frequencySort(1, 2, 1, 1));