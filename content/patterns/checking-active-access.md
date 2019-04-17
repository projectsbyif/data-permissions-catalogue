---
illustration_version: 1

title: Checking active access
weight: 1
category: Signing in to a service

images:
  - url: /images/inactivity-checking.svg

alt: A message on a mobile phone which reads Are you still there? Data published in 29 seconds.

advantages:
 - There’s virtually no friction for the user because they just continue using the service in the same way
 - There’s less risk of an active session being exposed if a user doesn’t take active steps to deauthenticate

limitations:
 - If overused this pattern can be frustrating, requiring a user to actively prevent the session from expiring
 - Active prevention of session expiry could make it harder for people with accessibility needs to use the service

examples:
  - title: Automatic logging out of online baking after a period of inactivity
  - title: Apple Watch
    description: stops access to Apple Pay when the watch senses it's no longer being worn
---

Some products and services automatically expire active sessions after a specific time or using other signs of inactivity for added security.

For example, a smart watch might prevent the user from accessing private data or some features when the watch is taken off.
