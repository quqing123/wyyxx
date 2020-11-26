var listObj = JSON.parse(localStorage.getItem("goods"));

var domStr = " ";

domStr += `
          <div class="mainn-row container">
            <div class="mainn-title container">
              <i>
                <span>首页</span>> <span>美食酒水</span>> <span>坚果炒货</span>>
                <span>${listObj.title}</span>
              </i>
            </div>

            <div class="main-xia">
              <div class="main-left">
                <div class="list-left">
                  <img
                    src="${listObj.imgurl1}"
                    alt=""
                    class="maxImg"
                  />
                  <div class="mask"></div>
                </div>
                <ul class="all-Img">
                  <li class="xiao-Img active">
                    <a href=""
                      ><img
                        src="${listObj.img1}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                  <li class="xiao-Img">
                    <a href=""
                      ><img
                        src="${listObj.img2}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                  <li class="xiao-Img">
                    <a href=""
                      ><img
                        src="${listObj.img3}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                  <li class="xiao-Img">
                    <a href=""
                      ><img
                        src="${listObj.img4}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                  <li class="xiao-Img">
                    <a href=""
                      ><img
                        src="${listObj.img5}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                </ul>
              </div>
              <div class="maxBox">
                <img
                  src="${listObj.imgurl1}"
                  alt=""
                />
              </div>

              <div class="list-right">
                <h3>${listObj.title}</h3>
                <div class="desc-gou">${listObj.desc}</div>
                <div class="huodong">
                  <span class="hd-labal">活动价</span>
                  <span class="hd-jiage">${listObj.price}</span>
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
          </div>
                  `;

$(".main-listt").html(domStr);
