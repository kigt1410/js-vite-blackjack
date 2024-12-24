
/**
 * 
 * @param {String} card 
 * @returns {HTMLImageElement} return image
 */
export const createCard = ( card ) => {

    if ( !card ) throw new Error('A card is required. ');

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${ card }.png`;
    imgCard.classList.add('card');

    return imgCard;
}