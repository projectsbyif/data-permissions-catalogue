---
layout: pattern

title: Behavioural patterns

category: Authenticate

images:
  - url: /images/behavioural-patterns.svg

advantages:
  - Access is limited to past behaviours
  - New access requires someone to authenticate again
  - Makes it easier to access data that is frequently requested

limitations:
  - Software the patterns identifies can be too simplistic
  - Matching past activities does not guarantee the access is valid

examples:
  - description: Google and Facebook require people to sign in again if they're accessing services from a new location
  - description: Many online banking services require further authentication when transferring money to an account a customer hasn't transferred to before
---

Access is controlled based on someone's past activity. Unusual behaviour could cause further checks or access to data to be blocked.
