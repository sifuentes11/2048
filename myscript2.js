import Game from "./engine/game.js";

export const renderTiles = function(state) {
    // TODO: Copy your code from a04 to render the hero card
    return  `
    <div id = "board"> 
    <subtitle style="text-align:center;font-size:24pt;color:white;">Join the numbers and get to the 2048 tile!</subtitle>
        <div class="columns is-gapless">
               <div class="column">
               <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                   <p><span style="font-size:36pt;color:black">${state.board[0]}</span></p>
               </div> 
           </div>
           <div class="column">
               <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[1]}</span></p>
               </div> 
           </div>
           <div class="column">
               <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                   <p><span style="font-size:36pt;color:black">${state.board[2]}</span></p>
               </div> 
           </div>
           <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                  <p><span style="font-size:36pt;color:black">${state.board[3]}</span></p>
              </div> 
          </div>
        </div>

        <div class="columns is-gapless">
                <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[4]}</span></p>
                </div> 
            </div>
            <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[5]}</span></p>
                </div> 
            </div>
            <div class="column">
               <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[6]}</span></p>
                </div> 
            </div>
            <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[7]}</span></p>
                </div> 
            </div>
        </div>

        <div class="columns is-gapless">
                <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[8]}</span></p>
                </div> 
            </div>
            <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[9]}</span></p>
               </div> 
            </div>
            <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[10]}</span></p>
                </div> 
            </div>
            <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[11]}</span></p>
                </div> 
            </div>
        </div>

        <div class="columns is-gapless">
                <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[12]}</span></p>
                </div> 
            </div>
           <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[13]}</span></p>
            </div> 
            </div>
            <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                    <p><span style="font-size:36pt;color:black">${state.board[14]}</span></p>
                </div> 
            </div>
            <div class="column">
                <div style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
                   <p><span style="font-size:36pt;color:black">${state.board[15]}</span></p>
                </div> 
            </div>
        </div>

        
    <subtitle style="text-align:center;font-size:24pt;color:white;">score:${state.score} </subtitle>

    <div id="reset" style="text-align:center;height:130px;width:130px;background-color:lightgreen;padding-top: 25px;padding-right: 5px; padding-left: 5px;"> 
        <strong><span style="font-size:36pt;color:black">Reset</span></strong>
    </div> 

    </div>

    `;



};


export const replaceBoard = function(state) {

    //alert(document.getElementById("board"));
    var tmpObj2=document.createElement("div"); // created an empty 'div'
    tmpObj2.innerHTML=renderTiles(state); // replaced
    document.getElementById("board").replaceWith(tmpObj2);

};

export const winner = function(state) {

    //alert(document.getElementById("board"));
    var tmpObj2=document.createElement("div"); // created an empty 'div'
    tmpObj2.innerHTML=`<subtitle style="text-align:center;font-size:24pt;color:white;">You Won.  Score: ${state.score} </subtitle>`; // replaced
    document.getElementById("board").replaceWith(tmpObj2);

};

export const loser = function(state) {

    //alert(document.getElementById("board"));
    var tmpObj2=document.createElement("div"); // created an empty 'div'
    tmpObj2.innerHTML=`<subtitle style="text-align:center;font-size:24pt;color:white;">You Lost.  Score: ${state.score} </subtitle>`; // replaced
    document.getElementById("board").replaceWith(tmpObj2);
    // $root.append(`<subtitle style="text-align:center;font-size:24pt;color:white;">You Lost.  Score: ${state.score} </subtitle>`); // replaced

};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    // alert('hi');
    const $root = $('#root');

    let game = new Game(4);
    let state = game.getGameState();
    //alert(state.board[0]);
    $root.append(renderTiles(state));
    game.onMove(replaceBoard);
    game.onWin(winner);
    game.onLose(loser);
    
    document.onkeydown = function(event){
        //alert(event.key)
        if (event.key == "ArrowRight") {
            game.move("right");
        } else if (event.key == "ArrowLeft") {
            game.move("left");
        } else if (event.key == "ArrowDown") {
            game.move("down");
        } else if (event.key == "ArrowUp") {
            game.move("up");
        }
    }
    document.onclick = function(event){
        game.setupNewGame();
        replaceBoard(state);
    }
});
