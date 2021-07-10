var one = ['t', 'a', 'c', 'o', 'c', 'a', 't'];
var two = ['t', 'c', 'a', 'o', 'c', 't', 'b'];
var three = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var four = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var count = 0;
var substitute = 0;
if (one.length=two.length) {
    while(count<one.length) {
        substitute=one[count]
        three[substitute-65]+=1;
        count++;
    }
    count=0;
    while(count<two.length) {
        substitute=two[count]
        four[substitute-65]+=1;
        count++;}
} count=0;

while(count<three.length) {
if(three[count]=four[count]) {
count++;
} else{break;}
}
substitute=false;

if(count=three.length-1) {
    substitute=true;
} 

console.log(substitute);