// finds minimum steps to reach end if you can jump 1 step back or forward 
//and to any same number
var map={}
var mapget = function(i) {
    var i=map.get(a[idx])+1 || idx+1
    while(a[i]!=a[idx]) {
        if(!map.get(a[i])) map.set(a[i], i)
        i++
    } 

    return i
}
var minJumps = function(a, idx) {
    if(idx===a.length-1) return steps
    var steps = steps+1 || 1
    return Math.min(minJumps(a, mapget(map.get(arr[idx-1]) || idx-1)), minJumps(), minJumps(idx+1))
}
console.log(minJumps([-76,3,16,-32,64,2,-19,-8,-5,-93,80,-5,-76,-78,64,2,16]))