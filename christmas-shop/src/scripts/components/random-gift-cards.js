import gifts from '../../data/gifts.json';
import createGiftCard from './create_gift_card';

const giftsNumber = 4; // number of random gift cards to be shown on the Home page

export default function displayRandomCards() {
  const cardContainer = document.querySelector('.best__container');
  const randomGifts = getRandomGifts();
  for (let i = 0; i < randomGifts.length; i += 1) {
    const card = createGiftCard(randomGifts[i]);
    cardContainer.append(card);
  }
}

function getRandomGifts() {
  const arr = gifts.slice();
  for (let i = arr.length - 1; i >= arr.length - giftsNumber; i -= 1) {
    const randomIndex = getRandomIndex(arr.length - 1);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr.slice(-4);
}

function getRandomIndex(max) {
  // max is the length of the array
  const randomIndex = Math.floor(Math.random() * max);
  return randomIndex;
}
