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
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)

## Usage

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
  - [Development Server](#development-server)
  - [Linting](#linting)
- [Writing Blog Posts](#writing-blog-posts)

### Prerequisites

This project uses [mise](https://mise.jdx.dev/) to manage tool versions
(Node.js, Hugo, pnpm, precious, Dart Sass).

#### Install mise

```sh
curl https://mise.jdx.dev/install.sh | sh
```

See the [mise installation guide](https://mise.jdx.dev/getting-started.html)
for other installation methods.

### Installation

```sh
mise trust    # Trust the mise.toml configuration
mise install  # Install all required tools (Node, Hugo, pnpm, etc.)
pnpm install  # Install Node.js dependencies
```

You should also install our pre-commit hook. You can do this from your checkout
by running `git/setup.sh`. These hooks do things like ensure that the code you
commit is tidy and passes various linter checks.

### Development

#### Development Server

The development server watches files, rebuilds the site, and reloads the browser
when files change.

```sh
hugo server
```

#### Linting

```sh
precious tidy --all
```

#### Cloudflare Pages HTTP Headers Configuration

The `static/_headers` file is automatically generated from
`bin/_headers.config.ts`. **Do not edit `static/_headers` directly**.

##### Making Changes to Headers

1. Edit `bin/_headers.config.ts` (the source of truth with readable format and
   TypeScript type safety)
2. Test your changes locally:
   ```sh
   pnpm run build:headers
   ```
3. Commit only `bin/_headers.config.ts` - the headers file is regenerated during
   deployment

##### Build-Time Generation

The `static/_headers` file is generated during the build process via `build.sh`
and is not committed to git. For local testing, you can manually generate it
with `pnpm run build:headers`.

## Writing Blog Posts

Blog posts are written using
[markdown](https://www.markdownguide.org/cheat-sheet/), with each post
corresponding to a markdown file in the `/content` directory, with
subdirectories for the year and month of publication (e.g., `/content/YYYY/MM`).

You can learn more about how blog post files work and how they are formatted in
the [BLOG-POST-TEMPLATE.md](BLOG-POST-TEMPLATE.md) file.

### Categories and Tags

To see a full list of categories and tags, check out the
[all taxonomies](https://blog.maxmind.com/all-taxonomies/) page. This page is
automatically updated on build and push to production. If you want to see it on
your local machine, start up the [development server](#development-server) and
go to [/all-taxonomies](http://localhost:1313/all-taxonomies).
