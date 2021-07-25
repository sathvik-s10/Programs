var main = ['(', ')', ')'];
var start = 0;
var end = 0+main.length-1;
var bool = false;
if(main.length%2) {
    while(start < end) {
        if(main[start] ==='(' && main[start+1]===')') {
            start+=2;
        } else {
        if(main[start] ==='(' && main[end] ===')') {
            start++;
            end--;
        }
            else {
                break; 
                
            }
            
            }
        } if (start > end && end > 0) {
            bool = true;
        }
}
console.log(bool);