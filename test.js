document.querySelectorAll('.test-item').forEach(function (item) {
    item.querySelectorAll('.var').forEach(function (variant) {
        variant.addEventListener('click', function () {
            item.querySelectorAll('.var').forEach(function(variant) {
                if (variant.classList.contains('chosed')) {
                    variant.classList.remove('chosed')
                }
            })
            variant.classList.add('chosed')
        })
    })
})

document.querySelector('.button').addEventListener('click', function () {
    i = 0;
    document.querySelectorAll('.chosed').forEach(function (item) {
        if (item.querySelector('p').id == 'yes') {
            i += 1;
        }
    })
    if (i >= 6) {
        document.querySelector('#result').innerText = 'Вероятнее всего Вы синестет!'
    } else {
        document.querySelector('#result').innerText = 'Cкорее всего, Вам не свойственна синестезия'
    }
    document.querySelector('.wrapper').style.display = 'flex';
})
document.querySelector('.repeat').addEventListener('click', function () {
    document.querySelector('body').scrollIntoView();
    location.reload();
})