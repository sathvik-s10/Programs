//assuming it is the cpu's turn, determine if it can win a tic-tac-toe game no matter what
// the board is. let's assume the cpu is O
var canCpuWin = function(input) {
    // here the problem is tricking you and you only need to check if someone can already win
    //because tic-tac-toe is very easy to draw
    //check the diagonals
    if(input[1][1] != "X" && ((input[0][0] && input[2][2]) || input[0][2] && input[2][0]) === "O")
        return true

    for(var row = 0; row < input.length; row++) {
        //checks rows
        for(var col = 0; col < 3; col++) {
             if(input[row][col] === "X") {
                count++
             }
            else if(input[row][col] === "O") {
                count--
            }
        }

        if(count < -1 || count  === 3)
            return count < -1

        //checks columns
        count = 0

        for(var col = 0; col < 3; col++) {
            if(input[col][row] === "X") {
                count++
            }
            else if(input[col][row] === "O") {
                count--
            }
        }

        if(count < -1 || count === 3) return count < -1
    }
    return false
}