---
title: Multi-factor authentication using an object

category: Signing in to a service
weight: 1
images:
  - url: /images/multi-factor-with-object.svg

alt: A memory card is inserted into a computer and a checkmark is displayed on screen.

advantages:
 - It makes it more difficult for an unauthorized person to access user’s data or devices
 - If one factor is compromised or broken, the attacker still has at least one more barrier to breach
 - Users are protected from phishing attacks

limitations:
 - It requires the user to have the physical security object with them

examples:
  - title: FIDO2 / W3C’s WebAuthn set standards for security objects to   implement
    url: https://developers.yubico.com/FIDO2/
  - title: Yubikey
---

In this type of multi-factor authentication, a user must present a physical security object before data access is permitted. For example, a user may be required to insert a USB security key into their laptop before they’re able to login.
