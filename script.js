function getComputerChoice(){  //to get the random number from 1 to 3 for computerChoice
    return Math.floor(Math.random()*3) + 1;
}

function computerChoice(){  //to assign the choice 1 for rock, 2 for paper, 3 for scissors
    let choice = getComputerChoice();
    if(choice === 1){
        return 'rock';
    } else if(choice === 2){
        return 'paper';
    } else{
        return 'scissors';
    }
}

function getPlayerChoice(){ // get the player choice and convert it to lowercase to ignore case-sensitive challenges
    let choice = prompt("Rock, Paper or Scissors?", '.....');
    return choice.toLowerCase();
}



function playGame(playerSelection, computerSelection){  // To calcualte the winnings, loss and tie
        if (playerSelection === 'rock' && computerSelection === 'paper'){
			return("Computer Wins");
		} else if(playerSelection === 'rock' && computerSelection === 'scissors'){
			return("Computer Wins");
		} else if(playerSelection === 'paper' && computerSelection === 'rock'){
			return("Player Wins");
		} else if(playerSelection === 'paper' && computerSelection === 'scissors'){
			return("Computer Wins");
		} else if(playerSelection === 'scissors' && computerSelection === 'rock'){
			return("Computer Wins");
		} else if(playerSelection === 'scissors' && computerSelection === 'paper'){
			return("Player Wins");
		} else if(playerSelection == computerSelection){
            return("It's a Tie!");
        } else {
			return("Please enter a valid choice:");
		}	
}



function game(){    // To loop the game for n number of times and display the result after each winning, loss or tie and display the total stats when game ends
    let wins = 0, loss = 0, ties = 0, invalid = 0;
    for(let i = 0; i < 5; i++){
        computerSelection = computerChoice();

        playerSelection = getPlayerChoice();
        let round = playGame(playerSelection, computerSelection);
        if(round === 'Player Wins'){
            wins++;
            console.log('Player Wins'); 
        } else if(round === 'Computer Wins'){
            loss++;
            console.log('Computer Wins');
        } else if(round === "It's a Tie!"){
            ties++;
            console.log("It's a Tie!");
        } else{
            invalid++;
            console.log("Game was invalid")
        }
    }
    console.log(`wins = ${wins}`);
    console.log(`loss = ${loss}`);
    console.log(`ties = ${ties}`);
    console.log(`invalid = ${invalid}`);
}
game(); 
