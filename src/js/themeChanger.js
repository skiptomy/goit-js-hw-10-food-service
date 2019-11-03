const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitch = document.getElementById('theme-switch-control');

if (themeSwitch) {
  initTheme();

  themeSwitch.addEventListener('change', () => {
    resetTheme();
  });

  function initTheme() {
    const darkThemeSelected = localStorage.getItem('theme') === 'dark';
    themeSwitch.checked = darkThemeSelected;
    darkThemeSelected
      ? body.classList.add(`${Theme.DARK}`)
      : body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
  }

  function resetTheme() {
    if (themeSwitch.checked) {
      body.classList.add(`${Theme.DARK}`);
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
      localStorage.setItem('theme', 'light');
    }
  }
}
