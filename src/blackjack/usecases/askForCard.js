// To take a card

/**
 * Function to ask for another card from deck to be played
 * @param {Array<String>} deck e.g. ['9H', 'AH', 'QC', '5H', 'JC', '7D', 'AD', '9C', '2C', '8H', 'KD', '4H', 'AC', 'JD', '8S', '9D', 'QH', 'QS', '10C', '6H', '2S', '6D', '5C', '3H', '4S', '7C', '8D', '3D', '3S', '2D', '7H', '2H', '8C', 'JS', 'QD', '10H', '5D', 'AS', '7S', 'KC', '6C', '5S', '4C', '10S', 'JH', '10D', '4D', 'KH', 'KS', '6S', '9S', '3C']
 * @returns {String} to return a new card updating the deck
 */
export const askForCard = ( deck ) => {
    if ( !deck || deck.length === 0 ) {
        throw 'No more cards on deck'; // trigger an error and exit
    }
    const card = deck.pop();
    return card;
  }