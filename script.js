function nurbolotLoh() {
    let email = document.getElementById('email');
    let p = document.getElementById('p');
    p.style.color = 'gold';
    if (email.value === '') {
        p.textContent = 'Ваше поле ввода пусто';
    } else if (!email.value.includes('@')) {
        p.textContent = 'Вы не ввели @';
    } else {
        let parts = email.value.split('@');
        if (parts[0].length < 5) {
            p.textContent = 'До символа @ должно быть не меньше 5 букв';
        } else {
            let domainParts = parts[1].split('.');
            if (domainParts.length < 2) {
                p.textContent = 'Доменная часть должна содержать точку';
            } else if (domainParts[0].length === 0 || domainParts[1].length === 0) {
                p.textContent = 'Доменная часть до и после точки должна содержать символы';
            } else {
                alert('Вы зарегистрировались');
                p.textContent = '';
            }
        }
    }
}