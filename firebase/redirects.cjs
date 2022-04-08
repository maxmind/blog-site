const rssFeedRedirect = require('./redirects/rss-feed.cjs');

module.exports = [
  ...rssFeedRedirect,
  {
    destination: ':1:2',
    // eslint-disable-next-line max-len
    regex: '^(/[0-9][0-9][0-9][0-9]\\/[0-9][0-9])\\/[0-9][0-9](\\/[\\w|-]+\\/?)$',
    type: 302,
  },
];
