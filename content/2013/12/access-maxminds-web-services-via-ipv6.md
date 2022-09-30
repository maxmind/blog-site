---
title: "Access MaxMind's data services via IPv6"
date: "2013-12-12"
category:
  - "IP Geolocation and Network Data"
tag:
  - "Product Updates"
  - "IP Network Data"
authors:
  - "The Team at MaxMind"
---

We’re happy to announce that MaxMind’s roll out of Internet Protocol version 6
(IPv6) access for our GeoIP2, Legacy GeoIP, Proxy Detection, and minFraud web
service endpoints is complete. This update means each service is queriable at an
[IPv6 address](https://en.wikipedia.org/wiki/IPv6_address) in addition to
existing Internet Protocol version 4
([IPv4](https://en.wikipedia.org/wiki/IPv4)) addresses; no API updates are
required. Your development team will be happy to know that MaxMind is IPv6-ready
as Internet users transition to IPv6. By supporting IPv6 access to our services,
MaxMind is making it possible for early adopters of IPv6 to access our services
without having to resort to an IPv4 connection. IPv4 is currently used by the
vast majority of our users to access our services and used by web users to
access Internet content generally.

For details on our servers’ IPv6 address records, see the
[web service release notes](https://dev.maxmind.com/release-note/adding-ipv6-access-for-web-endpoints/).

<!--lint disable no-emphasis-as-heading-->

**IP Address 101: What are IPv4 and IPv6? What does the transition from IPv4 to
IPv6 mean?**

Internet Protocol (IP) addresses are numbers used to identify devices on
networks so that data can be sent between them. IP addresses make the Internet
possible. Every point of an IP network, such as a computer, router, or network
printer, is assigned an [IP address](https://en.wikipedia.org/wiki/IP_address)
that is used to locate and identify the devices in communication with other
devices on the network.

The designers of the Internet Protocol version 4 (IPv4), not envisioning how the
Internet would grow, defined IP addresses as 32-bit numbers. In non-tech speak,
this means there are a little more than 4 billion (2^32) possible addresses. As
the Internet has become more popular, and as the number of devices per person
has increased, it’s become obvious that 4 billion addresses just isn’t enough,
even with
[clever attempts at extension](https://en.wikipedia.org/wiki/IPv4_address_exhaustion#Early_mitigation_efforts)!
In addition to introducing several other updates, IPv6 supports 128-bit IP
addresses, meaning there are up to 2^128 or 3.4 \* 10^38 IP addresses
available - a number unlikely to be exhausted. A global transition to IPv6 is
necessary because IPv4 cannot accommodate the large and increasing number of
devices on the Internet.

In brief, Internet Protocol version 6 (IPv6) is a necessary revision of the IPv4
communication protocol used to route Internet traffic. The need for companies to
support and use IPv6 will become increasingly urgent in coming years. MaxMind is
happy to support IPv6 access to its services.
