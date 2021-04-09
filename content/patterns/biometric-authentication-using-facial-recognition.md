---
title: Biometric authentication using facial recognition

category: Signing in to a service
weight: 3
images:
  - url: /images/biometric-using-facial-recognition.svg

alt: A simulated facial recognition matrix to authentication.

advantages:
 - Can be quicker, more convenient and more secure than using a password
 - Facial recognition can now be done on device - this is more secure and private than processing images remotely.

limitations:
 - Facial recognition systems might be less accurate for twins, faces that are still developing (e.g. Apple’s FaceID system is less effective with [children under 13](https://support.apple.com/en-gb/HT208108) ), or [black faces](https://www.wired.com/story/best-algorithms-struggle-recognize-black-faces-equally/).
 - Facial recognition systems [can be tricked](https://www.kaspersky.co.uk/blog/face-unlock-insecurity/13250/) using photos and videos of individuals. To avoid this, recognition systems often require additional technological requirements like additional hardware components ( [e.g. infrared camera](https://www.kaspersky.co.uk/blog/face-unlock-insecurity/13250/) ), more effective software to process images, and secure storage on devices.
 - It’s possible to take advantage of facial recognition systems to access s someone’s device without their consent. For example, when someone is asleep or unresponsive or if they are forced to (sometimes by police and government services - like in [Hong Kong](https://www.nytimes.com/2019/07/26/technology/hong-kong-protests-facial-recognition-surveillance.html) and [USA](https://www.forbes.com/sites/thomasbrewster/2019/01/14/feds-cant-force-you-to-unlock-your-iphone-with-finger-or-face-judge-rules/#57885db842b7) ). By default, [Apple iOS](https://support.apple.com/en-gb/HT208108) and [Google Pixel](https://www.theverge.com/2020/4/6/21211230/google-update-pixel-4-eyes-open-fix-face-unlock) devices only unlock the device when you have the eyes open and are looking directly at it.


examples:
  - title: Apply Face ID
    url: https://support.apple.com/en-gb/HT208108
    description: Facial recognition system to unlock a device or make a payment.
  - title: Google facial recognition with Soli
    url: https://www.blog.google/products/pixel/new-features-pixel4/
    description: Facial recognition system using Soli (motion-sensing radar) to unlock a device or authorise apps.
---

Check someone is who they say they are using their unique physical features, like their fingerprint, iris, face or voice.

Biometric authentication using facial recognition uses a camera to map the position of key facial features, like the distance between the eyes, to create a unique “[faceprint](https://www.gao.gov/assets/680/671764.pdf)”. To verify a person’s identity, an algorithm checks if a  scanned faceprint matches a previously enrolled faceprint.

IF thinks that facial recognition can provide a secure method of authentication when used with other methods. However, the adoption of facial recognition technologies more broadly and for other use cases has happened faster than societal conversations about the ethics and legality of using such technologies. As such, this pattern should only be used after careful examination of the context in which it will be applied, and with due consideration to the level of investment required to build truly effective facial recognition technology.
