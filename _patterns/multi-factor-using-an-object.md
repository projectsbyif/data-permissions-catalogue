---
layout: pattern

title: Multi-factor using an object

category: Authenticate

advantages:
  - access requires possession of a unique object 
  - object is harder to forge
  - alternative to [passwords](/patterns/secret-answer) that can be guessed or stolen.

limitations:
  - object can be lost or damaged
  - access requires someone to have the object on them

examples:
  - title: YubiKey
    url: https://www.yubico.com/
  - title: TREZOR hardware wallet
    url: https://trezor.io/   
  - title: Estonia e-ID Card
    url: https://e-estonia.com/solutions/e-identity/id-card/
    description: contains cryptographic tools to allow people to sign documents online
---

This type of multi-factor authentication involves a person presenting a physical object when requesting access to data.
