/*
Add your code for Game here
 */
export default function Game(size) {
    var board;
    var score;
    var won;
    var over;

    //SET THESE UP AS ARRAYS OF CALLBACKS AND BE SURE TO CALL ALL OF THEM!!!
    var callOnMove = [function(){}]; 
    var callOnWin = [function(){}]; 
    var callOnLose = [function(){}];

    // // Event observers
    // let listeners = {OnMov:a, OnWin:b, OnLose:c};

    // listeners.OnMove = [];
    // listeners.OnWin = [];
    // listeners.OnLose = [];


    this.loadGame = function(state) {
        gameState.board = state.board;
        gameState.score = state.score;
        gameState.won = state.won;
        gameState.over = state.over;
    }

    this.move = function(direction) {
        var i;
        var j, k;
        var oldBoard = gameState.board.slice(0);
        if (direction == "right") {
            for (k = 0; k < size; k++) {
                //cycles backwards through the row checking adjacent tiles for matches
                var current = k*size + size - 1;
                for (j = current; j >= k*size + 1; j--) {
                    if (gameState.board[j] == 0) {
                        var l;
                        for (l = 0; l < size; l++) {
                            if (gameState.board[j] == 0) {
                                //moves all remaining in row to the right
                                for (i = j; i > k*size; i--) {
                                    gameState.board[i] = gameState.board[i - 1]; 
                                }
                                gameState.board[k*size] = 0;
                            }
                        }

                    }
                }

                for (j = current; j >= k*size + 1; j--) {
                    if (gameState.board[j] != 0 && gameState.board[j] == gameState.board[j - 1]) {
                        gameState.board[j] = gameState.board[j] + gameState.board[j - 1];
                        gameState.score += gameState.board[j];
                        gameState.board[j-1] = 0;
                
                        //moves all remaining in row to the right
                        for (i = j; i > k*size + 1; i--) {
                            gameState.board[i - 1] = gameState.board[i - 2]; 
                        }
                        gameState.board[k*size] = 0;
                    } 
                }

            }

        } else if (direction == "left") {
            for (k = 0; k < size; k++) {
                //cycles frontwards through the row checking adjacent tiles for matches
                var current = k*size;
                for (j = current; j < k*size + size - 1; j++) {
                    
                    if (gameState.board[j] == 0) {
                        var l;
                        for (l = 0; l < size; l++) {
                            if (gameState.board[j] == 0) {
                                //moves all remaining in row to the right
                                for (i = j; i < k*size + size - 1; i++) {
                                    gameState.board[i] = gameState.board[i + 1]; 
                                }
                                gameState.board[k*size + size - 1] = 0;
                            }
                        }

                    }

                }

                for (j = current; j < k*size + size - 1; j++) {

                    if (gameState.board[j] != 0 && gameState.board[j] == gameState.board[j + 1]) {
                        gameState.board[j] = gameState.board[j] + gameState.board[j + 1];
                        gameState.score += gameState.board[j];
                        gameState.board[j + 1] = 0;
                
                        //moves all remaining in row to the left
                        for (i = j; i < k*size + size - 1; i++) {
                            gameState.board[i + 1] = gameState.board[i + 2]; 
                        }
                        gameState.board[k*size + size - 1] = 0;
                    } 
                }

            }

        } else if (direction == "up") {
            for (k = 0; k < size; k++) {
                //cycles frontwards through the row checking adjacent tiles for matches
                var current = k;
                for (j = current; j < size*size; j+= size) {
                    
                    if (gameState.board[j] == 0) {
                        var l;
                        for (l = 0; l < size; l++) {
                            if (gameState.board[j] == 0) {
                                //moves all remaining in row to the up
                                for (i = j; i < size * size; i+=size) {
                                    gameState.board[i] = gameState.board[i + size];
                                }
                                gameState.board[(size - 1) * size + k] = 0;
                            }
                        }

                    }

                }

                for (j = current; j < size * size; j+=size) {

                    if (gameState.board[j] != 0 && gameState.board[j] == gameState.board[j + size]) {
                        gameState.board[j] = gameState.board[j] + gameState.board[j + size];
                        gameState.score += gameState.board[j];
                        gameState.board[j + size] = 0;
                
                        //moves all remaining in row to the up
                        for (i = j + size; i < size * size - size; i+=size) {
                            gameState.board[i] = gameState.board[i + size]; 
                        }
                        gameState.board[(size - 1) * size + k] = 0;
                    } 
                }
                
            }

        } else if (direction == "down") {
            for (k = 0; k < size; k++) {
                //cycles backwards through the row checking adjacent tiles for matches
                var current = (size - 1) * size + k;
                for (j = current; j > 0; j-= size) {
                    
                    if (gameState.board[j] == 0) {
                        var l;
                        for (l = 0; l < size; l++) {
                            if (gameState.board[j] == 0) {
                                //moves all remaining in row down
                                for (i = j; i > 0; i-=size) {
                                    gameState.board[i] = gameState.board[i - size];
                                }
                                gameState.board[k] = 0;
                            }
                        }

                    }

                }

                for (j = current; j > 0; j-=size) {

                    if (gameState.board[j] != 0 && gameState.board[j] == gameState.board[j - size]) {
                        gameState.board[j] = gameState.board[j] + gameState.board[j - size];
                        gameState.score += gameState.board[j];
                        gameState.board[j - size] = 0;
                
                        //moves all remaining in row down
                        for (i = j - size; i > 0; i-=size) {
                            gameState.board[i] = gameState.board[i - size]; 
                        }
                        gameState.board[k] = 0;
                    } 
                }
                
            }

        }

        var isSame = true;
        var isOver = true;
        for (i = 0; i < gameState.board.length; i++) {
            if (gameState.board[i] != oldBoard[i]) {
                isSame = false;
            }
            if (gameState.board[i] == 2048) {
                gameState.won = true;
                callOnWin.forEach(function (func) {
                    func(gameState); // outputs  1, then 2
                });
            }
        }        

        if (!isSame) {
            //generate new tile

            var randomPos = Math.floor(Math.random() * (size*size - 0)); 

            while (gameState.board[randomPos] != 0) {
                randomPos = Math.floor(Math.random() * (size*size - 0)); 
            }
    
            if (Math.random() < 0.9) {
                gameState.board[randomPos] = 2;
            } else {
                gameState.board[randomPos] = 4;
            }
        }

        for (i = 0; i < gameState.board.length; i++) {
            if (gameState.board[i] == 0) {
                isOver = false;
            }
        }

        if (isOver) {
            for (i = 0; i < gameState.board.length; i++) {
                if ((i+1) < (size*size) && (Math.floor(i / size) == Math.floor((i+1) / size) && gameState.board[i] == gameState.board[i+1]) ||  
                    ((i-1) >= 0 && (Math.floor(i / size) == Math.floor((i-1) / size) && gameState.board[i] == gameState.board[i-1]) ||
                    ((i + size) < (size * size) && gameState.board[i] == gameState.board[i+size]) ||
                    ((i - size) >= (0) && gameState.board[i] == gameState.board[i-size]))
                ) {
                    isOver = false;
                }
            }

        }
        if (isOver) {
            gameState.over = true;
            callOnLose.forEach(function (func) {
                func(gameState); // outputs  1, then 2
            });
        }

        callOnMove.forEach(function (func) {
            func(gameState); // outputs  1, then 2
        });
        //callOnMove[0](gameState);

    }

    this.toString = function () {
        return gameState.board;
    }

    this.onMove = function (callback) {
        // this.listeners.onMove[0] = callback;
        //callback(gameState);
        callOnMove.push(callback);
    }

    this.onWin = function (callback) {
        // this.listeners[onWin].push(callback);
        callOnWin.push(callback);
    }

    this.onLose = function (callback) {
        // this.listeners[onLose].push(callback);
        callOnLose.push(callback);
    }

    this.getGameState = function() {
        return gameState;
    }

    this.setupNewGame = function() {

        gameState.board = [];
        gameState.score = 0;
        gameState.won = false;
        gameState.over = false;

        var i;
        for (i = 0; i < size*size; i++) {
            gameState.board[i] = 0;
        }

        var randomPosition1 = Math.floor(Math.random() * (size*size - 0)); 
        if (Math.random() < 0.9) {
            gameState.board[randomPosition1] = 2;
        } else {
            gameState.board[randomPosition1] = 4;
        }

        var randomPosition2 = Math.floor(Math.random() * (size*size - 0)); 

        while (randomPosition1 == randomPosition2) {
            randomPosition2 = Math.floor(Math.random() * (size*size - 0)); 
        }

        if (Math.random() < 0.9) {
            gameState.board[randomPosition2] = 2;
        } else {
            gameState.board[randomPosition2] = 4;
        }

    }


    let gameState = {
        board: board,
        score: score,
        won: won,
        over: over
    };


    //Constructor
    this.setupNewGame();


}
