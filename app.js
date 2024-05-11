// PROBLEM: Need a Rock Paper Scissors Game that lasts 5 rounds
// PLAY GAME
function playGame() {
    // Announce start of game
    // SEQUENCE CALL Print game intro and rules
    const introDiv = document.querySelector('#intro')
    const introH3 = document.createElement('h3')
    introH3.classList.add('intro-text')
    introH3.innerText = `Welcome to Rock Paper Scissors!\nEach game is 5 rounds.\nThe rules are simple: You will face the computer. Each player chooses either Rock, Paper, or Scissors. \nRock crushes Scissors. \nScissors cuts Paper. \nPaper covers Rock. \nIf you both choose the same item, that round is a tie.\nThe score will be shared after each round, and the game is over after 5 rounds, win, lose, or tie!`
    introDiv.appendChild(introH3)

    // Requires 2 players, one a human user, the other a computer
    // INITIALIZE Score tally for human wins, computer wins, and ties
    let humanScore = 0
    let compScore = 0
    let ties = 0

    let round = 1

    // INITIALIZE DOM element references
    const rockBtn = document.querySelector('#rock-btn')
    const paperBtn = document.querySelector('#paper-btn')
    const scissorsBtn = document.querySelector('#scissors-btn')
    const textBox = document.querySelector('.text-box')

    // Each player makes a choice. Human goes first. Computer responds after.
    // LISTEN for click events and log human choice
    const btns = document.querySelectorAll('button')
    btns.forEach( (btn) => {
        btn.addEventListener('click', (e) => playRound(getHumanChoice(e), getCompChoice()))
    })

    // CALL Store player input in player choice variable
    function getHumanChoice(e) {
        // CLEAR text box
        textBox.replaceChildren('')
        // Player clicks button of their choice
        const target = e.target
        // Player choice is logged
        let choice
        switch(target.id) {
            case 'rock-btn':
                choice = 'rock';
                break;
            case 'paper-btn':
                choice = 'paper'
                break;
            case 'scissors-btn':
                choice = 'scissors'
                break;
            default:
                console.log("An error occurred.");
        }
        const para = document.createElement('p')
        para.textContent = `You chose ${choice}.`
        textBox.appendChild(para)
        return choice
    }

    // CALL Store random computer choice into variable
    function getCompChoice() {
        const choice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
        const para = document.createElement('p')
        para.textContent = `Computer chooses ${choice}.`;
        textBox.appendChild(para)
        return choice
    }

    // Play round
    function playRound(humanChoice, compChoice) {
        // The choices are compared.
        // IF both choices are the same, the result is a tie
        if (humanChoice === compChoice) {
            // A tie is logged.
            const para = document.createElement('p')
            para.textContent = 'The round is a tie.'
            textBox.appendChild(para);
            ties++
        // ELSE Evaluate outcomes
        } else {
            // IF scenario where human wins
            if (humanChoice === 'rock' && compChoice === 'scissors' ||
                humanChoice === 'paper' && compChoice === 'rock' ||
                humanChoice === 'scissors' && compChoice === 'paper') {
                // The human gets a point
                const para = document.createElement('p')
                para.textContent = 'You win that round!'
                textBox.appendChild(para);
                humanScore++
            // ELSE scenario where computer wins
            } else {
                const para = document.createElement('p')
                para.textContent = 'Computer wins that round.'
                textBox.appendChild(para);
                compScore++
            }
            // ENDIF
        }
        // ENDIF
        // INCREMENT ROUNDS or ENDGAME
        round < 5 ? endRound() : endGame()
    }
    
    
    // DISPLAY SCORE
    function endRound() {
        const h3 = document.createElement('h3')
        h3.innerText = `The score is now: \nPlayer - ${humanScore} \nComputer - ${compScore} \nTies - ${ties}.\n${5 - round} round(s) remain.`
        textBox.appendChild(h3)
        round++
    }

    // DECLARE FINAL SCORE
    function endGame() {
        const h3 = document.createElement('h3')
        h3.innerText = `That\'s the end of the game! The final tally is...\n
        Player: ${humanScore} wins\n
        Computer: ${compScore} wins\n
        Ties: ${ties} ties`
        textBox.appendChild(h3);
        getResult()
        // END OF GAME MESSAGE
        const para = document.createElement('p')
        para.textContent = 'Click any of the game buttons to restart the game!'
        textBox.appendChild(para)

        gameReset()
        function gameReset() {
            humanScore = 0
            compScore = 0
            ties = 0
            round = 1
        }
    }
    
    // GET the winner
    function getResult() {
        function addResultH2(result) {
            const h2 = document.createElement('h2')
            h2.innerText = result.text
            h2.style.backgroundColor = result.bgColor
            h2.style.border = `5px solid yellow`;
            h2.style.borderRadius = "10px"
            h2.style.padding = "10px"
            textBox.appendChild(h2)
        }

        let result
        if (humanScore === compScore) {
            result = {text: "The game ends in a tie.", bgColor: 'orange'};
        } else if (humanScore > compScore) {
            result = {text: 'You win the game!', bgColor: 'green'}
        } else {
            result = {text: 'You lose the game!', bgColor: 'red'}
        }

        addResultH2(result)
    }
}

playGame()
