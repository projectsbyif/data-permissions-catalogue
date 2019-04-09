---
illustration_version: 1

title: Access through another service
weight: 1
category: Signing in to a service

images:
  - url: /images/access-through-secondary-means.svg

alt: An email has a link which logs you in to another service.

advantages:
 - Users can access a service without needing to remember a password
 - It’s a fast way to gain access if users have an account with another service
 - The login method can be made time-sensitive, so if it is not used within a certain time frame it will expire

limitations:
 - It may not be reliable if the user doesn’t have consistent access to the internet
 - Gaining access may be more difficult if the user isn’t able to access the other service
 - If a user's existing service is compromised, then access to any linked services can be gained
 - Data can be shared between the two services in ways that people aren’t aware of

examples:
  - title: Slack magic links
    url: https://get.slack.help/hc/en-us/articles/212681477-Sign-in-to-Slack
    description: a link is sent to a Slack user’s registered email address, allowing them to log into the service without a password
  - title: Medium one-time login
    url: https://blog.medium.com/signing-in-to-medium-by-email-aacc21134fcd
    description: the user receives an email from Medium that contains a sign in link. Clicking on that link will sign them in.
---

Allowing users to login to a new service, through a service they already have an account with. For example, sending an email with an access link, which allows the user to login to the new service through their email account.
