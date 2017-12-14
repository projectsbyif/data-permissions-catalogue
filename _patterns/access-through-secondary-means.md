---
layout: pattern

title: Access through secondary means

category: Authenticate

images:
  - url: /images/access-through-secondary-means.svg

advantages:
  - Alternative to [passwords](/patterns/secret-answer) that can be guessed or stolen.
  - Uses existing authentication from other services

limitations:
  - Data becomes vulnerable should secondary means, such as a email account, gets hacked

examples:
  - title: Slack magic links
    url: https://get.slack.help/hc/en-us/articles/212681477-Sign-in-to-Slack
    description: a link is sent to a Slack users registered email address, to allow them to log into the service without a password
---

Access to data relies on someone being already authenticated somewhere else. For example, logging in to a service by clicking a link sent to an email account someone is already logged into.
