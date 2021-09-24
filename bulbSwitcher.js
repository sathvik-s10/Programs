// There are n bulbs that are initially off. You first turn on all the bulbs, 
//then you turn off every second bulb.
// On the third round, you toggle every third bulb (turning on if it's off or turning off if 
//it's on). 
//For the ith round, you toggle every i bulb. For the last round, you only toggle the last bulb.
// Return the number of bulbs that are on after n rounds. (copied solution)
var bulbSwitcher = function(n) {
    return Math.floor(Math.sqrt(n))
}
// let's assume i is the number of divisors n has. n will be switched i times, meaning n
//has to have an odd number of divisors to be on at the end. a number can only have an odd
//number of divisors if it is a square. Ex: n = 5. rounding sqrt of 5 is 2.
//any number less than or equal to 2, times itself will give a square which is another lightbulb
// on. 2 * 2 = 4 and 1 * 1 = 1 so the answer is 2.