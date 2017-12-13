$(function() {
  // Runtime variables
  var isFixedHeaderVisible = false;
  var prevScrollTop = 0;
  var isMenuActive = false;
  var isCategoryMenuActive = false;
  var menuScrollTop = 0;
  var menuTimeout;

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

  $('.category-nav-button').click(function(e) {
    e.preventDefault();

    if (isCategoryMenuActive) {
      closeCategoryMenu();
    } else {
      openCategoryMenu();
    }
  });

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

  // Scrolling interactions
  $(window).scroll(function() {
    if (isMenuActive) {
      return;
    }

    var scrollTop = $(window).scrollTop();

    // Menu timeout
    clearTimeout(menuTimeout);

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

    prevScrollTop = scrollTop;
  });
});
