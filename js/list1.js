$(function () {
  //获取商品列表数据
  $.ajax({
    url: "../data/list.json",
    type: "get",
    dataType: "json",
    success: function (json) {
      var goodsStr = "";
      $.each(json, function (index, item) {
        goodsStr += `  <div class="main-xia">
                <div class="list-left">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/d1430013aa80d952f938e16258b23b6e.jpg?type=webp&imageView&thumbnail=430x430&quality=95"
                    alt=""
                  />
                  <div class="mask"></div>
                </div>
                <div class="maxBox">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/d1430013aa80d952f938e16258b23b6e.jpg?type=webp&imageView&thumbnail=430x430&quality=95"
                    alt=""
                  />
                </div>
                <div class="list-right">
                  <h3>2020新果上市，南非碧根果仁 150克</h3>
                  <div class="desc-gou">南非进口大果仁，酥脆醇香</div>
                  <div class="huodong">
                    <span class="hd-labal">活动价</span>
                    <span class="hd-jiage">￥39.9</span>
                  </div>
                  <div class="xianzhi">
                    <span class="xz-labal">限制</span>
                    <span class="xz-jieshi">特价商品不可与优惠券叠加使用</span>
                  </div>
                  <div class="gou-num">
                    <div class="gou-name">数量</div>
                    <div class="field f-left">
                      <button class="btn1">-</button>
                      <span>2</span>
                      <button class="btn2">+</button>
                    </div>
                  </div>
                  <div class="btnss">
                    <a href="goodsCart.html" class="goumai-btn">立即购买</a>
                    <a href="goodsCart.html" class="jiaru-btn">加入购物车</a>
                  </div>
                </div>
              </div>
                `;
      });
    },
  });
});
