---
title: Setting permissions up-front

category: Giving and removing consent
weight: 1
images:
  - url: /images/up-front-consent.svg

advantages:
 - People can set some preferences quickly so they can start using the service straight away.
 - Allows people to set more nuanced permissions rather than accepting all terms and conditions.

limitations:
 - People don’t have enough information to make an informed decision.
 - Nudges people to make decisions quickly so they can access the service.
 - People usually don’t revisit their permissions preferences if they’re buried in settings.
 - Usually implemented using binary toggle interactions. These don’t give people input into how, when and where data is collected.

alt: A list of data a service has permission to access.

examples:
  - title: Ask up front in Android
    url: https://material.io/design/platform-guidance/android-permissions.html#request-types
    description: Only critical permissions should be requested up-front.
  - title: Mobile Device Management (MDM) Profile in macOS
    url: https://developer.apple.com/documentation/devicemanagement/mdm
    description: Setting permissions up-front makes sense in this case as it’s not possible to seek consent when trying to remotely wipe a laptop which is lost or stolen.
---

People set their permissions before they use a service. When installing a messaging app, you might give it access to basic information, like contacts or WiFi connection.

IF thinks this pattern does not give people enough agency over data about them. It requires people to make quick decisions about data sharing without knowing how it will be used, or whether they like the service.
