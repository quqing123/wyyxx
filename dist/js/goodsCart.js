"use strict";

$(function () {
  //判断本地存储是否有购物车数据
  if (localStorage.getItem("goods")) {
    //有数据
    //获取本地储存中的购物车数据
    var goodsArr = JSON.parse(localStorage.getItem("goods")); //获取数据

    $.ajax({
      url: "../data/list.json",
      type: "get",
      datatype: "json",
      success: function success(json) {
        var domStr = " ";
        $.each(goodsArr, function (index, item) {
          $.each(json, function (ind, obj) {
            if (item.code === obj.code) {
              domStr += "\n                      <li>\n                      <img src=\"".concat(obj.imgurl1, "\">\n                      <h3>").concat(obj.desc, "</h3>\n                      <p>").concat(obj.price, "</p>\n                      <button class=\"btn1\">-</button>\n                      <span>").concat(item.num, "</span>\n                      <button class=\"btn2\">+</button>\n                      <em code=\"").concat(obj.code, "\">\u5220\u9664</em>\n                      </li>\n                      ");
            }
          });
        });
        $(".list").html(domStr);
      }
    }); //加减商品数量
    //加

    $(".list").on("click", ".btn2", function () {
      var code = $(this).siblings().attr("code");
      var goodsArr = JSON.parse(localStorage.getItem("goods"));

      var _this = this;

      $.each(goodsArr, function (index, item) {
        if (_this.code === code) {
          item.num++;
        }

        $(_this).prev().text(item.num);
      }); //更新本地数据

      localStorage.setItem("goods", JSON.stringify(goodsArr));
    }); //减

    $(".list").on("click", ".btn1", function () {
      var code = $(this).siblings().attr("code");
      var goodsArr = JSON.parse(localStorage.getItem("goods"));

      var _this = this;

      $.each(goodsArr, function (index, item) {
        if (_this.code === code) {
          item.num--;

          if (item.num <= 1) {
            item.num = 1;
          }
        }

        $(_this).next().text(item.num);
      }); //更新本地数据

      localStorage.setItem("goods", JSON.stringify(goodsArr));
    }); //商品移出购物车

    $(".list").on("click", "li em", function () {
      //删除该商品对应的li
      $(this).parent().remove(); //更新本地存储中的数据

      var code = $(this).attr("code"); //要删除数组元素

      $.each(goodsArr, function (index, item) {
        if (item.code === code) {
          goodsArr.splice(index, 1);
          return false;
        }
      }); //判断购物车是否还有数据

      if (goodsArr.length > 0) {
        //更新本地数据
        localStorage.setItem("goods", JSON.stringify(goodsArr));
      } else {
        //清除本地数据
        localStorage.removeItem("goods");
        var nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据！</li>';
        $(".list").html(nodata);
      }

      alert("商品移出购物车成功");
    });
  } else {
    //没数据
    var nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据！</li>';
    $(".list").html(nodata);
  }
});