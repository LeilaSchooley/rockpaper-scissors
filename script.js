let options = ['Rock','Paper','Scissors']

let playerCounter =1;

let computerCounter = 1;

let playCount = 1;

function computerPlay(){
    let random = Math.floor(Math.random() * options.length);

    return (random, options[random])

}


function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == "rock"  && computerSelection == "Scissors"){
        playerCounter += 1
        return("You Win! Rock Beats Scissors!")

    }

    else if (computerSelection == "Rock" && playerSelection == "scissors"){
        computerCounter += 1
        return("You Lose! Rock Beats Scissors!")
    }


    else if(playerSelection =="scissors" && computerSelection == "Paper"){
        playerCounter += 1

        return("You Win! Scissors Beats Paper!")

    }

    else if (computerSelection == "Scissors" && playerSelection == "paper"){
        computerCounter += 1
        return("You Lose! Scissors Beats Paper!")

    }


    else if(playerSelection =="paper" && computerSelection == "Rock"){
        playerCounter += 1

        return("You Win! Paper Beats Rock!")

    }
        
    else if (computerSelection == "Paper" && playerSelection == "rock"){
        computerCounter += 1
        return("You Lose! Paper Beats Rock!")

    }
    else{
        return("It's a tie")
    }

}

let div_one = document.createElement('div')
const container = document.querySelector('#container');

const content = document.createElement('div');
const end_div = document.createElement('div');
const result_div = document.createElement('div');


let choice = document.querySelectorAll("button")

console.log(choice)

choice.forEach(button => button.addEventListener("click", function(){
    
    container.textContent = playRound(button.textContent, computerPlay())
    container.appendChild(content);

    if (playerCounter === 5 || computerCounter === 5){
                
        result_div.textContent = (`Computer has ${computerCounter} points! You have ${playerCounter} points!`)
        container.appendChild(result_div)

        if (computerCounter > playerCounter){
            end_div.textContent = ("You Lost!")
            container.appendChild(end_div);

        }
        else if (playerCounter > computerCounter){
            end_div.textContent = ("You Won!")
            container.appendChild(end_div);

        }
        else {
            end_div.textContent = ("It's a Tie!");
            container.appendChild(end_div);

        }

        computerCounter = 1
        playerCounter = 1

    }

    }
))

