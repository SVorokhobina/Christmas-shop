import gifts from '../../data/gifts.json';

export function uploadAllCards() {
  const container = document.querySelector('.gift__card-container');
  gifts.forEach((elem) => {
    const card = createCard(elem);
    container.append(card);
  });
}

export function chooseCategory() {
  const tags = document.querySelectorAll('.gift__tag');
  tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
      if (!tag.classList.contains('active')) {
        tags.forEach((tag) => 
          tag.classList.remove('active')
        );
        tag.classList.add('active');
        displayCards(tag.textContent);
      }
    });
  });
}

function createCard(elem) {
  const elemTag = elem.category.toLowerCase();
  const elemCategory = elemTag.slice(4);

  const card = document.createElement('div');
  card.classList.add('gift-card');
  card.classList.add(`gift-card_${elemCategory}`);
  card.classList.add('shown');
  card.setAttribute('data-category', elemCategory);

  const image = document.createElement('div');
  image.classList.add('gift-card__image');
  image.classList.add(`gift-card__image_${elemCategory}`);

  const text = document.createElement('div');
  text.classList.add('gift-card__text');

  const cardTag = document.createElement('h4');
  cardTag.textContent = `${elemTag}`;
  cardTag.classList.add('gift-card__tag');
  cardTag.classList.add(`gift-card__tag_${elemCategory}`);

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = elem.name;
  cardTitle.classList.add('gift-card__title');

  card.append(image, text);
  text.append(cardTag, cardTitle);
  return card;
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
