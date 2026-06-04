// =============
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

    const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });