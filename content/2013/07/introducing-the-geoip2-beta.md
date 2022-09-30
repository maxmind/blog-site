---
title: "Introducing the GeoIP2 Beta"
date: "2013-07-01"
category:
  - "IP Geolocation and Network Data"
tag:
  - "IP Network Data"
  - "Product Updates"
authors:
  - "The Team at MaxMind"
---

We are happy to announce the public beta of GeoIP2. GeoIP2 is the successor line
of products and services to the GeoIP brand of IP intelligence data (**Note**:
not all GeoIP 'Legacy' products and services will have GeoIP2 counterparts).

The transition to GeoIP2 is an ongoing project and this blog post is intended to
provide an accessible summary of what GeoIP2 is all about. The latest updates
will be documented throughout our main site and our developer site. **What are
the advantages of GeoIP2 over GeoIP Legacy?**

- Availability of both IPv4 and IPv6 data in downloadable database
- Localized location name data in selected languages
- New/modified data fields
  - Different types of country data including the country an IP is registered in
    and the country represented (e.g., for military bases) for content
    licensing, legal regulation compliance, and other similar use cases
  - Multi-level region data for countries with several region subdivisions
  - Country information is returned in some cases even when IP is an anonymous
    proxy or allocated by a satellite provider

These differences are explained in more detail on our
[What’s new in GeoIP2 page](https://dev.maxmind.com/geoip/geoip2/whats-new-in-geoip2/).

**How will the launch of GeoIP2 affect me?**

- Existing GeoIP Legacy users will have the ability to use or access GeoIP2
  versions of products and services that have been purchased (i.e., someone with
  an active subscription to a GeoIP Legacy City database will be able to
  download a GeoIP2 City database as well; similarly, someone with GeoIP Legacy
  City Web Service lookups will be able to use their lookups for the GeoIP2 City
  Web Service)
- New users will have the ability to use or access both the GeoIP Legacy and
  GeoIP2 versions of purchased products and services
- New and existing users will need to integrate new Client APIs in order to
  access GeoIP2 data (web services and downloadable databases)
- MaxMind will provide support for GeoIP Legacy into the foreseeable future, but
  this may change

**Which GeoIP Legacy products or services will have GeoIP2 counterparts?**

- GeoIP Country and City downloadable databases
- GeoIP ISP and Organization downloadable databases (in some form)
- GeoLite Country, City, and AS Num downloadable databases
- GeoIP Country, City/ISP/Org, and Omni Web Services

<!--lint disable no-emphasis-as-heading-->

**Which GeoIP2 products and services can I access now?**

As of right now, the
[GeoIP2 JavaScript API](”https://www.maxmind.com/en/javascript”) is fully
released. GeoIP2 Web Service Client APIs in Java, Perl, PHP, and Python are
available for [beta testing](https://www.maxmind.com/en/geoip2_beta). Please see
our [GeoIP2 beta page](https://www.maxmind.com/en/geoip2_beta) to see our
tentative release schedule and to contribute. Suggestions, criticisms, and
questions are welcome in the
[MaxMind Customer Community](https://getsatisfaction.com/maxmind).

Don't forget to follow us on [Twitter](https://twitter.com/maxmind) for the
latest product and service updates!
