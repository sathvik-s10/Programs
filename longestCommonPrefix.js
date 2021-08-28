// my second fastest solution
 var longestCommonPrefix = function(strs) {
    var output = "";
    for(var idx=0; idx<strs[0].length; idx++) {
        for(var count=1; count<strs.length; count++) {
            if(strs[count][idx]!==strs[0][idx]) {
                break;
            }
        }   output = output+(strs[count][idx] || strs[count][idx]);
    } return output;
};
console.log(longestCommonPrefix(["fis", "fis", "fi"]));
// didnt look at code but got a hint from solution explanation
 var longestCommonPrefix = function(strs) {
    strs.sort();
    for(let idx = 0; idx<strs[0].length; idx++) {
        if(strs[0][idx]!=strs[strs.length-1][idx]) {
            return "";
        } output=output+strs[0][idx] || strs[0][idx];
    } return output;
 }