var input = [0, 1, 0, 1];
var output = [];
var idx = 0;
var zCount = 0;
var oneCount = 0;
var e = 0;
while(idx < input.length) {
    if(input[idx] === 0) {
        zCount++;
        } else{
            oneCount++;
        }
    idx++;
}

while(e < input.length) {
    if(zCount > 0) {
        output[e] = 0;
        zCount--;
    }else{
        if(oneCount>0) {
        output[e]=1;
        oneCount--;
     }
    }

    e++;
}
console.log(output);