document.addEventListener('DOMContentLoaded', function () {

    const body = document.querySelector('body')
    const wishlistButtons = document.querySelectorAll('.wishlist--js')
    const modal = document.querySelector('.modal--js')
    const overlay = document.querySelector('.overlay')
    const close = document.querySelector('.modal__close--js')


    function openModal() {
        body.classList.add('no-scroll');
        overlay.classList.add('active');
        modal.classList.add('active');
        close.classList.add('active');
    }

    function closeModal() {
        body.classList.remove('no-scroll');
        overlay.classList.remove('active');
        modal.classList.remove('active');
        close.classList.remove('active');
    }

    overlay.addEventListener('click', function() {
        closeModal()
    })

    close.addEventListener('click', function() {
        closeModal()
    })

    wishlistButtons.forEach(wishlistButton => {
        wishlistButton.addEventListener('click' ,function (e){
            openModal()
        });
    })



});