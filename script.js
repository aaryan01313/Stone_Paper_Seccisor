let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#comp-score")

const genComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
};

const drawGame = () => {
    msg.innerText = "It's a Tie!,Play Again"
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice , computerChoice) => {
      if(userWin) {
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
       msg.style.backgroundColor = "green";
      } else {
       computerScore++;
       computerScorePara.innerText = computerScore;
       msg.innerText = `You Loose! ${computerChoice} beats Your ${userChoice}`;
       msg.style.backgroundColor = "red";
      }
};

const playGame = (userChoice) => {
    
    // Generate computer choice
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice) {
        //draw
        drawGame();
}   else {
    let userWin = true;
    if(userChoice === "rock"){
        //scissors , paper
        userWin = computerChoice === "paper" ? false : true;
}   else if(userChoice === "paper"){
    //rock, scissors
    userWin = computerChoice === "scissors"? false : true;
}   else if(userChoice === "scissors"){
    //rock , paper
    userWin = computerChoice === "rock"? false : true;
}
showWinner(userWin , userChoice , computerChoice);
}
};
choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
});



