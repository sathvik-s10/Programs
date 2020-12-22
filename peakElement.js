var a = [1, 2, 3, 1];
var idx = 0;
while(idx<a.length-1) {
    if(a[idx]>a[idx+1]&&a[idx-1]) {
        console.log(idx);
        break;
    }
    idx++;
}
if(idx===a.length-1 && a[idx] < a[idx-1] && a[idx]< a[idx+1]) {
    console.log(no);
}