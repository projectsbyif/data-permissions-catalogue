---
illustration_version: 1

title: Checking if someone is still using the device
weight: 4
category: Signing in to a service

images:
  - url: /images/checking-if-someone-is-still-using-device.svg

alt: A mobile screen reads "you've been inactive, signing you off in 20 seconds".

advantages:
 - People don’t have to remember to log out.  
 - Reduces the risk of someone being able to use the account if the user is away.

limitations:
 - If the inactivity settings are too sensitive, people may be logged out while they’re still using the service. Having to log in frequently will cause frustration.
 - Could make it harder for people with accessibility needs to use the service, depending on how it is implemented.


examples:
  - title: Lock screen after a period of time on macOS
    description: Locks screen and asks for password after a period of inactivity.
    url: https://9to5mac.com/2018/07/23/mac-how-to-lock-screen/
  - title: Automatic log out on Barclaycard app
    description: The Barclaycard app will automatically log out if the user goes to the home screen, or opens another app, or is inactive for more than 3 minutes or the screen times out.
    url: https://help.barclaycard.co.uk/brochure/other_information/automatic-log-out-app
  - title: Wrist detection on Apple Watch
    description: Wrist detection can keep the watch unlocked for as long as the screen is on or it maintains skin contact.
    url: https://www.imore.com/apple-watch-apple-pay-and-wrist-detection-what-you-need-know

---

The device (or app) automatically revokes access when it hasn’t been used for a while. Some banking apps automatically log customers out after a period of inactivity or if they open another app.

IF thinks this is a useful pattern for securing accounts without placing an extra burden on people. It’s easy to forget to log out. However, getting someone to log in again every time they leave the app may cause too much friction, outweighing the  potential harms of someone else gaining access.

In the future, it might be replaced with [Ongoing authentication through behaviour](https://catalogue.projectsbyif.com/patterns/ongoing-authentication-through-behaviour/).
