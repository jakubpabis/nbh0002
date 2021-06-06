"use strict";

function lazyImages() {
  $(".lazyset").each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
      $(this)
        .attr("srcset", $(this).data("srcset"))
        .removeAttr("data-srcset")
        .addClass("loaded");
    }
  });
  $(".lazy").each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
      $(this)
        .attr("src", $(this).data("src"))
        .removeAttr("data-src")
        .addClass("loaded");
    }
  });

  $(window).on("scroll resize", function () {
    $(".lazyset").each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
        $(this)
          .attr("srcset", $(this).data("srcset"))
          .removeAttr("data-srcset")
          .addClass("loaded");
      }
    });
    $(".lazy").each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass("loaded")) {
        $(this)
          .attr("src", $(this).data("src"))
          .removeAttr("data-src")
          .addClass("loaded");
      }
    });
  });
}

function uglyInput() {
  $(".ugly").each(function () {
    var $input = $(this).find("input, textarea");
    $input.on("change focusout", function () {
      if (!$input.val() === true) {
        $input.parent().find(".ugly-label").css({ opacity: 1 });
      } else {
        $input.parent().find(".ugly-label").css({ opacity: 0 });
      }
    });
  });
}

function productImgHover() {
  if (!$("body").hasClass("mobile-device")) {
    $(".products__product, li.product").on("mouseenter", function () {
      if ($(this).find(".products__product-img").find(".hover").length) {
        $(this)
          .find(".products__product-img")
          .find(".main, .attachment-woocommerce_thumbnail")
          .stop(true)
          .addClass("d-none");
        $(this)
          .find(".products__product-img")
          .find(".hover")
          .stop(true)
          .removeClass("d-none");
      }
    });
    $(".products__product, li.product").on("mouseleave", function () {
      if ($(this).find(".products__product-img").find(".hover").length) {
        $(this)
          .find(".products__product-img")
          .find(".main, .attachment-woocommerce_thumbnail")
          .removeClass("d-none");
        $(this)
          .find(".products__product-img")
          .find(".hover")
          .addClass("d-none");
      }
    });
  }
}

jQuery(document).ready(function () {
  lazyImages();
  uglyInput();
  feather.replace();
  productImgHover();

  var swiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});

jQuery(window).on("load", function () {
  lazyImages();
});
