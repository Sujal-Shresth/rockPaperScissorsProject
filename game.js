const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const $myChoice = document.getElementById("myChoice");
const $computerChoice = document.getElementById("computerChoice");

const images = [
    "./assets/rock-hand.png",
    "./assets/paper-hand.png",
    "./assets/scissors-hand.png"
]
var myChoice;
var computerChoice;

function generateComputerChoice(){
    computerChoice = parseInt(Math.random() * 3);
    console.log(computerChoice)
    switch(computerChoice){
        case 0:
            $computerChoice.setAttribute('src', images[0]);
            break;
        case 1:
            $computerChoice.setAttribute('src', images[1]);
            break;
        case 2:
            $computerChoice.setAttribute('src', images[2]);
            break;
    }
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains("logo")){
        generateComputerChoice();
        if(e.target.getAttribute('id') === 'rock'){
            myChoice = 0;
            $myChoice.setAttribute('src', images[0]);
        }
        else if(e.target.getAttribute('id') === 'paper'){
            myChoice = 1;
            $myChoice.setAttribute('src', images[1]);
        }
        else if(e.target.getAttribute('id') === 'scissor'){
            myChoice = 2;
            $myChoice.setAttribute('src', images[2]);
        }
        updateScore();
    }
})

const $myScore = document.getElementById("myScore");
const $computerScore = document.getElementById("computerScore");
var myScore = 0;
var computerScore = 0;

function updateScore(){
    if(myChoice === 0 && computerChoice == 2){
        myScore +=1;
    } else if(myChoice === 0 && computerChoice === 1){
        computerScore +=1;
    } else if(myChoice === 1 && computerChoice === 0){
        myScore +=1;
    } else if(myChoice === 1 && computerChoice === 2){
        computerScore +=1;
    } else if(myChoice === 2 && computerChoice === 1){
        myScore +=1;
    } else if(myChoice === 2 && computerChoice === 0){
        computerScore +=1;
    }
    $myScore.innerHTML = myScore;
    $computerScore.innerHTML = computerScore;
    if(myScore === 5 || computerScore === 5){
        gameOver();
    }
}

function gameOver(){
    const endGameDiv = document.getElementById("resultDiv");
    const result = document.getElementById("result");
    if(myScore === 5){
    result.innerHTML = "You Won!!!!";
    }
    else if(computerScore == 5){
    result.innerHTML = "The computer Won";
    }
    endGameDiv.style.display = 'flex';
    document.getElementById("newGame").onclick = () =>{
        history.go(0);
    }
}