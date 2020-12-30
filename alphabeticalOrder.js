var input = ["a", "b", "z", "a"];
var first = 0;
var other = 1;
var a;
while(first<input.length) {
   while(other<input.length) {
      if(input[first]>input[other]) {
         a=input[first];
         input[first]=input[other];
         input[other]=a;
      }

      other++;
   }

   first++;
   other=first+1;
}
console.log(input)