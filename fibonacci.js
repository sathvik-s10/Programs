var fibonacci = function(num) {
    if (num === 1 || num===0) {
        return 1;
    }
    var fibo=fibonacci(num-1)+fibonacci(num-2);
    return fibo;
}
console.log(fibonacci(4));