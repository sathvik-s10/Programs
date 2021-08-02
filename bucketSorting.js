var a = [1, 3, 2, 3, 7, 4, 2, 5];
var sorter = [];
var idx=0;
var b = 0;
while(idx<a.length) {
    if(a[idx]>b) {
        b=a[idx];
    } idx++;
}
 while(b>-1) {
    sorter.push(0);
    b--;
 } 
idx=0; b=0;
while(idx<a.length) {
    sorter[a[idx]]+=1;
    idx++;
}
idx=0; b=0;
while(idx<sorter.length) {
    while(sorter[idx]!=0) {
        a[b]=idx;
        sorter[idx]--;
        b++;
    } idx++;
} console.log(a);