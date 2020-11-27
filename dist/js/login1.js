"use strict";

var login = document.querySelector(".login");
var user = document.querySelector(".user");
var pass = document.querySelector(".pass");
var auto = document.querySelector(".auto"); //判断之前是否有存用户登录账号

if (getCookie("username")) {
  user.value = getCookie("username");
  pass.value = getCookie("password");
  auto.value = true;
} //用户登录


login.onclick = function () {
  if (auto.checked) {
    setCookie({
      key: "username",
      val: user.value,
      days: 15
    });
    setCookie({
      key: "password",
      val: pass.value,
      days: 15
    });
  } else {
    removeCookie("username");
    removeCookie("password");
  }

  location.href = "index.html";
};