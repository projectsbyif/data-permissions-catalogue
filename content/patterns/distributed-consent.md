---
title: Distributed consent

category: Sharing data

images:
  - url: /images/key-ceremony.svg

alt: Two keys inserted into locks at the same time.

advantages:
 - It can be designed in a way for the whole group to be present in either physical location, or online
 - Hard to abuse because of the number of users involved

limitations:
 - Requires a lot of coordination for it to work
 - Not suitable if an immediate response is needed

examples:
 -  title: Meet the seven people who hold the keys to worldwide internet security
    url: https://www.theguardian.com/technology/2014/feb/28/seven-people-keys-worldwide-internet-security-web
 -  title: "Quorum authentication (M of N access control) on AWS CloudHSM"
    url: https://docs.aws.amazon.com/cloudhsm/latest/userguide/quorum-authentication.html
    description: AWS CloudHSM is an Amazon resource that allows you to perform cryptographic operations and store cryptographic keys in the cloud. When quorum authentication is enforced, some operations requires a minimum number of users to cooperate to do these operations.
---

A set group of users must give consent at the same time for data to be accessed or changed. For example, seven people hold keys that are used to secure the system at the heart of the web. When they come together, their keys create a master key, which allows them access.
