//converts any string with integers to it's number ex: input: "123" output: 123
var myAtoi = function(s) {
    var output = s[s.length-1] - '0';
for(var idx=s.length-2; idx>-1; idx--) {
    //continues if s[idx] === '.' || '-'
    if(s[idx] === '.' || s[idx] === '-') {
        var decimal = decimal || idx
        continue
    }
    // multiplies s[idx] by tens the more into the string you go
    var tens = tens*10 || 10
    output = output + (s[idx] - '0') * tens
}
if(s[0] === '-') output = -output

if(decimal != undefined) 
    output /= Math.pow(10, s.length-1-decimal)

return output;
}

console.log(myAtoi('-.42'));