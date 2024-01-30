---
title: Show confidence

category: Understanding and influencing decisions

weight: 3

archived: false

archive_reason:

future_pattern: false

future_pattern_reason:

images:
 - url: /images/show-confidence.svg
alt: An image of a pipe. Below the pipe there is text saying "this is most likely a pipe"

advantages:
 - Helps people know how confident an AI system is in a result, so they can choose to use or ignore the result.
 - Begins to embed the idea that AI systems are fallible.
 - Creates friction that could help a person make a more meaningful decision about whether to trust an AI system’s result or not.

limitations:
 - Confidence is subjective and can create false certainty. This pattern is highly context specific.
 - May encourage an inappropriate transfer of responsibility and risk to users. AI system providers should be particularly wary of this limitation in higher risk situations.

examples:
 - title: Elicit
   url: https://support.elicit.com/en/articles/597825
   description: Elicit provides “high accuracy mode” for its researchers, and highlights in the interface the confidence of the answer provided by its AI system.
 - title: ONS StatsChat
   url: https://datasciencecampus.ons.gov.uk/using-large-language-models-llms-to-improve-website-search-experience-with-statschat/
   description: The Office for National Statistics have developed an experimental search interface that displays confidence levels for search results.

---

Use [context specific displays](https://pair.withgoogle.com/chapter/explainability-trust/#section3) to surface confidence levels in a decision or a suggestion made by an AI system. Support people to understand the implications of differing levels of confidence, and methods of redress if the system is less than fully confident.

For example, a product identification tool could verbally express its confidence in a prediction, in a way that is easy to interpret for a person.

This pattern should be used cautiously, since confidence varies and is subjective, leading to potential errors in decisions. Misleading a user is possible through false positives or negatives. Therefore, this pattern should only be used after thoroughly assessing the context and considering the level of accountability for any potential mistakes.

Over time the use of this pattern may become less useful or meaningful to users as our understanding of the fallibility of AI systems increases, or indeed we see more competent AI systems. An example of patterns changing over time is the padlock symbol that was  used on URL browser bars. [They are now disappearing for other icons](https://blog.chromium.org/2023/05/an-update-on-lock-icon.html) to help keep users safer online.
