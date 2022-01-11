module.exports = [
  {
    destination: ':1:2',
    // eslint-disable-next-line max-len
    regex: '^(/[0-9][0-9][0-9][0-9]\\/[0-9][0-9])\\/[0-9][0-9](\\/[\\w|-]+\\/?)$',
    type: 302,
  },
];
