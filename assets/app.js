$(function() {
  // Constants
  const DESKTOP_WIDTH = 720;
  const TEMPLATE = '<div class="small-12 medium-6 large-4 cell"><a href="/patterns/{{ slug }}" class="pattern-block"><div class="image{{ illustration_version }} color-{{ category }}">{{ image }}</div><p class="title">{{ title }}</p></a></div>';

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
  $('header .title').click(function(e) {
    e.preventDefault();

    if (scrollTop !== 0) {
      $('html, body').animate({
        'scrollTop': 0
      }, 250);
    } else {
      window.location.href = $(this).attr('href');
    }
  });

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
      scrollTop > ($('.pattern-category-title').position().top + $('.pattern-category-title').outerHeight()) &&
      scrollTop > prevScrollTop
    ) {
      setInactiveTimeout();

      $('.category-nav-button').fadeIn(250);
      $('header').fadeOut(250);
    }

    // When past category title and scrolling up,
    // hide category menu and show header
    if (
      scrollTop > ($('.pattern-category-title').position().top  + $('.pattern-category-title').outerHeight()) &&
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
  }

  function normalScrollingRules() {
    // Show category selector when past category title and scrolling down
    if (
      scrollTop > ($('header').outerHeight() + $('.pattern-category-title').outerHeight()) &&
      scrollTop > prevScrollTop
    ) {
      setInactiveTimeout();

      $('.category-nav-button').fadeIn(250);
    }

    // Hide category selector when scrolling up
    if (scrollTop < prevScrollTop) {
      $('.category-nav-button').fadeOut(250);
    }

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

  function patternScrollingRules() {
    var relatedPatternsTitlePos = $('#related-patterns-title').position().top;

    if (scrollTop > relatedPatternsTitlePos && scrollTop > prevScrollTop) {
      $('.category-nav-button').fadeIn(250);
    }

    if (scrollTop < prevScrollTop) {
      $('.category-nav-button').fadeOut(250);
    }
  }

  // Scrolling interactions mobile
  $(window).scroll(function() {
    if (isMenuActive || $(window).width() > DESKTOP_WIDTH) {
      return;
    }

    scrollTop = $(window).scrollTop();

    // Menu timeouts
    clearTimeout(menuTimeout);

    if (currentPageUrl[1] === "") {
      homeScrollingRules();
    } else {
      if (currentPageUrl[1] === "patterns") {
        patternScrollingRules();
      }

      normalScrollingRules();
    }

    // When at bottom of the page, hide category menu
    if (scrollTop + $(window).height() === $(document).height()) {
      $('.category-nav-button').fadeOut(250);
    }

    prevScrollTop = scrollTop;
  });

  // Cache navigation original position on desktop
  var desktopCategoryNavPos = 0;

  // Scrolling interactions desktop
  $(window).scroll(function() {
    if (isMenuActive || $(window).width() < DESKTOP_WIDTH) {
      return;
    }

    scrollTop = $(window).scrollTop();

    if (scrollTop >= $('#category-nav-anchor').position().top) {
      $('.category-nav').addClass('desktop-fixed');
    } else {
      $('.category-nav').removeClass('desktop-fixed');
    }
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

  // Dynamic category filtering
  $('.category-nav ul a').click(function(e) {
    if ($(window).width() < DESKTOP_WIDTH) {
      return;
    }

    e.preventDefault();

    var targetTitle = $(this).text();
    var targetSlug = $(this).text().toLowerCase().replace(' ', '-');

    $('#patterns-area').animate({
      'opacity': 0.25
    }, 100, function() {
      var jsonPath;

      if (targetSlug === "all-patterns") {
        jsonPath = "/category_json/all.json";
        targetSlug = "all";
      } else {
        jsonPath = "/category_json/" + targetSlug + ".json"
      }

      $.getJSON(jsonPath, function(data) {
        var patterns = data.patterns.slice(0, -1);

        $('#patterns-area').empty();

        for (var pattern in patterns) {
          pattern = patterns[pattern];

          var patternHtml = TEMPLATE;

          patternHtml = patternHtml.replace("{{ slug }}", pattern.slug);
          patternHtml = patternHtml.replace("{{ image }}", '<img src="' + pattern.image + '" />');
          patternHtml = patternHtml.replace("{{ title }}", pattern.title);
          patternHtml = patternHtml.replace("{{ description }}", pattern.description);
          patternHtml = patternHtml.replace("{{ category }}", pattern.category_slug);

          if (pattern.illustration_version === "1") {
            patternHtml = patternHtml.replace("{{ illustration_version }}", " illustration_version_1");
          } else {
            patternHtml = patternHtml.replace("{{ illustration_version }}", '');
          }

          $('#patterns-area').append(patternHtml);
        }

        $('#patterns-area').animate({
          'opacity': 1
        }, 100);

        var newTitle = targetTitle + " - Data Permissions Catalogue - IF";

        $(document).attr("title", newTitle);
        history.pushState(null, newTitle, "/category/" + targetSlug);
        $('.pattern-category-title h2').text(targetTitle);

        var sizeString = data.size + " pattern";

        if (parseInt(sizeString) > 1) {
          sizeString += 's';
        }

        $('.pattern-category-title .category-counter p').text(sizeString);

        $('html, body').animate({
          'scrollTop': $('.pattern-category-title h2').position().top
        }, 250);
      });
    });

    $('.category-nav ul a').removeClass('active');
    $(this).addClass('active');
  });
});
