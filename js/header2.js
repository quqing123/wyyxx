$(function () {
  // 获取商品列表数据
  $.ajax({
    url: "../data/wy_header.json",
    type: "get",
    dataType: "json",
    success: function (json) {
      //console.log(json);
      var goodsStr = [];

      for (var i = 0; i < json.data.cateList.length; i++) {
        // console.log(json.data.cateList);
        var goodsStr4 = "";
        $.each(json.data.cateList[i].subCateGroupList, function (index, item) {
          var goodsStr5 = "";
          $.each(item.categoryList, function (index1, item1) {
            goodsStr5 += ` 
              <div class="list-column-item">
               <a href="#" title="口碑好物">
              <img
                class="item-img"
                src="${item1.bannerUrl}"
                alt=""
              />
              <span class="item-text">${item1.name}</span>
            </a>
            </div>
          `;
          });
          goodsStr4 += `
           
              <div class="list-group">
                <div class="nav-list-name">${item.name}</div>
                <div class="list-column">
               ${goodsStr5}
                </div>
              </div>
        
           
            `;
        });
        // console.log(goodsStr4);
        goodsStr[i] = `
          <li class="tabnav-item">
          <a class="na" href=" " title="j居家生活"
            >${json.data.cateList[i].name}</a
          >
          <div class="yinchu-nav">
          <ul class="nav-list">
   ${goodsStr4}
   </div></ul>
        </li>
          `;
        $(".tabNav").append(goodsStr[i]);
      }
      $(".tabNav").append(`  <li class="tabnav-item">
      <a class="na" href=" http://localhost:3000">为你严选</a>
    </li>

    <li class="tabnav-item">
      <a class="na" href=" http://localhost:3000">众筹</a>
    </li> `);
    },
  });
});
