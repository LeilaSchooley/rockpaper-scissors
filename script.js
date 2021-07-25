let options = ['Rock','Paper','Scissors']

let playerCounter =1;
let computerCounter = 1;


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


}}

function game(){
    
    for (let i = 0; i < 5; i++) {
        let playerSelection= prompt("Choose Rock, Paper, or Scissors:")
        console.log(playRound(playerSelection, computerPlay()))
    
    }

    console.log(`Computer has ${computerCounter} points!
You have ${playerCounter} points!`)
        if (computerCounter > playerCounter){
            console.log("You Lost!")


        }
    
        else if (playerCounter > computerCounter){
            console.log("You Won!")


        }
        else {

            console.log("It's a Tie!");
        }
        
        
    }
        

let choice = document.querySelectorAll("button")
console.log(choice)
choice.forEach(button => button.addEventListener("click", function(){
    console.log(button)
}))