window.onload = function () {
    console.log(window.innerWidth)
    if (window.innerWidth < 1240) {
        document.querySelector('body').style.display = 'none';
        alert("Данный тип экрана пока не поддерживается, рекомендуем использовать ПК или ноутбук, с разрешением экрана не менее 1240 пискелей в ширину")
        console.log('сработало')
    }
    else {
        document.querySelector('body').style.display = 'flex';
    }
}