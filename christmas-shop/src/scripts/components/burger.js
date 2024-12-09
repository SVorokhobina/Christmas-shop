export default function handleBurgerButtonClick() {
  document.querySelector('.burger-button').addEventListener('click', (e) => {
    const button = e.target;
    if (button.classList.contains('open') !== true) {
      button.classList.add('open');
    } else {
      button.classList.remove('open');
    }
  });
}