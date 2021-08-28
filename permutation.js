// finds next number from only swaping current digits(next permutation in sequence)
var permutation = function(num) {
    var output=[];
    var idx = num.length-1;

    //Break when a smaller number is found
    for(;idx > 0; idx--) {
        if(num[idx-1] < num[idx]) {
            break;
        }
    }

    //Swap the last number with the smaller number
    if (idx > 0) {
        swap(num, idx-1, num.length-1);
    }

    reverse(num, idx);
    return num;
}
// reverses anything after smaller number
var swap = function(num, source, target) {
    var temp = num[source];
    num[source] = num[target];
    num[target] = temp;
}

var reverse = function(num, left){
    var right = num.length-1;

    while(left < right) {
        swap(num, left, right);
        left++;
        right--;
    } 
}

console.log(permutation([1, 3, 2]));