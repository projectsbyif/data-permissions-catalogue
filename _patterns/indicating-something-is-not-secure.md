---
layout: pattern

title: Indicating something is not secure

category: Share data

images:
- url: /images/indicating-something-is-not-secure.svg

alt: A message on a computer monitor that reads 'Not secure' next to an exclamation mark.

advantages:
 - Users don’t have to understand the underlying technology to see that a service may be risky to use.
 - Users are likely to spot an alert icon as it looks different to what they’re used to seeing&#58; most sites don’t have one, as they’re secure.

limitations:
 - A small icon in a browser search bar is often not enough, and not proportionate to the risks of using sites that are not secure.
 - Explaining why this matters is complicated.
 - Even if it alerts users that the connection is not secure, many users might keep using it anyway because they don’t fully understand the risks.
 - There’s an ongoing question about the fairness of expecting end users to understand enough about information security to assess risks and make decisions.

examples:
  - title: Chrome web browser
    url: https://support.google.com/chrome/answer/95617?hl=en-GB
  - title: Firefox web browser
    url: https://support.mozilla.org/en-US/kb/how-do-i-tell-if-my-connection-is-secure
  - title: Safari web browser
    url: https://support.apple.com/en-gb/HT208672
  - title: Falling rocks sign
    url: https://commons.wikimedia.org/wiki/Category:Falling_stones_signs

---

An alert icon in the search bar is a visual cue that suggests to the user that data shared between the server and the browser is not secure. If the communication between the server and browser is broken, messages can be intercepted. They can then be read by anyone, in phishing attacks or other hacks.

If a website does not have a valid certificate, issued by [certificate authorities](https://en.wikipedia.org/wiki/Certificate_authority), most web browsers (Chrome, Firefox, Safari or Microsoft Edge), will show the user an alert icon and the text  ‘Not secure’ next to the URL. At IF, we think this is a better pattern than [Indicating something is secure](/patterns/indicating-something-is-secure), but still inadequate by itself.
