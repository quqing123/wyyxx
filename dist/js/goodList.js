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

    window.location.href = "list.html"; //判断本地存储是否有数据

    if (localStorage.getItem("dan")) {
      var goodsArr = JSON.parse(localStorage.getItem("dan"));
    } else {
      var goodsArr = [];
    }

    goodsArr.push({
      code: code
    }); //更新本地存储的数据

    localStorage.setItem("goods", JSON.stringify(goodsArr));
  });
});