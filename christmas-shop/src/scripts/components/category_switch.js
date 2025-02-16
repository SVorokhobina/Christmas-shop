import gifts from '../../data/gifts.json';
import createGiftCard from '../components/create_gift_card';

export function uploadAllCards() {
  const container = document.querySelector('.gift__card-container');
  gifts.forEach((elem) => {
    const card = createGiftCard(elem);
    container.append(card);
  });
}

export function chooseCategory() {
  const tags = document.querySelectorAll('.gift__tag');
  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      if (!tag.classList.contains('active')) {
        tags.forEach((tag) => tag.classList.remove('active'));
        tag.classList.add('active');
        displayCards(tag.textContent);
      }
    });
  });
}

function displayCards(text) {
  const cards = document.querySelectorAll('.gift-card');
  if (text === 'All') {
    cards.forEach((card) => {
      card.classList.add('shown');
    });
    return;
  }

  const category = text.slice(4);
  cards.forEach((card) => {
    if (card.dataset.category === category) {
      card.classList.add('shown');
    } else {
      card.classList.remove('shown');
    }
  });
}
