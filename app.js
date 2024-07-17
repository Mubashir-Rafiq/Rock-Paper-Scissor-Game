let options = document.querySelectorAll(".options");
let userWins = document.querySelector("#user-wins");
let compWins = document.querySelector("#computer-wins");
let declareResult = document.querySelector("#result-box");
let totalMatches = document.querySelector("#total-matches");
let userMove = document.querySelector("#user-choice");
let compMove = document.querySelector("#comp-choice");


let userChoice;
let isUserWon ;
let compWinCount = 0;
let userWinCount = 0;
let matchCount = 0;

for (let option of options){
    option.addEventListener("click" , () =>  {
        userChoice = option.getAttribute("id");
        let compChoice = computerChoice();
        console.log(`user = ${userChoice} , computer = ${compChoice}`);
        gamePlay(userChoice , compChoice);
        matchCount++;
        userMove.innerText = userChoice;
        compMove.innerText = compChoice;
        totalMatches.innerText = matchCount;
        userWins.innerText = userWinCount;
        compWins.innerText = compWinCount;
        
    })
};


const computerChoice = () =>{
    const array = ['scissor', 'rock' , 'paper'];
    let index = Math.floor(Math.random() *3) ;
    console.log(array[index]);
    return array[index];

};

const drawGame = () => {
    declareResult.innerText = 'This Game is a Draw! Try Again';
    declareResult.style.color = 'rgb(9, 9, 35)';
};

const winner = (isUserWon) => {
    if(isUserWon){
        declareResult.innerText = 'You Won this Game!';
        declareResult.style.color = 'green';
        userWinCount++;
    }
    else{
        declareResult.innerText = 'You lost this Game!';
        declareResult.style.color = 'rgb(137, 3, 3)';
        compWinCount++;
    }
    
};

const gamePlay = (userChoice , compChoice) => {
    if (userChoice === compChoice){
        drawGame();
    }
    else{
        

        if (userChoice === 'rock' && compChoice === 'scissor') {
            isUserWon = true;
        } else if (userChoice === 'rock' && compChoice === 'paper') {
            isUserWon = false;
        } else if (userChoice === 'paper' && compChoice === 'rock') {
            isUserWon = true;
        } else if (userChoice === 'paper' && compChoice === 'scissor') {
            isUserWon = false;
        } else if (userChoice === 'scissor' && compChoice === 'paper') {
            isUserWon = true;
        } else if (userChoice === 'scissor' && compChoice === 'rock') {
            isUserWon = false;
        } 

        winner(isUserWon);
    }
};
