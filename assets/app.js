$(function() {
  // Constants
  const DESKTOP_WIDTH = 720;

  // Runtime variables
  var isFixedHeaderVisible = false;
  var isMenuActive = false;
  var isCategoryMenuActive = false;
  var prevScrollTop = 0;
  var menuScrollTop = 0;
  var scrollTop = 0;
  var menuTimeout;
  var currentPageUrl = window.location.href.replace("http://", '').replace("https://", '').split('/');

  function setInactiveTimeout() {
    menuTimeout = setTimeout(function() {
      $('.category-nav-button, header').fadeOut(250);
    }, 3000);
  }

  // Category floating menu
  $('.category-nav-dismiss').click(function(e) {
    e.preventDefault();

    closeCategoryMenu();
  });

  $('.category-nav-button').click(function(e) {
    e.preventDefault();

    if (isCategoryMenuActive) {
      closeCategoryMenu();
    } else {
      openCategoryMenu();
    }
  });

  function openCategoryMenu() {
    $('.category-nav ul').fadeIn(250);
    $('.category-nav').addClass('active');
    $('.category-nav-dismiss').show();

    clearTimeout(menuTimeout);

    isCategoryMenuActive = true;
  }

  function closeCategoryMenu() {
    $('.category-nav ul').fadeOut(250);
    $('.category-nav').removeClass('active');
    $('.category-nav-dismiss').hide();

    isCategoryMenuActive = false;

    setInactiveTimeout();
  }

  // Mobile menu
  $('header .menu').click(function(e) {
    e.preventDefault();

    clearTimeout(menuTimeout);

    if (isMenuActive) {
      isMenuActive = false
      $('html, body').scrollTop(menuScrollTop);

      $('.page-menu').fadeOut(250);

      if ($(window).scrollTop() < $('.homepage-intro').outerHeight()) {
        $('header').animate({
          'background-color': 'rgba(255, 255, 255, 0.0)'
        }, 250, function() {
          $('header').attr('style', '');
        });
      }

      $('header .menu').removeClass('menu-opened');
    } else {
      isMenuActive = true;
      menuScrollTop = $(window).scrollTop();

      $('.page-menu').fadeIn(250);

      $('header').animate({
        'background-color': '#FFF'
      }, 250).css({
        'position': 'fixed',
        'top': 0,
        'left': 0
      });

      $('header .menu').addClass('menu-opened');
    }
  });

  // Scrolling rules
  function homeScrollingRules() {
    // When past category title and scrolling down,
    // show category menu and hide header
    if (
      scrollTop > ($('.homepage-intro').outerHeight() + $('.pattern-category-title').outerHeight()) &&
      scrollTop > prevScrollTop
    ) {
      setInactiveTimeout();

      $('.category-nav-button').fadeIn(250);
      $('header').fadeOut(250);
    }

    // When past category title and scrolling up,
    // hide category menu and show header
    if (
      scrollTop > ($('.homepage-intro').outerHeight() + $('.pattern-category-title').outerHeight()) &&
      scrollTop < prevScrollTop
    ) {
      // Except when category menu is open
      if (!isCategoryMenuActive) {
        $('.category-nav-button').fadeOut(250);
      }

      $('header').addClass('fixed').fadeIn(250);
    }

    // When past homepage banner and scrolling up,
    // hide header and reset and close category menu if open
    if (
      scrollTop < ($('.homepage-intro').outerHeight() + $('.pattern-category-title').outerHeight()) &&
      scrollTop < prevScrollTop
    ) {
      $('header, .category-nav-button').fadeOut(250);
      closeCategoryMenu();
      clearTimeout(menuTimeout);
    }

    // Force header reset when close to top of page
    if (
      scrollTop < ($('.homepage-intro').outerHeight() / 2)
    ) {
      $('header').finish().removeClass('fixed').attr('style', '').show();
    }

    // When at bottom of the page, hide category menu
    if (scrollTop + $(window).height() === $('html').height()) {
      $('.category-nav-button').fadeOut(250);
    }
  }

  function normalScrollingRules() {
    // Show header if scrolling up and header is not in view
    if (scrollTop > $('header').outerHeight() && scrollTop < prevScrollTop) {
      $('header').addClass('fixed').fadeIn(250);
      setInactiveTimeout();
    }

    // Hide header if scrolling down and header is in view
    if (scrollTop > $('header').outerHeight() && scrollTop > prevScrollTop) {
      $('header').fadeOut(250);
      clearTimeout(menuTimeout);
    }

    if (scrollTop < $('header').outerHeight() && scrollTop < prevScrollTop) {
      $('header').removeClass('fixed').attr('style', '');
      clearTimeout(menuTimeout);
    }
  }

  // Scrolling interactions
  $(window).scroll(function() {
    if (isMenuActive) {
      return;
    }

    scrollTop = $(window).scrollTop();

    // Menu timeouts
    clearTimeout(menuTimeout);

    if (currentPageUrl[1] === "") {
      homeScrollingRules();
    } else {
      normalScrollingRules();
    }

    prevScrollTop = scrollTop;
  });

  // Carousel
  var currentImage = 0;
  var numImages = 0;
  var carouselActive = false;

  function createCarousel() {
    numImages = $('.pattern-image').find('.cell').length;

    if (numImages <= 1 || (numImages > 1 && $(window).width() > DESKTOP_WIDTH)) {
      return;
    }

    for (var i = 0; i < numImages; i++) {
      $('.carousel-indicator .wrapper').append('<a href="#" class="dot">dot</a>');
    }

    $('.carousel-indicator .dot').first().addClass('active');

    $('.pattern-image .cell').not(':first').hide();
    $('.carousel-indicator').addClass('active');

    $('.carousel-control').fadeIn(250);
    $('.carousel-indicator').animate({
      'opacity': 1
    }, 250);

    carouselActive = true;
  }

  function changeImage() {
    $('.pattern-image .cell').hide();
    $('.pattern-image .cell').eq(currentImage).show();
    $('.carousel-indicator .dot').removeClass('active');
    $('.carousel-indicator .dot').eq(currentImage).addClass('active');

    if (currentImage == 0) {
      $('.carousel-control.previous').css({ 'opacity': 0.25 });
    }

    if (currentImage >= 1) {
      $('.carousel-control.previous').css({ 'opacity': 1 });
    }

    if (currentImage == numImages - 1) {
      $('.carousel-control.next').css({ 'opacity': 0.25 });
    } else {
      $('.carousel-control.next').css({ 'opacity': 1 });
    }
  }

  function removeCarousel() {
    currentImage = 0;
    numImages = 0;
    carouselActive = false;

    $('.pattern-image .cell').show();
    $('.carousel-indicator .wrapper').empty();
    $('.carousel-control, .carousel-indicator').hide();
  }

  $('.carousel-control.previous').click(function(e) {
    e.preventDefault();

    if (currentImage == 0) {
      return;
    }

    currentImage--;

    changeImage();
  });

  $('.carousel-control.next').click(function(e) {
    e.preventDefault();

    if (currentImage == numImages - 1) {
      return;
    }

    currentImage++;

    changeImage();
  });

  $(window).resize(function() {
    if (($(window).width() > DESKTOP_WIDTH) && carouselActive) {
      removeCarousel();
    } else if (($(window).width() < DESKTOP_WIDTH) && !carouselActive) {
      createCarousel();
    }
  });

  if ($(window).width() < DESKTOP_WIDTH) {
    createCarousel();
  }
});
