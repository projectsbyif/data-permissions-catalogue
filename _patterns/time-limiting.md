---
layout: pattern

title: Time limiting

category: Control access

images:
  - url: /images/time-limiting.svg

advantages:
  - data can only be accessed within a set time

limitations:
  - date cannot be accessed once the defined time

examples:
  - title: Google Docs
    url: http://googleappsupdates.blogspot.co.uk/2016/03/set-expiration-dates-for-access-to.html
    description: when sharing a document, people can choose a time and date for sharing to be revoked
  - title: Citymapper
    url: https://citymapper.com/news/867/share-your-eta-as-you-move
    description: you can share your location with another person for the duration of a single journey
---

Someone can set a start and end time for sharing. When the current time is outside the allowed access time, then access is not allowed.
