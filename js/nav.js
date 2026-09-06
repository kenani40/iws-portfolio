
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
 
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
 
// Close the menu automatically once a link is clicked —
// otherwise the menu stays open covering the section you just
// navigated to, on a small screen where space is already tight.
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});