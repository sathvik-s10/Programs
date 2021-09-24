// given 2 strings and budget, changing ith character of s to ith character of t
//costs the absolute difference between the 2. subtract that from budget
//each time and determine maximum substring length obtainable
//didn't get accepted by leetcode since one huge testcase failed because of runtime
var equalSubstring = function(s, t, maxCost) {
    var maxScore = 0
    for(var i = 0; i < s.length - maxScore; i++) {
        var score = 0
        var temp = maxCost
        for(var j = i; j < s.length && temp - Math.abs(s[j].charCodeAt(0) - t[j].charCodeAt(0)) >= 0; j++) {
            score++
            temp -= Math.abs(s[j].charCodeAt(0) - t[j].charCodeAt(0))
        }

        maxScore = Math.max(maxScore, score)
    }
      return maxScore
  };
//copied solution
var equalSubstring = function(s, t, budget) {
    var i = 0
    var n = s.length
    for(var j = 0; j < n; j++) {
    budget -= Math.abs(s.charCodeAt(j) - t.charCodeAt(j))
        if(budget < 0) {
            budget += Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
            i++
        }
    }
    return j - i
};
console.log(equalSubstring("abcd", "acde", 3))