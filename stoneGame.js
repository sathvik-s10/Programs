/* Alice and Bob play a game with piles of stones. There are an even number of piles arranged 
in a row, and each pile has a positive integer number of stones piles[i].
The objective of the game is to end with the most stones. 
The total number of stones across all the piles is odd, so there are no ties.
Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile
of stones either from the beginning or from the end of the row. 
This continues until there are no more piles left, at which point the person with the 
most stones wins.
 Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins.
*/
var stoneGame = function(piles) {
   return true
};
/* whichever type of index alice picks, bob is forced to pick the other type, ex : alice picks
an even index and bob is forced to pick an odd index.
because there can be no tie, the total stones in all the even indexes
is greater than or less than the total stones in all odd indexes.
alice can just pick the type of index that has more stones and bob is forced to pick
the other type so alice wins no matter what.
*/