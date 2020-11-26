"use strict";

$(function () {
  // 获取商品列表数据
  $.ajax({
    url: "../data/wy_header.json",
    type: "get",
    dataType: "json",
    success: function success(json) {
      //console.log(json);
      var goodsStr = [];

      for (var i = 0; i < json.data.cateList.length; i++) {
        // console.log(json.data.cateList);
        var goodsStr4 = "";
        $.each(json.data.cateList[i].subCateGroupList, function (index, item) {
          var goodsStr5 = "";
          $.each(item.categoryList, function (index1, item1) {
            goodsStr5 += " \n                <div class=\"list-column-item\">\n                 <a href=\"#\" title=\"\u53E3\u7891\u597D\u7269\">\n                <img\n                  class=\"item-img\"\n                  src=\"".concat(item1.bannerUrl, "\"\n                  alt=\"\"\n                />\n                <span class=\"item-text\">").concat(item1.name, "</span>\n              </a>\n              </div>\n            ");
          });
          goodsStr4 += "\n             \n                <div class=\"list-group\">\n                  <div class=\"nav-list-name\">".concat(item.name, "</div>\n                  <div class=\"list-column\">\n                 ").concat(goodsStr5, "\n                  </div>\n                </div>\n          \n             \n              ");
        }); // console.log(goodsStr4);

        goodsStr[i] = "\n            <li class=\"tabnav-item\">\n            <a class=\"na\" href=\" \" title=\"j\u5C45\u5BB6\u751F\u6D3B\"\n              >".concat(json.data.cateList[i].name, "</a\n            >\n            <div class=\"yinchu-nav\">\n            <ul class=\"nav-list\">\n     ").concat(goodsStr4, "\n     </div></ul>\n          </li>\n            ");
        $(".tabNav1").append(goodsStr[i]);
      }
    }
  });
});