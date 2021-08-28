// input : aaabbccce
// output: abce

var input = ['a','a','b'];
var output = [];
var b = 0;
var c = 0;
output[b]=input[b]
b++;
while(b<input.length) {
    if(output[c]===input[b]) {
        b++;    
    }else {
        c++;
        output[c]=input[b];
    }
}

console.log(output);