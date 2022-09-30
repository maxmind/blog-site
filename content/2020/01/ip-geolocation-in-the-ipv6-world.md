---
title: "IP Geolocation in the IPv6 World"
date: "2020-01-22"
category:
  - "IP Geolocation and Network Data"
tag:
  - "IP Geolocation Accuracy"
  - "IP Network Data"
authors:
  - "Miguel Atienza"
---

We get a lot of questions here at MaxMind about IPv6, and it’s not hard to
imagine why. Accuracy is top of mind for every user of IP geolocation and this
topic introduces questions about how effective geolocation can be for certain
user segments. In this post, we explain a key reason for IPv6 addresses, how
they’re allocated, and provide information about
[IPv6 geolocation accuracy](https://www.maxmind.com/en/geoip2-city-accuracy-comparison).

## IPv6

IPv6 is the latest standard developed by the
[Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force)
(IETF) for assigning addresses to devices in order to enable communication
within networks. It is the successor to the IPv4 standard, which suffers from
the problem of
[exhaustion (of available IPv4 addresses](https://www.ripe.net/manage-ips-and-asns/ipv4/ipv4-run-out)).
IPv6 solves this problem by using a 128-bit address instead of IPv4’s 32-bit
address, which yields a possible pool of IPv6 addresses that is more than
[7.9 x 10^28 the pool of IPv4 addresses](https://en.wikipedia.org/wiki/IPv6).

## Accuracy

Since the pool of IPv6 addresses is many orders of magnitude higher than the
pool of IPv4 addresses, many of our customers wonder whether accuracy suffers.
The short answer is no.

## IP Block Allocation

For both IPv6 and IPv4 standards, there are conventions for the flow down of IP
block allocations from the
[Internet Assigned Numbers Authority (IANA)](https://www.iana.org/numbers) to
[regional internet registries](https://en.wikipedia.org/wiki/Regional_Internet_registry)
(RIRs),
[local internet registries](https://en.wikipedia.org/wiki/Regional_Internet_registry#Local_Internet_registry)
(LIRs), internet service providers (ISPs), and end users. The IP blocks at the
end user level tend to have natural groupings for location assignment.

In IPv4 for instance, an individual or household end user is typically allocated
a /32 IP block, which is one individual IP. In IPv6, the size of the typical
individual or household end user block is significantly larger–a /64 IP block
which is 2^64 IP addresses. Despite the large number of IP addresses contained
in a /64 block, we usually find them to have uniform location and network
characteristics.

## ISP Practices

In practice, ISPs have a lot of flexibility in how they manage and allocate
their IP blocks. ISPs slice their IP blocks, and assign and re-assign them at
their discretion. This is why IP geolocation vendors (like us) exist and why we
all don’t simply use internet registry data to determine IP locations. At
MaxMind, we use a dynamic algorithm that adapts to any sized network that has a
distinct geographical area (or other distinct characteristics). So even with the
larger block sizes in IPv6, we can retain accuracy. It is important to note,
however, that there is significant variation in accuracy between ISPs for both
IPv4 and IPv6 based on the ISPs’ practices.

## Accuracy Is Not One Number

While we all like to roll-up accuracy into a single percentage figure, there
really is much more to it. Because we at MaxMind believe in accuracy
transparency, we publish our accuracy statistics on a per-country level for
several levels of granularity. You can also filter by IPv6 only, and in some
cases you will find that our IPv6 accuracy for a given country and level of
granularity is actually better than our IPv4 accuracy. Much of this variation
comes down to ISP practices. For instance, we’ve found that IPv6 addresses are
more accurate for certain ISPs (examples below):

- EE (UK)
- T-Mobile USA
- Vodafone DSL (Germany)

You can check out our accuracy statistics for yourself here:
<https://www.maxmind.com/en/geoip2-city-accuracy-comparison>.
