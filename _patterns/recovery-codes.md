---
layout: pattern

title: Recovery codes

category: Backup data

images:
  - url: /images/recovery-codes.svg

alt: A list of randomly generated alpha-numeric codes.

advantages:
  - Allows access to data when other factors are lost or unavailable
  - Can be stored on local devices or in physical security

limitations:
  - If lost, access to data is potentially lost permanently
  - If found, it can lead to unauthorised access to data

examples:
  - description: Most services that use multi-factor authentication create recovery codes for use when the other factor is unavailable
---

This allows a person to regain access to their data with single-use codes. Codes are downloaded and stored in a safe place, in case the user loses other authenticate factors such as text-messages, objects or the authenticator app.
