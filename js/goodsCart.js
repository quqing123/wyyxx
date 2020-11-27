$(function () {
  //获取本地储存中的购物车数据
  var goodsArr = JSON.parse(localStorage.getItem("goods"));

  //获取数据
  $.ajax({
    url: "../data/list.json",
    type: "get",
    datatype: "json",
    success: function (json) {
      var domStr = " ";
      $.each(goodsArr, function (index, item) {
        $.each(json, function (ind, obj) {
          if (item.code === obj.code) {
            domStr += `
                      <li>
                      <img src="${obj.imgurl1}">
                      <h3>${obj.desc}</h3>
                      <p>${obj.price}</p>
                      <button class="btn1">-</button>
                      <span>1</span>
                      <button class="btn2">+</button>
                      <em>删除</em>
                      </li>
                      `;
          }
        });
      });
      $(".list").html(domStr);
    },
  });

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
    });
    //更新本地数据
    localStorage.setItem("goods", JSON.stringify(goodsArr));
  });

  //减
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
    });
    //更新本地数据
    localStorage.setItem("goods", JSON.stringify(goodsArr));
  });

  //商品移出购物车
  $(".list").on("click", "li em", function () {
    //删除该商品对应的li
    $(this).parent().remove();

    //更新本地存储中的数据
    var code = $(this).attr("code");
    //要删除数组元素
    $.each(goodsArr, function (index, item) {
      if (item.code === code) {
        goodsArr.splice(index, 1);
        return false;
      }
    });
    //判断购物车是否还有数据
    if (goodsArr.length > 0) {
      //更新本地数据
      localStorage.setItem("goods", JSON.stringify(goodsArr));
    } else {
      //清除本地数据
      localStorage.removeItem("goods");
    }
    alert("商品移出购物车成功");
  });
});
