---
title: "Data Updates for Apple iCloud Private Relay"
date: "2021-09-09"
featuredImage: /images/2021/09/apple-relay.svg
category:
  - "IP Geolocation and Network Data"
  - "Online Fraud Detection"
tag:
  - "Anonymizer and Proxy Detection"
  - "IP Network Data"
  - "Product Updates"
authors:
  - "Christopher Luna"
---

We have updated our data in a number of ways in preparation for the rollout of
[iCloud Private Relay](https://developer.apple.com/support/prepare-your-network-for-icloud-private-relay/).
We have worked with Apple’s to ensure that our data accurately reflects how
Private Relay works and delivers the best possible experience for your users.

- Geolocation data across our products and services now incorporate the IP
  geolocation feeds published by Apple, which provides coarse city or region
  geolocation mappings for iCloud Private Relay IPs.
- We identify iCloud Private Relay IPs in our ISP dataset (present in our
  [GeoIP2 ISP](https://www.maxmind.com/en/geoip2-isp-database) and
  [Enterprise](https://www.maxmind.com/en/solutions/geoip2-enterprise-product-suite/enterprise-database)
  databases, and our
  [GeoIP2 Precision Insights](https://www.maxmind.com/en/geoip2-precision-insights)
  and
  [minFraud Insights and Factors](https://www.maxmind.com/en/solutions/minfraud-services)
  web services) by tagging ranges as `iCloud Private Relay`.

Apple has shared the following assurances built into Private Relay:

- Geolocation information for clients is validated by the relay servers using
  signed tokens, and visible to origins through the IP addresses selected by
  relay servers.
  - A user is not able to arbitrarily select their geolocation to evade
    geolocation controls.
- Access to relay servers is rate-limited using device attestation to reduce
  fraud.
- All traffic is secured using TLS 1.3.

Customers do not need to take any action to receive this data.

For web service customers, this data will be returned in the
[`/traits/isp`](https://dev.maxmind.com/geoip/docs/web-services/responses/?lang=en#schema--response--traits__isp)
and
[`/traits/organization`](https://dev.maxmind.com/geoip/docs/web-services/responses/?lang=en#schema--response--traits__organization)
outputs, and in geolocation outputs.

For database customers, this data has been included in the latest release of our
databases. ISP data that includes Private Relay IPs is included in the latest
GeoIP2 ISP or Enterprise database. Geolocation data for Private Relay IPs is
included in the latest GeoIP2 City or Enterprise database.

For more information about Private Relay along with helpful technical
information, visit
[Prepare Your Network or Web Server for Private Relay](https://developer.apple.com/support/prepare-your-network-for-icloud-private-relay/)
on Apple’s developer website.

We will continue to monitor these IPs and may change how we handle them in the
future.
