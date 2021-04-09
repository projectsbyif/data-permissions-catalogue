---
illustration_version: 1

title: Recovery codes
weight: 4
category: Signing in to a service

images:
  - url: /images/recovery-codes.svg

alt: A list of randomly generated alpha-numeric codes.

advantages:
 - People can access their account when their 2 factor authentication device is lost or broken
 - Storage of codes can be responsive to people’s individual threat models, for example codes can be stored in a password manager or printed

limitations:
 - If the recovery codes are not downloaded when someone sets up 2 factor authentication, or the codes are lost, the account cannot be recovered
 - It places a large burden of security on the user
 - If recovery codes are found or stolen someone could gain unauthorised access to an account
 - Setting up 2 factor authentication can be complicated, adding the need to create and store recovery codes may add to the complexity for some people

examples:
- title: Google Mail recovery codes
url: https://support.google.com/accounts/answer/1187538?co=GENIE.Platform%3DDesktop&hl=en
description: Most services that use multi factor authentication create recovery codes for use when the other factor is unavailable.
- title: Github recovery codes
url: https://help.github.com/en/articles/recovering-your-account-if-you-lose-your-2fa-credentials
---

Recovery codes are unique, single-use code generated as part of setting up a 2 factor authentication process. If someone loses access to the device that provides their 2 factor authentication, they can use one of their recovery codes to gain access to an account.

At IF we think it’s important that security ceremonies are designed in ways that represent how people live. We all lose or break devices from time to time, so providing people with ways to recover accounts is an important way of showing care for people. However, we believe the design of how recovery codes are generated and communicated to people could be better. It can be hard to know where to store codes and it’s easy to forget where you stored them.
