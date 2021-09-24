/* Given two integers tomatoSlices and cheeseSlices. The ingredients of different 
burgers are as follows:

Jumbo Burger: 4 tomato slices and 1 cheese slice.
Small Burger: 2 Tomato slices and 1 cheese slice.

Return [total_jumbo, total_small] so that the number of remaining tomatoSlices 
equal to 0 and the number of remaining cheeseSlices equal to 0. If it is not possible
to make the remaining tomatoSlices and cheeseSlices equal to 0 return [].
my solution */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    var operation = (4 * cheeseSlices - tomatoSlices) / 2

if(tomatoSlices % 2 != 0 || Math.ceil(tomatoSlices / 4) > cheeseSlices ||
  cheeseSlices - operation < 0) 
    return []

return [cheeseSlices - operation, operation]
};
// the god(lee's solution)
var numOfBurgers = function(t, c) {
    return t % 2 == 0 && c * 2 <= t && t <= c * 4 ? [t / 2 - c, c * 4 - t] : [];
}
// this is chickens and rabits. check if t and c are valid by checking if t is greater
//than min t slices and less than max t slices. so check if all were mini brugers
// if t is less than that or if all were jumbo t is greater than that.
//jumbo + small = c. this is measured in cheese which is 1 for both.
//because t is 2 and 4 for small and jumbo you do * 2 and * 4
// jumbo * 4 + small * 2 = t. jumbo * 2 + small = t / 2. so jumbo is difference
// between t / 2 and c. 
// 2 * j + s * 2 = c * 2
//2 * j + s = t / 2. small is difference between t / 2 and c * 2
