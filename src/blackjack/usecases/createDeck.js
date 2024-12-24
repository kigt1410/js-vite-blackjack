// To create a new deck

// import { shuffle } from "underscore";
import _ from "underscore";

/**
 * Functio to create a new Deck
 * @param {Array<String>} cardType  e.g. ['C', 'D', 'H', 'S']
 * @param {Array<String>} specialType e.g. ['A', 'J', 'Q', 'K']
 * @returns {Array<String>}  to return a new cards deck
 */
export const createDeck = (cardType, specialType) => {

    if ( !cardType || cardType.length === 0 ) 
        throw new Error (' typeCard is required');

    if ( !specialType || specialType.length === 0 ) 
        throw new Error (' specialType is required');
      
    let deck = [];
  
    for (let i = 2; i <= 10; i++) {
        for(let type of cardType) {
            deck.push(i + type);
        }
    }
  
    for( let type of cardType) {
        for(let esp of specialType) {
            deck.push( esp + type);
        }
    }
  
    deck = _.shuffle( deck );
    return deck;
}

//only one export by default is allowed
// export default createDeck;