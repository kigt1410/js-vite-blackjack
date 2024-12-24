// Get the card value

/**
 * Function to get card value
 * @param {String} card e.g. '3D'
 * @returns {Number} return de card value
 */

export const cardValue = ( card ) => {
  const value = card.substring(0, card.length - 1);

  return ( isNaN(value) ) ?  
          (value === 'A') ? 11 : 10
          : parseInt(value);
}