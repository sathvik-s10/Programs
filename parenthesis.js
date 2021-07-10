var main = ['(', '(', ')', ')', ')'];
var start = 0;
var end = main.length-1;
var bool = true;
while(start <= end) {
    if(main[start] ==='(' && main[start+1]===')') {
        start+=2;
    } else {
    if(main[start]==='(' && main[end]===')') {
        start++;
        end--;
    }
        else { bool=false;
            break; 
            
        }
        
        }
    }
console.log(bool);