---
layout: pattern

title: Making it harder to use sites that might not be secure

category: Control access

images:
- url: /images/access-through-letter.svg

alt: A person's hand hovers their mobile phone over a bar code in an energy bill.

advantages:
 - Guides users towards a safer course of action without them having to understand complex systems and technologies, like [Certificate Transparency](https://www.certificate-transparency.org/) for example.

limitations:
 - Some users will want to access websites regardless of the risk and will find this experience difficult
 - Organisations who run browsers and similar services have the power to influence what websites users access

examples:
  - title: Chrome, Firefox and Safari web browsers.

---

Some services, like web browsers, make it difficult for users to access websites that are considered unsafe.

For example, browsers check whether websites have certificates that prove websites are authentic and any data exchanged is encrypted. If browsers can’t find a valid certificate they add friction to the user’s experience to deliberately obscure the way forward to the site (by making buttons and actions less clear).
