(function () {
    const header = document.querySelector('.header');
    const line1 = document.querySelector('.burger_line_first');
    const line2 = document.querySelector('.burger_line_second');
    const line3 = document.querySelector('.burger_line_third');
    window.onscroll = () => {
        if(window.pageYOffset > 75){
            header.classList.add('header_active');
            line1.classList.add('lines_active');
            line2.classList.add('lines_active');
            line3.classList.add('lines_active');
        }
        else{
            header.classList.remove('header_active');
            line1.classList.remove('lines_active');
            line2.classList.remove('lines_active');
            line3.classList.remove('lines_active');
        }
    }
}());


///// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menu_close = document.querySelector('.header_nav_close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menu_close.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    })
}());
