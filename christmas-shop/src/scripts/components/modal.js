import createElement from '../components/create-element';
import {
  estimateScrollWidth,
  increaseDocumentWidth,
  decreaseDocumentWidth,
} from '../components/window-width';

export default function showModal(event, jsonElem) {
  const category = jsonElem.category.toLowerCase().slice(4);

  const modal = createElement({
    classes: ['modal'],
  });
  const modalWindow = createElement({
    classes: ['modal-window'],
  });
  const closeButton = createElement({
    tag: 'span',
    classes: ['modal__close-button'],
  });
  const image = createElement({
    classes: ['modal__image', `modal__image_${category}`],
  });
  const textContainer = createElement({
    classes: ['modal__text'],
  });
  const topTextBlock = createElement({
    classes: ['modal__text-block'],
  });
  const tag = createElement({
    tag: 'h4',
    classes: ['modal__tag', `modal__tag_${category}`],
    content: jsonElem.category,
  });
  const title = createElement({
    tag: 'h3',
    classes: ['modal__title'],
    content: jsonElem.name,
  });
  const description = createElement({
    tag: 'p',
    classes: ['modal__description'],
    content: jsonElem.description,
  });
  const bottomTextBlock = createElement({
    classes: ['modal__text-block'],
  });
  const bottomBlockTitle = createElement({
    tag: 'h4',
    content: 'Adds superpowers to:',
  });
  const superpowersContainer = createElement({
    classes: ['modal__superpowers'],
  });

  const scrollWidth = estimateScrollWidth();
  increaseDocumentWidth(scrollWidth);

  document.body.appendChild(modal);
  document.body.classList.add('open-modal');
  modal.append(modalWindow);
  modalWindow.append(closeButton, image, textContainer);
  textContainer.append(topTextBlock, bottomTextBlock);
  topTextBlock.append(tag, title, description);
  bottomTextBlock.append(bottomBlockTitle, superpowersContainer);

  const superpowers = Object.entries(jsonElem.superpowers);
  for (let i = 0; i < superpowers.length; i += 1) {
    const superRow = createElement({
      classes: ['superpowers__row'],
    });
    const superTitle = createElement({
      classes: ['superpowers__title'],
      content: superpowers[i][0],
    });
    const superValue = createElement({
      classes: ['superpowers__value'],
      content: superpowers[i][1],
    });
    const snowflackesContainter = displaySnowflacks(superpowers[i][1]);
    superpowersContainer.append(superRow);
    superRow.append(superTitle, superValue, snowflackesContainter);
  }
  modal.addEventListener('click', (e) => closeModal(e));
}

function displaySnowflacks(str) {
  if (typeof str !== 'string' || str[0] !== '+') {
    throw new Error('Wrong data format');
  }

  const redSnowflackes = Number(str.slice(1, 2));
  const snowflackesContainter = createElement({
    classes: ['superpowers__snowflakes'],
  });

  for (let i = 0; i < 5; i += 1) {
    const snowflack = createElement({
      tag: 'span',
      classes: ['snowflake-icon'],
    });
    if (i >= redSnowflackes) {
      snowflack.classList.add('invisible');
    }
    snowflackesContainter.append(snowflack);
  }
  return snowflackesContainter;
}

function closeModal(event) {
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.modal__close-button');

  if (event.target !== modal && event.target !== closeButton) {
    return;
  }
  modal.remove();
  document.body.classList.remove('open-modal');
  decreaseDocumentWidth();
}
