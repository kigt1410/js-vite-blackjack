import { createDeck, askForCard, cardValue, cpuTurn, createCard } from "./usecases"; //will look forward for index.js

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of hearts
 * 2S = Two of Spades
 */

/**
 * Module Pattern
*/

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];
let playerPoints = 0;
let cpuPoints = 0;

// DOM references
const btnNewCard = document.querySelector('#btn-new-card');
const points = document.querySelectorAll('small');
const divPlayerCards = document.querySelector('#player-cards');
const divCpuCards = document.querySelector('#cpu-cards');
const btnStopGame = document.querySelector('#btn-stop-game');
const btnNewGame = document.querySelector('#btn-new-game');

deck = createDeck( types, specials );

// Events
btnNewCard.addEventListener('click', () => {     //callback - function send it as an argument - could be traditional function or arrow function
  const card = askForCard( deck );
  playerPoints = playerPoints + cardValue (card);
  points[0].innerText = playerPoints;
  const imgCard = createCard ( card );
  divPlayerCards.append(imgCard);
  
  if (playerPoints > 21) {
      console.warn('Sorry, you have lost....');
      btnNewCard.disabled = true;
      cpuTurn( playerPoints, points[1], divCpuCards, deck );
      btnStopGame.disabled = true;
  } else if (playerPoints === 21) {
      console.warn('Great you got 21 points  ....');
      btnNewCard.disabled = true;
      btnStopGame.disabled = true;
      cpuTurn( playerPoints, points[1], divCpuCards, deck );
  } 
});

btnStopGame.addEventListener('click', () => {
  btnNewCard.disabled = true;
  btnStopGame.disabled = true;
  cpuTurn( playerPoints, points[1], divCpuCards, deck );
});

btnNewGame.addEventListener('click', () => {

  console.clear();
  deck = [];
  deck = createDeck ( types, specials);

  btnNewCard.disabled = false;
  btnStopGame.disabled = false;

  playerPoints = 0;
  cpuPoints = 0;

  points[0].innerText = 0;
  points[1].innerText = 0;

  divPlayerCards.innerHTML = '';
  divCpuCards.innerHTML = '';

  // createDeck();
});
