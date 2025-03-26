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
- [scheduling a blog post for the future](#scheduling-a-blog-post-for-the-future)
- [understanding the blog head where organizational parameters are defined](#blog-head)
- [formatting copy with markdown](#markdown)
- [embedding images in your blog post](#images)

If you're interested in learning about how the blog generates metadata for SEO
purposes, you can [read more below](#metadata).

## Creating a new blog post

To get started, make a new file. The file should be located in the following
directory:

`/content/<YYYY>/<MM>`

For example, if this was a real blog post, written on October 19, 2023, I would
put it in:

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

## Scheduling a blog post for the future

To schedule a blog post to be released on a particular date, simply create that
blog post with a date in the future. This should be reflected both in the
content directories in which the post and any static content are stored, and in
the blog head metadata ([see below](#blog-head)).

Please note that the files associated with this content will be visible in
Github prior to the release date. It is unlikely anyone from the public will be
monitoring the Github repository for content, but if there was something
particularly sensitive which should not be leaked before a particular date, you
should exercise caution in using this feature.

## Blog head

The head of each blog post is at the very top of the file. A line with three
hyphens opens and closes the header, as you can see above.

Some attributes take an unordered list, which is part of
[the basic markdown syntax](#markdown).

The head contains the following attributes:

| Attribute     | Description                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | The title of the blog post, contained in double quotes (`""`). This will be used both as the title displayed at the top of the post in a level 1 header, and as the `<title></title>` meta tag. [Learn more about metadata on the blog.](#metadata)                                                                                                                                                         |
| `heading`     | The heading for the blog post, contained in double quotes (`""`). This will be used as only the title displayed at the top of the post in a level 1 header. If this is omitted, then the `title` will be used as the level 1 header. **Note**: The <title></title> meta tag will still be the `title`. This is optional and should only be added if you want the metadata and h1 tag on the page to differ. |
| `description` | The description of the post, contained in double quotes (`""`). This is optional.                                                                                                                                                                                                                                                                                                                           |
| `date`        | The date that the blog post is published in `YYY-MM-DD` format. Should be contained in double quotes (`""`).                                                                                                                                                                                                                                                                                                |
| `images`      | The unordered list of paths to the featured image(s) of the post. The first image is displayed on the blog home, and all images are used for social sharing. [Learn more about images below.](#images)                                                                                                                                                                                                      |
| `category`    | The list of categories for the post, each contained in double quotes (`""`). You can use any strings you want, so you need to manually ensure that your categories are spelled the way you'd like and are consistent with other posts.                                                                                                                                                                      |
| `tag`         | The list of tags for the post, each contained in double quotes (`""`). You can use any strings you want, so you need to manually ensure that your tags are spelled the way you'd like and are consistent with other posts.                                                                                                                                                                                  |
| `authors`     | The list of authors for the post, each contained in double quotes (`""`). Only the first author is displayed.                                                                                                                                                                                                                                                                                               |
| `slug`        | This will override the automatically generated slug of the post `YYYY/MM/DD/name-of-the-file` will now become `YYYY/MM/DD/specified-slug-name`. Should be contained in double quotes (`""`).                                                                                                                                                                                                                |
| `url`         | This will override the automatically generated url of the post `YYYY/MM/DD/name-of-the-file` will now be `specified-url-name`. Should be contained in double quotes (`""`).                                                                                                                                                                                                                                 |

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

### Headers in markdown

Headers in markdown are easy to write. They're prefixed by some number of
"pound" glyphs (`#`). The number of `#`s defines the level of the header, for
example `##` followed by text would be a level 2 header, or `###` followed by
text would be a level 3 header, like the header directly above this paragraph.

### Custom IDs for anchor links

If you want to make links to your headers, you can create custom IDs that can be
used in links. To do this, add something like `{#anchors}` after a header to
allow you to link to that header.

These custom IDs don't render properly in GitHub's markdown, but they do work in
the blog's markdown. If you wanted to make the header directly above this
paragraph have the custom ID of `anchors` so that links pointing to `#anchors`
will hit the header in question, you would write the header as follows:

`### Custom IDs for Anchor Links {#anchors}`

If you don't define a custom ID, the header will automatically have an ID that
is a simple transformation of the text of the header. For example, the ID of the
header for this section is `custom-ids-for-anchor-links`. The text is
transformed to all lowercase, special characters are ignored, and spaces are
turned into hyphens.

### Content summaries

You can define a summary manually, in front matter, or automatically. A manual
summary takes precedence over a front matter summary, and a front matter summary
takes precedence over an automatic summary. To manually set a summary for a blog
post, see https://gohugo.io/content-management/summaries/.

### Internal links and shortcodes

Using relative links and shortcodes to refer to other pages is strongly
encouraged instead of hardcoding paths. Hugo emits an error or warning if a
document cannot be uniquely resolved. See
https://gohugo.io/content-management/cross-references/ for how to utilize the
shortcodes.

For example:

Don't do this:

```md
[Discontinuation of the GeoLite Legacy Databases](/2018/01/discontinuation-of-the-geolite-legacy-databases/)
```

Do this:

```md
[Discontinuation of the GeoLite Legacy
Databases]({{< relref "2018/01/discontinuation-of-the-geolite-legacy-databases.md" >}})
```

### Images

In markdown, you can embed images with the following format:

```
![alt-text](path/to/image)
```

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

### Code blocks

Inline code is marked with a single opening and closing backtick (\`), as in
`inline code`, for example. This renders the text with monospace font and subtle
styling differences to indicate that you're looking at code.

Often in a technical blog we may need to share more code. For that we use code
blocks, which are marked with three backticks followed by the code language to
open the block (for example, \`\`\`bash). To close a code block, just put three
backticks by themselves on their own line. For example:

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

We can use [OpenGraph meta tags](https://ogp.me/) for social sharing. Hugo has
an embedded OpenGraph template:
https://gohugo.io/templates/embedded/#open-graph.
[Hugo OpenGraph embedded template source code](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/opengraph.html).

At this time, the blog generates metadata in the following ways:

- The `title` parameter in the blog post head generates the `<title></title>`
  tag
- The meta description in the blog post head is generated by the `description`
  in the [blog post head](#blog-head). If no `description` is set in the front
  matter of the post, there will not be a meta description tag.
- [OpenGraph meta tags](https://ogp.me/):
  - [`og:title`](https://ogp.me/#metadata) is populated with the `title`
    parameter in the [blog post head](#blog-head)
  - [`og:description`](https://ogp.me/#optional) is populated with the
    `description` parameter in the [blog post head](#blog-head). If no
    `description` is specified, this will default with the first paragraph of
    the post.
  - [`og:site_name`](https://ogp.me/#metadata) is `MaxMind`, which is the title
    set in `config.toml`
  - [`og:locale`](https://ogp.me/#metadata) is `en_us`, which is the
    languageCode set in `config.toml`. (`-` is replaced with `_`.)
  - [`og:audio`](https://ogp.me/#metadata) is populated with a list of audio
    paths
  - [`og:video`](https://ogp.me/#metadata) is populated with a list of video
    paths
  - [`og:type`](https://ogp.me/#metadata) is populated with the value
    `"article"`
  - [`og:url`](https://ogp.me/#metadata) is populated with the URL of the
    article, which is derived from its path and filename
  - [`og:image`](https://ogp.me/#metadata) is populated with the `images`
    parameter in the [blog post head](#blog-head)
  - [`article:section`](https://ogp.me/#no_vertical) is populated with the year
    of the post from the `date` parameter in the [blog post head](#blog-head)
  - [`article:published_time`](https://ogp.me/#no_vertical) is populated with
    the timestamp of midnight on the date specified in the `date` parameter in
    the [blog post head](#blog-head)
  - [`article:modified_time`](https://ogp.me/#no_vertical) is populated with the
    timestamp of midnight on the date specified in the `date` parameter in the
    [blog post head](#blog-head)

### Redirects and aliases

You can use [Hugo's Aliases](https://gohugo.io/content-management/urls/#aliases)
to create redirects from old URLs to new URLs.

For example, you would change the new file name and make the alias the old file
name:

```md
aliases:
['2024/06/maxmind-appoints-seasoned-data-science-leader-rupert-young-as-chief-product-officer.md']
```
