---
title: "Retirement of GeoIP Legacy Downloadable Databases in May 2022"
date: "2020-06-01"
category:
  - "IP Geolocation and Network Data"
tag:
  - "Product Updates"
authors:
  - "Miguel Atienza"
---

<!--lint disable no-emphasis-as-heading-->

**If the databases you use begin with `GeoIP2-` then the following is not
applicable to you and can be ignored. This would most likely be true if you
started using MaxMind databases after October 2017 and did not request access to
the Legacy databases.**

We are planning to retire the GeoIP Legacy databases on **May 31, 2022**. This
means that neither updates nor older versions of the Legacy databases will be
available after that date. We recommend migrating to our GeoIP2 databases at
your earliest convenience.

**Update (June 1, 2022):**
[Our GeoIP Legacy databases have been retired!](/2022/06/geoip-legacy-databases-have-been-retired)

We have provided GeoIP databases in the
[‘Legacy’ formats](https://dev.maxmind.com/geoip/legacy/downloadable/) since
MaxMind began about 18 years ago. A lot has changed on the Internet since then,
and we have continued to adapt and innovate our offerings accordingly in order
to serve our users. We introduced GeoIP2 in 2014 with full IPv6 support,
localized data in multiple languages, additional data points, and a new format
that has allowed us to continue making improvements to the data. Retiring the
GeoIP Legacy databases will allow us to:

- spend more of our time and resources on our GeoIP2 offerings; and
- avoid running into the limitations of the legacy format (which would prevent
  us from increasing the precision of the data past a certain point).

We recognize that many projects and integrations still rely on the Legacy
formats so we want to provide as much notice as possible and ample time for
users to migrate to our current
[GeoIP2 formats](https://dev.maxmind.com/geoip/geoip2/downloadable/).

\*\*We will continue to support the
[GeoIP Legacy web services](https://dev.maxmind.com/geoip/legacy/web-services/),
although there will be data changes as they switch to relying on
[GeoIP2 data](https://dev.maxmind.com/geoip/geoip2/whats-new-in-geoip2/). More
information on this will be provided on June 15, 2020 in a
[separate blog post](https://blog.maxmind.com/2020/06/15/data-changes-to-geoip-legacy-and-minfraud-legacy-web-services-in-may-2022/).

## What does this mean for me?

If you are using one of our GeoIP Legacy databases, we recommend migrating to a
GeoIP2 database in advance. We will send semi-annual email reminders to accounts
which continue to download Legacy databases. You may be interested in reading
our
[What’s New in GeoIP2 page](https://dev.maxmind.com/geoip/geoip2/whats-new-in-geoip2/).

## How can I tell if I’m using a GeoIP Legacy database?

**Binary format:**

The file extension of GeoIP Legacy binary databases is (.dat). The filename
convention is `GeoIP-{edition ID}_YYYYMMDD.dat`.

**CSV format:**

The filename convention is `GeoIP-{edition ID}.csv`

In either case, `{edition ID}` will be a three-digit number. Users of our
single-country GeoIP Legacy City databases will also have two or three letters
after the number.

_\* If your filenames begin with \`GeoIP2-\` then you are not using a GeoIP
Legacy database._

## What do I do?

The GeoIP2 database equivalent (or replacement) of your GeoIP Legacy database is
already accessible to you for download through your
[MaxMind account](https://www.maxmind.com/en/accounts/current/geoip/downloads).
If you have trouble finding the GeoIP2 equivalent, please feel free to
[contact our support team](https://support.maxmind.com/hc/en-us/requests/new/).

You will need to adjust the database you are downloading via your download
mechanism (generally, we recommend using our
[GeoIP Update program](https://dev.maxmind.com/geoip/geoipupdate/) \[a
[docker image](https://hub.docker.com/r/maxmindinc/geoipupdate) is available]).

If you currently use the legacy binary format (.dat), you will need to integrate
one of our
[official](https://dev.maxmind.com/geoip/geoip2/downloadable/#MaxMind_Supported_APIs)
or
[third-party](https://dev.maxmind.com/geoip/geoip2/downloadable/#ThirdParty_APIs)
GeoIP2 client APIs.

You should also be familiar with GeoIP2 data changes (see our
[What’s New in GeoIP2 page](https://dev.maxmind.com/geoip/geoip2/whats-new-in-geoip2/)
for an overview) as you may need to adjust how you process/manipulate/transform
the data in your workflows and systems (especially if you are using the CSV
format).

If you are unsure about how to proceed, please forward this information to the
person(s) responsible for your technical integration. If you have any questions,
please [contact us](https://support.maxmind.com/hc/en-us/requests/new/).
