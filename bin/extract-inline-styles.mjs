import cheerio from 'cheerio';
import crypto from 'crypto';
import fs from 'fs';
import glob from 'glob';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public');

const inlineCssFileMap = new Map();

glob(`${PUBLIC_DIR}/**/*.html`, {}, (err, files) => {
  for (const file of files) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    if (fs.statSync(file).isDirectory()) {
      continue;
    }

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const buffer = fs.readFileSync(file);

    const $ = cheerio.load(buffer.toString());
    const cssRules = new Set();

    const $elements = $('[style]');

    $elements.map((_, element) => {
      const $element = $(element);
      const styles = $element.attr('style');

      const className = `inlined__${crypto
        .createHash('md5')
        .update(styles)
        .digest('hex')
        .toString()
      }`;

      $element.addClass(className);
      cssRules.add(`.${className} { ${styles}; }`);
      $element.removeAttr('style');
    });

    // eslint-disable-next-line quotes
    const css = [
      ...cssRules,
    ].join('\n');

    const inlinedCssFileName = `inlined---${crypto
      .createHash('md5')
      .update(css)
      .digest('hex')
      .toString()
    }.css`;

    let cssFile;

    if (inlineCssFileMap.has(inlinedCssFileName)) {
      cssFile = inlineCssFileMap.get(inlinedCssFileName);
    } else {
      const integrityHash = crypto
        .createHash('sha512')
        .update(css)
        .digest('base64')
        .toString('hex');

      cssFile = {
        content: css,
        integrityHash,
        name: inlinedCssFileName,
      };

      inlineCssFileMap.set(inlinedCssFileName, cssFile);
    }

    const gatsbyGlobalCss = $('[data-identity="gatsby-global-css"]');

    $('[data-identity="gatsby-global-css"]').replaceWith($(`
      <link
        href="${gatsbyGlobalCss.attr('data-href')}"
        integrity="${gatsbyGlobalCss.attr('integrity')}"
        rel="stylesheet"
        type="text/css"
      />
    `.trim()));

    $(`
      <link
        href="/${cssFile.name}"
        integrity="sha512-${cssFile.integrityHash}"
        rel="stylesheet"
        type="text/css"
      />
    `.trim()).appendTo('head');

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    fs.writeFileSync(file, $.html());
  }

  [
    ...inlineCssFileMap.values(),
  ].forEach((cssFile) => {
    const filename = `${PUBLIC_DIR}/${cssFile.name}`;

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    if (fs.existsSync(filename)) {
      return;
    }

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    fs.writeFileSync(filename, cssFile.content);
  });
});

