export function estimateScrollWidth() {
  const fullWidth = window.innerWidth;
  const widthWithoutScroll = document.documentElement.clientWidth;
  const scrollWidth = fullWidth - widthWithoutScroll;
  return scrollWidth;
}

export function increaseDocumentWidth(value) {
  document.documentElement.style.paddingRight = `${value}px`;
}

export function decreaseDocumentWidth() {
  document.documentElement.style.paddingRight = ``;
}
