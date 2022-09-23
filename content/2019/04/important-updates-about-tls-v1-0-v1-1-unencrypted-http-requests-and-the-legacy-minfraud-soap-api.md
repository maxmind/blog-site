---
title:
  "Important Updates about TLS v1.0/v1.1, Unencrypted HTTP Requests, and the
  Legacy minFraud SOAP API"
date: "2019-04-12"
category:
  - "Online Fraud Detection"
tag:
  - "Product Updates"
authors:
  - "Miguel Atienza"
---

**October 16, 2019:** We retired support for TLS v1.0/v1.1 and unencrypted HTTP
requests to minFraud services on October 16, 2019, as part of our commitment to
securing and protecting your data. Please ensure you are using TLS v1.2+ to
connect to MaxMind services.

**May 8, 2020:** We retired the legacy minFraud SOAP API on May, 2020. Please
integrate with the legacy minFraud service directly, or use our newer minFraud
services.

In the coming months, we will be retiring the following:

<!--lint disable ordered-list-marker-value-->

1. TLS v1.0 and 1.1 support across MaxMind products and services (October 16,
   2019\);
1. Unencrypted HTTP requests to our legacy **minFraud services** (October 16,
   2019\); and
1. The legacy **minFraud** service SOAP API (January 31, 2020 - **revised to May
   8, 2020**).

Read on below for more information. MaxMind is deeply committed to information
security and protecting customer data, and taking these steps will allow us to
ensure your data is as safe and secure as possible. If you have any questions,
please do not hesitate to
[contact us](https://support.maxmind.com/hc/en-us/requests/new/).

---

## TLS v1.0 and v1.1

Transport Layer Security (TLS) is a cryptographic protocol for securing
communications between systems. Older versions of TLS (1.0 and 1.1) have many
serious vulnerabilities and expose communications to the possibility of data
breach. Retirement of older TLS is a
[coordinated effort across many industries](https://blog.pcisecuritystandards.org/are-you-ready-for-30-june-2018-sayin-goodbye-to-ssl-early-tls).

<!--lint disable no-emphasis-as-heading-->

**What does this mean for me?**

If you are using TLS v1.0 or 1.1 to connect to MaxMind services (including
**GeoIP** database downloads) as of April 1, 2019, we will email you during the
week of April 15, 2019 to inform you and provide you with more information. If
you are not sure how to proceed, please forward this information to the
individual(s) responsible for your MaxMind integration. Depending on your
technology stack, you may need to upgrade some part of your stack to a later
version, or you may need to make code changes. The retirement date for TLS
v1.0/v1.1 is October 16, 2019.

If you have any questions at all, please do not hesitate to
[contact us](https://support.maxmind.com/hc/en-us/requests/new/).

---

## HTTP Requests to Legacy minFraud Services

HTTP requests are unencrypted and because requests to our legacy **minFraud**
services may contain sensitive data, we will no longer support these types of
requests. Our newer **minFraud** services already require HTTPS requests.

**What does this mean for me?**

If you are sending us HTTP requests to our legacy **minFraud** service, we will
email you during the week of April 15, 2019 to inform you and provide you with
more information. You will need to update your integration to use HTTPS with TLS
v1.2 or greater. If you are not sure how to proceed, please forward this
information to the individual(s) responsible for your MaxMind integration. The
retirement date for HTTP requests to legacy **minFraud** services is October
16, 2019.

**Affected URLs**

Below is a list of affected (legacy **minFraud** service) URLs:

\*.maxmind.com/app/ccv2r \*.maxmind.com/app/minfraud_soap
\*.maxmind.com/app/fast_proxy \*.maxmind.com/app/bin_http
\*.maxmind.com/app/ipauth_http

We also highly recommend that our **GeoIP** customers use HTTPS instead of HTTP.

If you have any questions at all, please do not hesitate to
[contact us](https://support.maxmind.com/hc/en-us/requests/new/).

---

## Legacy minFraud SOAP API

In order to provide you with a better overall service experience, we are
focusing our development efforts on our newer more modern APIs. As part of this
effort, we are discontinuing the SOAP API for our legacy **minFraud** service.
Other
[client APIs for legacy minFraud services](https://dev.maxmind.com/minfraud/minfraud-legacy/)
will continue to be supported.

**What does this mean for me?**

If you are using our SOAP API to connect to our **minFraud** service, we will
email you during the week of April 15, 2019 to inform you and provide you with
more information.

To move off the SOAP API, you will need to change your integration to either:

- Integrate with the legacy **minFraud** service directly per
  <https://dev.maxmind.com/minfraud/minfraud-legacy/>.
- Use our newer **minFraud** services (read about
  [what’s new in our latest minFraud services](https://dev.maxmind.com/minfraud/whats-new-in-minfraud-score-and-minfraud-insights/))
- Use one of our other
  [client APIs for legacy minFraud services](https://dev.maxmind.com/minfraud/minfraud-legacy/)
  (not recommended).

If you are not sure how to proceed, please forward this information to the
individual(s) responsible for your MaxMind integration. The retirement date for
the legacy **minFraud** SOAP API is January 31, 2020 (**revised to May 8,
2020**).

**Timing with older TLS retirement**

Please note that the retirement dates for TLS v1.0/v1.1 and HTTP requests to
legacy **minFraud** services are _earlier_ than the retirement date for the SOAP
API. As a result, we recommend moving off the legacy minFraud SOAP API and
upgrading to TLS v1.2 or higher at the same time (and prior to October 16,
2019\).

If you need to continue using SOAP after October 16, 2019 until January 31,
2020, you will need to either (1) upgrade to version 15, available at
<https://www.maxmind.com/wsdl/minfraud-soap-15.wsdl>; or (2) override the URL
used by your current WSDL file to force it to use HTTPS.

If you have any questions at all, please do not hesitate to
[contact us](https://support.maxmind.com/hc/en-us/requests/new/).

---

## Timeline

|                                           |                                                                                   |     |     |
| ----------------------------------------- | --------------------------------------------------------------------------------- | --- | --- |
| Week of April 15, 2019                    | We will inform affected accounts (as of April 1, 2019) via email                  |     |     |
| Week of July 29, 2019                     | Planned interruption of TLS v1.0 and 1.1 connections & minFraud HTTP requests     |     |     |
| August 28, 2019                           | 2nd planned interruption of TLS v1.0 and 1.1 connections & minFraud HTTP requests |     |     |
| September 25, 2019                        | 3rd planned interruption of TLS v1.0 and 1.1 connections & minFraud HTTP requests |     |     |
| October 16, 2019                          | TLS v1.0 and v1.1, and minFraud HTTP requests no longer supported                 |     |     |
| January 31, 2020 (revised to May 8, 2020) | Legacy minFraud SOAP API discontinued                                             |     |     |

If you have any questions, please do not hesitate to
[contact us](https://support.maxmind.com/hc/en-us/requests/new/).
