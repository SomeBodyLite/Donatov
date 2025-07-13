 // Временный скрипт выдачи лайков.
 document.querySelectorAll('.react').forEach((react) => {
  react.addEventListener('click', (event) => {
    event.preventDefault()
    react.classList.toggle('react__active');

    const countElement = react.querySelector('.react__count');

    if (countElement) {
      if (!countElement.hasAttribute('data-original-count')) {
        countElement.setAttribute('data-original-count', countElement.textContent || 0);
      }

      const originalValue = parseInt(countElement.getAttribute('data-original-count'));

      if (react.classList.contains('react__active')) {
        countElement.textContent = originalValue + 1;
      } else {
        countElement.textContent = originalValue;
        if (countElement.textContent == 0) {
          countElement.textContent = '';
        }
      }
    }
  });
});

