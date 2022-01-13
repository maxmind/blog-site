const fromDom = require('hast-util-from-dom');
const { JSDOM } = require('jsdom');
const visit = require('unist-util-visit');

const matchesGatsbyImage = (rawHTML) =>
  rawHTML.match(/class=['"]gatsby-resp-image/);

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', (node) => {
    if (!matchesGatsbyImage(node.value)) {
      return;
    }

    const { document } = new JSDOM(node.value).window;
    const tree = fromDom(document.body.firstChild);

    node.type = 'jsx';
    node.data = {
      hChildren: tree.children,
      hName: tree.tagName,
      hProperties: tree.properties,
    };
  });

  return markdownAST;
};
