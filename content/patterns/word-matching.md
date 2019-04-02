---
type: pattern

illustration_version: 1

title: Word matching

category: Authentication

images:
  - url: /images/word-matching.svg

alt: The same security words are displayed on two different mobile phones.

examples:
  - title: Signal
    url: https://signal.org
    description: has encrypted voice chat where two words are presented in the call screen
---

In an end-to-end encrypted system, people can verify each other’s identity by saying a word from a pair that’s generated by a cryptographic function. If their communication is compromised (through a man-in-the-middle attack, for example), the words won’t match.