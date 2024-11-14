// Скрипт генерит ссылки на социальные сети после нажатия на кнопку ПОДЕЛИТСЯ.
document.getElementById("shareButton").addEventListener("click", function () {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitterLink = `https://x.com/intent/tweet?url=${url}&text=${title}`;
  const vkLink = `https://vk.com/share.php?url=${url}`;
  const telegramLink = `https://t.me/share/url?url=${url}&text=${title}`;

  document.getElementById("facebookLink").href = facebookLink;
  document.getElementById("twitterLink").href = twitterLink;
  document.getElementById("vkLink").href = vkLink;
  document.getElementById("telegramLink").href = telegramLink;
});

// Скрипт буфер обмена
document.getElementById("copyLink").addEventListener("click", function (event) {
  event.preventDefault();
  navigator.clipboard.writeText(window.location.href);
  alert("Ссылка скопирована в буфер обмена!");
});

