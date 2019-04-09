/* Change view on homepage */

$('.category-nav a').click(function(e) {
  e.preventDefault()

  $('.homepage-section').hide()

  $('.category-nav a').removeClass('active')
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
      toggleExpandAllButton()
    default:
      $('.category-list').show();
      $('view-by-category').addClass('active')
      $('.expand-all').show()
      break;
  }
})

function toggleExpandAllButton() {
  $('.category-list').each(function(index, category){
    $(category).removeClass('preview')
  })

  // Change text on individual see more buttons
  // TODO - get rid of toggle and do this all through CSS
  $('.see-more-button').each(function(index, button) {
    let isCategoryExpanded = $(button).html().toLowerCase() == 'expand category'

    if (isCategoryExpanded) {
      $(button).html('Collapse category')
      // TODO - all content changes should be done here not split accross JS and CSS
      $(button).addClass('active')
    }
  })
}

/* Pattern category lists on homepage */

// Show see more button on load if more than 3 patterns in category
$('.category-list').each(function(index, category) {
  // Hide extra patterns on page load through CSS
  $(this).addClass('preview')
  const patternsList = Array.from($(category).find('.pattern-card'))
  const seeMoreButton = $(category).find('.see-more-button');

  if (patternsList.length > 3) {
    $(seeMoreButton).css('display', 'inline-block')
  }
})



// Show/hide extra patterns on button click
$('.category-view .see-more-button').click(function(e){
  e.preventDefault()
  const seeMoreButton = this;
  const category = $(this).parents('.category-list').toggleClass('preview')

  toggleSeeMoreButton(this)
})
// TODO - get rid of toggle and do this all through CSS
function toggleSeeMoreButton(seeMoreButton) {
  let isCategoryExpanded = $(seeMoreButton).html().toLowerCase() == 'expand category'

  if (isCategoryExpanded) {
    $(seeMoreButton).html('Collapse category')
    // This class changes the arrow
    // TODO - all content changes should be done here not split accross JS and CSS
    $(seeMoreButton).addClass('active')
  } else {
    $(seeMoreButton).html('Expand category')
    $(seeMoreButton).removeClass('active')
    $('.expand-all').removeClass('active')
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
