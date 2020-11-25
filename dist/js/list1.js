"use strict";

$(function () {
  //获取商品列表数据
  $.ajax({
    url: "../data/list.json",
    type: "get",
    dataType: "json",
    success: function success(json) {
      var goodsStr = "";
      $.each(json, function (index, item) {
        goodsStr += "  <div class=\"main-xia\">\n                <div class=\"list-left\">\n                  <img\n                    src=\"https://yanxuan-item.nosdn.127.net/d1430013aa80d952f938e16258b23b6e.jpg?type=webp&imageView&thumbnail=430x430&quality=95\"\n                    alt=\"\"\n                  />\n                  <div class=\"mask\"></div>\n                </div>\n                <div class=\"maxBox\">\n                  <img\n                    src=\"https://yanxuan-item.nosdn.127.net/d1430013aa80d952f938e16258b23b6e.jpg?type=webp&imageView&thumbnail=430x430&quality=95\"\n                    alt=\"\"\n                  />\n                </div>\n                <div class=\"list-right\">\n                  <h3>2020\u65B0\u679C\u4E0A\u5E02\uFF0C\u5357\u975E\u78A7\u6839\u679C\u4EC1 150\u514B</h3>\n                  <div class=\"desc-gou\">\u5357\u975E\u8FDB\u53E3\u5927\u679C\u4EC1\uFF0C\u9165\u8106\u9187\u9999</div>\n                  <div class=\"huodong\">\n                    <span class=\"hd-labal\">\u6D3B\u52A8\u4EF7</span>\n                    <span class=\"hd-jiage\">\uFFE539.9</span>\n                  </div>\n                  <div class=\"xianzhi\">\n                    <span class=\"xz-labal\">\u9650\u5236</span>\n                    <span class=\"xz-jieshi\">\u7279\u4EF7\u5546\u54C1\u4E0D\u53EF\u4E0E\u4F18\u60E0\u5238\u53E0\u52A0\u4F7F\u7528</span>\n                  </div>\n                  <div class=\"gou-num\">\n                    <div class=\"gou-name\">\u6570\u91CF</div>\n                    <div class=\"field f-left\">\n                      <button class=\"btn1\">-</button>\n                      <span>2</span>\n                      <button class=\"btn2\">+</button>\n                    </div>\n                  </div>\n                  <div class=\"btnss\">\n                    <a href=\"goodsCart.html\" class=\"goumai-btn\">\u7ACB\u5373\u8D2D\u4E70</a>\n                    <a href=\"goodsCart.html\" class=\"jiaru-btn\">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                  </div>\n                </div>\n              </div>\n                ";
      });
    }
  });
});