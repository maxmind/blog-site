---
title: "How to Protect Your Streaming Content from VPN & Proxy Traffic"
date: "2015-10-29"
category:
  - "IP Geolocation and Network Data"
tag:
  - "Anonymizer and Proxy Detection"
  - "Digital Rights Management"
  - "Geofiltering and Geofencing"
authors:
  - "Olaf Alders"
---

As more and more TV, music, and movie content has moved online, a veritable
industry has grown up around helping people to circumvent location based
broadcast restrictions. Demonstrating the scale of the issue, GlobalWatchIndex
reports that as many as
[29% of VPN users globally accessed Netflix](https://www.globalwebindex.net/blog/29-of-vpn-users-accessing-netflix)
in one recent month. Tutorials for how to access this and other streaming
services abound.

Streaming providers are required by content licensors to geographically restrict
access to the content they license. Providers risk losing content licensors’
trust and ultimately risk losing their ability to license content from studios
and other licensors if they are not able to restrict access based on where their
customers are accessing this content from. This post describes the ways
restrictions are being bypassed and offers some advice on solutions.

## A Typical Case

A streaming content service that has the rights to show a given movie
exclusively to viewers in the US will use an IP address geolocation filter to
block viewing by those outside the country. In order to bypass this restriction,
an individual located outside the US need only identify a VPN or proxy service
that offers access to an IP address that geolocates to the US. Once she signs up
for VPN access, she accesses the movie service via the VPN and the content is
unlocked.

Enterprising individuals have seized on this opportunity to meet the demand of
those who want to access geo-restricted content. Using cloud-computing, it’s
cheap and easy to set up a subscription-based VPN service in almost any region
or country. Any traffic tunneled through these servers will geolocate to the IP
address of the VPN server.

In the past, an IP geolocation country-level database was all one needed to
perform digital rights management. However, with the growth of VPN services,
more sophisticated solutions are additionally required to prevent unauthorized
access to geo-restricted content.

## Identifying VPN and Proxy Traffic

Streaming content providers need to identify the use of VPNs and proxies (DNS,
HTTP, TOR, etc.) to ensure that their content is not being accessed outside of
contractually-negotiated areas. Fortunately, a wide swath of VPNs and proxies
are not hard to identify. For example, publicly available
[WHOIS records](https://whois.arin.net/ui) will show you the registering
organization of an IP address. If someone accessing your site is using an IP
address that belongs to a hosting provider, this is a very strong indication
that the person is using a VPN or proxy service. In some cases, the registering
organization will be a VPN provider itself.

Users of the [TOR network](https://www.torproject.org/) may cycle through IP
addresses to obtain one that geolocates to a country of interest. Within the
context of the TOR network, these IP addresses are known as “exit nodes”. A
[complete list of exit nodes](https://check.torproject.org/exit-addresses) is
available for download.

## Limitations of the Above Methods

Compiling a list of known web hosts and VPN providers and comparing them to TOR
lists and the WHOIS records of connecting IP addresses can be tedious.

Also, while they can identify many VPNs and proxies, WHOIS and TOR lists will
not capture the increasingly popular DNS and web-based proxies, which are
favored for providing faster access to streaming content. New services pop up
daily and public data is usually stale. This is why content licensors require
use of additional methods to ensure effective detecting geofiltering beyond
traditional IP geolocation.

## MaxMind’s Database Solution

We created the
[GeoIP2 Anonymous IP database](https://www.maxmind.com/en/geoip2-anonymous-ip-database)
to assist content licensees in meeting their geofiltering contract requirements
while addressing their needs for a low-latency solution. Our GeoIP2 Anonymous IP
database identifies IP addresses such that are likely to be used for
circumventing geolocation restrictions, including TOR exit nodes, hosting, VPN,
and DNS proxy IPs. To keep pace with the creation of new VPN and proxy services,
this database is updated daily.

## Summing Up

Streaming providers, contractually required to restrict access to content based
on location, need new tools in addition to standard IP geolocation filters to
keep up with those trying to access their restricted content. Public WHOIS and
TOR data can be used to identify some IPs used by VPN and proxy services, in
particular when these services are run on web hosts. Identifying these and other
proxies and keeping up with their creation requires using a service like
MaxMind’s GeoIP2 Anonymous IP database.
