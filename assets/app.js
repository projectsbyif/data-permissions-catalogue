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

      $('header').animate({
        'background-color': 'rgba(255, 255, 255, 0.0)'
      }, 250, function() {
        $('header').attr('style', '');
      });

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

  // Header interaction
  $(window).scroll(function() {
    if (isMenuActive || isCategoryMenuActive) {
      return;
    }

    var scrollTop = $(window).scrollTop();

    // Menu timeout
    clearTimeout(menuTimeout);

    if (scrollTop > $('.homepage-intro').outerHeight() / 2) {
      setInactiveTimeout();
    }

    // Show category menu button when scrolling down,
    // and half way past homepage header
    if (scrollTop > ($('.homepage-intro').outerHeight() / 2)) {
      if (scrollTop > prevScrollTop) {
        $('.category-nav-button').fadeIn(250);
      }
    }

    // When past the homepage header
    if (scrollTop > $('.homepage-intro').outerHeight()) {
      if (scrollTop > prevScrollTop) {
        // Scrolling down
        // Hide header if visible
        if ($('header').is(':visible')) {
          $('header').fadeOut(250, function() {
            $('header').removeClass('fixed');
          });
        }
      } else {
        // Scrolling up
        // Fade in header
        $('header').addClass('fixed').fadeIn(250);

        // Show category menu button
        $('.category-nav-button').fadeOut(250);
      }
    }

    if (scrollTop < ($('.homepage-intro').outerHeight()) && scrollTop > ($('.homepage-intro').outerHeight() / 2) && scrollTop < prevScrollTop) {
      $('header').fadeOut(250);
      $('.category-nav-button').clearQueue().fadeOut(250);
    }

    if (scrollTop < ($('.homepage-intro').outerHeight() / 2) && scrollTop < prevScrollTop) {
      $('header').removeClass('fixed').attr('style', '');
    }

    // Hide category when at bottom of page
    if (scrollTop + $(window).height() === $('html').height()) {
      $('.category-nav-button').fadeOut(250);
    }

    prevScrollTop = scrollTop;
  });
});
