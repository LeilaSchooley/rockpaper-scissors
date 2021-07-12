let options = ['Rock','Paper','Scissors']

let playerCounter =1;
let computerCounter =1;

//console.log(random, options[random]);
function computerPlay(){
    let random = Math.floor(Math.random() * options.length);

    return (random, options[random])

}

//console.log(computerPlay())


function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase()

    console.log(playerSelection, computerSelection)
    switch(playerSelection, computerSelection){

        
        case playerSelection == "rock"  && computerSelection == "Scissors":
            playerCounter++
            return("You Win! Rock Beats Scissors!")
        case computerSelection == "Rock" && playerSelection == "scissors":
            computerCounter++
            return("You Lose! Rock Beats Scissors!")

        case(playerSelection =="scissors" && computerSelection == "Paper"):
            playerCounter++

            return("You Win! Scissors Beats Paper!")
        case computerSelection == "Scissors" && playerSelection == "paper":
            computerCounter++
            return("You Lose! Scissors Beats Paper!")

        case(playerSelection =="paper" && computerSelection == "Rock"):
            playerCounter++

            return("You Win! Paper Beats Rock!")
        case computerSelection == "Scissors" && playerSelection == "paper":
            computerCounter++
            return("You Lose! Paper Beats Rock!")


    }


}

function game(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase()

    console.log(playerSelection, computerSelection)
    
    if (playerSelection == "rock"  && computerSelection == "Scissors"){
        playerCounter++
        return("You Win! Rock Beats Scissors!")

    }

    else if (computerSelection == "Rock" && playerSelection == "scissors"){
        computerCounter++
        return("You Lose! Rock Beats Scissors!")
    }


    else if(playerSelection =="scissors" && computerSelection == "Paper"){
        playerCounter++

        return("You Win! Scissors Beats Paper!")

    }

    else if (computerSelection == "Scissors" && playerSelection == "paper"){
        computerCounter++
        return("You Lose! Scissors Beats Paper!")

    }


    else if(playerSelection =="paper" && computerSelection == "Rock"){
        playerCounter++

        return("You Win! Paper Beats Rock!")

    }
        
    else if (computerSelection == "Paper" && playerSelection == "rock"){
        computerCounter++
        return("You Lose! Paper Beats Rock!")

    }
        

    }




for (let i = 0; i < 5; i++) {
    let playerSelection= prompt("Choose Rock, Paper, or Scissors:")
    
    console.log(i)
    console.log(game(playerSelection, computerPlay()))
}
