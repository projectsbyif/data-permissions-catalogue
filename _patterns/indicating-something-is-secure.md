---
layout: pattern

title: Indicating something is secure

category: Share data

images:
- url: /images/indicating-something-is-secure.svg

alt: A message on a computer screen that reads 'Secure' next to a locked padlock icon.

advantages:
 - Users don’t have to understand any of the underlying technology.

limitations:
 - Browsers like Chrome are phasing out these kinds of positive security indicators because they don’t work.
 - Overstates how secure the connection between the browser and server is
 - Users don’t notice the icons or don’t fully understand what they mean. Safety should be the norm. If something is normal you don’t need a label telling you this.
 - Positive indicators can be easily faked by malicious actors. If users see lock icons anywhere on screen they think websites can be trusted.
 - Visual indicators won’t work for IoT devices and voice interfaces.
 - Certificate Authorities that issue certificates have been hacked in the past. This meant legitimate certificates were issued for untrustworthy websites.

examples:
  - title: Chrome, Firefox and Safari web browsers.

---

A lock icon in the search bar (or another kind of kite mark) is a visual cue that suggests that the data shared between the server and the browser is secure and encrypted.
If that communication is broken, messages can be intercepted. They can then be read by anyone and used in phishing attacks or other hacks.

If a website has a valid certificate, issued by [certificate authorities](https://en.wikipedia.org/wiki/Certificate_authority), most web browsers (Chrome, Firefox, Safari or Microsoft Edge), will show the user a padlock next to the URL. IF doesn’t think this pattern works: we’ve only included it as a reference.
