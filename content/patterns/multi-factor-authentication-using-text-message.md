---
title: Multi-factor authentication using text message

category: Signing in to a service
weight: 4
images:
  - url: /images/multi-factor-with-text-message.svg

advantages:
 - Makes it more difficult for an unauthorised person to access user’s data or devices.
 - If one security factor is compromised, the attacker has another barrier to get through.
 - Works on any phone.
 - No need for an internet connection.
 - Can sometimes be automatically read by apps so that people don’t have to open messages to use the codes.

limitations:
 - Need to have phone nearby.
 - Messages may be delayed.
 - Requires phone signal.
 - Doesn’t prevent phishing attacks.
 - Relies on infrastructure (SS7) with many known vulnerabilities.

alt: A code is shown in a text message on a mobile device and entered into a computer at the same time.

examples:
- title: Two Factor Auth List
  url: https://twofactorauth.org/
  description: a directory of online services and whether they allow multi-factor authentication
---

Multi-factor authentication adds an extra layer of security on top of a username and password. In this kind of multi-factor authentication, a service sends someone a text message with a unique code which they can use to access the service. The code is unique to that person and device. It’s single-use and expires after a short period of time. When installing a mobile banking app, for example, a customer receives a code that they enter to complete the setup.

IF thinks this is a useful pattern because it adds another layer of security to someone’s account. It does increase friction, though. Someone has to have their phone nearby and wait for a text message. It also relies on infrastructure [(SS7)](https://en.wikipedia.org/wiki/Signalling_System_No._7) that has many known vulnerabilities. Therefore, it is worth adding options for multi-factor authentication patterns that suit different contexts, including [multi-factor authentication using a code generator.](/patterns/multi-factor-authentication-using-a-code-generator)
