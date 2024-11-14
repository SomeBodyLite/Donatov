document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropdown__button");
  const dropdownMenus = document.querySelectorAll(".dropdown__menu");

  function closeAllDropdowns(exceptIndex = null) {
    dropdownMenus.forEach(function (dropdownMenu, index) {
      if (index !== exceptIndex) {
        dropdownMenu.classList.remove("active");
      }
    });
  }

  dropdownButtons.forEach(function (dropdownButton, i) {
    dropdownButton.addEventListener("click", function (event) {
      event.stopPropagation();
      if (window.innerWidth < 900) {
        closeAllDropdowns(i);
      }
      dropdownMenus[i].classList.toggle("active");
    });
  });

  document.addEventListener("click", function (event) {
    dropdownButtons.forEach(function (dropdownButton, i) {
      if (
        !dropdownButton.contains(event.target) &&
        !dropdownMenus[i].contains(event.target)
      ) {
        dropdownMenus[i].classList.remove("active");
      }
    });
  });
});

