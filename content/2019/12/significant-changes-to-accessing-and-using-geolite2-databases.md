---
title: "Significant Changes to Accessing and Using GeoLite2 Databases"
date: "2019-12-18"
category:
  - "IP Geolocation and Network Data"
tag:
  - "Data Privacy"
  - "GeoLite Free IP Geolocation"
  - "Product Updates"
authors:
  - "Miguel Atienza"
---

## Reasons For Changes

MaxMind has always been committed to an individual's right to privacy on the
internet. We welcome the burgeoning privacy regulations, such as GDPR and CCPA,
for the benefit they can provide to internet citizens. However, these new
legislative measures place restrictions that impact our ability to continue
distributing our GeoLite2 databases on a public page under the
[Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

We recognize the impact of these changes on the open source community and we do
not take these decisions lightly. We want to communicate these changes with
transparency and ensure we are balancing your business needs with the privacy
needs of individuals.

The [California Consumer Privacy Act (CCPA)](https://oag.ca.gov/privacy/ccpa)
mandates that businesses honor valid “Do Not Sell” requests from California
residents. In this context, complying with a valid request involves MaxMind
removing IP addresses from the GeoLite2 data and communicating to GeoLite2 users
that the IP addresses in question should (immediately) not be utilized for uses
covered under the CCPA. Serving GeoLite2 database downloads on a public page
simply does not allow us to communicate and honor valid “Do Not Sell” requests
we receive from individuals.

The solution we have chosen is to introduce a new end-user license agreement
containing the relevant data processing provisions that both we, as the business
providing data, and you, as the third party user of the data, need to comply
with applicable data privacy regulations. Additionally, by requiring a MaxMind
account and contact information from you, we will be able to communicate all
valid “Do Not Sell” requests to you as we receive them.

With this approach, we can continue to offer GeoLite2 databases, without charge,
while remaining responsible stewards of data that improves the experience of
countless users across the internet.

## Summary Of Changes

Starting **December 30, 2019,** we will be requiring users of our GeoLite2
databases **to
[register for a MaxMind account](https://www.maxmind.com/en/geolite2/signup) and
obtain a license key in order to download GeoLite2 databases**. We will continue
to offer the GeoLite2 databases without charge, and with the ability to
redistribute with proper attribution and in compliance with privacy regulations.
In addition, we are **introducing a new
[end-user license agreement to govern your use of the GeoLite2 databases](https://www.maxmind.com/en/geolite2/eula)**.
Previously, GeoLite2 databases were accessible for download to the public on our
developer website and were licensed under the
[Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

Starting **December 30, 2019,** downloads will no longer be served from our
[public GeoLite2 page](https://dev.maxmind.com/geoip/geoip2/geolite2/), from
`geolite.maxmind.com/download/geoip/database/\*`, or from any other public URL.
See the section below for steps on how to migrate to the new download mechanism.

### GeoLite2 Databases Affected

- GeoLite2 Country
- GeoLite2 City
- GeoLite2 ASN

### Steps for Migration

<!--lint disable ordered-list-marker-value-->

1. [Sign up for a MaxMind account](https://www.maxmind.com/en/geolite2/signup)
   (no purchase required)
1. Set your password and create a
   [license key](https://www.maxmind.com/en/accounts/current/license-key)
1. Setup your download mechanism by using our
   [GeoIP Update program](https://dev.maxmind.com/geoip/geoipupdate/#For_Free_GeoLite2_Databases)
   or creating a
   [direct download script](https://dev.maxmind.com/geoip/geoipupdate/#Direct_Downloads)

On **December 30, 2019**, downloads will no longer be served from our
[public GeoLite2 page](https://dev.maxmind.com/geoip/geoip2/geolite2/), from
`geolite.maxmind.com/download/geoip/database/\*`, or from any other public URL.

To continue using GeoLite2 databases:

1. Review our new [GeoLite2 EULA](https://www.maxmind.com/en/geolite2/eula).
1. Sign up for a [MaxMind account](https://www.maxmind.com/en/geolite2/signup).
