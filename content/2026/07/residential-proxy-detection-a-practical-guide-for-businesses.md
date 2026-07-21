---
title: "Residential proxy detection: A practical guide for businesses"
heading: "Residential proxy detection: A practical guide for businesses"
description:
  "Understand the threats and challenges associated with residential proxy
  traffic, and how to combat the threat without blocking real customers."
summary:
  "Learn how to combat proxy-based threats that operate out of clean-looking
  residential networks, without disrupting legitimate user traffic."
date: "2026-07-21"
headerImage: "/images/2026/07/residential-proxy-detection-a-practical-guide-for-businesses.webp"
category:
  - "Anonymizer and proxy detection"
tag:
  - "Data privacy"
  - "Types of proxy"
  - "Residential proxy"
authors:
  - "Luna"
popular: true
---

Interest in residential proxy detection has grown exponentially in the past
year, with businesses paying more attention to proxy-based threats that operate
out of clean-looking residential networks.

Residential proxies route traffic through real consumer IP addresses, sourced
either from devices compromised by malware, from users who opt in to share
bandwidth through an app SDK, or from IP blocks leased directly from ISPs. They
have become the widening frontier of digital risk for governments and businesses
worldwide. What used to be a niche concern for security teams has now reached
the general public with the
[FBI issuing an alert to consumers](https://www.fbi.gov/investigate/cyber/alerts/2026/evading-residential-proxy-networks-protecting-your-devices-from-becoming-a-tool-for-criminals),
warning them that their own devices could be unwitting tools for criminal
activity. Described as a “back door into home networks” in
[a recent article from The Wall Street Journal’s Robert McMillan](https://www.wsj.com/tech/cybersecurity/how-millions-of-digital-home-devices-are-secretly-powering-cyberattacks-8fd73584),
these proxy networks aren’t just being used to download pirated movies; they’re
also being used for state-backed corporate espionage and other serious crimes.

This creates a difficult problem for businesses: How do you detect residential
proxy traffic and defend against it without disrupting legitimate user traffic?

## Understanding the residential proxy threat

Despite the “breaking news” framing of recent reporting on the issue,
residential proxies have existed for many years. Residential proxies are proxy
networks that run on consumer IP addresses used by regular people to browse the
internet, whether those addresses come from devices compromised without the
owner's knowledge, from opt-in bandwidth-sharing apps, or from blocks leased
directly from ISPs.

![residential proxy flow](/images/2026/07/residential-proxy-flow.webp)

[The Wall Street Journal reported a story](https://www.wsj.com/tech/kimwolf-hack-residential-proxy-networks-a712ab59)
that’s all too familiar to those of us in the industry. A regular consumer buys
a device, for example “video-streaming systems, phones, cameras and [...]
digital picture frames” that come with malware pre-installed. Or they download
an app to a smart device, not realizing it quietly turns their home network into
a proxy service that gets used by countless others to bypass regulations, avoid
content protections, or commit fraud.

Proxy providers have known for a long time that proxied residential IP addresses
are harder to detect and often have a clean reputation. This makes them
valuable, so certain proxy providers go to great lengths to “launder” these
addresses to avoid detection. When the North American Network Operators Group
(NANOG) convened in San Francisco in February 2026, Doug Madory of Kentik
[presented research](https://www.youtube.com/watch?v=7P_ybLSEQlw) showing how
proxy providers buy IP addresses from war-torn, cash-strapped nations, then
bring those IPs into US residential networks through “bring your own IP
programs”. An IP with a clean history, one recently used to provide internet
service to Ukrainian citizens for example, can be leased or sold and brought
into an American residential network where it looks completely legitimate.

![how IPv4 space can enter residential proxy pools](/images/2026/07/how-ipv4-space-can-enter-residential-proxy-pools.webp)

While residential proxy providers work hard to hide what they’re doing, security
researchers and organizations committed to digital safety are working just as
hard to stop them. In July 2026,
[KrebsonSecurity reported](https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet/)
that the FBI, acknowledging the assistance of industry partners Google, Lumen,
Shadowserver, and others, took down infrastructure behind NetNut, a “sprawling
residential proxy network” linked to the Israeli firm Alarum Technologies. This
is a constant back-and-forth between proxy providers and the people that keep
the internet safe and usable, with businesses caught in-between.

## Risk profile in MaxMind’s global fraud detection network

At MaxMind, we have observed residential proxy usage in fraud attacks for a long
time, even before direct-probing data was incorporated into our solutions. To
understand how big this problem really is, we analyzed risky events observed
across
[the minFraud network](https://support.maxmind.com/knowledge-base/articles/the-minfraud-network-maxmind),
which powers our real-time fraud risk scoring. Unsurprisingly, residential
proxies represent a significant proportion of problematic traffic.

![where proxied IP risk originates](/images/2026/07/where-proxied-ip-risk-originates.webp)

## The challenge: Shared infrastructure and false positives

Older blocking methods rely heavily on flagging hosting infrastructure and that
approach falls short here. It works reasonably well for VPN detection, though
even then, overly aggressive blocking can incorrectly flag legitimate businesses
that share network space with VPN providers. For residential proxies, this
approach doesn’t work at all.

Shared infrastructure makes VPN detection hard---and it makes residential proxy
detection even harder. Due to IPv4 depletion, network operators increasingly
rely on shared infrastructure such as
[Carrier-Grade NAT (CGNAT)](https://en.wikipedia.org/wiki/Carrier-grade_NAT) to
serve residential traffic, including satellite and fixed wireless deployments.
This means a single compromised device might share one IP address with anywhere
from dozens to hundreds of legitimate users.

![where residential proxy risk concentrates](/images/2026/07/where-residential-proxy-risk-concentrates.webp)

Because of this, blocking all residential proxies risks disrupting a vast amount
of legitimate user activity.

## A targeted approach to residential proxy detection and blocking

MaxMind’s residential proxy and VPN probing gives businesses industry-leading
coverage for critical use cases where downloadable databases are essential. But
the data alone is not enough; the application of that data is what matters.

Instead of a binary "block or allow" decision, businesses can use confidence
scores to protect against fraud while maintaining a seamless experience for
their legitimate users. Here’s how we recommend using MaxMind data, based on
your use case:

1. **For regulatory and legal compliance**: Consider adding additional
   verification steps for transactions with low-to-medium confidence scores.
   This reduces friction and cost of verifying every transaction but identifies
   the most concerning ones.

2. **For real-time decisioning in high-risk use cases**: When you need deeper
   intelligence, prioritize multi-attribute transaction risk scoring services
   like minFraud. These services are aware of residential proxy networks but
   incorporate behavioral, device, email, and other signals to distinguish
   between a fraudulent user and a legitimate one on a proxied connection.

3. **For firewalls**: Be cautious. While you can block VPNs identified through
   active probing with high confidence, treat residential proxies as a nuanced
   signal. You might consider blocking only very high-confidence residential
   proxies (i.e., anonymizer confidence scores of 88/100 or higher).

4. **For ad fraud**: Experiment with different threshold levels to balance
   blocking effectiveness against the impact on legitimate ad reach.

These are general starting points and the right approach depends on your
specific business. MaxMind’s product experts can work with your technical and
risk teams to help understand your specific challenges and apply our proxy data
effectively for your applications.
[Reach out today](https://www.maxmind.com/en/solutions/connect-with-a-geoip-expert)
to talk about how to balance security and usability for your business.
