module.exports = [
  {
    destination: '/feed',
    source: '/rss.xml',
    type: 302,
  },
  {
    destination: '/feed',
    source: '/feed/',
    type: 302,
  },
];
