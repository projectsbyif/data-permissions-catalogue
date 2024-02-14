---
title: Complete a task

category: Understanding and influencing decisions

weight: 3

archived: false

future_pattern: false

future_pattern_reason:

images:
 - url: /images/complete-a-task.svg
alt: A spreadsheet where a user has partially calculated age from date of birth for some rows. There is a suggestion to auto-fill the remaining answers.

advantages:
 - Fast way to automate certain administrative tasks.
 - Easy to dismiss or reverse.


limitations:
- Autocompleted information can be read via JavaScript even before the user submits the form, potentially revealing personal information without explicit consent.
- It can be easy for someone to accidentally choose to autocomplete a field.


examples:
  - title: Google Sheets
    url: https://support.google.com/docs/answer/9914525?hl=en-GB
    description: An AI enabled autocomplete is made available once enough context is provided within the sheet.
---

[Autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) is a common pattern in browsers, documents, web forms and spreadsheets where the user is given assistive, greyed out text to click on or tab to accept. Increasingly, autocomplete is a feature powered by AI systems, not only data stored locally on a user's machine.

For example, some spreadsheets offer an AI enabled autocomplete where someone can choose to delegate to the AI system to fill in the formatting for the sheet.
