var login = document.querySelector(".login");
var user = document.querySelector(".user");
var pass = document.querySelector(".pass");
var auto = document.querySelector(".auto");

//判断之前是否有存用户登录账号
if (getCookie("username")) {
  user.value = getCookie("username");
  pass.value = getCookie("password");
  auto.value = true;
}

//用户登录
login.onclick = function () {
  if (auto.checked) {
    setCookie({
      key: "username",
      val: user.value,
      days: 15,
    });
    setCookie({
      key: "password",
      val: pass.value,
      days: 15,
    });
  } else {
    removeCookie("username");
    removeCookie("password");
  }
  location.href = "index.html";
};

//用户注册
$(".add").on("click", function () {
  var user = $(".user").val().trim();
  var pass = $(".pass").val().trim();
  var goodsArr = [{ username: user, password: pass }];
  if (localStorage.getItem("user") == null) {
    //如果本地数据库为空
    localStorage.setItem("user", JSON.stringify(goodsArr));
    alert("注册成功");
  } else {
    var goodsObj = JSON.parse(localStorage.getItem("user"));
    for (var i = 0, len = goodsObj.length; i < len; i++) {
      if (user === goodsObj[i].username) {
        alert("用户名已存在");
        return;
      } else {
        goodsObj.push({ username: user, password: pass });
        localStorage.setItem("user", JSON.stringify(goodsObj));
        alert("注册成功");
        return;
      }
    }
  }
});
