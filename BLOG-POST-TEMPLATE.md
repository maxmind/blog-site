---
title: "Blog Post Template"
date: "2023-10-19"
images:
  - /images/2023/10/image.png
category:
  - "Templates"
  - "Examples"
tag:
  - "Getting Started"
  - "Tutorials"
authors:
  - "Christopher Luna"
  - "Kevin Centeno"
---

This is a blog post template that you can use to create new blog posts. Copy and
paste the contents into a new file to get started.

If you're reading this file through the GitHub user interface, you may see it
rendered. That's because GitHub also renders markdown files for documentation.
If you want to see how the file is written, you can click the "Raw" button to
the upper-right to see the markdown syntax.

Read on to learn more about formatting, options, and behavior below:

- [how to create a new blog post](#creating-a-new-blog-post)
- [understanding the blog head where organizational parameters are defined](#blog-head)
- [formatting copy with markdown](#markdown)
- [embedding images in your blog post](#images)

If you're interested in learning about how the blog generates metadata for SEO
purposes, you can [read more below](#metadata).

## Creating a New Blog Post

To get started, make a new file. The file should be located in the following
directory:

`/content/<YYYY>/<MM>`

For example, if this was a real blog post, written on October 19, 2023,
I would put it in:

`/content/2023/10`

The file should be named as follows:

`<Desired URL Path>.md`

For example, if this was a real blog post, it would have the following path:

`https://blog.maxmind.com/2023/10/BLOG-POST-TEMPLATE`

Generally, you should choose a file name that contains only lowercase letters,
numbers, and hyphens.

For SEO purposes, it's good for this file name to be the same as the title of
the blog post.

Once you have the file created, you can paste the contents of this template into
the new file and begin to modify it.

## Blog Head

The head of each blog post is at the very top of the file. A line with three
hyphens opens and closes the header, as you can see above.

Some attributes take an unordered list, which is part of [the basic markdown syntax](#markdown).

The head contains the following attributes:

| Attribute  | Description                                                                                                                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`    | The title of the blog post, contained in double quotes (`""`). This will be used both as the title displayed at the top of the post in a level 1 header, and as the `<title><\title>` meta tag. [Learn more about metadata on the blog.](#metadata) |
| `date`     | The date that the blog post is published in `YYY-MM-DD` format. Should be contained in double quotes (`""`).                                                                                                                                        |
| `images`   | The unordered list of paths to the featured image(s) of the post. The first image is displayed on the blog home, and all images are used for social sharing. [Learn more about images below.](#images)                                              |
| `category` | The list of categories for the post, each contained in double quotes (`""`). You can use any strings you want, so you need to manually ensure that your categories are spelled the way you'd like and are consistent with other posts.              |
| `tag`      | The list of tags for the post, each contained in double quotes (`""`). You can use any strings you want, so you need to manually ensure that your tags are spelled the way you'd like and are consistent with other posts.                          |
| `authors`  | The list of authors for the post, each contained in double quotes (`""`). Only the first author is displayed.                                                                                                                                       |

## Markdown

Posts are written in [markdown](https://www.markdownguide.org/cheat-sheet/), a
simple markup language. Not all features of markdown will be available to the
blog, but basic things like unordered lists and, for example:

- [links](https://en.wikipedia.org/wiki/Hyperlink),
- basic formatting for text, including
  - **bold**,
  - _italics_, and
  - `inline code`

are all supported. There are also ordered lists, and markdown from the extended
syntax, for example:

1. All the items in this after this one are anchor links to sections,
1. [which are organized with headers](#headers-in-markdown).
1. [Headers can be given custom IDs for anchor links to point to.](#custom-ids-for-anchor-links)
1. [You can embed images in the blog.](#images)
1. [You can make code blocks.](#code-blocks)
1. [You can make tables.](#tables)

### Headers in Markdown

Headers in markdown are easy to write. They're prefixed by some number of
"pound" glyphs (`#`). The number of `#`s defines the level of the header, for
example `##` followed by text would be a level 2 header, or `###` followed by
text would be a level 3 header, like the header directly above this paragraph.

### Custom IDs for Anchor Links

If you want to make links to your headers, you can create custom IDs that can be
used in links. To do this, add something like `{#anchors}` after a header to
allow you to link to that header.

These custom IDs don't render properly in GitHub's markdown, but they do work
in the blog's markdown. If you wanted to make the header directly above this
paragraph have the custom ID of `anchors` so that links pointing to `#anchors`
will hit the header in question, you would write the header as follows:

`### Custom IDs for Anchor Links {#anchors}`

If you don't define a custom ID, the header will automatically have an ID that
is a simple transformation of the text of the header. For example, the ID of the
header for this section is `custom-ids-for-anchor-links`. The text is
transformed to all lowercase, special characters are ignored, and spaces are
turned into hyphens.

### Images

In markdown, you can embed images with the following format:

![alt-text](path/to/image)

The image above won't actually display properly, because you also need to add
your image to the correct location and use the proper path.

Images should be added to the blog in the following directory:

`content/static/images/YYYY/MM`

For example, if this was a real blog post I would add any images to the
following directory:

`/content/static/images/2023/10`

Featured images, which are defined in the [blog post head](#blog-head), should
be added to the same directory.

The blog can render jpg, png, and svg images. The images will be rendered
horizontally-centered with the copy of the blog post.

### Code Blocks

Inline code is marked with a single opening and closing backtick (\`), as in
`inline code`, for example. This renders the text with monospace font and subtle
styling differences to indicate that you're looking at code.

Often in a technical blog we may need to share more code. For that we use code
blocks, which are marked with three backticks followed by the code language to
open the block (for example, \`\`\`bash). To close a code block, just put
three backticks by themselves on their own line. For example:

```bash
here's what it looks like to make a code block
none of this is real code
but at least it will be displayed as if it is ...
```

### Tables

You can even make tables in markdown, and they even kind of look like tables in
the text. It's easier to just show you how to make a table than to explain:

| Header Column 1 | Header Column 2 | Header Column 3 |
| --------------- | --------------- | --------------- |
| Row 1 Column 1  | Row 1 Column 2  | Row 1 Column 3  |
| Row 2 Column 1  | Row 2 Column 2  | Row 2 Column 3  |

If you want an easier way to make tables in markdown, you can also try this
[Tables Generator](https://www.tablesgenerator.com/markdown_tables).

## Metadata

At this time, the blog generates metadata in the following ways:

- the `title` parameter in the blog post head generates the `<title></title>` tag
- [OpenGraph meta tags](https://ogp.me/) are generated for social sharing
  - [`og:title`](https://ogp.me/#metadata) is populated with the `title` parameter in the [blog post head](#blog-head)
  - [`og:description`](https://ogp.me/#optional) is populated with the first paragaph of the copy
  - [`og:type`](https://ogp.me/#metadata) is populated with the value `"article"`
  - [`og:url`](https://ogp.me/#metadata) is populated with the URL of the article, which is derived from its path and filename
  - [`og:image`](https://ogp.me/#metadata) is populated with the `image` parameter in the [blog post head](#blog-head)
  - [`article:section`](https://ogp.me/#no_vertical) is populated with the year of the post from the `date` parameter in the [blog post head](#blog-head)
  - [`article:published_time`](https://ogp.me/#no_vertical) is populated with the timestamp of midnight on the date specified in the `date` parameter in the [blog post head](#blog-head)
  - [`article:modified_time`](https://ogp.me/#no_vertical) is populated with the timestamp of midnight on the date specified in the `date` parameter in the [blog post head](#blog-head)
