//Rock, Paper, Scissors, Lizard, Spock - starter code provided by GA
//Karolin Rafalski, 2016

'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper','scissors', 'lizard' or 'Spock' . Type 'quit' to quit.");
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.20) {
        return "rock";
    } else if (randomNumber < 0.40) {
        return "paper";
    } else if (randomNumber < 0.60) {
    return "lizard";
    } else if (randomNumber < 0.80) {
    return "spock";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}


function getWinner(winner) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
  
    var playerMove = getPlayerMove();
    playerMove= playerMove.toLowerCase();
    var computerMove = getComputerMove();
    var winner2=action(computerMove,playerMove);
 return winner2;
}   
//rules of rock paper scissors
//rock crushes scissors 1, 2
//rock crushes lizard 3, 4

//paper covers rock 5, 6 
//paper disproves Spock 7, 8

//scissors cuts paper 9 , 10
//scissors decapitates lizard 11, 12

//lizard eats paper 13, 14
//lizard poisons Spock 15, 16

//Spock smashes scissors 17, 18
//Spock vaporizes rock 19, 20

//tie 0

//odd case - computer winner
//even case - player winner

function action(computerMove,playerMove){
    var winner="no switch";
    var match;
    var message="no message";
    var resultAndMessage=[];
    if (computerMove===playerMove) {match =0}
    if (computerMove==='rock' && playerMove==='scissors'){match=1}
    if (computerMove==='scissors' && playerMove==='rock'){match=2}
    if (computerMove==='rock' && playerMove==='lizard'){match=3}
    if (computerMove==='lizard' & playerMove==='rock'){match=4}
    
    if (computerMove==='paper' && playerMove==='rock'){match=5}
    if (computerMove==='rock' && playerMove==='paper'){match=6}
    if (computerMove==='paper' && playerMove==='spock'){match=7}
    if (computerMove==='spock' && playerMove==='paper'){match=8}
    
    if (computerMove==='scissors' && playerMove==='paper'){match=9}
    if (computerMove==='paper' && playerMove==='scissors'){match=10}
    if (computerMove==='scissors' && playerMove==='lizard'){match=11}
    if (computerMove==='lizard' && playerMove==='scissors'){match=12}
    
    if (computerMove==='lizard' && playerMove==='paper'){match=13}
    if (computerMove==='paper' && playerMove==='lizard'){match=14}
    if (computerMove==='lizard' && playerMove==='spock'){match=15}
    if (computerMove==='spock' && playerMove==='lizard'){match=16}
    
    if (computerMove==='spock' && playerMove==='scissors'){match=17}
    if (computerMove==='scissors' && playerMove==='spock'){match=18}
    if (computerMove==='spock' && playerMove==='rock'){match=19}
    if (computerMove==='rock' && playerMove==='spock'){match=20}
    if (playerMove==='quit'){match=21}

    switch(match) {
        case 0:
            message = "Great minds think alike! ";
             winner = 'tie';
             break;
        case 1:
            message = "Computer's rock smashes player's scissors!";
            winner = 'computer';
            break;
        case 2:
            message = "Player's rock smashes computer's scissors!";
            winner = 'player';
            break;
        case 3:
            message = "Computer's rock crushes player's lizard!";
            winner = 'computer';
            break;
        case 4:
            message = "Player's rock crushes computer's lizard!";
            winner = 'player';
            break;
        case 5:
            message = "Computer's paper covers player's rock!";
            winner = 'computer';
            break;
        case 6:
            message = "Player's paper covers computer's rock!";
            winner = 'player';
            break;
        case 7:
            message = "Computer's paper disproves player's Spock!";
            winner = 'computer';
            break;
        case 8:
            message = "Player's paper disproves computer's Spock!";
            winner = 'player';
            break;
        case 9:
            message = "Commputer's scissors cuts player's paper!";
            winner = 'computer';
            break;
         case 10:
            message = "Player's scissors cuts computer's paper!";
            winner = 'player';
            break;
        case 11:
            message = "Computer's scissors decapitates player's lizard!";
            winner = 'computer';
            break;
        case 12:
            message = "Player's scissors decapitates computer's lizard!";
            winner = 'player';
            break;
        case 13:
            message = "Computer's lizard eats player's paper!";
            winner = 'computer';
            break;
        case 14:
            message = "Player's lizard eats computer's paper!";
            winner = 'player';
            break;
        case 15:
            message = "Computer's lizard poisons player's Spock!";
            winner = 'computer';
            break;
        case 16:
            message = "Player's lizard poisons computer's Spock!";
            winner = 'player';
            break;
        case 17:
            message = "Computer's Spock breaks player's scissors!";
            winner = 'computer';
            break;
        case 18:
            message = "Player's Spock breaks computer's scissors!";
            winner = 'player';
            break;
        case 19:
            message = "Computer's Spock vaporizes player's rock!";
            winner = 'computer';
            break;
        case 20:
            message = "Player's Spock vaporizes computer's rock!";
            winner = 'player';
            break;
        case 21:
            message = "OK! Let's Quit!";
            winner= "quit";
            break;
        default:
            message =" ";
            winner="typo";
    }
    
    resultAndMessage =[winner,message];
    return resultAndMessage;
}

//when using playTo in console be sure to put a numeric value in parenthesis!
function playTo(x) {
  var playerWins = 0;
  var computerWins = 0;
  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  var winCount = x;
  
     do {  var winStuff = getWinner();
           var winner = winStuff[0];
           var winMessage= winStuff[1];
           
            if (winner === 'player'){
                playerWins = playerWins + 1 ;
                alert(winMessage + " Player wins this round!" + " The score is "
                + playerWins + " player : " +
                computerWins + " computer");
            } else if (winner ==='computer'){
                computerWins = computerWins + 1 ;
                   alert(winMessage + " Computer wins this round!"+ " The score is "
                + playerWins + " player : " +
                computerWins + " computer");
            }else if (winner ==='tie'){
                alert(winMessage + " It's a tie!" + " The score is "
                + playerWins + " player : " +
                computerWins + " computer");
                /* winner = tie, add nothing, repeat*/
            }else if (winner ==="quit"){
                winCount = "quit";
              break;  
            } else {
                alert(" Oops! There was an error! Please type carefully!");
                //temporary code for troubleshooting
                //computerWins = computerWins + 1; 
              }
        } while (playerWins < winCount && computerWins < winCount && winCount !=="quit")
 
     if (playerWins > computerWins){
         alert("The final score is " + playerWins + " player: " + computerWins + " computer. "+" You are the champion!");
     }else if (winCount ==="quit"){
         alert("Please play again some time!");
     } else {alert("The final score is " + playerWins + " player: " + computerWins + " computer. "+" Computer is the champion!");
     }
   return [playerWins, computerWins];
}

playTo(3);