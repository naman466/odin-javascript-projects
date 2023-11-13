function getComputerChoice(){
    const choices = ['rock','paper','scissors']
        const computerChoice = choices[(Math.random() * choices.length) | 0]
    return computerChoice
}

function playRound(playerSelection,computerSelection){
    const player = playerSelection.toLowerCase()
    if ((player === 'rock' && computerSelection === 'scissors') || (player === 'paper' && computerSelection === 'rock') || (player === 'scissors' && computerSelection === 'paper')){
        return 1
    }
    
    else if ((computerSelection === 'rock' && player === 'scissors') || (computerSelection === 'paper' && player === 'rock') || (computerSelection === 'scissors' && player === 'paper')){
        return -1
    }
    else{
        return 0
    }
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

game(5)