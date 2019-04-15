/* Change view on homepage */

let categoriesExpanded = 0
// Number of expandable categories on the page.
const numberOfCategories = $('.see-more-button').length;
const expandAllText = 'Expand all categories ▼'
const collapseAllText = 'Collapse all categories ▲'
const expandCategoryText = 'Expand category ▼'
const collapseCategoryText = 'Collapse category ▲'

$('.category-nav a').click(function(e) {
  e.preventDefault()

  $('.homepage-section').hide()

  $('.category-nav a').removeClass('active')

  var $activeCat = $(this)
  var $catNav = $('.category-nav')
  var $container = $('.grid-container.nav')
  slideCategoryNav($activeCat, $catNav, $container)

  $(this).addClass('active')

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
    case 'expand-all':
      $('.category-view').show()
      $('.view-by-category').addClass('active')
      toggleExpandAllCategories(this)
      break
    default:
      $('.category-section').show();
      $('view-by-category').addClass('active')
      $('.expand-all').show()
      break
  }
})

function slideCategoryNav($activeCat, $catNav, $container) {
  var animDuration = 500

  var halfPoint = $container.width() / 2
  var currentHalfPoint = $activeCat.offset().left + ($activeCat.width() / 2)

  var categoriesWidth = $catNav[0].scrollWidth
  var containerWidth = $container.width()
  var leftIndent = ($catNav[0].scrollWidth - $container.width()) * -1

  if (currentHalfPoint > halfPoint) {
    // The middle of the category button is on the right
    // side of the screen, moving to the left
    $catNav.animate({ marginLeft: leftIndent }, animDuration)
  } else {
    // The middle of the category button is on the left
    // side of the screen, moving to the right
    $catNav.animate({ marginLeft: 0 }, animDuration)
  }
}

function toggleExpandAllCategories(button) {
  const isExpandAll = $(button).html() == expandAllText
  if (isExpandAll) {
    $('.category-section').each(function(index, category) {
      expandCategory(category)
      $(category).find('.see-more-button').html(collapseCategoryText)
    })
    $(button).html(collapseAllText)
    return
  }
  $('.category-section').each(function(index, category) {
    if (!$(category).hasClass('preview')) {
      collapseCategory(category)
      $(category).find('.see-more-button').html(expandCategoryText)
    }
  })
  $(button).html(expandAllText)
}

/* Pattern category lists on homepage */

// Show see more button on load if more than 3 patterns in category
$('.category-section').each(function(index, category) {
  const patternsList = Array.from($(category).find('.pattern-card'))
  const seeMoreButton = $(category).find('.see-more-button');
  if (patternsList.length > 3) {
    $(category).addClass('preview')
    $(seeMoreButton).css('display', 'inline-block')
  }
})

// Show/hide extra patterns on button click
$('.category-view .see-more-button').click(function(e){
  const seeMoreButton = $(this);
  const parentCategory = $(seeMoreButton).parents('.category-section');

  if ($(parentCategory).hasClass('preview')) {
    expandCategory(parentCategory)
    $(seeMoreButton).html(collapseCategoryText)
  } else {
    collapseCategory(parentCategory)
    $(seeMoreButton).html(expandCategoryText)
  }
})

function expandCategory(category) {
  const patternCards = Array.from($(category).find('.pattern-card-container'));

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
    $('.expand-all').html(collapseAllText)
  }
}

function collapseCategory(category) {
  $(category).addClass('preview')
  categoriesExpanded--
  $('.expand-all').html(expandAllText)
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
    $('.feedback-form').toggle();
    $('.success-message').toggle();
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
