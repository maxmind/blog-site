---
title: "Who Has the Most Accurate IP Geolocation Data?"
date: "2014-01-31"
category:
  - "IP Geolocation and Network Data"
tag:
  - "IP Geolocation Accuracy"
authors:
  - "The Team at MaxMind"
---

![free-map-navigation-psd-21](/images/2014/01/free-map-navigation-psd-21-300x200.jpg)

\- Updated April 2018

When it comes to choosing between the multiple IP geolocation data providers out
there, our customers have told us they are most interested in one thing –
accuracy. The question is, who provides the most accurate data?

Many IP geolocation data providers, MaxMind included, make available
[statistics on the accuracy of their own data](https://www.maxmind.com/en/city_accuracy).
Others hire auditors to certify their procedures for calculating accuracy. While
this is all helpful information, it doesn’t help you choose between companies
since each company’s testing methods and data are different.

There have been a few independent analyses comparing data providers, but one
from 2011 stands out in that it was able to compare many popular IP geolocation
databases against known IP-location pairs from end users of a French ISP.
Previous analyses had only compared databases against each other and had not
included comparisons with known IP-location pairs.

## An Independent Comparison of Free and Commercial IP Geolocation Databases

In 2011, the
[Cooperative Association for Internet Data Analysis](https://www.caida.org)
released a
[report comparing several free and commercial IP geolocation databases head to head](https://www.caida.org/publications/papers/2011/geocompare-tr/).
Many, though not all, of the most popular IP geolocation providers participated.

The gold standard for establishing IP geolocation accuracy involves comparing
databases against ground truth data, known IP-location pairs. The CAIDA
researchers were able to access three such datasets representing French DSL end
users, academic IPs, and routing infrastructure.

MaxMind’s GeoIP City database, which is optimized for locating end-users, was by
far the most accurate in geolocating the French DSL users, accurately
geolocating 70% of addresses within 10km of the ground truth.

While MaxMind is proud of this performance, the study is several years old now.
The good news is that we’re always making improvements to our geolocation
algorithms, and we have increased our postal code coverage and accuracy.

## How to Access MaxMind’s Most Accurate IP Geolocation Data

Check out our most accurate IP geolocation data in the
[GeoIP2 Precision Web Services](https://www.maxmind.com/en/web_services).The
GeoIP2 Precision Services contain our most accurate data, geolocating 7% more
IPs to postal codes and 3% more IPs to cities in the United States than the
GeoIP2 Databases. In addition, both the City and Insights services identify the
organization associated with a business IP address in 10% more instances.
