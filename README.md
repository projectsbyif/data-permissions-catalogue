# Data Permissions ​Catalogue

An evolving collection of design patterns for sharing data. Maintained by [IF](https://projectsbyif.com/).

## How to contribute

You can contribute to the catalogue on GitHub by creating an issue or submitting a pull request. The catalogue website runs on [Jekyll](https://jekyllrb.com/).

There's also a [Google Form](https://docs.google.com/forms/d/e/1FAIpQLScFapR7V1TQ45IA7wW0heNGR-OtT-sICkmje31OUeSsAM1NRQ/viewform?usp=sf_link) for contributing missing patterns.

## Getting started

**Requirements**

* Ruby 2.4.2 (on Mac OS, install using [Homebrew](https://brew.sh))

* Bundler (install with `gem install bundler`)

**Instructions**

1. Clone this repository

2. `cd` into the repository and run `bundle install`

3. Run `bundle exec jekyll serve`

4. Go to [http://localhost:4000](http://localhost:4000) in your browser

## Creating and editing patterns

Each pattern has a [Markdown](https://daringfireball.net/projects/markdown/syntax) file in the `_patterns` folder. To create a new pattern, create a new Markdown file. Name the new file with the slugified version of the pattern name.

For example `This is a new pattern` would be called `this-is-a-new-pattern.md`.

Next, copy and edit this example:

```
---
layout: pattern

title: Automation detection

category: Control access

images:
- url: /images/automation-detection.svg

advantages:
 - Reduces impact of automated access to systems, like denial of service, SPAM
 - Can be used to train machine learning models

limitations:
 - Progress in machine learning can allow computers to complete some challenges
 - Accessibility issues for people using assistive technologies

examples:
  - title: Google reCAPTCHA
    url: https://www.google.com/recaptcha/intro/
---

Preventing automated access to data by setting challenges that are easy for humans and hard for computers to complete. Common challenges include reading distorted text and identifying objects in a photo.

```

The *front matter* of the Markdown file (the bit at the top between the three dashes) can have the following [YAML](https://en.wikipedia.org/wiki/YAML) fields:

* `layout`: should always be `pattern` (required)

* `title`: name of the pattern (required)

* `category`: name of the category this pattern belongs to (required)

* `images`: a list of images that illustrate this pattern

* `advantages`: what's good about this patterns (optional)

* `limitations`: where the pattern falls short (optional)

* `examples`: real-world uses of this design pattern. Each example can contain a `title`, `description` and `url`.

* `further_reading`: articles about this design pattern. Each item can contain a `title`, `description` and `url`.

The body of the Markdown file (the bit underneath the three dashes) is a short description of the design pattern.

## Creating and editing categories

We've created several categories that patterns can belong to. Right now, these are:

* Authentication
* Backup data
* Control access
* Consent
* Manage consent
* Other
* See access
* Share data
* Social Consent

Categories are defined with Markdown files in the `_category` folder. To create a new category, create a new Markdown file, and use this template:

```
---
layout: category
title: (Name of category)
category: (Name of category)
---
```

## Images

Please include examples of where you've seen this pattern in use. We'll use these as reference for creating an illustration for a new pattern.

## Feedback

Get in touch with us on [Twitter @projectsbyif](https://twitter.com/projectsbyif) or [email hello@projectsbyif.com](mailto:hello@projectsbyif.com).

## Licence

This website licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
