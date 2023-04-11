window.onload = function () {
  let fullName = document.getElementById("full-name");
  let regex = /[0-9]/g;
  fullName.oninput = function () {
    this.value = this.value.replace(regex, "");
  };

  let yourUserName = document.getElementById("your-name");
  let signs = /['.'',']/g;

  yourUserName.oninput = function () {
    this.value = this.value.replace(signs, "");
  };

  let checkBox = document.getElementById("checkbox");

  checkBox.onclick = (e) => {
    if (checkBox.checked) {
      console.log("Согласен");
    } else {
      console.log("Не согласен");
    }
  };

  let userEmail = document.getElementById("email");
  let password = document.getElementById("password");
  let repeatPassword = document.getElementById("password-repeat");
  let popUp = document.querySelector(".popup");
  let createForm = (document.getElementById("create-form").onclick =
    function () {
      if (!fullName.value) {
        alert("Заполните поле Full Name");
        return;
      }
      if (!yourUserName.value) {
        alert("Заполните поле Your username");
        return;
      }
      if (!userEmail.value) {
        alert("Заполните поле E-mail");
        return;
      }
      if (!password.value) {
        alert("Заполните поле Password");
        return;
      }
      if (!repeatPassword.value) {
        alert("Заполните поле Repeat Password");
        return;
      }
      if (password.value.length < 8) {
        alert("Создайте надёжный пароль более 8 символов");
        return;
      }
      if (password.value !== repeatPassword.value) {
        alert("Пароли не совпадают");
        return;
      }
      if (checkBox.checked) {
      } else {
        alert("Нужно согласиться с политкой конфиденциальности");
        return;
      }
      popUp.classList.add("popup-opened");
    });
  let popUpBtn = (document.getElementById("popup-btn").onclick = function () {
    popUp.classList.remove("popup-opened");
    login();
  });
  document.getElementById("link").onclick = login;

  function login() {
    document.getElementById("main-info-form").reset();
    document.getElementsByTagName("h2")[0].innerHTML = "Log in to the system";
    document.getElementById("input-full-name").remove();
    document.getElementById("input-email").remove();
    document.getElementById("input-password-repeat").remove();
    document.getElementById("main-info-check").remove();
    document.getElementById("create-form").innerHTML = "Sign In";
    document.getElementById("link").remove();
    document.getElementById("create-form").onclick = function () {
      if (!yourUserName.value) {
        alert("Заполните поле Your username");
        return;
      } else if (!password.value) {
        alert("Заполните поле Password");
        return;
      } else {
        alert("Добро пожаловать " + yourUserName.value);
      }
      document.getElementById("main-info-form").reset();
    };
  }
};

console.log("добавил ветку dev-2");
