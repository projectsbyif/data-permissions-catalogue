---
title: Multi-factor authentication with a physical object

category: Signing in to a service
weight: 2
images:
  - url: /images/authentication-using-a-security-object.svg

alt: A security key is inserted into a computer and a checkmark is displayed on screen.

advantages:
 - Adds one more barrier if other authentication methods are compromised or broken.
 - Protects people from phishing attacks.

limitations:
 - People need to have the physical security object to hand.
 - The hardware is not universally supported.

examples:
  - title: Yubico's Yubikey
    description: Yubikeys can authenticate people on desktop and mobile through USB and NFC.
    url: https://www.yubico.com/
  - title: Google Titan Security Key
    description: The Titan Security Key can authenticate people on desktop and mobile through USB and Bluetooth.
    url: https://cloud.google.com/titan-security-key/
  - title: Android phone’s built-in security key
    description: Use Android phone’s built-in security key to authenticate. The phone acts as a security key.  It connects via Bluetooth and it checks it’s near the primary device.
    url: https://www.blog.google/technology/safety-security/your-android-phone-is-a-security-key/
---

Multi-factor authentication adds an extra layer of security on top of having a username and password.  

For this kind of multi-factor authentication, people log in and then connect a physical security object to gain access. This object can be standalone or built into a smartphone and connect via USB, NFC or Bluetooth.

IF thinks that this pattern effectively protects people against phishing attacks. So far it has mainly been used for enterprise security, where extra protection is needed. That said, it is not universally supported by services and needing  an extra object to log in (unless it’s built in a phone) makes it less useful for most users.

Examples of authentication using a physical object but without passwords are currently [being trialled.](https://www.yubico.com/passwordless/ "Passwordless Login with Yubikey")
