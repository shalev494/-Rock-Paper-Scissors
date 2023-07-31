
const container = document.querySelector('#container');
const rockButton = document.createElement('button');
rockButton.classList.add('rock');
rockButton.textContent = 'Rock';
const paperButton = document.createElement('button');
paperButton.classList.add('paper');
paperButton.innerText = 'paper';
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissors');
scissorsButton.innerText='scissors'
const result= document.querySelector('.outCome')
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
let computerScore= 0;
let playerScore= 0;
const liveScore = document.querySelector('.liveScore');
const playerLive = document.createElement('span');
const computerLive = document.createElement('span');
liveScore.appendChild(playerLive);
liveScore.appendChild(computerLive);
const getComputerChoice=()=> {
  let computerChoice = ["rock","paper","scissors"];
  let resultComputer =(computerChoice[(Math.floor(Math.random() * computerChoice.length))])
  return resultComputer;
}
const playRound=(playerSelection, computerSelection)=> {
  playerSelection = playerSelection.toLowerCase();
 
 if (playerSelection==computerSelection) {
  const p= document.createElement('p');
  p.innerText= "Tie " +playerSelection +" and "+ computerSelection +" equal" ;
  result.appendChild(p);
 }else if (playerSelection=="scissors"&& "paper"==computerSelection){
  const p= document.createElement('p');
  p.innerText= "You Win! scissors beats paper"
  result.appendChild(p);
  playerScore++;
 } else if(playerSelection=="scissors"&& "rock"==computerSelection){
  const p= document.createElement('p');
  p.innerText= "You Lost! rock beats scissors"
  result.appendChild(p);
  computerScore++;
 } else if(playerSelection=="paper"&& "rock"==computerSelection){
  const p= document.createElement('p');
  p.innerText= "You Win! paper beats rock"
  result.appendChild(p);
  playerScore++;
 } else if(playerSelection=="paper" && "scissors"==computerSelection){
  const p= document.createElement('p');
  p.innerText= "You Lost! scissors beats paper"
  result.appendChild(p);
  computerScore++;
 }  else if(playerSelection=="rock" && "scissors"==computerSelection){
  const p= document.createElement('p');
  p.innerText= "You Win! rock beats scissors"
  result.appendChild(p);
  playerScore++;
 }  else if(playerSelection=="rock" && "paper"==computerSelection){
  const p= document.createElement('p');
  p.innerText= "You Lost! paper beats rock"
  result.appendChild(p);
  computerScore++;
 } else{
  const p= document.createElement('p');
  p.innerText= "No found paper/rock/scissors" ;
  result.appendChild(p);
 }
 
}
const checkForWinner = (playerScore,computerScore)=>{
  if (playerScore==5){
    const h3 = document.createElement('h3');
   h3.innerText=`You won player 5 score  computer score ${computerScore} wow you are good`; 
   result.append(h3);
  } else if (computerScore==5) {
    const h3 = document.createElement('h3');
    h3.innerText=`You lost computer score 5 player score ${playerScore}  maybe next time :)`;
    result.append(h3);
  }
}
const live = (playerScore,computerScore) =>{

  playerLive.innerText=(`Player score is ${playerScore} , `);
  computerLive.innerText=(`   Computer score is ${computerScore}`);
  
}
rockButton.addEventListener('click',()=> {
  const computerSelection =getComputerChoice();
  const playerSelection = 'rock';
  playRound(playerSelection,computerSelection);
  checkForWinner(playerScore,computerScore);
  live (playerScore,computerScore);
})
paperButton.addEventListener('click',()=> {
  const computerSelection =getComputerChoice();
  const playerSelection = 'paper';
  playRound(playerSelection,computerSelection);
  checkForWinner(playerScore,computerScore);
  live (playerScore,computerScore);
})
scissorsButton.addEventListener('click',()=> {
  const computerSelection =getComputerChoice();
  const playerSelection = 'scissors';
  playRound(playerSelection,computerSelection);
  checkForWinner(playerScore,computerScore);
  live (playerScore,computerScore);
})
 
/*function playRound2(playerSelection, computerSelection) {
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
*/
