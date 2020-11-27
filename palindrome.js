var a = ["m","d", "d", "m"];
var b = 0;
var c = a.length-1;
while(b < c) {
    if(a[b]===a[c]) {
        b++;
        c--;
    }if(a[b]!==a[c]) {
        console.log("nah");
        break;
    }    
}
if(b>c) {
    console.log("yep");
}