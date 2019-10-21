---
illustration_version: 1

title: Checking active access
weight: 4
category: Signing in to a service

images:
  - url: /images/checking-active-access.svg

alt: Checking active access.

advantages:
 - There’s virtually no friction for the user because they just continue using the service in the same way
 - It can reduce the risk of someone being able to use the account if they gain access to a currently logged in device

limitations:
 - If overused this pattern can be frustrating, requiring a user to actively prevent the session from expiring
 - Depending on implementation, this could make it harder for people with accessibility needs to use the service

examples:
  - title: Automatic logging out of online baking after a period of inactivity
  - title: Apple Watch
    description: Stops access to Apple Pay when the watch senses it's no longer being worn
    url: https://www.imore.com/apple-watch-apple-pay-and-wrist-detection-what-you-need-know
---

Some products and services automatically expire active sessions after a specific time or using other signs of inactivity for added security.

For example, a smart watch might prevent the user from accessing private data or some features when the watch is taken off.
