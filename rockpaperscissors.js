const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' ||userInput ===  'paper' ||userInput ===  'scissors'){
    return userInput;
  } else {
    console.log('Your selection was invalid.');
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random()*3);
  if (randomNumber === 0){
    return 'rock';
  } else if (randomNumber === 1){
    return 'paper';
  } else if (randomNumber === 2){
    return 'scissors';
  }
};

function determineWinner(userChoice,computerChoice){
  if (userChoice === computerChoice){
    return 'The game is a tie!';
  } if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Paper beats rock! Computer wins!';
    } else if (computerChoice === 'scissors'){
        return 'Rock beats scissors! Player wins!';
    }
  } else if (userChoice === 'paper'){
      if (computerChoice === 'rock'){
        return 'Paper beats rock! Player wins!';
      } else if (computerChoice === 'scissors'){
        return 'Scissors beats paper! Computer wins!';
      }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock'){
        return 'Rock beats scissors! Computer wins!';
      } else if (computerChoice === 'paper') {
        return 'Scissors beats paper! Player wins!';
      }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: '+userChoice);
  console.log('The computer threw: '+computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
