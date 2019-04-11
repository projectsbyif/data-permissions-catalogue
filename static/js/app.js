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
      toggleExpandAllCategories()
    default:
      $('.category-section').show();
      $('view-by-category').addClass('active')
      $('.expand-all').show()
      break;
  }
})

function toggleExpandAllCategories() {
  $('.see-more-button').each(function(index, button) {
    console.log(button)
    isCategoryCollapsed = $(button).html() == expandCategory

    if (isCategoryCollapsed) {
      $(button).html(collapseCategory)
    }

    toggleCategoryView(button, true)
  })
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
  toggleCategoryView(seeMoreButton, false);
  toggleSeeMoreButton(seeMoreButton)
})

function toggleCategoryView(button, isExpandAll) {
  const parentCategory = $(button).parents('.category-section');
  const patternCards = Array.from(parentCategory.find('.pattern-card-container'));

  const hiddenPatternCards = patternCards.filter(function(card) {
    const currentDisplay = $(card).css('display');
    if (currentDisplay == "none") {
      return card;
    }
  });

  $(hiddenPatternCards).each(function(index, card) {
    $(card).css('opacity', '0')
  })

  if (isExpandAll) {
    $(parentCategory).removeClass('preview')
  } else {
    $(parentCategory).toggleClass('preview')
  }

  $(hiddenPatternCards).each(function(index, card) {
    window.setTimeout(function(){
      $(card).css('opacity', '1');
    }, 0)
  })
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
