var generate = function(num) {
    var output=[[]];
    var push = function(a) {
        var temp = num
        while(temp>0) {
            output[0].push(a);
            temp--
        }
    }
    push("(")
    push(")")
//sets mid left parenthesis and mid right parenthesis
var left=Math.round(output[0].length/2)
var right=Math.round(output[0].length)+1

    for(var idx = 1; idx<output[0].length-1; idx++) {

        var cache=output[0][idx]
        // just swaps mid left or mid right parenthesis with any parenthesis on the other side
      // ex: ((())) this would swap output[0][anything on the left] with the right mid parentheis
        //and same for the left mid parenthesis
        if(output[0][idx]==="(") {
            output.push(output[0])
            output[0][idx]=output[0][left]
            output[0][left]=cache

        } 
        else{
            output.push(output[0])
            output[0][idx]=output[0][right]
            output[0][right]=cache
        }
    }
}