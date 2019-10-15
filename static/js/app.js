/* Change view on homepage */

let categoriesExpanded = 0
// Number of expandable categories on the page.
const numberOfCategories = $('.see-more-button').length;
const expandAllText = 'Expand all categories'
const collapseAllText = 'Collapse all categories'
const expandCategoryText = 'Expand category'
const collapseCategoryText = 'Collapse category'
const $catNav = $('.category-nav')
const $container = $('.grid-container.nav')
const $menu = $('.global-category-nav')
const $menuToggle = $('.toggle-menu')
const $expandToggle = $('.expand-toggle')
const $topNav = $('.nav-bg')
const $topNavHeight = $topNav.height()
const $bg = $('.header-background')
const $bgHeight = $bg.height()

// Toggle view between category-view, recent-view, alphabetical-view
$('.category-nav a, .global-category-nav .toggle-view').click(function(e) {
  e.preventDefault();

  $('.homepage-section').hide()

  $('.category-nav a, .global-category-nav .toggle-view').removeClass('active')

  $(this).addClass('active')
  toggleMenu($menu) // mobile menu

  const targetLink = this.classList[0]

  switch (targetLink) {
    case 'view-by-category':
      $('.category-view').show();
      $('.expand-all').show()
      break;
    case 'view-most-recent':
      $('.most-recent-view').show();
      $('.expand-all').hide()
      break;
    case 'view-alphabetically':
      $('.alphabetical-view').show();
      $('.expand-all').hide()
      break;
    default:
      $('.category-section').show();
      $('view-by-category').addClass('active')
      $('.expand-all').show()
      break
  }
  $('html, body').animate({ scrollTop: 0 }, 500)
})

$('.expand-all').click(function(e) {
  e.preventDefault()
  $('.category-view').show()
  $('.view-by-category').addClass('active')
  toggleExpandAllCategories(this)
})

function toggleExpandAllCategories(button) {
  const isExpandAll = $(button).html() == expandAllText
  if (isExpandAll) {
    $('.category-section').each(function(index, category) {
      expandCategory(category)
    })
    $(button).html(collapseAllText).addClass('add-arrow')
    return
  }
  $('.category-section').each(function(index, category) {
    if (!$(category).hasClass('preview')) {
      collapseCategory(category)
    }
  })
  $(button).html(expandAllText).removeClass('add-arrow')
}

/* Pattern category lists on homepage */

// Add class 'preview' to full-list div using JS, so when JS is not present all patterns are visible.
$('.pattern-card-full-list').each(function(index, list) {
  $(list).addClass('preview')
})

// Show/hide extra patterns on button click
$('.category-view .category-heading').click(function(e) {
  const parentCategory = $(this).parent()
  const fullList = $(this).siblings('.pattern-card-full-list')
  fullList.slideToggle("slow", function() {
    if ($(this).is(":visible")) {
      categoryIsExpanded(parentCategory)
    } else {
      categoryIsCollapsed(parentCategory)
    }
  })
})

$('.category-view .see-more-button').click(function(e){
  const container = $(this).parent()
  const fullList = $(container).siblings('.pattern-card-full-list')
  fullList.slideToggle("slow", function() {
    if ($(this).is(":visible")) {
      categoryIsExpanded(container)
    } else {
      categoryIsCollapsed(container)
    }
  })
})

function categoryIsExpanded(category) {
  const seeMoreButton = $(category).find('.see-more-button');
  $(seeMoreButton).html(collapseCategoryText).addClass('view-arrow')
}

function categoryIsCollapsed(category) {
  const seeMoreButton = $(category).find('.see-more-button');
  $(category).addClass('preview')
  $('.expand-all').html(expandAllText).removeClass('add-arrow')
  $(seeMoreButton).html(expandCategoryText).removeClass('view-arrow')
}

function expandCategory(category) {
  const patternCards = Array.from($(category).find('.pattern-card-container'));
  const seeMoreButton = $(category).find('.see-more-button');

  // Get list of hidden cards.
  const hiddenPatternCards = patternCards.filter(function(card) {
    const currentDisplay = $(card).css('display');
    if (currentDisplay == "none") {
      return card;
    }
  });

  // Change hidden card opacity to 0
  $(hiddenPatternCards).each(function(index, card) {
    $(card).css('opacity', '0')
  })

  // Set hidden card display to 'block'
  $(category).removeClass('preview')

  // Trigger opacity transition animation
  $(hiddenPatternCards).each(function(index, card) {
    window.setTimeout(function(){
      $(card).css('opacity', '1');
    }, 100)
  })

  categoriesExpanded++

  if (categoriesExpanded === numberOfCategories) {
    $('.expand-all').html(collapseAllText).addClass('add-arrow')
  }

  // And then update the button
  $(seeMoreButton).html(collapseCategoryText).addClass('view-arrow')
}

function collapseCategory(category) {
  const seeMoreButton = $(category).find('.see-more-button');
  $(category).addClass('preview')
  categoriesExpanded--

  $('.expand-all').html(expandAllText).removeClass('add-arrow')
  // Update button
  $(category).find('.see-more-button').html(expandCategoryText)
  $(seeMoreButton).removeClass('view-arrow')
}

/* Fancy hover effects */

$(document).ready(function() {
  $('.see-more-button').hover(function() {
    var category = $(this).data('category')
    $('hr[data-category="'+category+'"]').addClass('hover')
  }, function() {
    var category = $(this).data('category')
    $('hr[data-category="'+category+'"]').removeClass('hover')
  })
})

/* Menu */

$(document).ready(function() {
  $menuToggle.click(function(e) {
    e.preventDefault();
    toggleMenu($menu)
  })

  $expandToggle.click(function(e) {
    $('.category-view').show();
    expandToggledCategory(this)
  })
})

function toggleMenu($menu) {
  if ($menu.position().left === 0) {
    $menu.animate({
      right: '-100%'
    }, 500)
  } else {
    $menu.animate({
      right: '0%'
    }, 500)
  }
}

function expandToggledCategory(expandToggle) {
  var category = $(expandToggle).data('category')
  var categoryEl = $('#'+category)
  expandCategory(categoryEl)
  toggleMenu($menu)
}

/* Top sticky nav */
$(window).scroll(function() {
  animateStickyNavOpacity()
})

function animateStickyNavOpacity() {
  var scrollTop = $(window).scrollTop()
  var visibleImg = Math.max(0, $bgHeight - scrollTop)
  var percentageVisible = visibleImg / $topNavHeight
  if (percentageVisible > 1) percentageVisible = 1
  var percentageOpacity = 1 - percentageVisible

  if ($menu.position().left !== 0) {
    $topNav.css({ backgroundColor: 'rgba(255, 255, 255, '+percentageOpacity+')' })
  }
}

/* Pattern page feedback form */

$('#giveDetailedFeedback').click(function(e) {
  e.preventDefault();
  $('.detailed-feedback').toggle();
})

$(".usage-feedback").submit(function(e) {
  e.preventDefault();

  let $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $('.question').hide();
    $('.feedback-form').hide();
    $('.success-message').show();
  });
});

$(".detailed-feedback").submit(function(e) {
  e.preventDefault();

  let $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $('.feedback-form').toggle();
    $('.success-message').toggle();
  });
});
