THEME_KEY = 'portfolio-theme';
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');


function applyTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-label', 'Switch to light theme');
  } else {
    root.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-label', 'Switch to dark theme');
  }
}

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }
}

applyTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
});