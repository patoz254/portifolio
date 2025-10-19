
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks  = document.getElementById('navLinks');

  if (!menuToggle) {
    console.error('Menu toggle element (#menuToggle) not found.');
    return;
  }
  if (!navLinks) {
    console.error('Nav element (#navLinks) not found.');
    return;
  }

  // Toggle menu on click
  menuToggle.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    // accessibility: inform screen readers if menu is open
    menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });

  // Optional: close menu when clicking any nav link (mobile convenience)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

