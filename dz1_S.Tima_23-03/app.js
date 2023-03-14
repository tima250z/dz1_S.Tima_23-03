function validateINN() {
    const inn = document.getElementById('inn').value; // Получаем значение поля ввода
    const innRegex = /^\d{10}$|^\d{12}$/; // Регулярное выражение для ИНН

    if (innRegex.test(inn)) {
        alert('ИНН введен верно!');
    } else {
        alert('Пожалуйста, введите ИНН в правильном формате.');
    }
}
const container = document.getElementById('container');
const small = document.getElementById('small');

function moveSmallBlock(position) {
    small.style.left = position + 'px';
    if (position < container.offsetWidth - small.offsetWidth) {
        setTimeout(() => {
            moveSmallBlock(position + 10);
        }, 50);
    }
}

moveSmallBlock(0);
