let menu = document.querySelector('.menu-container');
let hamburger = document.querySelector('.hamburger');

// Toggle menu on small screens
function toggleMenu() {
    menu.classList.toggle('visible');
    hamburger.classList.toggle('hidden');
}
  
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