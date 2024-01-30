---
title: Digital proof for AI

category: Understanding and influencing decisions

weight: 3

archived: false

archive_reason:

future_pattern: false

future_pattern_reason:

images:
 - url: /images/digital-proof-for-ai.svg
alt: A screen titled Taste Prediction Model with information below it saying v.2412, issued on 6 June 2025, a unique fingerprint ID, and a QR code.

advantages:
 - Aids specialist users or auditors independently check an AI system.
 - Builds off the regulatory requirements for model cards, but is user facing.
 - Could be coupled with a “look up” platform or service where people could find key information about the AI system.
 - Could be machine readable as well as human readable.
 - If an AI system/component has a known defect then it will be easier to discover systems that need remedial action.

limitations:
- Users with dyslexia might find it difficult to share the code if it’s not easy to copy and paste, or send
- If an AI system/component has a known defect then it will be easier for malicious actors to discover systems where the defect can be exploited

examples:
  - title: W3C Verifiable Credentials
    url: https://www.w3.org/TR/vc-data-model/
    description: They offer cryptographically secure ways of creating machine-readable credentials.
  - title: Content Credentials
    url: https://contentcredentials.org/
    description: Users can create digital as well as visual watermarks for content.
---

Generate digital credentials for an AI system or its components, so that a user or specialist can use that “proof” to find out more and verify the AI system. This could help people get redress should something go wrong.

For example, this proof could include a unique ID that people can use to find more information about the AI using a lookup service.

IF thinks this pattern is important in situations where an AI system may be responsible for making a decision or giving information that creates a material difference in someone’s life. For example, when a clinician provides care to a patient. Should something go wrong the clinician or patient could find accurate information about the AI system that was used and seek redress.
