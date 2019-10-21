# Data Patterns ​Catalogue

An evolving collection of design patterns for sharing data. Maintained by [IF](https://projectsbyif.com/).

## How to contribute

You can contribute to the catalogue on GitHub by creating an issue or submitting a pull request. The catalogue website runs on [Hugo](https://gohugo.io/).

## Getting started

**Requirements**

* Hugo v0.58.3 (on Mac OS, install using [Homebrew](https://brew.sh))

**Instructions**

1. Clone this repository

2. `cd` into the repository and run `hugo` to build the site.

3. Run `hugo server`

4. Go to [http://localhost:1313](http://localhost:1313) in your browser

## Creating and editing patterns

Each pattern has a [Markdown](https://daringfireball.net/projects/markdown/syntax) file in the `content/patterns` folder. To create a new pattern, use the Hugo `archetype` template, located in `archetypes/patterns.md`.

1. Name the new file with the slugified version of the pattern name. For example `This is a new pattern` would be called `this-is-a-new-pattern.md`.

2. In the repository, run `hugo new patterns/[NEW-FILE-NAME]`

3. Open your new pattern file and fill in the relevant front matter.

The *front matter* of the Markdown file (the bit at the top between the three dashes) can have the following [YAML](https://en.wikipedia.org/wiki/YAML) fields:

* `title`: [String] the new pattern title. (required)

* `category`: [String] name of the category this pattern belongs to. A list of categories can be found [below](#creating-and-editing-categories) (required)

* `weight`: [Integer] value between 1 and 4 that places the pattern card on the Categories view on homepage. 1 - 3 will place the pattern in the relevant spot on the Category preview. 4 will hide the pattern until the Category is expanded

* `archived`: [Boolean] setting this to true will add an Archive tag to the pattern

* `archive_reason`: [String] why this pattern is archived

* `future_pattern`: [Boolean] setting this to true will add an Future Pattern tag to the pattern

* `future_pattern_reason`: [String] why this is a future pattern

* `images`: [String] a list of images that illustrate this pattern. Each`images` contains a `url` ([String] path to pattern image)

* `alt`: [String] alternative text for the image

* `advantages`: [String] what's good about this patterns

* `limitations`: [String] where the pattern falls short

* `examples`: real-world uses of this design pattern. Each example can contain a `title`, `description` and `url` [All Strings].

`date` and `lastmod` are automatically generated and should not be changed.

4. Add pattern description to the body of the Mardown file.

The body of the Markdown file (the bit underneath the three dashes) is a short description of the design pattern.

## Creating and editing categories

We've created several categories that patterns can belong to. Right now, these are:

* Signing in to a service
* Giving and removing consent
* Giving access to data
* Getting access to data
* Understanding automated decisions
* Doing security checks

Categories are defined in `content/categories/_index.md`. To create a new category, add it to the list in `_index.md`.

## Images

Please include examples of where you've seen this pattern in use. We'll use these as reference for creating an illustration for a new pattern.

## Feedback

Get in touch with us on [Twitter @projectsbyif](https://twitter.com/projectsbyif) or [email hello@projectsbyif.com](mailto:hello@projectsbyif.com).

## Licence

This website licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
