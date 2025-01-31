import createElement from '../components/create-element.js';
import showModal from '../components/modal.js';

export default function createGiftCard(elem) {
  const elemTag = elem.category.toLowerCase();
  const elemCategory = elemTag.slice(4);

  const card = createElement({
    classes: ['gift-card', `gift-card_${elemCategory}`, 'shown']
  });
  card.setAttribute('data-category', elemCategory);

  const image = createElement({
    classes: ['gift-card__image', `gift-card__image_${elemCategory}`]
  });

  const text = createElement({
    classes: ['gift-card__text']
  });

  const cardTag = createElement({
    tag: 'h4',
    classes: ['gift-card__tag', `gift-card__tag_${elemCategory}`],
    content: `${elemTag}`
  });

  const cardTitle = createElement({
    tag: 'h3',
    classes: ['gift-card__title'],
    content: elem.name
  });

  card.append(image, text);
  text.append(cardTag, cardTitle);

  card.addEventListener('click', (e) => showModal(e, elem));

  return card;
}
