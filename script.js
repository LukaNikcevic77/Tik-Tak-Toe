const board = document.getElementById('board');
const scoreSheetp1 = document.getElementById('scoreSheetNamingp1');
const scoreSheetp2 = document.getElementById('scoreSheetNamingp2');
const fields = document.getElementsByClassName('field');
const roundFields = document.getElementsByClassName('rndC');
const player1Scores = document.getElementsByClassName('p1Score');
const player2Scores = document.getElementsByClassName('p2Score');
const form = document.getElementById('forma');
const background = document.querySelector('.setnames');
const p1nameInput = form.elements['player1name'];
const p2nameInput = form.elements['player2name'];
const fieldsArray = [...fields];
const roundsFieldsArray = [...roundFields];
const player1ScoresArray = [...player1Scores];
const player2ScoresArray = [...player2Scores];
const namesSetButton = document.querySelector(".NamesSet");
const winnerDisplayWindow = document.querySelector('.playerWon');
const winnerText = document.querySelector('.whoWon');
const resetGameButton = document.querySelector('.resetGame');

namesSetButton.addEventListener('click', (e) => {
    if(p1nameInput.value.length > 2 && p2nameInput.value.length > 2 && p1nameInput.value.length < 7 && p2nameInput.value.length < 7) {
        setNames(p1nameInput, p2nameInput);
    }
})

resetGameButton.addEventListener('click', (e) => {
    window.location.reload();
})

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
                    if(gameBoard.field[1][1] == sign && gameBoard.field[0][2] == sign){
                        console.log("I chechked if x - y == 2");
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
             else if(y == 1) {
                console.log("y == 1 was logged");
                if(gameBoard.field[x][0] == sign && gameBoard.field[x][2] == sign){
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
            else if(x == 1) {
                console.log("y == 1 was logged");
                if(gameBoard.field[0][y] == sign && gameBoard.field[2][y] == sign){
                    gameBoard.hits = 2;
                }
             }
            if(gameBoard.hits == 2){
                console.log("YEy we got diagonal win broski");
                
                board.classList.add("greenBox");
                disablePlaying();
                
                gameController.updateScore(sign);
            }
            else if(gameBoard.hits != 2 && gameController.fullfields == 8){
                console.log("Its a draw bitch");
                board.classList.add("redBox");
                disablePlaying();
                
                gameController.updateScore("draw");
            }
            else {
                console.log("We got dick broski");
                
            }
        }
    }

function setNames(p1nameInput, p2nameInput) {
    player1.name =  p1nameInput.value;
    player2.name = p2nameInput.value;
    background.classList.add("hideIt");
    scoreSheetp1.textContent = p1nameInput.value;
    scoreSheetp2.textContent = p2nameInput.value;

   
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
    fullfields: 0,
    roundCounter: 0,
    
    
    switchPlayerTurn: (turnCounter) => {
        if(turnCounter == 1) {
            gameController.activeSign = "o";
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
        gameController.fullfields += 1;
        gameController.switchPlayerTurn(gameController.turnCounter);
    },
    updateScore: (activeSign) => {

        roundFields[gameController.roundCounter].textContent = "X";
        
        
        if(player1.playerSign == activeSign){
            player1.wonRounds += 1;
            player1Scores[gameController.roundCounter].textContent = "+";
            player2Scores[gameController.roundCounter].textContent = "-";
        }
        else if(player2.playerSign == activeSign){
            player2.wonRounds += 1;
            player1Scores[gameController.roundCounter].textContent = "-";
            player2Scores[gameController.roundCounter].textContent = "+";
        }
        
        else {
            player1.wonRounds += 0.5;
            player2.wonRounds += 0.5;
            player1Scores[gameController.roundCounter].textContent = "%";
            player2Scores[gameController.roundCounter].textContent = "%";

        }
        if(gameController.roundCounter != 18) {
            gameController.roundCounter += 1;
        }
        

        
        
        setTimeout(() => {
            if(gameController.roundCounter == 18){
            DisplayFinalResults(player1, player2);
            gameController.roundCounter = 0;
        }
        else {
            board.classList.remove('greenBox');
            board.classList.remove('redBox');
            restartBoard(); 
        }
            
        }, 1000)
        
    },

    

}

function DisplayFinalResults(player1, player2){

    if(player1.wonRounds > player2.wonRounds) {
        winnerDisplayWindow.classList.remove('hideIt');
        winnerText.textContent = player1.name + " won with " + player1.wonRounds + " to " + player2.wonRounds + " that " + player2.name + " had";
        player1ScoresArray.forEach((player1ScoreField) => {
            player1ScoreField.textContent = "a";
        })
        player2ScoresArray.forEach((player2ScoreField) => {
            player2ScoreField.textContent = "a";
        })
        roundsFieldsArray.forEach((roundsScoreField) => {
            roundsScoreField.textContent = "a";
        })
    }
    else if( player2.wonRounds > player1.wonRounds) {
        winnerDisplayWindow.classList.remove('hideIt');
        winnerText.textContent = player2.name + " won with " + player2.wonRounds + " to " + player1.wonRounds + " that " + player1.name + " had";
        player1ScoresArray.forEach((player1ScoreField) => {
            player1ScoreField.textContent = "a";
        })
        player2ScoresArray.forEach((player2ScoreField) => {
            player2ScoreField.textContent = "a";
        })
        roundsFieldsArray.forEach((roundsScoreField) => {
            roundsScoreField.textContent = "a";
        })
    }

    else {
        winnerDisplayWindow.classList.remove('hideIt');
        winnerText.textContent = "Its a tigh with both players having " + player1.wonRounds
        
        player1ScoresArray.forEach((player1ScoreField) => {
            player1ScoreField.textContent = "a";
        })
        player2ScoresArray.forEach((player2ScoreField) => {
            player2ScoreField.textContent = "a";
        })
        roundsFieldsArray.forEach((roundsScoreField) => {
            roundsScoreField.textContent = "a";
        })
    }
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

function restartBoard(){

    gameController.fullfields = 0;
    gameController.turnCounter = 1;
    gameController.activeSign = "x";
    fieldsArray.forEach((field) => {
        
        field.textContent = '';
        })
        board.style.backgroundColor = 'transparent';
        gameBoard.field = [
            ["a", "a", "a"],
            ["a", "a", "a"],
            ["a", "a", "a"]
        ]
    allowPlaying();

}


allowPlaying();
console.log(gameBoard.field);




