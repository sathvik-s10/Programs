// finds length of longest substring without duplicates
var func = function(arr, highscore, score, idx) {
    var map = new Map();
    while( idx<arr.length && highscore<arr.length-1) {
        if(highscore<score) {
            highscore=score;
        }
        for(var count=idx; count<arr.length; count++) {
            map.set(arr[count], map.get(arr[count])+1 || 1);
            if(map.get(arr[count])>1) {
                break;
            } score++;
        } idx++;
    } return highscore;
}
console.log(func(['a', 'b', 'b', 'b'], 0, 0, 0));