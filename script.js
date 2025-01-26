const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.header-menu');
let menuVisible = false;

menuIcon.addEventListener('click', () => {
    if (menuVisible) {
        menu.style.height = '0';
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 100);
    } else {
        setTimeout(() => {
            menu.style.display = 'block';
            menu.style.height = '200px';
            menu.style.opacity = '1';
        }, 100);
    }
    menuVisible = !menuVisible;
});

document.addEventListener('click', (event) => {
    if (menuVisible && !menu.contains(event.target) && event.target !== menuIcon) {
        menu.style.height = '0';
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 100);
        menuVisible = false;
    }
});
