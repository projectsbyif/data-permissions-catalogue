---
title: Multi-factor authentication using text message

category: Signing in to a service
weight: 4
images:
  - url: /images/multi-factor-with-text-message.svg

advantages:
 - It makes it more difficult for an unauthorized person to access user’s data or devices
 - If one security factor is compromised or broken, the attacker still has at least one more barrier to breach
 - Works on any phone
 - It works without an internet connection

limitations:
 - The user has to have their phone with them
 - The user has to be able to get phone signal
 - It doesn’t prevent phishing attacks
 - It relies on infrastructure (SS7) with many known vulnerabilities

alt: A code is shown in a text message on a mobile device and entered into a computer at the same time.

examples:
- title: Two Factor Auth List
  url: https://twofactorauth.org/
  description: a directory of online services and whether they allow multi-factor authentication
---

Multi-factor authentication adds an extra layer of security to allow access to data. Passwords can be guessed or stolen, so requiring extra information increases the confidence that access to data should be allowed.

In this type of multi-factor authentication, a user must enter a unique code sent to them in a text message before data access is permitted. The code is specific to that person and device, it’s single-use and expires after a short amount of time. For example, when installing a mobile banking app, a user may be sent code they need to enter to complete the setup.
