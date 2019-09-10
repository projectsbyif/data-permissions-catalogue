---
layout: pattern

title: Indicating that something is not secure

category: Control access

images:
- url: /images/access-through-letter.svg

alt: A person's hand hovers their mobile phone over a bar code in an energy bill.

advantages:
 - Users don’t have to understand any of the underlying technology to be aware that a service may be risky to use and decide whether to continue
 - Users are more likely to spot an alert icon as it looks different to what they’re used to seeing (most sites don’t have one, as they’re secure)

limitations:
 - A small icon in a browser search bar to communicate to users that a site is not secure is often not enough, and not proportionate to the risks of using sites that are not secure
 - Even if it alerts users that the connection is not secure, many users do not understand the risks and might keep using it anyway
 - Explaining why this matters is really complicated. There’s an ongoing question about how fair it is to expect end users to understand enough about information security to make decisions about it

examples:
  - title: Chrome, Firefox and Safari web browsers.
    url: https://support.mozilla.org/en-US/kb/how-do-i-tell-if-my-connection-is-secure
  - title: Whatsapp ‘not in your contact list’
    url: https://faq.whatsapp.com/21197244/

---

An alert icon in the search bar is a visual cue that suggests to the user that data shared between the server and the browser is not secure. If that communication between the server and browser is broken, messages can be intercepted and read by anyone, in phishing attacks or other hacks.

If a website does not have a valid certificate, issued by [certificate authorities](https://en.wikipedia.org/wiki/Certificate_authority), most web browsers (Chrome, Firefox, Safari or Microsoft Edge), will show the user an alert icon and ‘Not secure’ next to the URL.
