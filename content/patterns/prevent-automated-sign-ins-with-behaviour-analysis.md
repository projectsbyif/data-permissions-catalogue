---
title: Prevent automated sign-ins with behaviour analysis

category: Signing in to a service
weight: 4
images:
  - url: /images/prevent-automated-sign-ins-with-behaviour-analysis.svg

alt: A CAPTCHA example with image recognition.

advantages:
 - Reduces the impact of automated access to systems, such as [denial of service](https://en.wikipedia.org/wiki/Denial-of-service_attack), spam or fake users
 - Behavioural analysis causes less friction than asking people to complete challenges


limitations:
 - It’s not accurate enough yet on its own and is often combined with [prevent automated sign-ins with image and audio challenges](https://catalogue.projectsbyif.com/patterns/prevent-automated-sign-ins-with-challenges/), which have accessibility issues.
 - Requires access to large amounts of data for training behavioural analysis machine learning models.
 - Relies on [collecting data about people without them knowing](https://www.w3.org/TR/turingtest/#version-2-are-you-a-robot).

examples:
  - title: Google reCAPTCHA
    url: https://www.google.com/recaptcha/intro/v3.html
    description: Uses risk based analysis to detect abusive traffic on websites
  - title: hCAPTCHA
    url: https://www.hcaptcha.com/
    description: An alternative to reCAPTCHA that also provides data labelling services for training data sets
---

Stop automated access (by bots) by analysing data about interaction behaviour. It is also known as CAPTCHA, Completely Automated Public Turing test to tell Computers and Humans Apart.

An example of this could be analysing someones’ mouse movements or typing patterns to check it isn’t automated.

IF thinks that preventing automated sign-ins will become more difficult but also more critical, as machine learning algorithms improve. This pattern removes burden from people to verify they’re human but requires continuous data collection and monitoring. You should consider the risk of automated sign-ins with the impact of continuous data collection in context. It might not work if people use privacy-preserving features such as incognito mode. Alternatively, other patterns could be used to prevent automated sign ins, such as [multi-factor authentication using text message](https://catalogue.projectsbyif.com/patterns/multi-factor-authentication-using-text-message/) or [biometric](https://catalogue.projectsbyif.com/patterns/biometric-authentication-using-fingerprints/) [authentication](https://catalogue.projectsbyif.com/patterns/biometric-authentication-using-facial-recognition/).

Read more: [The inaccessibilities of CAPTCHA](https://www.w3.org/TR/turingtest/)
