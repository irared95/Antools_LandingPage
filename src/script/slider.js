document.addEventListener('DOMContentLoaded', function () {
    $('.reviews__slider--js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        arrows: true,
        dots: true,
        dotsClass: 'dots reviews__dots',
        prevArrow: '<button class="reviews__arrow-left reviews__arrow"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M30 36L18 24L30 12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg></button>',
        nextArrow: '<button class="reviews__arrow-right reviews__arrow"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M18 36L30 24L18 12"  stroke="white"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg></button>',
    });


});