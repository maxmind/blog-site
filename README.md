<h2 align="center">
  <img
    alt="MaxMind"
    src="./assets/maxmind-logo.svg"
    width="300"
  />
  <br/>
  <br/>
  <small>Blog Static Site Generator</small>
</h3>

---

## Overview

- **Static Site Generator**: [Hugo](https://gohugo.io/) +
  [TypeScript](https://www.typescriptlang.org/) +
  [MD](https://www.markdownguide.org/)
- **Linting**: [ESLint](https://eslint.org/) +
  [StyleLint](https://stylelint.io/) +
  [RemarkLint](https://github.com/remarkjs/remark-lint)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)

## Usage

- [Minimum Requirements](#minimum-requirements)
- [Installation](#installation)
- [Development](#development)
  - [Development Server](#development-server)
  - [Linting](#linting)
- [Writing Blog Posts](#writing-blog-posts)

### Minimum Requirements

- Node 18

If you need help installing and/or managing Node and Yarn versions, check out [NVM](https://github.com/nvm-sh/nvm).

### Installation

```sh
npm install && npm run prepare
```

- `npm install` installs the neccessary node modules for development.
- `npm prepare` sets up the linting pre-commit hooks via husky.

#### Install Hugo

##### Homebrew (macOS)

```sh
brew install hugo
```

##### Debian / Ubuntu

It is recommended that you install [the latest release of Hugo](https://github.com/gohugoio/hugo/releases/latest).
For debian and ubuntu users, they offer a .deb file.

##### Other OS

See [Hugo Installation](https://gohugo.io/getting-started/installing/)

#### Install Embedded Dart Sass

Download [Embedded Dart Sass](https://github.com/sass/dart-sass-embedded/releases)
and make sure it is in your `$PATH`. This is necessary for Hugo to process SASS
and SCSS files. See the [Hugo documentation](https://gohugo.io/hugo-pipes/scss-sass/)
for more information.

### Development

#### Development Server

The development server watches files, rebuilds the site, and reloads the browser
when files change.

```sh
hugo server
```

#### Linting

```sh
npm run lint
```

## Writing Blog Posts

Blog posts are written using [markdown](https://www.markdownguide.org/cheat-sheet/),
with each post corresponding to a markdown file in the `/content` directory,
with subdirectories for the year and month of publication (e.g., `/content/YYYY/MM`).

You can learn more about how blog post files work and how they are formatted in
the [BLOG-POST-TEMPLATE.md](BLOG-POST-TEMPLATE.md) file.
