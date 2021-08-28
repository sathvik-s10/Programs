// you and your friend have stones and each person's turn, where you start, 
// they can take 1, 2 or 3 stones, determine if you can get the last rock
var nimGame = function(n) {
    return n%4 != 0
}
// this is because 4 is the death number, meaning that whoevers turn it is, if the rocks are 4
// they lose. for every number that is a multiple of 4, no matter how many rocks i take,
// the other person can lower it to the previous multiple of 4 until rocks become 4 and i lose
// lets say rocks are not a multiple of 4, i can lower rocks to previous multiples of 4
//no matter how many rocks my opponent takes and he loses