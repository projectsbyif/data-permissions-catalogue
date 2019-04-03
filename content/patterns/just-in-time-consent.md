---
title: Just-in-time consent

category: Permission and consent

images:
  - url: /images/just-in-time-consent.svg

alt: A prompt asking to access the location of a device to tag a photograph.

advantages:
 - Asking for permission in context makes it easier to understand why access is needed
 - One decision at a time helps people make a considered choice
 - It gives the user the power to decide how to share their information
 - It’s relatively frictionless and doesn’t interrupt what the user is trying to do
 - It reminds the user what the services does and doesn’t usually have access to

limitations:
 - Overusing this pattern could overwhelm users and become ineffective
 - A low-friction interaction may not be appropriate if the service needs access to sensitive information
 - It can be unclear if access is still permitted after the activity has finished and if it’s possible to check or change this
 - Asking permission in the middle of the user doing an important task may mean they don’t have the time to consider the implications of this consent

examples:
  - src: /images/just-in-time-consent-ios-ex.svg
    alt_text: Notification on a mobile phone asking if user would like to share their location in a chat.
    title: iOS permissions
    description: Apps will ask permission to use hardware or content the first time an app requires it.
  - src: /images/just-in-time-consent-html5-ex.svg
    alt_text: Pop-up notification in a browser requesting access to a user's location information.
    title: HTML5 permissions
    description: Browsers will ask for permission to give a website access to a webcam, microphone or location when a website requests it.


further_reading:
  - title: Tech Crunch
    url: https://techcrunch.com/2014/04/04/the-right-way-to-ask-users-for-ios-permissions/
    description: The right way to ask users for iOS permissions

related_patterns:
  - src: /images/key-ceremony.svg
    alt_text: Two keys inserted into locks at the same time.
    url: /patterns/key-ceremony
    title: Key ceremony
  - src:  /images/up-front-consent.svg
    alt_text: A list of data a service has permission to access.
    url: /patterns/up-front-consent
    title: Up-front consent
---

Ask users for a specific permission at the exact moment in time when it’s needed to complete a task.

For example, if a user wants to tag a photo with their location, the user is asked for permission to access location data as they add the tag.
