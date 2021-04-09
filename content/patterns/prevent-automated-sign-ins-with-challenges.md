---
title: Prevent automated sign-ins with challenges

category: Signing in to a service
weight: 4
images:
  - url: /images/prevent-automated-sign-ins-with-challenges.svg

alt: A CAPTCHA example with image recognition.

advantages:
 - Reduces the impact of automated access to systems, such as [denial of service](https://en.wikipedia.org/wiki/Denial-of-service_attack), spam or fake users.

limitations:
 - Difficult to use for people who depend on assistive technologies.
 - Can be too difficult for people to solve, increasing friction and preventing access.
 - Some challenges can be solved by a machine.
 - Attackers might send challenges to people to solve via another channel, without them knowing what it’s for.
 - You can pay companies to solve some text and image challenges in bulk.

examples:
  - title: Google reCAPTCHA
    url: https://www.google.com/recaptcha/intro/v3.html
    description: Uses risk based analysis to detect abusive traffic on websites
  - title: hCAPTCHA
    url: https://www.hcaptcha.com/
    description: An alternative to reCAPTCHA that also provides data labelling services for training data sets
  - title: Arkose Labs Enforcement
    url: https://www.arkoselabs.com/technology/enforcement
    description: Protects users from fraud using challenge-response mechanisms that computer vision can’t solve
---

Stop automated access (by bots) by setting challenges that people can solve but are hard to automate. It is also known as CAPTCHA, Completely Automated Public Turing test to tell Computers and Humans Apart.

An example of this could be asking someone to identify elements in a photo or audio clip.

IF thinks that preventing automated sign-ins will become more difficult but also more critical, as machine learning algorithms improve. When choosing how to implement this pattern take into account accessibility and friction. Answers to image and audio challenges can be used to train machine learning algorithms, without people knowing. This is increasingly controversial as it’s unclear what the data is being used for. This pattern tends to be used with [prevent automated sign-in behaviour analysis](https://catalogue.projectsbyif.com/patterns/prevent-automated-sign-in-behaviour-analysis/). Consider using other authentication patterns to prevent automated sign ins, such as [multi-factor authentication using text message](https://catalogue.projectsbyif.com/patterns/multi-factor-authentication-using-text-message/) or [biometric](https://catalogue.projectsbyif.com/patterns/biometric-authentication-using-fingerprints/) [authentication](https://catalogue.projectsbyif.com/patterns/biometric-authentication-using-facial-recognition/).

Read more: [The inaccessibilities of CAPTCHA](https://www.w3.org/TR/turingtest/)
