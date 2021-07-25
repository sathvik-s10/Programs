var input = [1, 2, 3, 4];
var target = 5;
var idx=1;
var count=0;
while(count<input.length) {
    while(idx<input.length) {
        if(input[count]+input[idx]===target) {
        console.log(input[count]);
        console.log(input[idx]);
        return;
    }
    idx++;
    } 
    count++; 
    idx=count;
}