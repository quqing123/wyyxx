$(function () {
  //获取本地存储中的数据
  var goodsArr = JSON.parse(localStorage.getItem("goods"));

  //获取数据
  $.ajax({
    url: "../data/list.json",
    type: "get",
    dataType: "json",
    success: function (json) {
      var domStr = " ";
      $.each(goodsArr, function (index, item) {
        $.each(json, function (ind, obj) {
          if (item.code == obj.code) {
            domStr += `
          <div class="mainn-row container">
            <div class="mainn-title container">
              <i>
                <span>首页</span>> <span>美食酒水</span>> <span>坚果炒货</span>>
                <span>${obj.title}</span>
              </i>
            </div>

            <div class="main-xia">
              <div class="main-left">
                <div class="list-left">
                  <img
                    src="${obj.imgurl1}"
                    alt=""
                    class="maxImg"
                  />
                  <div class="mask"></div>
                </div>
                <ul class="all-Img">
                  <li class="xiao-Img active">
                    <a href=""
                      ><img
                        src="${obj.img1}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                  <li class="xiao-Img">
                    <a href=""
                      ><img
                        src="${obj.img2}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                  <li class="xiao-Img">
                    <a href=""
                      ><img
                        src="${obj.img3}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                  <li class="xiao-Img">
                    <a href=""
                      ><img
                        src="${obj.img4}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                  <li class="xiao-Img">
                    <a href=""
                      ><img
                        src="${obj.img5}"
                        alt=""
                        class="xiaoImg"
                    /></a>
                  </li>
                </ul>
              </div>
              <div class="maxBox">
                <img
                  src="${obj.imgurl1}"
                  alt=""
                />
              </div>

              <div class="list-right">
                <h3>${obj.title}</h3>
                <div class="desc-gou">${obj.desc}</div>
                <div class="huodong">
                  <span class="hd-labal">活动价</span>
                  <span class="hd-jiage">${obj.price}</span>
                </div>
                <div class="xianzhi">
                  <span class="xz-labal">限制</span>
                  <span class="xz-jieshi">特价商品不可与优惠券叠加使用</span>
                </div>
                <div class="gou-num">
                  <div class="gou-name">数量</div>
                  <div class="field f-left">
                    <button class="btn1">-</button>
                    <span>1</span>
                    <button class="btn2">+</button>
                  </div>
                </div>
                <div class="btnss">
                  <a href="goodsCart.html" class="goumai-btn">立即购买</a>
                  <a class="jiaru-btn" code="${obj.code}">加入购物车</a>
                </div>
              </div>
            </div>
          </div>
                  `;
          }
        });
      });

      $(".main-listt").html(domStr);

      //大图切小图
      $(function () {
        $(".all-Img li a img").click(function () {
          //获取当前点击标签的src属性
          var srcVal = $(this).attr("src");
          // console.log(srcVal);
          $(".list-left .maxImg").attr("src", srcVal);
          $(".maxBox img").attr("src", srcVal);
          return false;
        });

        $(".all-Img li a img").mouseover(function () {
          //获取当前点击标签的src属性
          var srcVal = $(this).attr("src");
          // console.log(srcVal);
          $(".list-left .maxImg").attr("src", srcVal);
          $(".maxBox img").attr("src", srcVal);
          return false;
        });
      });

      var minBox = document.querySelector(".list-left");
      var mask = document.querySelector(".mask");
      var maxBox = document.querySelector(".maxBox");
      var maxImg = document.querySelector(".maxBox img");

      //放大镜------------------------------------------------------------------------------------
      // 鼠标移动，mask跟随移动
      minBox.onmousemove = function (ev) {
        var e = ev || Event;
        // 计算msk的定位坐标
        var maskLeft = e.pageX - offset(minBox).left - mask.clientWidth / 2;
        var maskTop = e.pageY - offset(minBox).top - mask.clientHeight / 2;

        // 限制mask移动范围
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
        var scaleY = maskTop / (minBox.clientHeight - mask.clientHeight);

        // 大图也跟随移动
        maxImg.style.left =
          -scaleX * (maxImg.clientWidth - maxBox.clientWidth) + "px";
        maxImg.style.top =
          -scaleY * (maxImg.clientHeight - maxBox.clientHeight) + "px";
      };

      minBox.onmouseenter = function () {
        mask.style.display = "block";
        maxBox.style.display = "block";
      };
      minBox.onmouseleave = function () {
        mask.style.display = "none";
        maxBox.style.display = "none";
      };
    },
  });

  $(".main-listt").on("click", ".jiaru-btn", function () {
    var code = $(this).attr("code");
    // console.log(code);

    //跳转到购物车
    window.location.href = "goodsCart.html";
    //判断本地是否有数据
    if (localStorage.getItem("mainn-row")) {
      var goodArr = JSON.parse(localStorage.getItem("mainn-row"));
    } else {
      var goodArr = [];
    }

    var hasGoods = false;

    if (goodArr.length > 0) {
      // 判断当前选中商品是否在购物车中
      $.each(goodArr, function (index, item) {
        console.log(index);
        console.log(item);
        if (item.code === code) {
          // 商品存在购物车中，数量+1
          item.num++;
          hasGoods = true;
          return false;
        }
      });
    }

    goodArr.push({ code: code });
    //更新本地存储的数据
    localStorage.setItem("goods", JSON.stringify(goodArr));
  });
});
