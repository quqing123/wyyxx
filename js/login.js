$(function () {
  //登录
  $(".login").click(function () {
    var num = $(".user").val();
    var psd = $(".pass").val();
    console.log($(".user"));
    console.log(psd);
    if (!num || !psd) {
      alert("请输入账号密码");
      return;
    }

    $.post("../data/login.php", { user: num, pass: psd }, function (res) {
      var arr = JSON.parse(res);
      console.log(arr);
      alert(arr.msg);
      if (arr.err == 0) {
        if (localStorage.getItem("user")) {
          var userArr = JSON.parse(localStorage.getItem("user"));
        } else {
          var userArr = [];
        }
        userArr.push({ user: num });
        localStorage.setItem("user", JSON.stringify(userArr));
        location.href = "index.html";
      }
    });
  });

  //注册
  $(".add").click(function () {
    var num = $(".user").val();
    var psd = $(".pass").val();
    console.log(num);
    console.log(psd);
    if (!num || !psd) {
      alert("请输入账号密码");
      return;
    }

    $.post("../data/login.php", { user: num, pass: psd }, function (res) {
      var arr = JSON.parse(res);
      console.log(arr);
      alert(arr.msg);
      if (arr.err == 0) {
        if (localStorage.getItem("user")) {
          var userArr = JSON.parse(localStorage.getItem("user"));
        } else {
          var userArr = [];
        }
        userArr.push({ user: num });
        localStorage.setItem("user", JSON.stringify(userArr));
        location.href = "login.html";
      }
    });
  });
});
