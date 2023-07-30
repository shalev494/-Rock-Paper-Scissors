
function getComputerChoice() {
  const computerChoice = ["rock","paper","scissors"];
  let resultComputer =(computerChoice[(Math.floor(Math.random() * computerChoice.length))])
  return resultComputer;
}
function game(){
  return playRound , playRound;
  
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
 
 if (playerSelection==computerSelection) {
  return "Tie " +playerSelection +" and "+ computerSelection +" equal" ;
 } else if(playerSelection=="scissors"&& "paper"==computerSelection){
  return "You Win! scissors beats paper"
 } else if(playerSelection=="scissors"&& "rock"==computerSelection){
  return "You Lost! rock beats scissors"
 } else if(playerSelection=="paper"&& "rock"==computerSelection){
  return "You Win! paper beats rock"
 } else if(playerSelection=="paper" && "scissors"==computerSelection){
  return "You Lost! scissors beats paper"
 }  else if(playerSelection=="rock" && "scissors"==computerSelection){
  return "You Win! rock beats scissors"
 }  else if(playerSelection=="rock" && "paper"==computerSelection){
  return "You Lost! paper beats rock"
 } else{
  return "No found paper/rock/scissors" ;
 }
}
function playRound2(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
 
 if (playerSelection==computerSelection) {
  return "Tie " +playerSelection +" and "+ computerSelection +" equal" ;
 } else if(playerSelection=="scissors"&& "paper"==computerSelection){
  return "You Win! scissors beats paper"
 } else if(playerSelection=="scissors"&& "rock"==computerSelection){
  return "You Lost! rock beats scissors"
 } else if(playerSelection=="paper"&& "rock"==computerSelection){
  return "You Win! paper beats rock"
 } else if(playerSelection=="paper" && "scissors"==computerSelection){
  return "You Lost! scissors beats paper"
 }  else if(playerSelection=="rock" && "scissors"==computerSelection){
  return "You Win! rock beats scissors"
 }  else if(playerSelection=="rock" && "paper"==computerSelection){
  return "You Lost! paper beats rock"
 } else{
  return "No found paper/rock/scissors" ;
 }
}
function playRound3(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
 
 if (playerSelection==computerSelection) {
  return "Tie " +playerSelection +" and "+ computerSelection +" equal" ;
 } else if(playerSelection=="scissors"&& "paper"==computerSelection){
  return "You Win! scissors beats paper"
 } else if(playerSelection=="scissors"&& "rock"==computerSelection){
  return "You Lost! rock beats scissors"
 } else if(playerSelection=="paper"&& "rock"==computerSelection){
  return "You Win! paper beats rock"
 } else if(playerSelection=="paper" && "scissors"==computerSelection){
  return "You Lost! scissors beats paper"
 }  else if(playerSelection=="rock" && "scissors"==computerSelection){
  return "You Win! rock beats scissors"
 }  else if(playerSelection=="rock" && "paper"==computerSelection){
  return "You Lost! paper beats rock"
 } else{
  return "No found paper/rock/scissors" ;
 }
}
function playRound4(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
 
 if (playerSelection==computerSelection) {
  return "Tie " +playerSelection +" and "+ computerSelection +" equal" ;
 } else if(playerSelection=="scissors"&& "paper"==computerSelection){
  return "You Win! scissors beats paper"
 } else if(playerSelection=="scissors"&& "rock"==computerSelection){
  return "You Lost! rock beats scissors"
 } else if(playerSelection=="paper"&& "rock"==computerSelection){
  return "You Win! paper beats rock"
 } else if(playerSelection=="paper" && "scissors"==computerSelection){
  return "You Lost! scissors beats paper"
 }  else if(playerSelection=="rock" && "scissors"==computerSelection){
  return "You Win! rock beats scissors"
 }  else if(playerSelection=="rock" && "paper"==computerSelection){
  return "You Lost! paper beats rock"
 } else{
  return "No found paper/rock/scissors" ;
 }
}
function playRound5(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
 
 if (playerSelection==computerSelection) {
  return "Tie " +playerSelection +" and "+ computerSelection +" equal" ;
 } else if(playerSelection=="scissors"&& "paper"==computerSelection){
  return "You Win! scissors beats paper"
 } else if(playerSelection=="scissors"&& "rock"==computerSelection){
  return "You Lost! rock beats scissors"
 } else if(playerSelection=="paper"&& "rock"==computerSelection){
  return "You Win! paper beats rock"
 } else if(playerSelection=="paper" && "scissors"==computerSelection){
  return "You Lost! scissors beats paper"
 }  else if(playerSelection=="rock" && "scissors"==computerSelection){
  return "You Win! rock beats scissors"
 }  else if(playerSelection=="rock" && "paper"==computerSelection){
  return "You Lost! paper beats rock"
 } else{
  return "No found paper/rock/scissors" ;
 }
}
const playerSelection1 = prompt("paper/rock/scissors");
const playerSelection2 = prompt("paper/rock/scissors");
const playerSelection3 = prompt("paper/rock/scissors");
const playerSelection4 = prompt("paper/rock/scissors");
const playerSelection5 = prompt("paper/rock/scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection1, computerSelection));
console.log(playRound2(playerSelection2, computerSelection));
console.log(playRound3(playerSelection3, computerSelection));
console.log(playRound4(playerSelection4, computerSelection));
console.log(playRound5(playerSelection5, computerSelection));

