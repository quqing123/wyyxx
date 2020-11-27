var mySwiper = new Swiper(".swiper-container", {
  // direction: 'vertical', // 垂直切换选项
  direction: "horizontal", // 水平切换选项
  loop: true, // 循环模式选项

  // autoplay: true,

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 如果需要滚动条
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
    success: function (json) {
      // console.log(json)
      var goodsStr = "";
      $.each(json, function (index, item) {
        goodsStr += `
        <li class="dan" code="${item.code}">
          <div class="dan-top">
            <img
              src="${item.imgurl1}"
              alt=""
              class="m11"
            />
            <img
              src="${item.imgurl2}"
              alt=""
              class="m22"
            />
          </div>

          <div class="dan-bottom">
            <h4 class="dan-p">${item.title}</h4>
            <p class="dan-jia">${item.price}</p>
            <p class="dan-price">${item.desc}</p>
          </div>
        </li>`;
      });
      $(".lie-goods").html(goodsStr);
    },
  });

  //点击加入详情页
  $(".lie-goods").on("click", " .dan", function () {
    // console.log(123);
    var code = $(this).attr("code");
    // console.log(code);
    window.location.href = "list.html";

    //判断本地存储是否有数据
    if (localStorage.getItem("dan")) {
      var goodsArr = JSON.parse(localStorage.getItem("dan"));
    } else {
      var goodsArr = [];
    }
    goodsArr.push({ code: code });
    //更新本地存储的数据
    localStorage.setItem("goods", JSON.stringify(goodsArr));
  });
});
