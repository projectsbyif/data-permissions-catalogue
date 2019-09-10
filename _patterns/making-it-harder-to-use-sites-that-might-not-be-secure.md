---
layout: pattern

title: Making it harder to use sites that might not be secure

category: Share data

images:
- url: /images/making-it-harder-to-use-sites-that-might-not-be-secure.svg

alt: A message on a computer screen that says 'Your connection is not private'. A button underneath the message says 'Back to safety'.

advantages:
 - Guides users towards a safer course of action without them having to understand complex systems and technologies, like Certificate Transparency for example.

limitations:
 - Some users will want to access websites regardless of the risk and will find this experience difficult
 - Organisations who run browsers and similar services have the power to influence what websites users access

examples:
  - title: Chrome, Firefox and Safari web browsers.

---

Some services, like web browsers, make it difficult for users to access websites that are considered unsafe.

For example, browsers check whether websites have certificates that prove websites are authentic and any data exchanged is encrypted. If browsers can’t find a valid certificate they add friction to the user’s experience to deliberately obscure the way forward to the site (by making buttons and actions less clear).
