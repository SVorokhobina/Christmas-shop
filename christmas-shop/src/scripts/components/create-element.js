export default function createElement({ tag = 'div', classes, content }) {
  const element = document.createElement(tag);

  if (classes !== undefined) {
    for (let i = 0; i < classes.length; i += 1) {
      element.classList.add(classes[i]);
    }
  }

  if (content !== undefined) {
    element.textContent = content;
  }

  return element;
}
