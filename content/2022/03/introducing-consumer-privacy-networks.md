---
title: "Introducing Consumer Privacy Networks"
date: "2022-03-15"
featuredImage: /images/2022/03/consumer-privacy-networks.svg
isFeatured: true
category:
  - "IP Geolocation and Network Data"
tag:
  - "Anonymizer and Proxy Detection"
  - "Data Privacy"
  - "Geofiltering and Geofencing"
  - "IP Network Data"
  - "Product Updates"
authors:
  - "Christopher Luna"
---

The last couple of years have accelerated the transformation not just of our
economy, but of the way that we use the internet. For an ever-increasing
population, there’s a digital-first approach to seeking entertainment, to
staying in touch with family and friends, to education, and to work.

When the internet was a smaller corner of our lives,
[VPNs and other proxies](/2019/01/types-of-anonymous-ips-and-how-they-affect-your-business)
were mostly used by privacy conscious techies, corporations, and fraudsters.
Today, proxies are marketed to everyday users by major tech companies, offering
privacy and limited anonymity for a modest subscription fee. When proxies are
built into popular browsers and the operating systems of mobile devices, use of
a proxy on its own is no longer a strict indicator of either tech savviness or
malicious intent.

That’s why we’re introducing a new type of network in our data: the consumer
privacy network.

## Smarter proxy identification

Blocking all proxy-users from your application or storefront may still be a
necessary business practice for some, but for many other purposes, cutting off a
whole segment of privacy-conscious consumers is going to mean alienating
legitimate users. Similarly, if you use IP data to enrich your analytics, it
will be important to distinguish a relatively normal consumer using, for
example, the Google VPN, from traffic that comes through unsupervised proxies
that is more commonly associated with increased risk of fraud.

In order to help customers have a smarter approach to their geofiltering and
analytics, we’re adding **consumer privacy networks** as a new type of network
to our IP intelligence data. Consumer privacy networks are VPNs or proxies
offered by major tech companies. These tech companies make assurances about the
kind of activity that is permitted on these networks, and take measures to help
prevent abuse. At present, we identify Google’s VPNs and Apple’s iCloud Private
Relay as consumer privacy networks.

### Get data on consumer proxies

MaxMind has identified consumer privacy networks
[in our ISP data](https://support.maxmind.com/hc/en-us/articles/4408618186907-Business-VPNs-and-Consumer-Privacy-Networks)
since the summer of 2021, and we’ve just added consumer privacy networks to
[our user type data](https://support.maxmind.com/hc/en-us/articles/4408208479131-User-Context-Data#h_01FN9BTGFQVP41YNPDGM454T2T).
You can find this data in the following products and services from MaxMind:

- [GeoIP2 City Plus web service](https://www.maxmind.com/en/geoip2-precision-city-service)
  contains our ISP data
- [GeoIP2 Insights web service](https://www.maxmind.com/en/geoip2-precision-insights)
  contains our ISP and user type data
- [GeoIP2 ISP database](https://www.maxmind.com/en/geoip2-isp-database) contains
  our ISP data
- [GeoIP2 Enterprise database](https://www.maxmind.com/en/solutions/geoip2-enterprise-product-suite/enterprise-database)
  contains our ISP and user type data
- [minFraud Insights and Factors web services](https://www.maxmind.com/en/solutions/minfraud-services)
  return our ISP and user type data

At this time, consumer privacy networks are not flagged in our
[GeoIP2 Anonymous IP](https://www.maxmind.com/en/solutions/geoip2-enterprise-product-suite/anonymous-ip-database)
data because we have not seen a high level of risky activity associated with
these networks. We continue to monitor and assess these networks, and will make
adjustments as we see how these networks are used as they are widely adopted.

### Learn more about our proxy data on our knowledge base

You can learn more about consumer privacy networks and how we identify them on
our knowledge base:

- [Read about consumer privacy networks on our knowledge base.](https://support.maxmind.com/hc/en-us/articles/4408618186907-Business-VPNs-and-Consumer-Privacy-Networks)
- [Read about our ISP data, which identifies consumer privacy networks.](https://support.maxmind.com/hc/en-us/articles/4408200231067-IP-Network-Data#h_01FN989KHXR7TGXPB5T2DK0Q77)
- [Read about our user type data, which identifies consumer privacy networks.](https://support.maxmind.com/hc/en-us/articles/4408208479131-User-Context-Data#h_01FN9BTGFQVP41YNPDGM454T2T)
- [Read about the other kinds of anonymizers and proxies that are flagged in our GeoIP2 Anonymous IP data.](https://support.maxmind.com/hc/en-us/articles/4408208507163-Anonymizer-and-Proxy-Data)
