---
layout: pattern

title: Multi-factor using text message

category: Authenticate

images:
  - url: /images/multi-factor-with-text-message.svg

advantages:
  - requires access to a mobile phone number
  - text (SMS) messages are widely available
  - alternative to [passwords](/patterns/secret-answer) that can be guessed or stolen.

limitations:
  - text messages can be intercepted 
  - mobile phone numnber (SIM cards) can be cloned

examples:
- title: Two Factor Auth List
  url: https://twofactorauth.org/
  description: a directory of online services and whether they allow multi-factor authentication

further_reading:
  - title: This is why you shouldn’t use texts for two-factor authentication
    url: https://www.theverge.com/2017/9/18/16328172/sms-two-factor-authentication-hack-password-bitcoin
---

This type of [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) involves a person entering a code sent in a text message to a nominated phone when requesting access to data.

The code is specific to that person, is single use and expires after a short amount of time. If the person enters a valid code, it is assumed that they have physical ownership over a mobile phone.
