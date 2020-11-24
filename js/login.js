$(function () {
  $("#englubutton").click(function () {
    var num = $("#username").val();
    var psd = $("#password").val();

    if (!num || !psd) {
      alert("请输入账号密码");
      return;
    }
    console.log(num);
    console.log(psd);

    $.post("./data/login.php", { name: num, pwd: psd }, function (res) {
      var arr = JSON.parse(res);
      console.log(arr);
      alert(arr.msg);
      if (arr.err == 0) {
        if (localStorage.getItem("user")) {
          var userArr = JSON.parse(localStorage.getItem("user"));
        } else {
          var userArr = [];
        }
        userArr.push({ name: num });
        localStorage.setItem("user", JSON.stringify(userArr));
        location.href = "./index.html";
      }
    });
  });
});
