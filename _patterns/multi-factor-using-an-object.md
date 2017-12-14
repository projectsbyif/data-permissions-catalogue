---
layout: pattern

title: Multi-factor using an object

category: Authenticate

advantages:
  - Access requires possession of a unique object 
  - Object is harder to forge
  - Alternative to [passwords](/patterns/secret-answer) that can be guessed or stolen.

limitations:
  - Object can be lost or damaged

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
