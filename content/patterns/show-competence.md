---
title: Show competence

category: Understanding and influencing decisions

weight: 3

archived: false

archive_reason:

future_pattern: false

future_pattern_reason:

images:
 - url: /images/show-competence.svg
alt: A message saying "This is a new process and could take up to 20 minutes", 20 minutes is underlined to indicate that more information is available

advantages:
 - Helps people know how confident an AI system is in a result, so they can choose to use or ignore the result.
 - Begins to embed the idea that AI systems are fallible.
 - Creates friction that could help a person make a more meaningful decision about whether to trust an AI system’s result or not.

limitations:
- Confidence is subjective and can create false certainty. This pattern is highly context specific.
- May encourage an inappropriate transfer of responsibility and risk to users. AI system providers should be particularly wary of this limitation in higher risk situations.

examples:
  - title: Google Bard
    url: https://support.google.com/bard/answer/14143489?hl=en&co=GENIE.Platform%3DAndroid
    description: Bard lets users also check the answer on Google Search to demonstrate competence of its AI.
  - title: Skyscanner
    url: http://www.skyscanner.net
    description: When searching, it highlights what airlines, services, etc. it is looking up.

---

Some AI systems learn over time, and as such their outputs can become more, or less, useful or accurate.

Showing the relative competence of an AI system for the activity being undertaken, helps the user adjust their expectations, and know that manual steps or additional training may be required.

For example, when undertaking a new activity the system could highlight in the UI that this is a new process, and could therefore take more time to complete.

This pattern should be used cautiously, since competence varies and is subjective, leading to potential errors in decisions. Misleading a user is possible through false positives or negatives. Therefore, this pattern should only be used after thoroughly assessing the context and considering the level of accountability for any potential mistakes.

Over time the use of this pattern may become less useful or meaningful to users as our understanding of the fallibility of AI systems increases, or indeed we see more competent AI systems. An example of patterns changing over time is the padlock symbol that was  used on URL browser bars. [They are now disappearing for other icons](https://blog.chromium.org/2023/05/an-update-on-lock-icon.html) to help keep users safer online.
