# Data Permissions ​Catalogue

Documenting design patterns for personal data sharing, with example uses and research. Maintained by [IF](https://projectsbyif.com/).

**Contents**

* How to contribute
* Getting started
* Creating and editing patterns
* Creating and editing categories
* Images
* Feedback
* Licence

## How to contribute

You can contribute to catalogue on GitHub by creating an issue or submitting a pull request. The catalogue website runs on [Jekyll]().

There's also a [Google Form]() for sending us proposals for a new pattern.

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

Each pattern has a [Markdown]() file in the `_patterns` folder. To create a new pattern, create a new Markdown file. Name the new file with the [slugified]() version of the pattern name.

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

The *front matter* of the Markdown file (the bit at the top between the three dashes) can have the following [YAML]() fields:

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
* Backup Data
* Control Access
* Give Consent
* Manage Consent
* Other
* See Access
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

Next, create a new JSON file in the `_category_json` folder, and use this template:

```
---
layout: json
title: (Name of category)
category: (Name of category)
---
```

## Images


## Feedback

Get in touch with us on [Twitter @projectsbyif](https://twitter.com/projectsbyif) or [email (hello@proejctsbyif.com)](mailto:hello@projectsbyif.com).

## Licence
