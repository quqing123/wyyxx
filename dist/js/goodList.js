"use strict";

var mySwiper = new Swiper(".swiper-container", {
  // direction: 'vertical', // 垂直切换选项
  direction: "horizontal",
  // 水平切换选项
  loop: true,
  // 循环模式选项
  // autoplay: true,
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  } // 如果需要滚动条
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

});
$(function () {
  // 获取商品列表数据
  $.ajax({
    url: "../data/list.json",
    type: "get",
    dataType: "json",
    success: function success(json) {
      // console.log(json)
      var goodsStr = "";
      $.each(json, function (index, item) {
        goodsStr += "\n        <li class=\"dan\" code=\"".concat(item.code, "\">\n          <div class=\"dan-top\">\n            <img\n              src=\"").concat(item.imgurl1, "\"\n              alt=\"\"\n              class=\"m11\"\n            />\n            <img\n              src=\"").concat(item.imgurl2, "\"\n              alt=\"\"\n              class=\"m22\"\n            />\n          </div>\n\n          <div class=\"dan-bottom\">\n            <h4 class=\"dan-p\">").concat(item.title, "</h4>\n            <p class=\"dan-jia\">").concat(item.price, "</p>\n            <p class=\"dan-price\">").concat(item.desc, "</p>\n          </div>\n        </li>");
      });
      $(".lie-goods").html(goodsStr);
    }
  }); //点击加入详情页

  $(".lie-goods").on("click", " .dan", function () {
    // console.log(123);
    var code = $(this).attr("code"); // console.log(code);

    var imgurl1 = $(this).attr("imgurl1");
    var img1 = $(this).attr("img1");
    var img2 = $(this).attr("img2");
    var img3 = $(this).attr("img3");
    var img4 = $(this).attr("img4");
    var img5 = $(this).attr("img5");
    var title = $(this).attr("title");
    var price = $(this).attr("price");
    var desc = $(this).attr("desc");
    console.log(imgurl1);
    var goodStr = {
      code: code,
      imgurl1: imgurl1,
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      title: title,
      price: price,
      desc: desc
    }; // window.location.href = "list.html";
    //更新本地存储的数据

    localStorage.setItem("goods", JSON.stringify(goodStr));
  });
});