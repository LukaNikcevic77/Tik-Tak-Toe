const board = document.getElementById('board');
const fields = document.getElementsByClassName('field');
const roundFields = document.getElementsByClassName('rndC');
const player1Scores = document.getElementsByClassName('p1Score');
const player2Scores = document.getElementsByClassName('p2Score');
const fieldsArray = [...fields];
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
                disablePlaying();
                gameController.updateScore(sign);
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

    
        const player1 = playerMaker("Marco", "x");
    
        const player2 = playerMaker("King", "y");
    
   
    
const gameController = {

    activeSign: "x",
    turnCounter: 1,
    roundCounter: 0,
    
    
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
        
        gameController.switchPlayerTurn(gameController.turnCounter);
    },
    updateScore: (activeSign) => {

        roundFields[gameController.roundCounter] = "X";
        
        console.log(player1.playerSign);
        console.log(player1.playerSign == activeSign);
        if(player1.playerSign == activeSign){
            player1Scores[gameController.roundCounter].textContent = "+";
            player2Scores[gameController.roundCounter].textContent = "-";
        }
        else if(player2.playerSign == activeSign){
            player1Scores[gameController.roundCounter].textContent = "-";
            player2Scores[gameController.roundCounter].textContent = "+";
        }
        else {

        }
        gameController.roundCounter += 1;

    },

}



function allowPlaying(){

    fieldsArray.forEach((field) => {
    field.addEventListener('click', fieldProp, false);


    })
}
var fieldProp = function(e) {
    const x = e.target.getAttribute('data-x');
    const y = e.target.getAttribute('data-y');


    this.textContent = gameController.activeSign;
    gameController.appendSign(x, y, gameController.activeSign);
    console.log(gameBoard.field);
    this.removeEventListener('click', fieldProp, false);
}
function disablePlaying(){
    fieldsArray.forEach((field) => {
        field.removeEventListener('click', fieldProp, false);
    
    
        })

}

/* for( let i = 0; i < 9; i++){

    fields[i].addEventListener('click', (e) => {
        const x = e.target.getAttribute('data-x');
        const y = e.target.getAttribute('data-y');


        fields[i].textContent = gameController.activeSign;
        gameController.appendSign(x, y, gameController.activeSign);
        console.log(gameBoard.field);
        e.target.removeEventListener('click', (e));


    })
} */
allowPlaying();
console.log(gameBoard.field);




