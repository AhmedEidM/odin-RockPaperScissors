

function getComputerChoice() {
    num = Math.random()
    if (num < .34) {
        return 'rock'
    }
    else if (num < .67) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function getHumanChoice(){
    return prompt('Enter your choice rock, paper, or scissors :')
    
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice,computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice){
            console.log('Tie!');
        }
        else if (humanChoice == 'rock'){
            if (computerChoice == 'paper'){
                computerScore += 1;
                console.log('You lose , paper beats rock');
            }
            else{
                humanScore += 1;
                console.log('You win, rock beats scissors');
            }
        }
        else if (humanChoice == 'paper'){
            if (computerChoice == 'scissors'){
                computerScore += 1;
                console.log('You lose, scissors beats paper')
            }
            else{
                humanScore += 1;
                console.log('You win, paper beats rock')
            }
    
        }
        else if (humanChoice == 'scissors'){
            if (computerChoice == 'rock'){
                computerScore += 1;
                console.log('You lose, rock beats scissors')
            }
            else{
                humanScore += 1;
                console.log('You win, scissors beat paper')
            }
        }
        else{
            console.log('invalid input')
        }
    }
    
    for (let i =0;i<5;i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice)
    }
    console.log('Computer score is ',computerScore)
    console.log('Human score is ',humanScore)
}


playGame()
