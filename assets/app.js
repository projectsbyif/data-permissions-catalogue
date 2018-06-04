$(function() {
  // Constants
  const DESKTOP_WIDTH = 639;

  // Conditionals used b/c new Vimeo.Player throws error if argument is undefined.
  const iframe = ($('iframe').length !== 0) ? ($('iframe')) : undefined;
  const player = iframe ? new Vimeo.Player(iframe) : undefined;

  // Runtime variables
  var isMenuActive = false;
  var isCategoryMenuActive = false;
  var prevScrollTop = 0;
  var menuScrollTop = 0;
  var scrollTop = 0;
  var backgroundColorCounter = 1;

  // Category floating menu
  $('.category-nav-dismiss').click(function(e) {
    e.preventDefault();

    closeCategoryMenu();
  });

  function openCategoryMenu() {
    // If menu is open, category list is fixed underneath category title.
    if ($('.pattern-category-title').hasClass('fixed')) {
      $('.category-nav').css({
        'top': $('.pattern-category-title')[0].getBoundingClientRect().top + $('.pattern-category-title').outerHeight()
      }).fadeIn(250);
    }

    // Fades in menu.
    $('.category-nav').fadeIn(250);

    // Enables 'clickout'
    $('.category-nav-dismiss').show();

    // Changes down arrow to up arrow.
    $('.pattern-category-title img').attr('src', '/images/up.svg');

    isCategoryMenuActive = true;
  }

  function closeCategoryMenu() {
    $('.category-nav').fadeOut(250);
    $('.category-nav-dismiss').hide();

    $('.pattern-category-title img').attr('src', '/images/down.svg');

    isCategoryMenuActive = false;
  }

  // Mobile menu
  $('header .menu').click(function(e) {
    e.preventDefault();

    if (isMenuActive) {
      // Close menu.
      isMenuActive = false;

      // Restores position of body behind menu.
      $('html, body').scrollTop(menuScrollTop);

      $('.page-menu').fadeOut(250);

      // If scrolled past header, fades out header and keeps it hidden.
      if (scrollTop > $('header').outerHeight()) {
        $('header .logo, header .title').animate({
          'opacity': 0
        }, 250, function() {
          $('header .logo, header .title').attr('style', '');
        });
      }

      // Fades out header background to transparent. Resets style.
      $('header').animate({
        'background-color': 'rgba(255, 255, 255, 0.0)'
      }, 250, function() {
        $('header').attr('style', '');
      });

      // Changes menu icon back to burger.
      $('header .menu').removeClass('menu-opened');
    } else {
      // Opening menu.
      isMenuActive = true;
      menuScrollTop = $(window).scrollTop();

      $('.page-menu').fadeIn(250);

      // Show header in menu if no longer visible on screen.
      if (scrollTop > $('header').outerHeight()) {
        $('header .logo, header .title').css({
          'opacity': 0
        }).animate({
          'opacity': 1
        }, 250);
      }

      // Changes background colour of header to white and fixes position to top of screen.
      $('header').attr('class', 'grid-container').animate({
        'background-color': 'rgb(255, 255, 255)'
      }, 250).css({
        'position': 'fixed',
        'top': 0,
        'left': 0
      });

      // Changes menu icon to X.
      $('header .menu').addClass('menu-opened');
    }
  });

  // Category menu
  $('.pattern-category-title').click(function(e) {
    e.preventDefault();

    if (isCategoryMenuActive) {
      closeCategoryMenu();
    } else {
      openCategoryMenu();
    }
  });

  // Scrolling interactions mobile
  $(window).scroll(function() {
    if (isMenuActive) {
      return;
    }

    scrollTop = $(window).scrollTop();

    if ($('.pattern-category-title').length > 0) {
      if (scrollTop > $('.pattern-category-title-anchor').position().top) {
        // Make category menu and pages menu fixed to top of page.
        $('.pattern-category-title').addClass('fixed');

        $('.category-nav').addClass('fixed').css({
          'top': $('.pattern-category-title')[0].getBoundingClientRect().top + $('.pattern-category-title').outerHeight()
        });

        // Specific styling for screens larger than desktop-width.
        if ($(window).width() > DESKTOP_WIDTH) {
          $('header').addClass('desktop-fixed');
          $('header .page-menu').show();

          $('.patterns-grid').css({
            'padding-top': $('.pattern-category-title').outerHeight() + 20
          });
        } else {
          $('header .menu').addClass('fixed').show();

          $('.patterns-grid').css({
            'padding-top': $('.pattern-category-title').outerHeight()
          });
        }
      } else {
        // Make category menu and pages menu unfixed
        $('.pattern-category-title').removeClass('fixed');

        $('.patterns-grid').css({
          'padding-top': 0
        });

        $('.category-nav').removeClass('fixed').css({ 'top': '0px' });

        if (scrollTop > $('header').outerHeight()) {
          if ($(window).width() > DESKTOP_WIDTH) {
            //$('header .page-menu').hide();
            $('header').removeClass('desktop-fixed');
          } else {
            $('header .menu').hide().removeClass('fixed');
          }
        } else {
          if ($(window).width() > DESKTOP_WIDTH) {
            $('header .page-menu').finish().show();
            $('header').removeClass('desktop-fixed').attr('style', '');
          } else {
            $('header .menu').removeClass('fixed').attr('style', '');
          }
        }
      }
    }

    prevScrollTop = scrollTop;
  });

  // Carousel
  var currentImage = 0;
  var numImages = 0;
  var carouselActive = false;

  function createCarousel() {
    numImages = $('.pattern-image').find('.cell').length;

    // Checks image numbers and screen width.
    if (numImages <= 1 || (numImages > 1 && $(window).width() > DESKTOP_WIDTH)) {
      return;
    }

    // Appends dots (depending on # of images)
    // [Bonus accessibility - screen readers will read "dot" for each dot.]
    for (var i = 0; i < numImages; i++) {
      $('.carousel-indicator .wrapper').append('<a href="#" class="dot">dot</a>');
    }

    // Make first dot active (change opacity)
    $('.carousel-indicator .dot').first().addClass('active');

    // Hide everything but first image.
    $('.pattern-image .cell').not(':first').hide();
    $('.carousel-indicator').addClass('active');

    $('.carousel-control').fadeIn(250);
    $('.carousel-indicator').animate({
      'opacity': 1
    }, 250);

    carouselActive = true;
  }

  function changeImage() {
    // Hide images and dots (line 247), make relevant dot and image visible.
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
    // Carousel
    if ($(window).width() > DESKTOP_WIDTH) {
      if (carouselActive) {
        removeCarousel();
      }

      if ($('.pattern-category-title').hasClass('fixed')) {
        $('header .menu').hide();
        $('header .page-menu').show();
        $('header').addClass('desktop-fixed');
      }
    } else if ($(window).width() < DESKTOP_WIDTH) {
      if (!carouselActive) {
        createCarousel();
      }

      if ($('.pattern-category-title').hasClass('fixed')) {
        $('header .menu').show();
      }
    }

    // WIP banner height
    wipBannerHeight();
  });

  if ($(window).width() < DESKTOP_WIDTH) {
    createCarousel();
  } else {
    wipBannerHeight();
  }

  function wipBannerHeight() {
    $('.wip-banner-full-length').css({
      'height': $('.wip-banner').outerHeight()
    });
  }

  // Controlling the embedded video with keyboard.
  $('.iframe-container').focus(function(){
    let count = 0;
    $(document).keydown(function(e){
      switch (e.which) {
        case 32:
          if (count % 2 === 0) {
            vimeoPlay();
            count++;
          } else {
            vimeoPause();
            count++;
          }
          break;
        default:
          return;
      }

    })
  })

  function vimeoPlay(){
    player.play().then(function(){
      console.log('Video is playing.')
    }).catch(function(error) {
    switch (error.name) {
        case 'PasswordError':
            // the video is password-protected and the viewer needs to enter the
            // password first
            break;

        case 'PrivacyError':
            // the video is private
            break;

        default:
            // some other error occurred
            break;
    }
  })
}

  function vimeoPause() {
    player.pause().then(function() {
    // the video was paused
    console.log('Video is paused.')
}).catch(function(error) {
    switch (error.name) {
        case 'PasswordError':
            // the video is password-protected and the viewer needs to enter the
            // password first
            break;

        case 'PrivacyError':
            // the video is private
            break;

        default:
            // some other error occurred
            break;
    }
});
  }
});
