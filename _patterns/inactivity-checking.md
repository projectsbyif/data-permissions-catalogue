---
layout: pattern

title: Inactivity checking

category: Control access

images:
  - url: /images/inactivity-checking.svg

advantages:
  - Access is limited to when someone is actively using a service
  - Simple to implement

limitations:
  - Inactivity can be defined too simply

examples:
  - title: Apple Watch
    description: stops access to Apple Pay when the watch senses it's no longer being worn
  - title: Netflix
    description: asks if someone is still there after automatically playing several episodes in a series
  - title: Google Inactive Account Manager
    url: https://support.google.com/accounts/answer/3036546?hl=en
    description: allows data to be shared or notification to be sent when an account becomes inactive
  - title: Dead man's switch
    url: https://en.wikipedia.org/wiki/Dead_man%27s_switch
    description: turns machinery off when its operator isn't holding down a switch
---

Data is shared if a secondary activity is stopped.
