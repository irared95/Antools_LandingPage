(function () {
    let links = document.querySelectorAll('.add-wishlist--js')

    links.forEach(function(link, index) {
        link.addEventListener('click', function (e){
            e.preventDefault()
            link.classList.toggle('active');
            console.log(e)
        })
    });
    console.log(links)
})();