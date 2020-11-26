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
    console.log(123);
    var code = $(this).attr("code");
    console.log(code);

    var imgurl1 = $(this).attr("imgurl1");
    var img1 = $(this).attr("img1");
    var img2 = $(this).attr("img2");
    var img3 = $(this).attr("img3");
    var img4 = $(this).attr("img4");
    var img5 = $(this).attr("img5");
    var title = $(this).attr("title");
    var price = $(this).attr("price");
    var desc = $(this).attr("desc");

    var goodStr = {
      code: code,
      imgurl1: imgurl1,
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      title: title,
      price: price,
      desc: desc,
    };
    window.location.href = "list.html";
    localStorage.setItem("goods", JSON.stringify(goodStr));
  });
});
