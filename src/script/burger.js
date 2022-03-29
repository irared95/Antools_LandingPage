document.addEventListener('DOMContentLoaded', function () {
    // $('.burger--js').on('click', function (){
    //     if($('.burger--js').hasClass('active')) {
    //         $('.nav--js').removeClass('active');
    //     } else {
    //         $('.nav--js').addClass('active');
    //     }
    // })

    const burger = document.querySelector('.burger--js');
    const navMenu = document.querySelector('.nav--js');

    burger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    })

});