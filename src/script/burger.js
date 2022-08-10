document.addEventListener('DOMContentLoaded', function () {

    const burger = document.querySelector('.burger--js');
    const navMenu = document.querySelector('.nav--js');

    burger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    })

});