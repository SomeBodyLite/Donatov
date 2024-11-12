const themeSwitch = document.getElementById('theme-switch');

if (themeSwitch) {
	themeSwitch.addEventListener('click', () => {
		const currentTheme = localStorage.getItem('theme');

		if (currentTheme === 'dark') {
			htmlElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			htmlElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	});
}
