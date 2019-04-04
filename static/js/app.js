/* Change view on homepage */

// Default - By category

// Most recent first

// Alphabetically

// Expand all categories

/* Pattern category lists on homepage */

// Show see more button on load if more than 3 patterns in category
$('.category-list').each(function(index, category) {
  let patternsList = Array.from($(category).find('.pattern-card'))
  let seeMoreButton = $(category).find('.see-more-button');

  if (patternsList.length > 3) {
    $(seeMoreButton).show()
  }
})

// Hide extra patterns on page load
$('.category-list .pattern-card-list').each(function(index, category) {
  let patternsList = $(category).children()
  togglePatternsListView(patternsList)
})

// Show/hide extra patterns on button click
// TODO: only attach click event to category headings with more than 3 patterns
$('.category-heading').click(function(e){
  e.preventDefault()
  const categoryHeading = this;

  const patternsList = Array.from(
    $(this).parents('.category-list')
    .find('.pattern-card-list .cell')
  )

  togglePatternsListView(patternsList)
  toggleHeadingActiveState(categoryHeading)
})


function togglePatternsListView(patternsList) {
  if (patternsList.length <= 3) {
    return;
  }
  for (let i = 3; i < patternsList.length; i++) {
    $(patternsList[i]).toggle()
  }
}

function toggleHeadingActiveState(categoryHeading) {
  // Add active state to header
  console.log(categoryHeading)
  $(categoryHeading).toggleClass('active');

  // Change text in seeMoreButton
  const seeMoreButton = $(categoryHeading).parents('.category-list').find('.see-more-button');

  seeMoreButton.html().toLowerCase() == 'see more' ? seeMoreButton.html('See less') : seeMoreButton.html('See more')
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
