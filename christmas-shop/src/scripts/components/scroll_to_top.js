const scrollToTopButton = document.querySelector('.scroll-to-top__button');

export default function implementScrollToTopButton() {
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
      return;
    }
    if (document.documentElement.scrollTop >= 300 &&
      !scrollToTopButton.classList.contains('shown')) {
        showButton();
    }
    if (document.documentElement.scrollTop < 300 &&
      scrollToTopButton.classList.contains('shown')) {
        hideButton();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 &&
      scrollToTopButton.classList.contains('shown')
    ) {
      hideButton();
    }
    if (window.innerWidth <= 768 &&
      !scrollToTopButton.classList.contains('shown') &&
      document.documentElement.scrollTop >= 300
    ) {
      showButton();
    }
  });
}

function showButton() {
  scrollToTopButton.classList.add('shown');
  scrollToTopButton.addEventListener('click', scrollToTop);
}

function hideButton() {
  scrollToTopButton.classList.remove('shown');
  scrollToTopButton.removeEventListener('click', scrollToTop);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
  });
}
