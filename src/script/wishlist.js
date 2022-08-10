document.addEventListener('DOMContentLoaded', function () {
    (function () {
        //исходные данные по товару
        const data = [
            {
                id: '111',
                name: 'figma',
                price: 0
            },
            {
                id: '112',
                name: 'Sketch',
                price: 10
            },
            {
                id: '113',
                name: 'Visual Studio Code',
                price: 0
            },
            {
                id: '114',
                name: 'Notion',
                price: 20
            },
            {
                id: '115',
                name: 'Slack',
                price: 35
            },
            {
                id: '116',
                name: 'Invision',
                price: 41
            },{
                id: '117',
                name: 'Zeplin',
                price: 50
            },{
                id: '118',
                name: 'PHPStorm',
                price: 0
            },{
                id: '119',
                name: 'Toolbox',
                price: 0
            },{
                id: '120',
                name: 'Procreate',
                price: 26
            },
        ]
        //тело корзины
        const tableTBody = document.querySelector('.table__body')
        //находим лайки
        const links = document.querySelectorAll('.add-wishlist--js')
        //находим счетчики
        const wishlistCounterViews = document.querySelectorAll('.counter--js')
        //счетчик
        let wishlistCounter = 0;
        //циклом находим все сердечкиб выбираем каждое сердечко и вешеаем на него клик, класс актив ставиться если на сердечко нажалиб убираем лайк класс не активный
        links.forEach(function (link, index) {
            link.addEventListener('click', function (e) {
                e.preventDefault()
                link.classList.toggle('active');
                //счечик лайков. если класс содержит актив то мы плюсуем на один наш счетчик иначе минусуем
                const isAdd = link.classList.contains('active')
                if (isAdd) {
                    wishlistCounter++
                } else {
                    wishlistCounter--
                }
                //установка счетчиков лайков в мобильной и desctop версии. проходимся циклом по всем счетчикам и каждый счетчик мы добавляем в массив, где добавляються товары по лайку
                wishlistCounterViews.forEach(wishlistCounterView => {
                    wishlistCounterView.innerHTML = wishlistCounter
                })
                //поиск карточки получения айди карточки
                const currentItemId = link.closest('.card-tool').getAttribute('data-id');
                // поиск по массиву исходных данных. находим объект конкретной карточки
                let foundedItemCart = data.find(item => item.id === currentItemId)
                //добавление товаров в таблицу
                if (isAdd) {
                    const newItem = '<div class="table__tr" data-id="'+ foundedItemCart.id + '"><div>' + foundedItemCart.name + '</div><div>' + foundedItemCart.price + '</div></div>'
                    tableTBody.innerHTML += newItem
                    //удаление товаров из таблицы
                } else {
                    const itemToRemoveFromTr = document.querySelector('.table__body .table__tr[data-id="'+ foundedItemCart.id +'"]')
                    itemToRemoveFromTr.remove()
                }
            })
        });
    })();
})