var anagram=function(input, input2) {
    var map = new Map();
    var map2= new Map();
    for(let n of input) {
        map.set(n, map.get(n)+1 || 1);
    }
    for(let n of input2) {
        map2.set(n, map2.get(n)+1 || 1);
    }
    for(let n of input) {
        if(map.get(n)!=map2.get(n)) {
            return false;
        }
    } return true;
}
console.log(anagram(['c', 'a', 't'], ['t', 'a', 'c']));