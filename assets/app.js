/* Pattern list by category on homepage */

$('.show-all-button').show()

// Hide patterns on page load

$('.category-list ul').each(function(index, category) {
  let patternsList = $(category).children()
  togglePatternsListView(patternsList)
})

// Show/hide patterns on button click
$('.show-all-button').click(function(e){
  e.preventDefault()

  const patternsList = Array.from(
    $(this).parents('.category-list')
    .find('li')
  )
  togglePatternsListView(patternsList)
})


function togglePatternsListView(patternsList) {
  if (patternsList.length <= 4) {
    return;
  }
  for (let i = 4; i < patternsList.length; i++) {
    $(patternsList[i]).toggle()
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
