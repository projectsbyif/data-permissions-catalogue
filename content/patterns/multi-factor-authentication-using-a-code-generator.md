---
title: Multi-factor authentication using a code generator

category: Signing in to a service
weight: 4
images:
  - url: /images/multi-factor-with-generator.svg

alt: A code is generated on a device and entered into a computer.

advantages:
 - If one security factor is compromised, the attacker has another barrier to get through.
 - No need for an internet connection or phone signal.
 - No delay with receiving codes.

limitations:
 - People might need recovery codes for when they lose or upgrade their phone, or run out of battery.
 - Requires a smartphone with a code generator app installed.
 - Generator apps can be lost if something happens to the device.
 - Doesn’t prevent phishing attacks.
 - Can be hard to find the code you need if you have a large number of services in the generator app.
 - Requires people to navigate away from the service and open up a separate app.

examples:
  - title: Authy
    url: https://authy.com/
  - title: Duo Mobile
    url: https://duo.com/product/trusted-users/two-factor-authentication/duo-mobile
  - title: Google Authenticator
    url: https://support.google.com/accounts/answer/1066447
  - title: Lastpass Authenticator
    url: https://lastpass.com/auth/
  - title: Microsoft Authenticator
    url: https://docs.microsoft.com/en-gb/azure/active-directory/user-help/user-help-auth-app-download-install
  - title: Two Factor Auth List
    url: https://twofactorauth.org/
    description: A directory of online services and whether they allow multi-factor authentication.
---
Multi-factor authentication adds an extra layer of security on top of a username and password. In this type of multi-factor authentication, an app or a device generates a code which a person can use to access a service. The code is specific to the person and their device. It’s single use, and expires after a short amount of time. It is also known as Time-based One-Time Password (TOTP). A user can set up multi-factor authentication for their email account and use an authenticator app for generating codes.

IF thinks this pattern is useful because it adds a layer of security to accounts without adding too much friction to the experience. Codes are usually short enough to type quickly. But it does require people having access to a smartphone and opening a separate app. If used too frequently, this can be frustrating. Give people the option to choose different multi-factor authentication patterns depending on their context, like [multi-factor authentication using text message](/patterns/multi-factor-authentication-using-text-message/).
