import { askForCard, cardValue, createCard } from "./";

/**
 * CPU Turn
 * @param { Number } minPoints - minimum points needed to CPU win 
 * @param {HTMLElement} points - HTML element to display points
 * @param {HTMLElement} divCpuCards - HTML element to display CPU cards
 * @param {Array<String>} deck
 */

export const cpuTurn = ( minPoints, points, divCpuCards, deck = []) => {

    if ( !minPoints ) throw new Error (' minPoints are required');
    if ( !points ) throw new Error (' points are required');
    if ( !deck ) throw new Error (' A deck is required');

    let cpuPoints = 0;

    do {
        const card = askForCard( deck );
        cpuPoints = cpuPoints + cardValue (card);
        points.innerText = cpuPoints;
        divCpuCards.append(createCard(card));
        if (minPoints > 21) {
            break;
        }
    } while( (cpuPoints < minPoints) && (minPoints <= 21) );
  
    setTimeout(() => {
        gameResult()
    }, 20 );

    const gameResult = () => {
      if (cpuPoints === minPoints) {
          // alert(`It's a match with ${ playerPoints }`);
          console.log(`It's a match with ${ minPoints }`);
      } else if ( minPoints > 21 ) {
          // alert(`CPU is the winner with ${ cpuPoints }`);
          console.log(`CPU is the winner with ${ cpuPoints }`);
      } else if ( cpuPoints > 21) {
          // alert(`Player is the winner with ${ playerPoints }`);
          console.log(`Player is the winner with ${ minPoints }`);
      } else {
          // alert(`CPU is the winner with ${ cpuPoints }`);
          console.log(`CPU is the winner with ${ cpuPoints }`);
      }
    }
  }