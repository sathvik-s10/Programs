var move1atend = function(input) {
    var end = input.length-1;
    for(var idx=0; idx<end; idx++) {
        if(input[idx]===1) {
            var swap=input[idx];
            input[idx]===input[end];
            input[end]=swap;
        }
    } 
    return input;
}