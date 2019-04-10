/* Change view on homepage */

const expandCategory = 'Expand category ▼'
const collapseCategory = 'Collapse category ▲'

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
      toggleExpandAllCategories(this)
    default:
      $('.category-list').show();
      $('view-by-category').addClass('active')
      $('.expand-all').show()
      break;
  }
})

// TODO - find a better way to do this, ideally with CSS classes.
// Would need to think about accessibility, can't do it with CSS content as
// it isn't accessible to a screen reader.
function toggleExpandAllCategories(expandAllButton) {
  $('.see-more-button').each(function(index, button) {
    isCategoryCollapsed = $(button).html() == expandCategory

    if (isCategoryCollapsed) {
      $(button).html(collapseCategory)
    }

    expandCollapseCategories(button, true)
  })
}

/* Pattern category lists on homepage */

// Show see more button on load if more than 3 patterns in category
$('.category-list').each(function(index, category) {
  const patternsList = Array.from($(category).find('.pattern-card'))
  const seeMoreButton = $(category).find('.see-more-button');

  if (patternsList.length > 3) {
    $(seeMoreButton).css('display', 'inline-block')
  }
})

// Show/hide extra patterns on button click
$('.category-view .see-more-button').click(function(e){
  e.preventDefault()
  const seeMoreButton = $(this);

  expandCollapseCategories(this, false);

  toggleSeeMoreButton(seeMoreButton)
})

function expandCollapseCategories (seeMoreButton, isExpandAll) {
  const hiddenPatternCards = seeMoreButton.parentElement.previousElementSibling;
  const hiddenPatternCardsStyle = window.getComputedStyle(hiddenPatternCards)
  let hiddenPatternCardsHeight = hiddenPatternCardsStyle.getPropertyValue('max-height');

  if (hiddenPatternCardsHeight !== "0px" && !isExpandAll){
    hiddenPatternCards.style.maxHeight = 0;
  } else {
    hiddenPatternCards.style.maxHeight = hiddenPatternCards.scrollHeight + "px";
  }
}

function toggleSeeMoreButton(seeMoreButton) {
  isCategoryExpanded = $(seeMoreButton).html() == expandCategory

  if (isCategoryExpanded) {
    $(seeMoreButton).html(collapseCategory)
  } else {
    $(seeMoreButton).html(expandCategory)
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
