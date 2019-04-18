---
illustration_version: 1

title: Passwordless authentication
weight: 1
category: Signing in to a service

images:
  - url: /images/access-through-another-service.svg

alt: An email has a link which logs you in to another service.

advantages:
 - Users can access a service without needing to remember a password
 - It’s a fast way to gain access if users have access to their email account
 - The login method can be made time-sensitive, so if it is not used within a certain time frame it will expire

limitations:
 - Losing access to the email account associated with passwordless authentication means losing access to services associated with it

examples:
  - title: Slack magic links
    url: https://get.slack.help/hc/en-us/articles/212681477-Sign-in-to-Slack
    description: a link is sent to a Slack user’s registered email address, allowing them to log into the service without a password
  - title: Medium one-time login
    url: https://blog.medium.com/signing-in-to-medium-by-email-aacc21134fcd
    description: the user receives an email from Medium that contains a sign in link. Clicking on that link will sign them in.
---

With this form of authentication, users can login without typing their password. They have the option of either logging in using an access link, fingerprint, or using a token that is delivered by email or text message. For example, sending an email with an access link, which allows the user to login to Slack.
