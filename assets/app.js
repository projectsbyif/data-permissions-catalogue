$(function() {
  var isMenuOpen = false;

  $('.mobile-menu-link').click(function(e) {
    e.preventDefault();

    if (isMenuOpen) {
      $('header').animate({
        'background-color': '#FFF',
        'border-bottom-color': '#f1f0ee'
      }, 250, function() {
        $('header').attr('style', '');
      });

      $('header a').animate({
        'color': '#212121'
      }, 250, function() {
        $('header a').attr('style', '');
      });

      $('header .logo').removeClass('white');

      $('#mobile-menu').fadeOut(250, function() {
        $('.mobile-menu-link').text("Menu");
        isMenuOpen = false;
      });
    } else {
      $('header').css({
        'position': 'fixed'
      }).animate({
        'background-color': '#ff5e23',
        'border-bottom-color': '#ff5e23'
      }, 250);

      $('header a').animate({
        'color': '#FFF'
      }, 250);

      $('header .logo').addClass('white');

      $('#mobile-menu').fadeIn(250, function() {
        $('.mobile-menu-link').text("Close");
        isMenuOpen = true;
      });
    }
  });
});
