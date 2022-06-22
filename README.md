<h2 align="center">
  <img
    alt="MaxMind"
    src="./assets/maxmind-logo.svg"
    width="300"
  />
  <br/>
  <br/>
  <small>Developer Documentation Static Site Generator</small>
</h3>

***

## Overview

* **Static Site Generator**: [Hugo](https://gohugo.io/) +
  [TypeScript](https://www.typescriptlang.org/) +
  [MD](https://www.markdownguide.org/)
* **Linting**: [ESLint](https://eslint.org/) +
  [StyleLint](https://stylelint.io/) +
  [RemarkLint](https://github.com/remarkjs/remark-lint)
* **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)

## Usage

* [Minimum Requirements](#minimum-requirements)
* [Installation](#installation)
* [Development](#development)
  * [Development Server](#development-server)
  * [Linting](#linting)

### Minimum Requirements

* Node 16

If you need help installing and/or managing Node and Yarn versions, check out [NVM](https://github.com/nvm-sh/nvm).

### Installation

```sh
npm install
```

#### Install Hugo

##### Homebrew (macOS)

```sh
brew install hugo
```

##### Linux

```sh
sudo apt-get install hugo
```

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
