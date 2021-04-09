---
title: Group decision

category: Giving and removing consent

weight: 3

archived: false

archive_reason:

future_pattern: false

future_pattern_reason:

images:
 - url: /images/group-decision.svg
alt: Group decision

advantages:
 - Hard to abuse because of the number of people involved.
 - Different groups can exercise rights over data.
 - The group could gather in either a physical or online location.

limitations:
 - Depending on the number of people, it might require a lot of coordination for it to work.
 - Not suitable if an immediate response is needed.


examples:
 - title: Seven people who hold the keys to worldwide internet security
   url: https://www.theguardian.com/technology/2014/feb/28/seven-people-keys-worldwide-internet-security-web
   description: Seven people from different locations around the world hold keys that control the Domain Name System (DNS) for the internet.
 - title: Quorum authentication (M of N access control) on AWS CloudHSM
   url: https://docs.aws.amazon.com/cloudhsm/latest/userguide/quorum-authentication.html
   description: AWS CloudHSM is an Amazon resource that allows you to perform cryptographic operations and store cryptographic keys in the cloud. When quorum authentication is enforced, some operations require a minimum number of users to cooperate to do these operations.
---

A group of people must give consent at the same time to change or access data. This pattern is also known as ‘quorum’.

For example, seven people hold keys that are used to secure the system at the heart of the web. When they come together, their keys create a master key, which gives them access.

IF thinks this pattern is useful in cases where decisions about data affect multiple people and requires an extra layer of protection and authorisation. There are few examples of this in use at the moment, but we might see more patterns like this in contexts where multiple groups have rights over data, like in smart cities.
