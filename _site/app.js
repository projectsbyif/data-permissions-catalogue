$(function() {
  var open = false;

  $(window).resize(function() {
    if ($(window).width() > 1024) {
      $('#contents').show();
    } else {
      if (open) {
        $('#contents').show();
      } else {
        $('#contents').hide();
      }
    }
  });

  if ($(window).width() < 1024) {
    $('#menu').click(function(e) {
      e.preventDefault();

      if (open) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    function openMenu() {
      $('#contents').fadeIn(250);
      $('#menu').text("Close");
      open = true;
    }

    function closeMenu() {
      $('#contents').fadeOut(250);
      $('#menu').text("Menu");
      open = false;
    }

    $('#contents a').click(function(e) {
      closeMenu();
    });
  }
});
