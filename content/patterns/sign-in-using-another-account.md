---
title: Sign-in using another account

category: Signing in to a service

weight: 4

archived: false

archive_reason:

future_pattern: false

future_pattern_reason:

images:
 - url: /images/sign-in-using-another-account.svg
alt: Sign in using another account

advantages:
- No need to remember another password
- No need to verify email addresses
- Fast access to new services
- Can be more secure than creating multiple sign-ins with different services (single sign-on providers tend to be more protected against breaches and offer multi-factor authentication)
- As people enter passwords less there’s less opportunity for something to go wrong, like a hack or misconfigured security
- Can protect people’s privacy by, for example, [hiding the email address from third-party services](https://www.wired.com/story/sign-in-with-apple-sso-google-facebook/)
- People can revoke access through the single sign-on provider

limitations:
- If the single sign-on account is compromised, the security of linked services is at risk and people might be locked out of them
- Single sign-on providers might track users’ online movements and preferences
- Third-party services might ask for additional permissions at sign-in. They might require to, for example, access your contact list, tweet on your behalf, etc. ( [Google](https://support.google.com/accounts/answer/3466521) )


examples:
 - title: Sign in with Google
   url: https://support.google.com/accounts/answer/112802
 - title: Sign in with Apple
   url: https://developer.apple.com/sign-in-with-apple/
 - title: Sign in with Twitter
   url: https://developer.twitter.com/en/docs/twitter-for-websites/log-in-with-twitter/login-in-with-twitter
 - title: Facebook Login
   url: https://developers.facebook.com/docs/facebook-login/
---

Sign in to a service with an account you already have. This is known as [single sign-on (SSO)](https://en.wikipedia.org/wiki/Single_sign-on) or [social login](https://en.wikipedia.org/wiki/Social_login).

For example, you can sign in to a new app with a Google account.

IF thinks that this pattern reduces the number of passwords people have to remember and avoids people using the same password for different services (if they don’t use a password manager). This also means that the single sign-on account becomes a single point of failure for numerous logins so it should be protected with a strong password and multi-factor authentication. Sign-on providers might track people’s online movements and preferences.
