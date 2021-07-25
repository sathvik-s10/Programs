//what is the minumum number of swaps in the initial array to get the expected output if you can do 2 swaps
//at a time?
var initialArray=[1, 2, 6,  4, 3, 5];
var expOutput = [4, 2, 5, 3, 1, 6];
var idx=0;
var a=0;
var b=initialArray.length;
while(idx<initialArray.length) {
    if(initialArray[idx]===expOutput[idx]) {
        a++;
    } idx++;
    
}
b-=a;
    if(b%2>0) {
        b--;
    }console.log(b/2);