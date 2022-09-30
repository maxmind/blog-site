---
title: "Types of Anonymous IPs and How They Affect Your Business"
date: "2019-01-24"
category:
  - "IP Geolocation and Network Data"
tag:
  - "Anonymizer and Proxy Detection"
  - "IP Network Data"
authors:
  - "Miguel Atienza"
---

Anonymous IP addresses (sometimes incorrectly generalized as “proxies”) serve to
hide a web user’s true IP address and obfuscate their geolocation. There are
legitimate reasons, usually related to privacy or security, to use anonymous
IPs, but many businesses find that fraudsters and other bad actors also use
anonymous IPs in malicious ways that affect the bottom line.

## E-commerce

For businesses selling goods and services online, IP geolocation checks are a
fairly easy control to implement. These checks help identify bad orders based on
suspicious patterns in the IP location of the transacting user, the billing
address, and the shipping address (if applicable). Because of the prevalence of
these checks, fraudsters with stolen credit cards use anonymous IPs to spoof
locations close to the billing or shipping addresses of the victim (similar to
how spam callers spoof your phone’s area code).

## Digital Advertising

Online advertising is another area where anonymous IPs are often used to
perpetrate fraud. Fraudsters looking to skim off of payouts from advertisers use
bots or other programmatic means to generate fake impressions, clicks, or
actions. To achieve the scale necessary to make money off these schemes,
anonymous IPs are used to both get in the correct geography to trigger payouts,
and to evade controls that detect repeated views and clicks from one or few IP
addresses. These same techniques are also used in referral and incentive
marketing (e.g. app installs).

## Media Streaming

Consumers use anonymous IPs to bypass geolocation controls to access media
content not available in their country. It is usually incumbent upon media
streaming companies to ensure controls for digital rights management related to
geographies. Without appropriate controls, there is a risk of loss of content
licenses which can to lead to loss of viewers, market share, and revenue.

## Types of Anonymous IPs

While anonymous IPs are often referred to as “proxies”, there are several types
of anonymous IPs, of which proxies are a subset. The table below provides a
summary:

| Anonymizer Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Public proxy**      | Proxy servers act as an intermediary between the user and the target server with the IP address of the proxy server being revealed to the target server. Proxies generally do not provide encryption. Different types of proxies (below) differ on technologies used and present trade-offs between speed and security. HTTP proxies operate on an application (e.g. web browser) basis while SOCKS proxies support proxying traffic on the operating system level.                                                                                                                                                                                                                                                                         |
| **VPN**               | VPN servers perform the same intermediary role as a proxy. However, VPNs can provide a secure, encrypted tunnel between the user and the VPN server, which provides a higher level of security. Most operate on the operating system level, such that all network traffic is encrypted and sent through the VPN.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Hosting**           | Web hosting services (including shared and VPS) can effectively be used to create private proxies that can then be used by individuals for anonymizing purposes. Some VPN services do not register their own IP ranges and instead use a hosting provider to host their services. IPs registered to hosting providers may also be associated with legitimate corporate or residential ISP use. As a result, we specifically exclude these uses in our data set to avoid false positives.                                                                                                                                                                                                                                                    |
| **TOR**               | TOR (“The Onion Router”) is a decentralized system where user traffic is sent between several servers before going through an exit node to reach a target server. The original user IP is obfuscated by the series of relays that take place. TOR exit node IPs are published.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Residential proxy** | Residential proxies are a type of proxy that routes through IPs registered to residential ISPs. These are more difficult to detect as some of these [may be IoT devices or part of a botnet](https://medium.com/@xianghangmi/resident-evil-understanding-residential-ip-proxy-as-a-dark-service-dea9010a0e29). Alternatively, these proxies may be part of a peer-to-peer proxy network where users are required to offer their residential connection as a proxy for others in order to get the same functionality in return. There are also VPN providers that appear to obtain blocks of residential IPs from ISPs in order to provide residential VPN services. In many cases we are able to detect these and flag them as hosting IPs. |

## Anonymous IPs and Risk - Context is Important

Despite the popularity of anonymous IPs with fraudsters and other bad actors for
illegitimate or malicious use, not all anonymous IPs are risky. The true risk of
an anonymous IP is dependent on the nature of your business.

More and more people are using VPNs in the wake of several high-profile data
privacy scandals that have come to light in the recent past. In some cases,
[paid VPN subscriptions more than doubled](https://digiday.com/marketing/net-neutrality-privacy-scandals-increasing-vpn-use/)
after the breaking of major news stories. According to a
[GlobalWebIndex report](https://blog.globalwebindex.com/chart-of-the-day/vpn-usage-2018/)
from July 2018, 26% of global internet users used a VPN or proxy server in the
last month. Users might be using public proxies or personal-use VPNs to access
blocked websites from work or school. Users in certain countries use VPNs to
circumvent website access restrictions put in place by their governments.
Security and privacy conscious individuals will also use VPNs to maintain
anonymity and secure their data, especially
[when using public wifi](https://www.techradar.com/news/public-wi-fi-and-why-you-need-a-vpn).

Given increased public attention on privacy and security, and mainstream
adoption of VPNs and other anonymizing technologies, it’s even more important
for businesses to understand their user traffic profile and strike the right
balance between protecting their business from fraud and abuse, and maintaining
an excellent user experience. Businesses need to use data to provide context and
derive insight on what legitimate user behavior versus illegitimate user
behavior looks like for their particular use cases.

## Solutions

MaxMind provides data on anonymous IPs along with a flag to indicate whether the
IP is associated with a public proxy, VPN, hosting/data enter, or TOR exit node.
This data is updated daily and is available in a downloadable database with our
[GeoIP2 Anonymous IP database](https://www.maxmind.com/en/solutions/geoip2-enterprise-product-suite/anonymous-ip-database?utm_source=blog&utm_campaign=anon-types),
or in a web service with our
[GeoIP2 Precision Insights service](https://www.maxmind.com/en/geoip2-precision-insights?utm_source=blog&utm_campaign=anon-types)
or our
[minFraud service](https://www.maxmind.com/en/solutions/minfraud-services?utm_source=blog&utm_campaign=anon-types).

The
[GeoIP2 Precision Insights service](https://www.maxmind.com/en/geoip2-precision-insights?utm_source=blog&utm_campaign=anon-types)
is MaxMind’s most accurate and comprehensive IP geolocation solution with
anonymous IP flags, ISP, confidence factors, user type (e.g. business, traveler,
cellular, etc.), and more.

The
[minFraud service](https://www.maxmind.com/en/solutions/minfraud-services?utm_source=blog&utm_campaign=anon-types)
provides an IP risk score that represents the relative riskiness of IP addresses
(including anonymous IPs) in an e-commerce context. The score is affected by
whether we observe transactions from mostly legitimate customers or from
fraudsters on an IP address or network. The minFraud service also considers
other factors such as the riskiness of other transaction data, such as email
address, in order to reduce false positives.
