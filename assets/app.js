$(function() {
  const TEMPLATE = '<div class="large-4 small-12 cell"><a href="/patterns/{{ slug }}" class="pattern-block"><div class="image">{{ image }}</div><p class="title">{{ title }}</p><div class="description">{{ description }}</div></a></div>';

  $('.category-nav a').click(function(e) {
    e.preventDefault();

    var targetTitle = $(this).text();
    var targetSlug = $(this).text().toLowerCase().replace(' ', '-');

    $('#patterns-area').animate({
      'opacity': 0.25
    }, 100, function() {
      var jsonPath;

      if (targetSlug === "all") {
        jsonPath = "/all.json";
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

          $('#patterns-area').append(patternHtml);
        }

        $('#patterns-area').animate({
          'opacity': 1
        }, 100);

        var newTitle = targetTitle + " - Data Permissions Catalogue - IF";

        $(document).attr("title", newTitle);
        history.pushState(null, newTitle, "/category/" + targetSlug);
      });
    });

    $('.category-nav li').removeClass('active');
    $(this).parent().addClass('active');
  });

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
