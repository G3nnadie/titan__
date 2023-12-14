$(document).ready(function () {

  // Modal
  $('.open-modal').click(function() {
    $('.modal__order').fadeIn();
  });

  $('.modal__close').click(function() {
    $('.modal').fadeOut();
  });

  $(document).click(function(event) {
    if ($(event.target).closest('.modal__box').length 
      || $(event.target).closest('.open-modal').length ) return;
      $('.modal').fadeOut();
      event.stopPropagation();
  });

  // Vantage no link
  $('.vantage__link').click(function(e) {
    e.preventDefault();
  });

  // Scroll spee
  $('.nav__list').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });

  // Show menu
  $('.navbar-toggle').click(function() {
    $('.navbar-toggle').toggleClass('active');
    $('.nav__normal').slideToggle( "slow", function() {});
  });

  $('.nav__link').click(function() {
    $('.navbar-toggle').removeClass('active');
    $('.nav__normal').slideToggle( "slow", function() {});
  });

  // Header mobile
  $(window).scroll(function() { 
    var top = $(document).scrollTop();
    if (top > 0) {
      $('.header').addClass('header__mob');
      $('.header__mobile_top').fadeIn();
    }
    else {
      $('.header').removeClass('header__mob');
      $('.header__mobile_top').fadeOut();
    }
  });

  // Header scroll
  $(window).scroll(function() { 
    var top = $(document).scrollTop();
    if (top > 250) {
      $('.header__scroll').addClass('header__scroll_show');
    }
    else {
      $('.header__scroll').removeClass('header__scroll_show');
    }
  });

  // Video
  $('.video-js').click(function() {
    var dataYoutube = $(this).attr('data-youtube');
    $(this).html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

  // Zoom
  $('.zoom-img').each(function() {
    $(this).magnificPopup({
      type : 'image',
      delegate: 'a',
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
    });
  });

  // Accardion
  var accordion = function() {
    var data = $('.accordion').attr('data-accordion')
    $('.accordion-header').on('click', function(){
      $(this).next('.accordion-body').not(':animated').slideToggle()
    })
    $('.accordion-header').click(function () {
      $(this).parent('.accordion li').toggleClass('active');
    });
  }
  accordion();

  // Reviews sl

  var swiper = new Swiper('.reviews__sl', {
    speed: 400,
    spaceBetween: 15,
    slidesPerView: '1',
    watchOverflow: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 45,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      }
    }
  });

});