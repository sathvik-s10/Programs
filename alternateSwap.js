var array = [1, 2, 3, 4, 5, 6];
var swap;
var count = 0;
while(count<array.length-2) {
    swap=array[count];
    array[count]=array[count+2];
    array[count+2]=swap;
    count++;
}
console.log(array);