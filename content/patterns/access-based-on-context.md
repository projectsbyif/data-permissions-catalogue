---
title: Access based on context

category: Doing security checks
weight: 4
images:
- url: /images/access-based-on-context.svg

alt: A mobile phone is tilted, putting it in to sleep mode.

advantages:
 - Remains convenient while offering some security for most users
 - Removes friction and automates common actions
 - In most cases, this pattern is (and should) be implemented as an optional service that people can enable or disable

limitations:
 - Matching sensor data to actual activity can be error prone. This can lead to a higher rate of access than may be intended.
 - People manage their settings depending on perceived risk. For example, setting your phone to stay unlocked while at home might make it possible for guests in your home to access information on it.

examples:
  - title: Do Not Disturb Apple iOS
    url: https://support.apple.com/en-gb/HT208090
    description: The iPhone senses when you’re driving and prevents notifications
  - title: Smart Lock Android
    url: https://support.google.com/nexus/answer/6093922?hl=en-GB
    description: Keep an Android phone unlocked if your close to home or the phone is in your pocket
  - title: Wrist detection on Apple Watch
    url: https://www.imore.com/apple-watch-apple-pay-and-wrist-detection-what-you-need-know
    description: Wrist detection can keep the watch unlocked for as long as the screen is on or it maintains skin contact
  - title: IFTTT (If This Then That)
    url: https://ifttt.com
    description: Configure apps and devices to talk with each other, for example to play Spotify when you arrive home.

---

Access to data is based on what someone is currently doing. This is measured by sensors on devices like gyroscopes, accelerometers or GPS.

For example, a phone automatically locks when someone puts it down.

IF thinks this is a useful pattern because it makes devices more secure without making it more complicated. Be mindful about interpreting sensor data, for example phones may lock because they sense someone is driving when actually they’re travelling on the bus.
