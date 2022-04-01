document.addEventListener('DOMContentLoaded', function () {
(function () {
    const links = document.querySelectorAll('.add-wishlist--js')
    const wishlistCounterViews = document.querySelectorAll('.counter--js')
    let wishlistCounter = 0;

    links.forEach(function(link, index) {
        link.addEventListener('click', function (e){
            e.preventDefault()
            link.classList.toggle('active');
            console.log(e)
            console.log(link.classList.contains('active'))
            if (link.classList.contains('active')){
                wishlistCounter++
            } else{
                wishlistCounter--
            }
            wishlistCounterViews.forEach(wishlistCounterView => {
                wishlistCounterView.innerHTML = wishlistCounter
            })
        })
    });

})();
})