---
illustration_version: 1

title: Unusual activity check
weight: 4
category: Doing security checks

images:
  - url: /images/unusual-activity-check.svg

alt: A message on a phone asking to confirm your password because it is a new or unfamiliar device.

advantages:
 - The user can review and recover access that doesn’t look right as logins from different devices are recorded (see [activity log](https://catalogue.projectsbyif.com/patterns/activity-log/) pattern)
 - Quickly spot if accounts have been compromised
 - Reassures people that there are mechanisms in place to protect their account


limitations:
 - People may miss notifications if multiple accounts are compromised or they don’t check their email or messages.
 - Detecting ‘unusual activity’ requires collecting data about ‘usual activity’, which can include personally identifiable data such as machine IDs or IP addresses.
 - False positives might be confusing or alarming
 - Won’t work if the alternative channel of communication (email, text message) is also compromised
 - This pattern has been used in phishing attempts, where an attacker sends a message saying the account has been compromised and asks someone to log in to a fake website.


examples:
  - title: Google’s ‘Suspicious sign in prevented’ email
  url: https://support.google.com/accounts/answer/6063333
  - title: Microsoft’s unusual sign-in
  url: https://support.microsoft.com/en-gb/help/13967/microsoft-account-unusual-sign-in
  - title: Ubisoft’s Suspicious activity email notification
  url: https://support.ubi.com/en-us/Faqs/000035426/Suspicious-Activity-Email-Notification?refreshStatus=noLoginData
  - title: LastPass’ Verification email
  url: https://support.logmeininc.com/lastpass/help/why-is-my-device-not-recognized-when-i-log-in-to-lastpass-lp010154#targetText=To%20do%20so%2C%20a%20verification,to%20verify%20that%20it's%20you.
  - title: Google’s Security Check-up
  url: https://myaccount.google.com/security-checkup
  description: See your Google account signed-in devices, recent unusual activity, multi-factor authentication settings and third-party access.
---

If someone changes how they usually access their account, either from a new device or geographical location, further security checks are required and access might be blocked. The person receives a notification about the access attempt through a different channel, so they can confirm if it was them

For example, when someone logs into their email from a new device, they are sent an email notifying them of this change.

IF thinks this pattern reassures people that their account is safe and all logins legitimate or otherwise are logged, and should be used with [activity logs](https://catalogue.projectsbyif.com/patterns/activity-log/). If the account is at risk, it should provide people with clear next steps or reassure them if the risk has been avoided.

Read more: [Unusual activity patterns, privacypatterns.org](https://privacypatterns.org/patterns/Unusual-activities)
