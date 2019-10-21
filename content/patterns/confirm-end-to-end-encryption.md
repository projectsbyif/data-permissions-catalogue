---
title: Confirm end-to-end encryption

category: Doing security checks
weight: 2
images:
  - url: /images/confirm-end-to-end-encryption-2.svg

alt: A person generates a code on their device for another person to scan.

cover_image:
  - url: /images/confirm-end-to-end-encryption-2.svg

advantages:
 - Helps detect impersonation attacks.
 - Reassures people that their calls or messages with each other are encrypted.
 - Usually people are notified if the recipient’s unique code has changed, so they don’t need to check this manually.



limitations:
- Requires people to have a high level of digital literacy to understand why to check encryption in the first place.
- It doesn’t work if an attacker has access to the recipient’s device.



examples:
 - title: Verify security code in WhatsApp
   url: https://faq.whatsapp.com/en/android/28030015/
   description: People can scan each other's QR codes or visually compare the unique 60-digit numbers.
 - title: Safety numbers in Signal
   url: https://signal.org/blog/safety-number-updates/
   description: People can scan each other’s QR code and visually compare safety numbers. Once people have confirmed the codes are the same they can mark the contact as ‘verified’.
 - title: Device keys in Facebook Messenger
   url: https://www.facebook.com/help/messenger-app/147596532316790?helpref=uf_permalink#targetText=Both%20you%20and%20the%20other,have%20its%20own%20device%20keys.
   description: People can compare the device key that appears under their friend's name with the keys on their device to make sure they match.
 - title: Encryption key in Telegram
   url: https://telegram.org/faq#q-what-is-this-encryption-key-thing
   description: After establishing the secure end-to-end connection, Telegram generates a picture that visualises the encryption key for a chat. People  can then compare these pictures to see if they’re the same.


---

Check that shared data is encrypted and that the person receiving it is who they say they are. This is best done in person, by making sure each other’s unique codes (public key fingerprint) match. Doing this face to face makes it harder to forge or tamper with the codes. People are notified if other people’s unique codes change.

IF thinks that this isn’t something everyone will do, but it should be an option to reassure those who have particular needs of encryption. Knowing when the recipient’s phone number or device has changed helps flag potential risks.
