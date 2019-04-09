---
title: Verifiable proof

category: Security checks

images:
  - url: /images/verifiable-proof-1.svg
  - url: /images/verifiable-proof-2.svg
  - url: /images/verifiable-proof-3.svg

alt: A person generates a code on their device for another person to scan.

cover_image:
  - url: /images/verifiable-proof-2.svg

advantages:
 - Prevents impersonation attacks
 - Doesn’t rely on public key infrastructure
 - Reassures the user that their calls or messages with the recipient are private


limitations:
 - Some people won’t understand what is being checked
 - Both devices have to be physically present to perform the verification of the identity.
 - The underlying mathematical process can later be found to be insecure


examples:
 - title: WhatsApp verify security code
   url: https://faq.whatsapp.com/en/general/28030015
 - title: Signal Safety numbers
   url: https://signal.org/blog/safety-number-updates/

open-source:
 - title: Open Whisper Systems
   url: https://github.com/whispersystems/

---

The user can check that data is being shared securely, in a way that is hard to forge or edit. For example, a user can scan another user’s QR code to verify that no one is intercepting their messages or calls.
