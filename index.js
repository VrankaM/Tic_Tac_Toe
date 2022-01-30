var gameField = [2, 2, 2, 2, 2, 2, 2, 2, 2];
var player = 0;
var gameFinished = 0;
var player1Score = 0;
var player2Score = 0;

document.querySelector(".reset-button").addEventListener("click", reset);

for (let i=0; i < document.querySelectorAll(".gameBoard div").length; i++){
    document.querySelectorAll(".gameBoard div img")[i].addEventListener("click", function(){
        if((this.getAttribute("src") == "images/blank.png") && (!gameFinished)){
            if(!player){
                this.setAttribute("src","images/X.png");
                gameField[i] = 0;
            }
            else{
                this.setAttribute("src","images/O.png");
                gameField[i] = 1;
            }
            playerChange();
            if(checkForWin(0)){
                gameFinished = 1;
                player1Score++;
                playerWon(1);
            }
            if(checkForWin(1)){
                gameFinished = 1;
                player2Score++;
                playerWon(2);
            }
        }
    });
}

function nextPlayerDisplay(){
    let image = document.querySelector(".next-player-image");
    let playerText = document.querySelector(".players-turn");
    if(image.getAttribute("src") === "images/X.png"){
        image.setAttribute("src","images/O.png");
        playerText.innerHTML = "2";
    }
    else{
        image.setAttribute("src","images/X.png");
        playerText.innerHTML = "1";
    }
}

function updateScore(){
    document.querySelector("#p1-score").innerHTML = player1Score;
    document.querySelector("#p2-score").innerHTML = player2Score;
}

function reset(){
    gameFinished = 0;
    let result = document.getElementById("result");
    result.style.color = "#686D76";
    result.innerHTML = "May the best one win";
    for(let i=0; i<9; i++){
        document.querySelectorAll(".gameBoard div img")[i].setAttribute("src","images/blank.png");
    }
    for(let f=0; f < gameField.length; f++){
        gameField[f] = 2;
    }
}

function playerWon(player){
    updateScore();
    let result = document.getElementById("result");
    result.style.color = "#19D3DA";
    result.innerHTML = "Player " + player + " won !";
}

function checkForWin(player){
    for(let i=0; i<7; i+=3){
        if((gameField[i] == player) && (gameField[i+1] == player) && (gameField[i+2] == player)){
            return true;
        }
        else if((gameField[0] == player) && (gameField[4] == player) && (gameField[8] == player)){
            return true;
        }
        else if((gameField[2] == player) && (gameField[4] == player) && (gameField[6] == player)){
            return true;
        }
    }
    for(let i=0; i<7; i++){
        if((gameField[i] == player) && (gameField[i+3] == player) && (gameField[i+6] == player)){
            return true;
        }
    }
    return false;
}

function playerChange(){
    if(player == 0){
        player = 1;
    }
    else{
        player = 0;
    }
    nextPlayerDisplay();
}


