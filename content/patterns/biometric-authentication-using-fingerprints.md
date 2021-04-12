---
title: Biometric authentication using fingerprints

category: Signing in to a service
weight: 3
images:
  - url: /images/biometric-authentication.svg

alt: A finger on a fingerprint scanner.

advantages:
 - Can be quicker, more convenient and more secure than using a [password](https://catalogue.projectsbyif.com/patterns/secret-answer/)
 - Eliminates some common security vulnerabilities in [secret answers](https://catalogue.projectsbyif.com/patterns/authentication-by-secret-answer/), including [brute-force attacks](https://en.wikipedia.org/wiki/Brute-force_attack) to guess a secret answer, or someone getting your secret answer after seeing you input it.

limitations:
 - In most consumer devices today, it is not possible to change a fingerprint in the event of [a data breach](https://www.theguardian.com/technology/2019/aug/14/major-breach-found-in-biometrics-system-used-by-banks-uk-police-and-defence-firms) in the same way you can change a password.
 - Fingerprint scanners may not work with wet or damp fingerprints.
 - Secure implementations of this pattern require additional hardware and software components. For example, Apple’s [Secure Enclave](https://www.apple.com/business/docs/site/iOS_Security_Guide.pdf) or a [Trusted Execution Environment](https://source.android.com/security/trusty) on a processor to store fingerprint data separate from other applications on device.
 - Enrolling a fingerprint can take time, effort, and a number of interactions. This has implications for user experience, including for [accessibility](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5864003/).

examples:
 - title: Android fingerprint
   url: https://material.io/design/platform-guidance/android-fingerprint.html
 - title: iOS TouchID
   url: https://support.apple.com/en-gb/guide/iphone/iph672384a0b/ios
---

Check someone is who they say they are using their unique physical features, like their fingerprint, iris, face or voice.

Biometric authentication using fingerprints uses a scanner to gather data about a fingerprint, such as the position of ridges or unique marks. To verify a person’s identity, an algorithm checks if the scanned fingerprint matches a previously enrolled fingerprint.

IF thinks that biometric authentication using a fingerprint can be an efficient way of gaining access to data. As with other authentication patterns, there should always be a fallback for when people might be impaired, either temporarily (e.g. wet or damp fingers) or permanently (e.g. missing fingerprints).
