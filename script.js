const board = document.getElementsByClassName('board');
const fields = document.getElementsByClassName('field');

let gameBoard = {

    rowsAndColls: 3,
     hits:  0,
     field: [
             ["x", "x", "x"],
             ["x", "x", "a"],
             ["a", "x", "x"]
            ],
     
     checkForWin: function(sign, x, y)  {
            //Checks diagonals
            if(x == y) {
                    if(this.field[x - 1] != undefined) {
                
                        if(this.field[x - 1][y - 1] == sign){
                            this.hits += 1;
                            if(this.field[x - 2] != undefined) {
                                if(this.field[x - 2][y - 2] == sign) {
                                    this.hits += 1;
                                }
                                else {
                                    this.hits = 0;
                                }
                            }
                            else if(this.field[x - 1][y + 1] == sign){
                                this.hits += 1;
                                if(this.field[x - 2] != undefined) {
                                    if(this.field[x - 2][y + 2] == sign) {
                                        this.hits += 1;
                                    }
                                    else {
                                        this.hits = 0;
                                    }
                                }
                            }
                            
                        }
                        else {
                            this.hits = 0;
                        }
                    }
                    else if(this.field[x + 1] != undefined){
                        
                            if(this.field[x + 1][y + 1] == sign) {
                                this.hits += 1;
                
                                if(this.field[x + 2] != undefined) {
                                    
                                    if(this.field[x + 2][y + 2] == sign) {
                                        this.hits += 1;
                                    }
                                    else {
                                        this.hits = 0;
                                    }
                                }
                                else if(this.field[x + 1][y - 1] == sign){
                                    this.hits += 1;
                                    if(this.field[x - 2] != undefined) {
                                        if(this.field[x + 2][y - 2] == sign) {
                                            this.hits += 1;
                                        }
                                        else {
                                            this.hits = 0;
                                        }
                                    }
                                }
                                else {
                                    if(this.field[x - 1][y - 1] == sign){
                                        this.hits += 1;
                                    }
                                    else {
                                        this.hits = 0;
                                    }
                                }
                            }
                            else if(this.field[x + 1][y - 1] == sign) {
                                this.hits += 1;
                
                                if(this.field[x + 2] != undefined) {
                                    
                                    if(this.field[x + 2][y - 2] != undefined){
                                        if(this.field[x + 2][y - 2] == sign) {
                                        this.hits += 1;
                                    }
                                    else {
                                        this.hits = 0;
                                    }
                                }
                                    else {
                                        this.hits = 0;
                                    }
                
                            }
                        }
                            else {
                                this.hits = 0;
                            }
                
                             
                    }
                    if(this.hits == 2) {
                        return("We have diagonal win!");
                    }
                    else {
                        return("Noo diagonal win :/");
                    }
                
                }
                //Checks top to bottom / vice versa and left to right. 
            else if(x != 1) {

                if(this.field[x - 1] != undefined){
                    if(this.field[x - 1][y] == sign){
                        this.hits += 1;
                        if(this.field[x - 2][y] == sign){
                            this.hits += 1;
                        }
                        else {
                            this.hits = 0;
                        }
                    }
                    else if (this.field[x][y - 1] != undefined){
                            
                        if(this.field[x][y - 1] == sign) {
                            this.hits += 1;
                            if(this.field[x][y - 2] == sign){
                                this.hits += 1;
                            }
                            else {
                                this.hits = 0;
                            }
                        }
                        else {
                            this.hits = 0;
                        }
                    }
                    else if(this.field[x][y + 1] != undefined){
                        if(this.field[x][y + 1] == sign){
                            this.hits += 1;
                            if(this.field[x][y + 2] == sign){
                                this.hits += 1;
                            }
                            else {
                                this.hits = 0;
                            }

                        }
                        else {
                                this.hits = 0;
                        }
                    }
                    else {
                        this.hits = 0;
                    }
                }

                else if(this.field[x + 1] != undefined){
                    if(this.field[x + 1][y] == sign){
                        this.hits += 1;
                        if(this.field[x + 2][y] == sign){
                            this.hits += 1;
                        }
                        else {
                            this.hits = 0;
                        }
                    }
                    else if (this.field[x][y - 1] != undefined){
                            
                        if(this.field[x][y - 1] == sign) {
                            this.hits += 1;
                            if(this.field[x][y - 2] == sign){
                                this.hits += 1;
                            }
                            else {
                                this.hits = 0;
                            }
                        }
                        else {
                            this.hits = 0;
                        }
                    }
                    else if(this.field[x][y + 1] != undefined){
                        if(this.field[x][y + 1] == sign){
                            this.hits += 1;
                            if(this.field[x][y + 2] == sign){
                                this.hits += 1;
                            }
                            else {
                                this.hits = 0;
                            }

                        }
                        else {
                                this.hits = 0;
                        }
                    }
                    else {
                        this.hits = 0;
                    }
            }
            else {
                this.hits = 0;
            }
            if(this.hits == 2) {
                return("We have win on axis");
            }
            else {
                return("Noo axis win :/");
            }
            }
            else if(x == 1 && x != y){
                if(this.field[x - 1] != undefined){
                    if(this.field[x - 1][y] == sign){
                        this.hits += 1;
                        if(this.field[x + 1][y] == sign){
                            this.hits += 1;
                        }
                        else {
                            this.hits = 0;
                        }
                    }
                    else if (this.field[x][y - 1] != undefined){
                            
                        if(this.field[x][y - 1] == sign) {
                            this.hits += 1;
                            if(this.field[x][y - 2] != undefined) {
                                if(this.field[x][y - 2] == sign){
                                this.hits += 1;
                            }
                            else {
                                this.hits = 0;
                            }
                        }
                        else if(this.field[x][y + 1] == sign) {
                            this.hits += 1;
                        }
                        
                        else {
                            this.hits = 0;
                         }
                        }
                        else {
                            this.hits = 0;
                        }
                    }
                    else if(this.field[x][y + 1] != undefined){
                        if(this.field[x][y + 1] == sign){
                            this.hits += 1;
                            if(this.field[x][y + 2] != undefined) {
                                if(this.field[x][y + 2] == sign){
                                this.hits += 1;
                            }
                            else {
                                this.hits = 0;
                            }
                        }
                        else if(this.field[x][y - 1] == sign) {
                            this.hits += 1;
                        }
                        
                        else {
                            this.hits = 0;
                         }
                        }
                        else {
                            this.hits = 0;
                        }
                }
                else if (this.field[x][y - 1] != undefined) {
                    if(this.field[x][y - 1] == sign){
                        this.hits += 1;
                        if(this.field[x][y - 2] != undefined) {
                            if(this.field[x][y - 2] == sign){
                            this.hits += 1;
                        }
                        else {
                            this.hits = 0;
                        }
                    }
                    else if(this.field[x][y + 1] == sign) {
                        this.hits += 1;
                    }
                    
                    else {
                        this.hits = 0;
                     }
                    }
                    else {
                        this.hits = 0;
                    }
                }

                else if(this.field[x + 1] != undefined){
                    if(this.field[x + 1][y] == sign){
                        this.hits += 1;
                        if(this.field[x + 2][y] != undefined){
                            if(this.field[x + 2][y] == sign){
                                this.hits += 1;
                            }
                            else {
                                this.hits = 0;
                            }
                        }
                        else if(this.field[x - 1] != undefined){
                            if(this.field[x - 1][y] == sign){
                                this.hits += 1;
                            }
                            else { 
                                this.hits = 0;
                            }
                        }
                        else {
                            this.hits = 0;
                        }
                        
                    }
                    else if (this.field[x][y - 1] != undefined){
                            
                        if(this.field[x][y - 1] == sign) {
                            this.hits += 1;
                            if(this.field[x][y - 2] == sign){
                                this.hits += 1;
                            }
                            else {
                                this.hits = 0;
                            }
                        }
                        else {
                            this.hits = 0;
                        }
                    }
                    
            }
            else {
                this.hits = 0;
            }
            if(this.hits == 2) {
                return("We have win in the middle");
            }
            else {
                return("Noo middle win :/");
            }
            } 
            
            }
        }
    }
        
        
          
            
    


for( let i = 0; i < 9; i++){

    fields[i].addEventListener('click', (e) => {
        console.log(e.target.getAttribute('data-x'));
    })
}
console.log(gameBoard.field);
console.log(gameBoard.checkForWin("x", 1, 2));




