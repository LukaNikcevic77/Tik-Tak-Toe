const board = document.getElementById('board');
const fields = document.getElementsByClassName('field');
console.log(board);
let gameBoard = {

    rowsAndColls: 3,
     hits:  0,
     field: [
             ["a", "a", "a"],
             ["a", "a", "a"],
             ["a", "a", "a"]
            ],
     
     checkForWin: function(sign, x, y)  {
        this.hits = 0;
        let cordinateX = x;
        let cordinateY = y;
            //Checks diagonals
            if(x == y) {
                //Checks if we are in the middle
                
                if(x == 1){
                    if(gameBoard.field[0][0] == sign && gameBoard.field[2][2] == sign){
                        gameBoard.hits = 2;
                    }
                    else if(gameBoard.field[0][2] == sign && gameBoard.field[2][0] == sign){
                        gameBoard.hits = 2;
                    }
                    
                }
                else if(x == 0){
                    if(gameBoard.field[1][1] == sign && gameBoard.field[2][2] == sign){
                        gameBoard.hits = 2;
                    }
                }
                else {
                    if(gameBoard.field[1][1] == sign && gameBoard.field[0][0] == sign){
                        gameBoard.hits = 2;
                        
                }

            }
                
            }
            
            else {
                if(x - y == 2){
                    if(gameBoard.field[1][1] == sign && gameBoard.field[0][2]){

                        gameBoard.hits = 2;
                    }
                    
                }
                else if(y - x == 2){
                    if(gameBoard.field[1][1] == sign && gameBoard.field[2][0] == sign){
                        
                        gameBoard.hits = 2;
                    }
                }
            }
            //Check left and right
             if(y - 2 > -1) {
                if(gameBoard.field[x][1] == sign && gameBoard.field[x][0] == sign){
                    gameBoard.hits = 2;
                }
             }
             else if ( y + 2 < 3){
                if(gameBoard.field[x][1] == sign && gameBoard.field[x][2] == sign){
                    gameBoard.hits = 2;
                }
             }
            // Checks top and bottom
            if(x - 2 > - 1) {
                if(gameBoard.field[1][y] == sign && gameBoard.field[0][y] == sign){
                    gameBoard.hits = 2;
                }
            }
            else if(x + 2 < 3) {
                if(gameBoard.field[1][y] == sign && gameBoard.field[2][y] == sign){
                    gameBoard.hits = 2;
                }
            }
            if(gameBoard.hits == 2){
                console.log("YEy we got diagonal win broski");
                board.style.backgroundColor = "green";

            }
            else {
                console.log("We got dick broski");
                
            }
        }
    }
        
        
          
            
    

    const playerMaker = (playerName, sign) => {
        name = playerName,
        wonRounds = 0,
        playerSign = sign;
        
        return {name, wonRounds, playerSign};

    }
const gameController = {

    activeSign: "x",
    turnCounter: 1,
    
    switchPlayerTurn: (turnCounter) => {
        if(turnCounter == 1) {
            gameController.activeSign = "y";
            gameController.turnCounter = 2;
        }
        else {
            gameController.activeSign = "x";
            gameController.turnCounter -= 1;
        }
    },
    appendSign: (x, y, activeSign) => {
        gameBoard.field[x][y] = activeSign;
        gameBoard.checkForWin(activeSign, x, y);
        console.log(gameBoard.checkForWin( activeSign, x, y,));
        gameController.switchPlayerTurn(gameController.turnCounter);
    }
}

const Marc = playerMaker("Marco", "x");
const King = playerMaker("King", "y");

for( let i = 0; i < 9; i++){

    fields[i].addEventListener('click', (e) => {
        const x = e.target.getAttribute('data-x');
        const y = e.target.getAttribute('data-y');


        fields[i].textContent = gameController.activeSign;
        gameController.appendSign(x, y, gameController.activeSign);
        console.log(gameBoard.field);
        e.target.removeEventListener('click', (e));


    })
}
console.log(gameBoard.field);
console.log(gameBoard.checkForWin("x", 1, 1));



