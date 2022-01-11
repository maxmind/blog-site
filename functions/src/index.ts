import * as functions from 'firebase-functions';

const allowedHosts = [
  /^localhost:5000$/,
  /^mm-blog-site-staging\.web\.app$/,
  /^mm-blog-site-staging--pr-\d+-\w+\.web\.app$/,
  /^blog\.maxmind\.com$/,
];

const parseHost = (request: functions.Request) => {
  let host = request.headers['x-forwarded-host'];

  functions.logger.info('host-header', host);

  if (!host) {
    functions.logger.error('Host not found.', host);
    return undefined;
  }

  // It is possible to have multiple forwarded hosts defined.
  // Firebase only sets one.
  if (Array.isArray(host)) {
    host = host[0];
  }

  let isValidHost = false;

  allowedHosts.map((hostRegex: RegExp) => {
    if (hostRegex.test(host as string)) {
      isValidHost = true;
    }
  });

  if (!isValidHost) {
    functions.logger.error('Host is invalid.', host);
    return undefined;
  }

  return host;
};


/**
 * TODO - Make this feed dynamic.
 *
 * This is a static port of the existing WP JSON feed that the marketing site
 * consumes. This should eventually be made dynamic.
 */

export const featuredPosts = functions.https.onRequest(
  (req, res) => {
    const host = parseHost(req);

    if (!host) {
      res.status(400).send();
      return;
    }

    /* eslint-disable max-len */
    res.status(200).json([
      {
        date: 'Thu, 01 Jul 2021 20:31:47 +0000',
        excerpt: 'In this post, we’ll talk about some common assumptions about how IP geolocation works and contextualize those assumptions in light of the structure of the internet and the distribution of the IP space across geographical regions. In light of these considerations, we’ll develop a deeper understanding of the constraints and opportunities for IP geolocation.',
        featured_image_src: 'https://blog.maxmind.com/wp-content/uploads/2021/07/Accuracy-Radius-1.png',
        link: 'https://blog.maxmind.com/2021/07/01/how-accurate-is-ip-geolocation/',
        title: 'How accurate is IP geolocation?',
      },
      {
        date: 'Tue, 07 Sep 2021 18:05:59 +0000',
        excerpt: 'Demyst’s Platform has helped Tier 1 financial services firms modernize and leverage external data workflows for over 10 years. Account takeover and synthetic fraud can be expensive for Demyst’s clients in online payments, banking, and insurance. Demyst’s VP of Product Strategy Prashant Reddy explains that the data provided by the minFraud service fills a key niche in the solutions Demyst’s clients are creating.',
        featured_image_src: 'https://blog.maxmind.com/wp-content/uploads/2021/09/Demyst-and-MaxMind-1024x683.png',
        link: 'https://blog.maxmind.com/2021/09/07/demyst-offers-data-from-minfraud/',
        title: 'DemystData’s fraud solutions offer best-in-class IP risk data from the minFraud service to help financial services firms prevent fraud',
      },
      {
        date: 'Thu, 09 Sep 2021 17:36:02 +0000',
        excerpt: 'We have updated our data in a number of ways in preparation for the rollout of iCloud Private Relay. We have worked with Apple’s to ensure that our data accurately reflects how Private Relay works and delivers the best possible experience for your users.',
        featured_image_src: 'https://blog.maxmind.com/wp-content/uploads/2021/09/Data-Updates-for-Apple-iCloud-Private-Relay-1024x683.png',
        link: 'https://blog.maxmind.com/2021/09/09/data-updates-for-apple-icloud-private-relay/',
        title: 'Data Updates for Apple iCloud Private Relay',
      },
    ]);
    /* eslint-enable max-len */
  }
);
