---
title: Just-in-time consent

category: Giving and removing consent
weight: 1
images:
  - url: /images/just-in-time-consent.svg
alt: A prompt asking to access the location of a device to tag a photograph.

archived: false

future_pattern: false

advantages:
 - Context makes it easier to understand why a service needs access
 - One decision at a time helps people make considered choices
 - Gives users the power to decide how to share their information
 - Relatively low friction, so doesn’t interrupt what the user is trying to do
 - Reminds users what data the service does and doesn’t usually have access to


limitations:
 - Overusing this pattern could overwhelm users and become ineffective
 - Low-friction interaction may not be appropriate for sensitive information
 - Can be unclear to the user that access is not permitted after the activity has finished
 - Asking permission in the middle of the user doing an important task may mean they don’t have the time to consider the implications of this consent


examples:
 - alt_text: Notification on a mobile phone asking if user would like to share their location in a chat.
   title: iOS permissions
   description: Apps will ask permission to use hardware or content the first time an app requires it
 - alt_text: Pop-up notification in a browser requesting access to a user's location information.
   title: HTML5 permissions
   description: Browsers will ask for permission to give a website access to a webcam, microphone or location when a website requests it.
   img_src: /images/just-in-time-consent.svg


further_reading:
 - title: Tech Crunch
   url: https://techcrunch.com/2014/04/04/the-right-way-to-ask-users-for-ios-permissions/
   description: The right way to ask users for iOS permissions

date: 2019-04-04T14:58:05+01:00
lastmod: 2019-04-04
---

Asking for a specific permission at the exact moment it’s needed to complete a task. For example, if a user wants to tag a photo with their location, the user is asked for permission to access location data as they add the tag.
