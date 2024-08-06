let  userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreCard  = document.querySelector("#user-score");
let compScoreCard  = document.querySelector("#comp-score");
const showWinner = (userWin, userChoice , compChoice)=>{
    if(userWin){
        console.log("you win");
        msg.innerText = `you Win! your ${userChoice} beats ${compChoice}`;
        userScoreCard.innerText++;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you lose");
        msg.innerText = `you Lost! ${compChoice} beats your ${userChoice}`;
        compScoreCard.innerText++;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = ()=>{
    console.log("game is draw");
    msg.innerText = "draw ! play again";
    msg.style.backgroundColor = "#081b31";
}

const genCompChoice = ()=>{
    let options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const palyGame = (userChoice) =>{
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false: true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice ==="scissors"? false: true;
        }else{
            userWin = compChoice ==="rock"? false: true;
        }
        showWinner(userWin, userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        palyGame(userChoice);
    });
});