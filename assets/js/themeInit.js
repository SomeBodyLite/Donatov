const htmlElement = document.documentElement;

const theme = localStorage.getItem('theme');

if (!theme) {
	localStorage.setItem('theme', 'light');
	htmlElement.classList.remove('dark');
} else if (theme === 'light') {
	htmlElement.classList.remove('dark');
} else if (theme === 'dark') {
	htmlElement.classList.add('dark');
}