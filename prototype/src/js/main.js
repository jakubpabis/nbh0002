'use strict';

function lazyImages() {
  $('.lazyset').each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
      $(this)
        .attr('srcset', $(this).data('srcset'))
        .removeAttr('data-srcset')
        .addClass('loaded');
    }
  });
  $('.lazy').each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
      $(this)
        .attr('src', $(this).data('src'))
        .removeAttr('data-src')
        .addClass('loaded');
    }
  });

  $(window).on('scroll resize', function () {
    $('.lazyset').each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
        $(this)
          .attr('srcset', $(this).data('srcset'))
          .removeAttr('data-srcset')
          .addClass('loaded');
      }
    });
    $('.lazy').each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
        $(this)
          .attr('src', $(this).data('src'))
          .removeAttr('data-src')
          .addClass('loaded');
      }
    });
  });
}

function uglyInput() {
  $('.ugly').each(function () {
    var $input = $(this).find('input, textarea');
    $input.on('change focusout', function () {
      if (!$input.val() === true) {
        $input.parent().find('.ugly-label').css({ opacity: 1 });
      } else {
        $input.parent().find('.ugly-label').css({ opacity: 0 });
      }
    });
  });
}

function productImgHover() {
  if (!$('body').hasClass('mobile-device')) {
    $('.products__product, li.product').on('mouseenter', function () {
      if ($(this).find('.products__product-img').find('.hover').length) {
        $(this)
          .find('.products__product-img')
          .find('.main, .attachment-woocommerce_thumbnail')
          .stop(true)
          .addClass('d-none');
        $(this)
          .find('.products__product-img')
          .find('.hover')
          .stop(true)
          .removeClass('d-none');
      }
    });
    $('.products__product, li.product').on('mouseleave', function () {
      if ($(this).find('.products__product-img').find('.hover').length) {
        $(this)
          .find('.products__product-img')
          .find('.main, .attachment-woocommerce_thumbnail')
          .removeClass('d-none');
        $(this)
          .find('.products__product-img')
          .find('.hover')
          .addClass('d-none');
      }
    });
  }
}

function addedToCartLink() {
  $(document).ajaxComplete(function (event, request, settings) {
    $(document)
      .find('.added_to_cart.wc-forward')
      .on('click', function (e) {
        e.preventDefault();
        $('#nbhdModalCart').modal('show');
      });
  });
}

function hideQty() {
  $('form').find('.quantity.hidden').prev('.quantity').remove();
}

function filterMobile() {
  var filter = $('.nbhd-products-archive-filters-title');
  filter.on('click', function () {
    if ($(window).width() <= 991) {
      if ($(this).next().hasClass('d-none')) {
        $(this).next().removeClass('d-none');
      } else {
        $(this).next().addClass('d-none');
      }
    }
  });
}

// function hidePaymentMethods() {
//   if ($('#shipping_method_0_flat_rate11').is(':checked')) {
//     $('.wc_payment_methods.payment_methods.methods')
//       .hide(200)
//       .addClass('d-none');
//   } else {
//     $('.wc_payment_methods.payment_methods.methods')
//       .show(200)
//       .removeClass('d-none');
//   }
//   $('#shipping_method')
//     .find('input')
//     .on('change', function () {
//       if ($('#shipping_method_0_flat_rate11').is(':checked')) {
//         $('.wc_payment_methods.payment_methods.methods')
//           .hide(200)
//           .addClass('d-none');
//       } else {
//         $('.wc_payment_methods.payment_methods.methods')
//           .show(200)
//           .removeClass('d-none');
//       }
//       console.log($(this));
//     });
// }

jQuery(document).ready(function () {
  lazyImages();
  uglyInput();
  feather.replace();
  productImgHover();
  addedToCartLink();
  hideQty();
  filterMobile();
  //hidePaymentMethods();

  // jQuery(document.body).on('updated_checkout', function () {
  //   //console.log('cos');
  //   $('.form-row.mailchimp-newsletter')
  //     .addClass('pretty p-default p-thick p-pulse')
  //     .find('label')
  //     .wrap('<div class="state p-warning-o"></div>');
  // });

  if (!getCookie('kupon-10') || getCookie('kupon-10') !== 'showed') {
    console.log('somesome');
    if (getUrlParameter('already')) {
      setCookie('kupon-10', getUrlParameter('already'), 1);
      $('#already-modal-newsletter').modal('show');
    } else if (getUrlParameter('code')) {
      setCookie('kupon-10', getUrlParameter('code'), 1);
      $('#code-modal-newsletter').modal('show');
    } else {
      setTimeout(function () {
        $('#open-modal-newsletter').modal('show');
        setCookie('kupon-10', 'showed', 1);
      }, 5000);
    }
  }

  $('#nbhdModalSearch').on('shown.bs.modal', function () {
    $('input.dgwt-wcas-search-input').trigger('focus');
  });

  var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});

jQuery(window).on('load', function () {
  lazyImages();
  // $('.form-row.mailchimp-newsletter')
  //   .addClass('pretty p-default p-thick p-pulse')
  //   .find('label')
  //   .wrap('<div class="state p-warning-o"></div>');
});
