var mySwiper = new Swiper(".new-xia", {
  // direction: 'vertical', // 垂直切换选项
  direction: "horizontal", // 水平切换选项
  loop: true, // 循环模式选项

  // autoplay:true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
