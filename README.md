# Data Patterns ​Catalogue

An evolving collection of design patterns for sharing data. Maintained by [IF](https://projectsbyif.com/).

## How to contribute

You can contribute to the catalogue on GitHub by creating an issue or submitting a pull request. The catalogue website runs on [Hugo](https://gohugo.io/).

## Installation

**Requirements**

* Hugo v0.58.3 (on Mac OS, install using [Homebrew](https://brew.sh))

**Instructions**

1. Save the repository on your machine using GitHub Desktop or via the terminal.
  - How to save using [GitHub Desktop](https://help.github.com/en/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)
  - How to save using the [terminal](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) (and some [helpful terminal commands](https://medium.com/@grace.m.nolan/terminal-for-beginners-e492ba10902a))

2. Open the terminal and install Hugo [using Homebrew](https://gohugo.io/getting-started/installing/#homebrew-macos).

  If you get `brew: command not found`, you can install Homebrew using instructions on [their website](https://brew.sh/).

## Creating and editing patterns

**Getting Started**

1. Create a new branch to work on. You can do this in GitHub Desktop or via the terminal.

**⚠️Changes should always be made on branch.⚠️** This is because any changes committed directly on `master` will automatically deploy live.

  - How to create a new branch on [GitHub Desktop](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)
  - How to create a new branch via the [terminal](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

2. In the terminal, `cd` into the website folder and run `hugo server` to start the development server.

Any changes you make will be automatically displayed at http://localhost:1313

3. Open the website folder in a text editor of your choice (like [Atom](https://atom.io/) or [VSCode](https://code.visualstudio.com/)).

**Adding or editing a pattern**

Each pattern has a [Markdown](https://daringfireball.net/projects/markdown/syntax) file in the `content/patterns` folder. To create a new pattern, use the Hugo `archetype` template, located in `archetypes/patterns.md`.

1. Name the new file with the slugified version of the pattern name. For example, `This is a new pattern` would be called `this-is-a-new-pattern.md`.

2. In the terminal, run `hugo new patterns/[NEW-FILE-NAME]`.

For example, to create pattern called `This is a new pattern`, you would run `hugo new patterns/this-is-a-new-pattern.md`

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
* Understanding decisions
* Doing security checks

Categories are defined in `content/categories/_index.md`. To create a new category or edit an existing one, simply edit this file.

## Images

Please include examples of where you've seen this pattern in use. We'll use these as reference for creating an illustration for a new pattern.

## Feedback

Get in touch with us on [Twitter @projectsbyif](https://twitter.com/projectsbyif) or [email hello@projectsbyif.com](mailto:hello@projectsbyif.com).

## Licence

This website licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
