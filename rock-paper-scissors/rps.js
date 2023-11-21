let userScore = 0
let computerScore = 0
function getComputerChoice(){
    const choices = ['rock','paper','scissors']
        const computerChoice = choices[(Math.random() * choices.length) | 0]
    return computerChoice
}

function playRound(playerSelection,computerSelection){
    const player = playerSelection.toLowerCase()
    if ((player === 'rock' && computerSelection === 'scissors') || (player === 'paper' && computerSelection === 'rock') || (player === 'scissors' && computerSelection === 'paper')){
        alert('Player won!')
        userScore +=1
    }
    
    else if ((computerSelection === 'rock' && player === 'scissors') || (computerSelection === 'paper' && player === 'rock') || (computerSelection === 'scissors' && player === 'paper')){
        alert('Computer won!')
        computerScore+=1
    }
    else{
        alert('Tie!')
        userScore +=0.5
        computerScore +=0.5
    }
    updateScore()
    checkWin()
}

function displayResult(userScore,computerScore){
    console.log("Your score:",userScore)
    console.log("Computer score:",computerScore)
    
    if (userScore>computerScore){
        console.log("You won by "+(userScore-computerScore)+ " points!")
    }
    else if (computerScore>userScore){
        console.log("Computer won by "+(computerScore-userScore)+ " points!")

    }
    else{
        console.log("It's a tie!")
    }
}

function game(number){
    let userScore = 0
    let computerScore = 0
    for (let i = 0;i<number;i++){
        const playerSelection = prompt("Enter your choice:")
        const computerSelection = getComputerChoice()
        if (playRound(playerSelection,computerSelection) === 1){
            console.log('You won! '+ playerSelection +' beats ' + computerSelection)
            userScore +=1
        }
        else if (playRound(playerSelection,computerSelection) === -1){
            console.log('Computer won! ' + computerSelection + ' beats ' + playerSelection)
            computerScore +=1
        }
        else{
            console.log('Tie!')
            userScore +=0.5
            computerScore +=0.5
        }
    }
    displayResult(userScore,computerScore)
}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const playBtn = document.querySelector('#play')
rockBtn.addEventListener('click',() => {
    const computerChoice = getComputerChoice()
    playRound('rock',computerChoice)
})
paperBtn.addEventListener('click',() => {
    const computerChoice = getComputerChoice()
    playRound('paper',computerChoice)
})
scissorsBtn.addEventListener('click',() => {
    const computerChoice = getComputerChoice()
    playRound('scissors',computerChoice)
})


function updateScore(){
    const play = document.querySelector('.play')
    play.innerHTML = ''

    const userScoreElement = document.createElement('h1')
    userScoreElement.textContent = `${userScore}`
    
    const computerScoreElement = document.createElement('h1')
    computerScoreElement.innerText= `${computerScore}`

    play.appendChild(userScoreElement)
    play.appendChild(computerScoreElement)
}

function resetGame(){
    userScore = 0
    computerScore = 0
    updateScore()
    result.innerHTML = ''
}
const result = document.querySelector('.result')
function checkWin(){
    if (userScore >= 5) {
        const winElement = document.createElement('h3')
        winElement.innerHTML = "User won.<a href='javascript:resetGame()'>Click here to play again.</a>"
        result.appendChild(winElement)
    } else if (computerScore >= 5) {
        const winElement = document.createElement('h3')
        winElement.innerHTML = "<h3>Computer won.<a href='javascript:resetGame()'>Click here to play again.</a></h3>"
        result.appendChild(winElement)
    }
}