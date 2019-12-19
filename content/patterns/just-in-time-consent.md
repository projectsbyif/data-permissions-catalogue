---
title: Just-in-time consent

category: Giving and removing consent
weight: 2
images:
  - url: /images/just-in-time-consent.svg
alt: A prompt asking to access the location of a device to tag a photograph.

archived: false

future_pattern: false

advantages:
 - Asking in context makes it easier for people to understand why a service needs access to that information.
 - One decision at a time helps people make considered choices.
 - Relatively low friction, depending on how frequently it’s applied.
 - Reminds people what data the service does and doesn’t usually access.



limitations:
 - Overuse could overwhelm or frustrate people.
 - Low-friction interactions may not be appropriate for sensitive information.
 - Can be unclear if access is permitted, or not, after the activity has finished.
 - Asking permission in the middle of an important task may mean people don’t have time to consider the implications of what they’re agreeing to.



examples:
 - title: Ask in context in Android
   url: https://material.io/design/platform-guidance/android-permissions.html#request-types/
 - title: Requesting permission in iOS
   url: https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/requesting-permission/
 - title: HTML5 Permissions API
   url: https://whatwebcando.today/permissions.html
   description: Browsers ask for permission to give a website access to a webcam, microphone or location when the website requests it.
   
---

Ask for a specific permission at the point in time when someone needs to complete a task. This is also known as ‘incremental authorisation’. If someone wants to tag a photo with their location, they’re asked for permission to access location data as they add the tag.

IF thinks this pattern makes it easier for people to understand why data is being collected. They can weigh up their options at the point when it is needed. Using this pattern too frequently can mean that people ignore it, though.
