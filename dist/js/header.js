"use strict";

$(function () {
  // var titleTop = $(".headerg").offset().top;
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 175) {
      $(".headerg").css({
        position: "fixed",
        top: 0,
        // left: 128,
        display: "block"
      });
    } else {
      $(".headerg").css({
        position: "static",
        display: "none" //"position":"absolute",
        //"top":"200px"

      });
    }

    if ($(document).scrollTop() > 445) {
      $(".fix-left").css({
        position: "fixed",
        top: 60,
        // left: 128,
        display: "block"
      });
    } else {
      $(".fix-left").css({
        position: "static",
        display: "none" //"position":"absolute",
        //"top":"200px"

      });
    }

    if ($(document).scrollTop() > 445) {
      $(".fixedTool").css({
        position: "fixed",
        top: 60,
        // left: 128,
        display: "block"
      });
    } else {
      $(".fixedTool").css({
        position: "static",
        display: "none" //"position":"absolute",
        //"top":"200px"

      });
    }
  });
  $(".g-top").on("click", function () {
    $("body,html").animate({
      scrollTop: 0
    }, 100);
  });
});