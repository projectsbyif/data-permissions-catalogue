---
illustration_version: 1

title: Authentication with a magic link
weight: 1
category: Signing in to a service

images:
  - url: /images/access-through-another-service.svg

alt: An email has a link which logs you in to another service.

advantages:
 - No need for people to remember or enter a password.
 - Prevents people from reusing passwords, or depending on passwords that are easy to remember. Both of these often cause security issues.
 - Fast (if people have access to their email accounts).
 - Links can be made time-sensitive, so they expire if they’re not used within a certain time frame.
 - Reduces the risk of  phishing and other password-based hacking attacks.


limitations:
 - You can lose access to the service if you lose access (temporarily or permanently) to the email account or phone used for authentication.
 - Slower than using a password manager to automatically fill in passwords.
 - Email providers have a record of every time someone logs into a service that uses this pattern.


examples:
  - title: Slack magic links
    url: https://get.slack.help/hc/en-us/articles/212681477-Sign-in-to-Slack
    description: Slack sends an email, containing a magic link, to the address used for registering. This lets the user log in to Slack without a password.
  - title: Medium one-time login
    url: https://blog.medium.com/signing-in-to-medium-by-email-aacc21134fcd
    description: Medium sends an email with a sign-in link. The user clicks on the link to sign in.
---

People can sign in to a service without a password. They can use a magic link that they get through email or text message.

IF thinks this pattern is useful for people who don’t use password managers. It is also useful when people don’t have to sign in very often. It depends on people having  access to their email or mobile phone signal when they’re signing in.

Someone else gaining access to the email or phone associated with a magic link gives them control over a service that relies on it. (But this is true for many password resets that use email or texts authentication. It can be avoided by using other kinds of multi-factor authentication.)
