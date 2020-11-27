"use strict";

$(function () {
  //获取本地存储中的数据
  var goodsArr = JSON.parse(localStorage.getItem("goods")); //获取数据

  $.ajax({
    url: "../data/list.json",
    type: "get",
    dataType: "json",
    success: function success(json) {
      var domStr = " ";
      $.each(goodsArr, function (index, item) {
        $.each(json, function (ind, obj) {
          if (item.code == obj.code) {
            domStr += "\n          <div class=\"mainn-row container\">\n            <div class=\"mainn-title container\">\n              <i>\n                <span>\u9996\u9875</span>> <span>\u7F8E\u98DF\u9152\u6C34</span>> <span>\u575A\u679C\u7092\u8D27</span>>\n                <span>".concat(obj.title, "</span>\n              </i>\n            </div>\n\n            <div class=\"main-xia\">\n              <div class=\"main-left\">\n                <div class=\"list-left\">\n                  <img\n                    src=\"").concat(obj.imgurl1, "\"\n                    alt=\"\"\n                    class=\"maxImg\"\n                  />\n                  <div class=\"mask\"></div>\n                </div>\n                <ul class=\"all-Img\">\n                  <li class=\"xiao-Img active\">\n                    <a href=\"\"\n                      ><img\n                        src=\"").concat(obj.img1, "\"\n                        alt=\"\"\n                        class=\"xiaoImg\"\n                    /></a>\n                  </li>\n                  <li class=\"xiao-Img\">\n                    <a href=\"\"\n                      ><img\n                        src=\"").concat(obj.img2, "\"\n                        alt=\"\"\n                        class=\"xiaoImg\"\n                    /></a>\n                  </li>\n                  <li class=\"xiao-Img\">\n                    <a href=\"\"\n                      ><img\n                        src=\"").concat(obj.img3, "\"\n                        alt=\"\"\n                        class=\"xiaoImg\"\n                    /></a>\n                  </li>\n                  <li class=\"xiao-Img\">\n                    <a href=\"\"\n                      ><img\n                        src=\"").concat(obj.img4, "\"\n                        alt=\"\"\n                        class=\"xiaoImg\"\n                    /></a>\n                  </li>\n                  <li class=\"xiao-Img\">\n                    <a href=\"\"\n                      ><img\n                        src=\"").concat(obj.img5, "\"\n                        alt=\"\"\n                        class=\"xiaoImg\"\n                    /></a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"maxBox\">\n                <img\n                  src=\"").concat(obj.imgurl1, "\"\n                  alt=\"\"\n                />\n              </div>\n\n              <div class=\"list-right\">\n                <h3>").concat(obj.title, "</h3>\n                <div class=\"desc-gou\">").concat(obj.desc, "</div>\n                <div class=\"huodong\">\n                  <span class=\"hd-labal\">\u6D3B\u52A8\u4EF7</span>\n                  <span class=\"hd-jiage\">").concat(obj.price, "</span>\n                </div>\n                <div class=\"xianzhi\">\n                  <span class=\"xz-labal\">\u9650\u5236</span>\n                  <span class=\"xz-jieshi\">\u7279\u4EF7\u5546\u54C1\u4E0D\u53EF\u4E0E\u4F18\u60E0\u5238\u53E0\u52A0\u4F7F\u7528</span>\n                </div>\n                <div class=\"gou-num\">\n                  <div class=\"gou-name\">\u6570\u91CF</div>\n                  <div class=\"field f-left\">\n                    <button class=\"btn1\">-</button>\n                    <span>1</span>\n                    <button class=\"btn2\">+</button>\n                  </div>\n                </div>\n                <div class=\"btnss\">\n                  <a href=\"goodsCart.html\" class=\"goumai-btn\">\u7ACB\u5373\u8D2D\u4E70</a>\n                  <a href=\"goodsCart.html\" class=\"jiaru-btn\">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                </div>\n              </div>\n            </div>\n          </div>\n                  ");
          }
        });
      });
      $(".main-listt").html(domStr); //大图切小图

      $(function () {
        $(".all-Img li a img").click(function () {
          //获取当前点击标签的src属性
          var srcVal = $(this).attr("src"); // console.log(srcVal);

          $(".list-left .maxImg").attr("src", srcVal);
          $(".maxBox img").attr("src", srcVal);
          return false;
        });
        $(".all-Img li a img").mouseover(function () {
          //获取当前点击标签的src属性
          var srcVal = $(this).attr("src"); // console.log(srcVal);

          $(".list-left .maxImg").attr("src", srcVal);
          $(".maxBox img").attr("src", srcVal);
          return false;
        });
      });
      var minBox = document.querySelector(".list-left");
      var mask = document.querySelector(".mask");
      var maxBox = document.querySelector(".maxBox");
      var maxImg = document.querySelector(".maxBox img"); //放大镜------------------------------------------------------------------------------------
      // 鼠标移动，mask跟随移动

      minBox.onmousemove = function (ev) {
        var e = ev || Event; // 计算msk的定位坐标

        var maskLeft = e.pageX - offset(minBox).left - mask.clientWidth / 2;
        var maskTop = e.pageY - offset(minBox).top - mask.clientHeight / 2; // 限制mask移动范围

        if (maskLeft < 0) {
          maskLeft = 0;
        }

        if (maskLeft >= minBox.clientWidth - mask.clientWidth) {
          maskLeft = minBox.clientWidth - mask.clientWidth;
        }

        if (maskTop < 0) {
          maskTop = 0;
        }

        if (maskTop >= minBox.clientHeight - mask.clientHeight) {
          maskTop = minBox.clientHeight - mask.clientHeight;
        }

        mask.style.left = maskLeft + "px";
        mask.style.top = maskTop + "px";
        var scaleX = maskLeft / (minBox.clientWidth - mask.clientWidth);
        var scaleY = maskTop / (minBox.clientHeight - mask.clientHeight); // 大图也跟随移动

        maxImg.style.left = -scaleX * (maxImg.clientWidth - maxBox.clientWidth) + "px";
        maxImg.style.top = -scaleY * (maxImg.clientHeight - maxBox.clientHeight) + "px";
      };

      minBox.onmouseenter = function () {
        mask.style.display = "block";
        maxBox.style.display = "block";
      };

      minBox.onmouseleave = function () {
        mask.style.display = "none";
        maxBox.style.display = "none";
      };
    }
  });
});