import blc from 'broken-link-checker';

const targetUrl = process.env.E2E_TARGET_URL || 'http://localhost:5000';

const falsePositives = [
  'https://www.linkedin.com/company/maxmind',
  'http://www.maxmind.com',
  'https://www.maxmind.com',
  'https://support.maxmind.com/',
];

// eslint-disable-next-line compat/compat
const getBrokenLinks = (): Promise<any> => new Promise((resolve, reject) => {
  try {
    const brokenLinks: string[] = [];

    const checker = new blc.SiteChecker({
      excludedKeywords: [
        ...falsePositives,
      ],
      honorRobotExclusions: false,
    }, {
      end: () => {
        return resolve(brokenLinks);
      },
      link: (result) => {
        const { broken, http, url } = result;

        if (!http.response) {
          return;
        }

        const { statusCode } = http.response;
        const { resolved: resolvedUrl } = url;

        // eslint-disable-next-line compat/compat
        const { origin } = new URL(resolvedUrl);

        if (!broken) {
          return;
        }

        if (
          statusCode === 401
          && origin === 'https://www.maxmind.com'
        ) {
          return;
        }

        brokenLinks.push(result);
      },
    });

    checker.enqueue(targetUrl, []);
  } catch(err) {
    return reject(err);
  }
});

xtest('website has no broken links', async () => {
  expect(await getBrokenLinks()).toHaveNoBrokenLinks();
}, 1000 * 60 * 5);
