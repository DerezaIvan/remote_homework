function login() {
    document.getElementById('main-info-form').reset();
    document.getElementsByTagName('h2')[0].innerHTML = "Log in to the system";
    document.getElementById('input-full-name').remove();
    document.getElementById('input-email').remove();
    document.getElementById('input-password-repeat').remove();
    document.getElementById('main-info-check').remove();
    document.getElementById('create-form').innerHTML = "Sign In";
    document.getElementById('link').remove();
    document.getElementById('create-form').onclick = function () {
        if (!yourUserName.value) {
            alert('Заполните поле Your username')
            return
        } else if (!password.value) {
            alert('Заполните поле Password')
            return;
        } else {
            alert("Добро пожаловать " + yourUserName.value)
        }
        document.getElementById('main-info-form').reset();
    }
}
}