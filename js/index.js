// Toggle menu on small screens
function toggleMenu() {
    let menu = document.querySelector('.menu-container');
    menu.classList.toggle('visible');
  }
  
let hamburger = document.querySelector('.hamburger');
  
hamburger.addEventListener('click', toggleMenu);
  
// Hide mobile menu after a menu item has been clicked
  
function hideMenu() {
    let menu = document.querySelector('.menu-container');
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    }
}
  
navList = document.querySelector('.navigation-list');
navList.addEventListener('click', hideMenu);

// Add active class to currently clicked menu-item
let navItems = document.querySelectorAll('.navigation-list__item');
  
navItems.forEach(navItem => {
    navItem.addEventListener('click', function () {
        navItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});