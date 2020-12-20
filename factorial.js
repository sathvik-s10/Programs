var fac = 0;
var two = fac-1;
var answer = 1;
if(fac>1) {
    while(two>1) {
        fac=fac*two;
        two--;
    }
    answer=fac;
}
console.log(answer);