const searchWrapper = document.querySelector('.search-wrapper');
const searchInput = document.querySelector('.main-search');
const searchButton = document.querySelector('.search-button');
const searchSuggestions = document.querySelector('.search-suggestions');

searchInput.addEventListener('input', function(e) {
  const length = e.target.value.length;
  if (length >= 2) {
    searchSuggestions.classList.add('active');
  } else {
    searchSuggestions.classList.remove('active');
  }
});

searchButton.addEventListener('click', function(e) {
  e.preventDefault();
  searchInput.classList.toggle('expanded');

});

document.addEventListener('click', function(e) {
  if (!searchWrapper.contains(e.target)) {
    searchInput.classList.remove('expanded');
  }
});
