const sliderLine = document.querySelector('.slider__line');
const leftButton = document.querySelector('.arrow-button_left');
const rightButton = document.querySelector('.arrow-button_right');
let offset;

// The initial "left" value for slider-line element depending on the screen width
const wideScreenMargin = 82;
const narrowScreenMargin = 8;

// Amount of arrow button presses to fully scroll the slider
const numOfShiftsWide = 3;
const numOfShiftsNarrow = 6;

export default function setSlider() {
  let shiftParams = getShiftParams();
  offset = shiftParams.margin;
  sliderLine.style.left = `${offset}px`;

  leftButton.addEventListener('click', handleLeftClick);
  rightButton.addEventListener('click', handleRightClick);

  sliderLine.addEventListener('transitionstart', disableArrowButtons);
  sliderLine.addEventListener('transitionend', enableArrowButtons);

  window.addEventListener('resize', handleScreenResize);
}

function getShiftParams() {
  const screenWidth = window.innerWidth;
  const contentWidth = document.documentElement.clientWidth;
  const sliderWidth = sliderLine.scrollWidth;
  const sliderMargin =
    screenWidth > 768 ? wideScreenMargin : narrowScreenMargin;
  const numOfShifts = screenWidth > 768 ? numOfShiftsWide : numOfShiftsNarrow;
  const shiftWidth = Math.ceil(
    (sliderWidth - contentWidth + 2 * sliderMargin) / numOfShifts
  );
  return {
    screenWidth: screenWidth,
    contentWidth: contentWidth,
    sliderWidth: sliderWidth,
    margin: sliderMargin,
    numOfShifts: numOfShifts,
    shiftWidth: shiftWidth,
  };
}

function handleLeftClick() {
  if (!rightButton.classList.contains('active')) {
    rightButton.classList.add('active');
  }
  const params = getShiftParams();
  const shiftWidth = params.shiftWidth;
  offset += shiftWidth;
  if (offset >= params.margin) {
    offset = params.margin;
    if (leftButton.classList.contains('active')) {
      leftButton.classList.remove('active');
    }
  }
  sliderLine.style.left = `${offset}px`;
}

function handleRightClick() {
  if (!leftButton.classList.contains('active')) {
    leftButton.classList.add('active');
  }
  const params = getShiftParams();
  const shiftWidth = params.shiftWidth;
  offset -= shiftWidth;
  const limitOffset = params.contentWidth - params.sliderWidth - params.margin;
  if (offset <= limitOffset) {
    offset = limitOffset;
    if (rightButton.classList.contains('active')) {
      rightButton.classList.remove('active');
    }
  }
  sliderLine.style.left = `${offset}px`;
}

function handleScreenResize() {
  const screenWidth = window.innerWidth;
  offset = screenWidth > 768 ? wideScreenMargin : narrowScreenMargin;
  sliderLine.style.left = `${offset}px`;

  if (leftButton.classList.contains('active')) {
    leftButton.classList.remove('active');
  }
  if (!rightButton.classList.contains('active')) {
    rightButton.classList.add('active');
  }
}

function disableArrowButtons() {
  leftButton.removeEventListener('click', handleLeftClick);
  rightButton.removeEventListener('click', handleRightClick);
}

function enableArrowButtons() {
  leftButton.addEventListener('click', handleLeftClick);
  rightButton.addEventListener('click', handleRightClick);
}
