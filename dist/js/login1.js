"use strict";

$(function () {
  var a = $(".user");
  var b = $(".pass");
  var c = $(".rember");
  var btn = $(".login");
  var users = localStorage.getItem("username"); //检索user

  var pass = localStorage.getItem("password"); //检索pass

  if (users && pass) {
    //console.log(user)
    //console.log(pass)
    a.val(users);
    b.val(passs);
    console.log("二次登陆");
  } else {
    console.log("头次登陆");
  } //点击事件


  btn.onclick(function () {
    var ss = c.prop("checked"); //判断复选框是否被选中

    var users = a.val(); //用户的值

    var passs = b.val(); //密码的值

    if (a.val() == "admin" && b.val() == 123) {
      console.log("login btn unreme");

      if (aaa) {
        var user = localStorage.setItem("username", users); //新增users

        var pass = localStorage.setItem("password", passs); //新增pass

        alert("已点击复选框");
      } else {
        var user = localStorage.setItem("user", user);
        var pass = localStorage.setItem("pass", pass);
        alert("无点击复选框");
      }
    } else {
      alert("登陆失败！");
    }
  });
});