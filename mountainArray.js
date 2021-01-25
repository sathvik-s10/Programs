var check = 0;
var yesOrNo = false;
var array = [2, 3, 4, 1];
while(check<array.length-1) {
if(array[check]<array[check+1]) {
    check++;
    if(array[check]>array[check+1]) {
    yesOrNo=true;
    break;
    }
}
if(array[check]>array[check+1]) {
check++;
}
}
console.log(yesOrNo);