/**
 * HTTP Headers Configuration for Cloudflare Pages
 * This file is the source of truth for static/_headers generation
 * Run: npm run build:headers
 */

interface HeadersConfig {
  paths: Array<{
    pattern: string;
    headers: Record<string, string[] | Record<string, string[]>>;
  }>;
}

const config: HeadersConfig = {
  paths: [
    {
      pattern: '/*',
      headers: {
        'Content-Security-Policy': {
          // Allow AJAX/fetch requests to status page, marketing site, HubSpot, and Google services
          'connect-src': [
            '\'self\'',
            'https://status.maxmind.com',
            'https://www.maxmind.com',
            // HubSpot API endpoint
            // https://legacydocs.hubspot.com/docs/faq/how-do-i-create-a-custom-domain-for-my-forms
            'https://api.hubspot.com',
            // HubSpot static assets used by conversations embed
            // eslint-disable-next-line max-len
            // https://developers.hubspot.com/beta-docs/guides/apps/authentication/working-with-oauth#frequently-asked-questions
            'https://forms.hsforms.com',
            'https://*.googleapis.com',
            'https://*.google-analytics.com',
            'https://*.analytics.google.com',
            'https://*.googletagmanager.com',
            'https://*.g.doubleclick.net',
            // Google
            // eslint-disable-next-line max-len
            // https://developers.google.com/tag-platform/tag-manager/csp#google_analytics_4_google_analytics
            'https://*.google.com',
          ],
          'default-src': [
            '\'self\'',
          ],
          // Google Fonts and Vertex search (indirectly loaded when setting up the searchbox)
          'font-src': [
            '\'self\'',
            'https://fonts.gstatic.com',
          ],
          'form-action': [
            '\'self\'',
          ],
          'frame-ancestors': [
            '\'self\'',
          ],
          // HubSpot calls-to-action (pop-ups) and chatflows
          // eslint-disable-next-line max-len
          // https://knowledge.hubspot.com/website-pages/use-hubspot-content-on-external-sites#calls-to-action
          // Google Vertex search
          'frame-src': [
            '\'self\'',
            'https://app.hubspot.com',
            'https://www.google.com',
            'https://www.googletagmanager.com',
          ],
          'img-src': [
            '\'self\'',
            'data:',
            'https:',
          ],
          'object-src': [
            '\'none\'',
          ],
          'script-src': [
            '\'self\'',
            '\'report-sample\'',
            '\'unsafe-inline\'',
            // HubSpot tracking code
            // eslint-disable-next-line max-len
            // https://developers.hubspot.com/beta-docs/guides/api/tracking-code-api/tracking-code-quickstart-guide#frequently-asked-questions
            'https://js.hs-scripts.com',
            // HubSpot analytics
            // https://knowledge.hubspot.com/reports/install-the-hubspot-tracking-code
            'https://js.hs-analytics.net',
            // HubSpot cookie banner
            // https://knowledge.hubspot.com/privacy-and-consent/add-a-cookie-banner-to-your-website
            'https://js.hs-banner.com',
            // HubSpot conversations (live chat widget, chat flow)
            // https://knowledge.hubspot.com/chatflows/install-the-hubspot-tracking-code-for-chat
            'https://js.usemessages.com',
            // HubSpot form widgets
            // https://legacydocs.hubspot.com/docs/methods/forms/advanced_form_options
            'https://js.hsforms.net',
            'https://www.maxmind.com',
            // Google
            // eslint-disable-next-line max-len
            // https://developers.google.com/tag-platform/tag-manager/csp#google_analytics_4_google_analytics
            'https://cloud.google.com',
            'https://www.gstatic.com',
            'https://www.googleadservices.com',
            'https://www.google.com',
            'https://*.googletagmanager.com',
          ],
          // Google Fonts API and Vertex search
          // Google static assets
          'style-src': [
            '\'self\'',
            '\'unsafe-inline\'',
            'https://fonts.googleapis.com',
            'https://www.gstatic.com',
          ],
        },
        'Feature-Policy': [
          'accelerometer \'none\'',
          'autoplay \'none\'',
          'camera \'none\'',
          'encrypted-media \'none\'',
          'fullscreen \'none\'',
          'geolocation \'none\'',
          'gyroscope \'none\'',
          'magnetometer \'none\'',
          'microphone \'none\'',
          'midi \'none\'',
          'payment \'none\'',
          'picture-in-picture \'none\'',
          'usb \'none\'',
          'sync-xhr \'none\'',
        ],
        'Permissions-Policy': [
          'accelerometer=()',
          'ambient-light-sensor=()',
          'autoplay=()',
          'battery=()',
          'camera=()',
          'display-capture=()',
          'document-domain=()',
          'encrypted-media=()',
          'execution-while-not-rendered=()',
          'execution-while-out-of-viewport=()',
          'fullscreen=()',
          'gamepad=()',
          'geolocation=()',
          'gyroscope=()',
          'hid=()',
          'idle-detection=()',
          'magnetometer=()',
          'microphone=()',
          'midi=()',
          'payment=()',
          'picture-in-picture=()',
          'publickey-credentials-get=()',
          'screen-wake-lock=()',
          'serial=()',
          'speaker-selection=()',
          'usb=()',
          'web-share=()',
          'xr-spatial-tracking=()',
        ],
        'Referrer-Policy': [
'strict-origin-when-cross-origin',
],
        'Strict-Transport-Security': [
          'max-age=63072000',
          'includeSubDomains',
          'preload',
        ],
        'X-Content-Type-Options': [
'nosniff',
],
        'X-Frame-Options': [
'DENY',
],
        'X-XSS-Protection': [
'1',
'mode=block',
],
      },
    },
  ],
};

export default config;
