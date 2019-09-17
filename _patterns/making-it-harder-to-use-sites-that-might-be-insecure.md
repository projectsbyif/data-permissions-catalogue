---
layout: pattern

title: Making it harder to use sites that might be insecure

category: Share data

images:
- url: /images/making-it-harder-to-use-sites-that-might-be-insecure.svg

alt: A message on a computer screen that says 'Your connection is not private'. A button underneath the message says 'Back to safety'.

advantages:
 - Guides users towards a safer course of action without them having to understand complex systems and technologies, like Certificate Transparency.

limitations:
 - Some users will want to access websites regardless of the risk and will find this experience difficult.
 - The descriptions of why a website has been blocked is usually hard for an end user to understand, and it’s often not clear what parts of a website aren’t secure.
 - Organisations who run browsers and similar services have the power to influence what websites users can access.

examples:
  - title: Chrome web browser
  - title: Firefox web browser
    url: https://support.mozilla.org/en-US/kb/error-codes-secure-websites
  - title: Safari web browser
    description: See "Respond to a fraudulent website warning."
    url: https://support.apple.com/en-gb/guide/safari/sfri40697/mac

---

Some services, like web browsers, make it difficult for users to access websites that are considered unsafe.

Usually, browsers check if websites have certificates that prove websites are authentic and that data exchanged between the browser and the server is encrypted. If browsers can’t find a valid certificate, they add friction to the user experience by displaying an error page, or prompting the user to confirm they want to navigate to a potentially unsafe page.
