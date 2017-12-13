---
layout: pattern

title: Geofencing

category: Control access

images:
  - url: /images/geofencing.svg

advantages:
  - data access can be stricted to chosen locations

limitations:
  - location can be spoofed (IAN)
  - relies on reliable network connections
  - requires third party infrastructure 

examples:
  - title: iOS reminder app
    description: can trigger a reminder by leaving or entering a selected location
  - title: iBeacon
    url: https://en.wikipedia.org/wiki/IBeacon
    description: uses Bluetooth signals to send notifications to other compatible devices within range
  - title: Google Beacon Platform
    url: https://developers.google.com/beacons/
---

Access to data is controlled dependent on whether a device is in a particular place, determined by something like GPS, mobile phone towers, or proximity beacons. Being in a location could trigger an active request for sharing data.
