var canReach1 = function(s, minJump, maxJump) {
    var maxidx=maxJump
    
    if(s[s.length-1]==="1")
        return false
    
    for(var idx = minJump; idx <= maxidx && maxidx < s.length-1; idx++) {
        if(s[idx]==="0") {
         maxidx = maxJump+idx;
         idx+=minJump-1;
        }
    }
     return maxidx >= s.length-1 && idx+minJump
};

var canReach = function(s, minJump, maxJump) {

    var idx = minJump;
    var maxidx = maxJump;
    var jumpIdx=idx;

    while (jumpIdx < s.length-1 && jumpIdx <= maxidx) {

        var maxidx=maxJump+idx;

        if (s[jumpIdx] === "0") {
            idx=jumpIdx+minJump;
            maxidx=jumpIdx + maxJump;
            jumpIdx = idx;
        }
        else {
            jumpIdx++;
        }
    }

    return idx  === s.length-1 && s[idx] == 0;
}

console.log(canReach("01", 1, 1));
