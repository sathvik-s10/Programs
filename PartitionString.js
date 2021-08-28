//You are given a string s. We want to partition the string into as many parts as possible
//so that each letter appears in at most one part.
//Return a list of integers representing the size of these parts.
var func = function(arr) {
    var map = new Map();
    var output=[];
    for(var idx=0; idx<arr[0].length; idx++) {
        map.set(arr[0][idx], idx);
    }
    for(var n=0; n<arr[0].length; n++) {
        var maxpos=map.get(arr[0][n]);
        while(n<maxpos) {
            n++;
            if(map.get(arr[0][n])>maxpos) {
                maxpos=map.get(arr[0][n]);
            }
        }output.push(maxpos);
    } return output;
} 
console.log(func(["abcdc"]));