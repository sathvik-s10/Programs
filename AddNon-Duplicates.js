var first = [];
var second = [];
var count = 0;
var substitute = first [count];

while(count<first.length) {
    if(first[count]>substitute) {
        substitute=first[count];
    } count++;
}
count=0;
while(count<=substitute) {
    second.push(0);
    count++;
}
count=0;
while(count<first.length) {
    substitute=first[count];
    second[substitute]+=1;
    count++;
}

count=0;
substitute=0;
while(count<second.length) {
    if(second[count]==1) {
        substitute+=count;
    }
    count++;
}
console.log(substitute);