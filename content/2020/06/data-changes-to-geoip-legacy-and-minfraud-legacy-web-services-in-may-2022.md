---
title:
  "Data Changes to GeoIP Legacy and minFraud Legacy Web Services in May 2022"
date: "2020-06-15"
category:
  - "Company Updates"
  - "IP Geolocation and Network Data"
  - "Online Fraud Detection"
tag:
  - "Product Updates"
authors:
  - "Miguel Atienza"
---

Several data changes are coming to the legacy web services outlined below due to
the
[**Retirement of GeoIP Legacy Downloadable Databases on May 31, 2022**](https://blog.maxmind.com/2020/06/01/retirement-of-geoip-legacy-downloadable-databases-in-may-2022/).
We will continue to support these web services with data from our more modern
GeoIP2 data set.

**Update (June 1, 2022):**
[Our GeoIP Legacy databases have been retired, and these changes are now live!](/2022/06/geoip-legacy-databases-have-been-retired)

## Are these changes applicable to my web services?

The following is applicable to you if you use one of the web services (and
corresponding web service URLs below):

- **minFraud Legacy Standard or Premium**:
  `https://minfraud.maxmind.com/app/ccv2r`
- **GeoIP Legacy City**: `https://geoip.maxmind.com/b`
- **GeoIP Legacy City/ISP/Org**: `https://geoip.maxmind.com/f`
- **GeoIP Legacy Insights (formerly known as Omni)**:
  `https://geoip.maxmind.com/e`

## What does this mean for me?

If you are using one of our legacy web services, we recommend ensuring that the
data changes below will not disrupt your existing workflows.

## Data changes

<!--lint disable ordered-list-marker-value -->

1. **Region codes:** The legacy web services historically returned region codes
   in the FIPS 10-4 standard (for all countries except for the US and Canada).
   At the end of May 2022, region codes worldwide will be returned in the ISO
   3166-2 standard. We will provide the most specific/granular ISO 3166-2 region
   code we have for a given IP network. In addition, Kosovo will return an ISO
   country code of XK and will no longer present as a region per the FIPS
   standard. For your convenience, we’ve prepared a
   [FIPS-ISO region code mapping file here](https://dev.maxmind.com/geoip/geoip2/whats-new-in-geoip2/#ISO_31662,_FIPS_104,_and_Country_Subdivisions).
1. **Area codes:** Area codes are no longer available in GeoIP2. At the end of
   May 2022, area code fields will return as blank.
1. **Country/Region/City names:** GeoIP2 contains more standardized country,
   region, and city names that come from [GeoNames](https://www.geonames.org/).
   At the end of May 2022 there may be small place name differences due to this.
   To get a full list of GeoIP2 place names we recommend downloading a
   [GeoLite2 City CSV file](https://dev.maxmind.com/geoip/geoip2/geolite2/)
   (available at no cost). Details of this file format can be found
   [here](https://dev.maxmind.com/geoip/geoip2/geoip2-city-country-csv-databases/#csv-databases).
   You may request access by
   [logging into your account](https://www.maxmind.com/en/account/login) and
   clicking on ‘GeoLite2 Signup’ under the **GeoIP2 / GeoLite2** section in your
   left-hand navigation menu.
1. **IPv6 \[minFraud Legacy services]:** Historically, legacy minFraud services
   only provided IP country resolution for IPv6 addresses. At the end of May
   2022, all
   [GeoIP Location Check outputs](https://dev.maxmind.com/minfraud/minfraud-legacy/#GeoIP_Location_Checks)
   (e.g., region, city, postal code) will support IPv6 addresses.

## What do I do?

If you are relying on specific outputs from the data fields above, we recommend
checking your systems and workflows to ensure that the outlined data changes
will not cause disruption.

We have set up alternate URLs for the legacy web services that serve GeoIP2
data. These alternate URLs incorporate the data changes that will occur for
legacy URLs at the end of May 2022, so you may switch on your own schedule.
These URLs will persist after the switch so if you switch to using them now you
will not have to make further adjustments in the future.

| Legacy service                            | Legacy URL                               | Alternate URL (with data changes)                   |
| ----------------------------------------- | ---------------------------------------- | --------------------------------------------------- |
| **minFraud Legacy, Standard, or Premium** | `https://minfraud.maxmind.com/app/ccv2r` | `https://minfraud.maxmind.com/minfraud/v1.0/legacy` |
| **GeoIP Legacy Country**                  | `https://geoip.maxmind.com/a`            | `https://geoip.maxmind.com/geoip/v1.0/country`      |
| **GeoIP Legacy City**                     | `https://geoip.maxmind.com/b`            | `https://geoip.maxmind.com/geoip/v1.0/city`         |
| **GeoIP Legacy City/ISP/Org**             | `https://geoip.maxmind.com/f`            | `https://geoip.maxmind.com/geoip/v1.0/city-isp-org` |
| **GeoIP Legacy Insights aka Omni**        | `https://geoip.maxmind.com/e`            | `https://geoip.maxmind.com/geoip/v1.0/insights`     |

You may also wish to consider upgrading to our current, actively developed
offerings at this time.

| Current service                           | Product info                                                                                               | Dev info                                                                                                   | What's new                                                                                                                                 |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **minFraud Score, Insights, and Factors** | [Learn about product features on our main website](https://www.maxmind.com/en/solutions/minfraud-services) | [Read technical documentation on our developer's site](https://dev.maxmind.com/minfraud/)                  | [Read about updated features on our developer's site](https://dev.maxmind.com/minfraud/whats-new-in-minfraud-score-and-minfraud-insights/) |
| **GeoIP2 City Plus, and Insights**        | [Learn about product features on our main website](https://www.maxmind.com/en/geoip2-precision-services)   | [Read technical documentation on our developer's site](https://dev.maxmind.com/geoip/geoip2/web-services/) | [Read about updated features on our developer's site](https://dev.maxmind.com/geoip/geoip2/whats-new-in-geoip2/)                           |

If you are unsure about how to proceed, please forward this information to the
person(s) responsible for your technical integration. If you have any questions,
please [contact us](https://support.maxmind.com/hc/en-us/requests/new/).
