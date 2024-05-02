// PROBLEM: Need a Rock Paper Scissors Game that lasts 5 rounds
// Announce start of game
// SEQUENCE CALL Print game intro and rules
console.log('Welcome to Rock Paper Scissors!');
console.log('Each game is 5 rounds.');
console.log('The rules are simple: You will face the computer. Each player chooses either Rock, Paper, or Scissors. Rock crushes Scissors. Scissors cuts Paper. Paper covers Rock. If you both choose the same item, that round is a tie.');
console.log('The score will be shared after each round, and the game is over after 5 rounds, win, lose, or tie!');

// Requires 2 players, one a human user, the other a computer
// INITIALIZE Score tally for human wins, computer wins, and ties
let humanScore = 0
let compScore = 0
let ties = 0

let round = 1

// Each player makes a choice
// CALL Store player input in player choice variable
function getHumanChoice() {
    let choice = prompt('Your turn: Rock (r), Paper (p), or Scissors (s)?')
    if (['r','p','s'].includes(choice.toLowerCase())) {
        //continue
        choice === 'r' ?  choice = 'rock' : choice === 'p' ? choice = 'paper' : choice = 'scissors';
        console.log(`You chose ${choice}.`);
        return choice
    } else {
        console.log('You entered an invalid selection. Please choose either "r" for Rock, "p" for Paper, or "s" for Scissors');
        return getHumanChoice()
    }
}

// CALL Store random computer choice into variable
function getCompChoice() {
    const choice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    console.log(`Computer chooses ${choice}.`);
    return choice
}

// Play round
function playRound(humanChoice, compChoice) {
    // The choices are compared.
    // IF both choices are the same, the result is a tie
    if (humanChoice === compChoice) {
        // A tie is logged.
        console.log('The round is a tie.');
        ties++
    // ELSE Evaluate outcomes
    } else {
        // IF scenario where human wins
        if (humanChoice === 'rock' && compChoice === 'scissors' ||
            humanChoice === 'paper' && compChoice === 'rock' ||
            humanChoice === 'scissors' && compChoice === 'paper') {
            // The human gets a point
            console.log('You win that round!');
            humanScore++
        // ELSE scenario where computer wins
        } else {
            console.log('Computer wins that round.');
            compScore++
        }
        // ENDIF
    }
    // ENDIF
    // DISPLAY SCORE
    console.log(`The score is now: Player - ${humanScore}, Computer - ${compScore}, Ties - ${ties}.`);
    console.log(`${5 - round} round(s) remain.`);
}

// WHILE (not yet through 5 rounds)
// Play a round
while (round <= 5) {
    playRound(getHumanChoice(), getCompChoice());
    round++
}

// DECLARE FINAL SCORE
console.log('That\'s the end of the game! The final tally is...');
console.log(`Player: ${humanScore} wins\nComputer: ${compScore} wins\nTies: ${ties} ties`);

// GET the winner
function getResult() {
    if (humanScore === compScore) {
        return 'The game ends in a tie.'
    } else if (humanScore > compScore) {
        return 'You win the game!'
    } else {
        return 'You lose the game!'
    }
}

console.log(getResult())
// END OF GAME MESSAGE
console.log('Thanks for playing. Reload the page to play again.');




