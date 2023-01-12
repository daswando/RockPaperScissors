game();
function game() {
    console.log("Game Started");
    let i=0;
    var playerWinCount = 0;
    var computerWinCount = 0;

    while(i<5) {
        playRound();
        i++;
    }

    postResults();
/*-----------------------------------------------------*/  
    function postResults() {
        console.log(`Final Score is:\nPlayer: ${playerWinCount}   Machines: ${computerWinCount}`)
        if (playerWinCount==computerWinCount) {
            console.log("It's a tie!");
        }
        else if (playerWinCount > computerWinCount) {
            console.log("Humans Win!");
        }
        else {
            console.log("Machines Win!")
        }
    }
    
    function playRound() {
        console.log("Round Started");
        var computerPick = getComputerChoice();
        var playerPick = getPlayerPick();
        console.log(`Player: ${playerPick} \nComputer: ${computerPick}`)
        console.log(whoWins(computerPick, playerPick) + " Wins the Round!")

        function getComputerChoice() {
            pick = Math.random();
            if (pick <= 0.33) {
                return "Rock";
            }
            else if (pick <= 0.66) {
                    return "Paper";
            }
            else {
                return "Scissors";
            }
        }

        function getPlayerPick() {
            return prompt("Please pick Rock, Paper or Scissors");
        }

        function whoWins(cpuPick, playerPick){
            if (cpuPick==playerPick) {
                return "Nobody";
            }
            else if ((playerPick=="Rock"&&cpuPick=="Scissors")||(playerPick=="Paper" && cpuPick=="Rock")||(playerPick=="Scissors"&& cpuPick=="Paper")) {
                playerWinCount++;
                return "Player";
            }
            else {
                computerWinCount++;
                return "Machines";
            }
        }
        
    }

}