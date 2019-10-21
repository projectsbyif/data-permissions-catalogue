---
title: Ongoing authentication through behaviour

category: Doing security checks
weight: 1

future_pattern: true

future_pattern_reason: Not in use yet but useful for designing possible futures.

images:
  - url: /images/behavioural-biometrics.svg

alt: A computer monitor with the path of the cursor outlined on screen.

advantages:
 - Helps spot an attacker even if they have gotten through other sign-in methods.

limitations:
 - Must be used with other sign-in authentication patterns (only authenticates someone after they’ve signed in).
 - Could be used to extract other data about people, like website usage analytics.


examples:
 - title: Behavioural authentication by OneSpan
   url: https://www.vasco.com/behavioral-authentication.html
   description: A feature in OneSpan fintech security platforms (hard to see how it works or what a user would see or consent to).
 - title: Continuous authentication by BehavioSec
   url: https://www.behaviosec.com/
   description: BehavioSec’s software uses this pattern to stop problems created by digital fraud (unclear how this is transparent, if at all).
   

---

Continue to authenticate a person’s identity after they’ve logged in by monitoring how they interact with a device. If someone is making a bank transaction and their mouse movements are different to normal, the transaction could be blocked or additional authentication requested.

IF thinks that this pattern can enhance existing authentication methods without adding more friction for the user. People should have the option to opt-out. Rather than running in the background, it should be clearly indicated so people know it’s happening, as it could be misused to gather additional data.
