let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorepara = document.querySelector("#userScore")
let compScorepara = document.querySelector("#compScore")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game is draw! Play Again";
    msg.style.backgroundColor = "black";
}


const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = "you lose!";
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice is", userChoice);
    // gnerate Computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice is", compChoice);


    if(userChoice === compChoice){
        //draw Comdition
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor //paper
           userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : false;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})