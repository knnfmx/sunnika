const menuBtn = document.getElementById('burger');
const menu = document.getElementById('menu');
const menuItems = menu.querySelectorAll('.menu-items');
const menuLinks = document.querySelectorAll('.menu-items__link');
const menuActive = document.querySelector('._active');


function openMenu() {
  //Animate burger
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('_active');
    //Toggle Menu
    menu.classList.toggle('_open');
    //Animate Menu Items
    menuItems.forEach((link, idx) => {
      if(link.style.animation) {
          link.style.animation = '';
      } else {
          link.style.animation = `animateNavLinks 0.5s ease forwards ${idx / 10 + 0.5}s`;
      }
    });
  });
  function closeMenu() {
    menuLinks.forEach((el) => {
      el.addEventListener('click', () => {
        menuBtn.classList.remove('_active');
        menu.classList.remove('_open');
        menuItems.forEach((link) => link.style.animation = '');
      });
    });
  }
  closeMenu();
}

openMenu();

