---
title: "Proxy Detection - Why Fraudsters Give Proxies a Bad Name"
date: "2015-01-23"
category:
  - "Online Fraud Detection"
tag:
  - "Anonymizer and Proxy Detection"
  - "Risk Score"
authors:
  - "The Team at MaxMind"
---

When it comes to fraud detection, finding proxies is a big topic. But why? Fraud
detection begins with thinking intelligently about the IP address associated
with a transaction. Where is that IP address, and how does that location relate
to other transaction data? Whereas most IP addresses inspire confidence, those
associated with a proxy generate suspicion.

Let’s take a closer look at proxy detection.

As its name suggests, a proxy acts as an intermediary,
[passing requests from one computer to other servers](https://en.wikipedia.org/wiki/Proxy_server).
But although there are legitimate uses of proxies, fraudsters find it useful to
take advantage of one of its characteristics; accessing the Internet through a
proxy makes it more difficult to locate a user by means of an IP address. This
enables
[some to use anonymizing proxies to access content from which they would otherwise be blocked](https://cyber.law.harvard.edu/publications/2010/Circumvention_Tool_Usage).
Others use open proxies to hide their whereabouts and thereby circumvent fraud
detection rules associated with location.

These fraudster practices drive up the risk of fraud from IP addresses
associated with proxies. Open proxies, hosting providers, VPNs are all popular
places for fraudsters to hide. For example, although orders with IP addresses
from hosting providers can be legit, MaxMind has found up to 65% within the
minFraud Network to be high risk.

Although lists of known proxies exist, proxies change frequently. The pool of
proxies used for nefarious purposes is especially volatile. For example,
sophisticated fraudsters may go so far as to purchase unique proxies with stolen
credit cards, perform dedicated attacks, then dump the proxy.

Given the usefulness of proxies to fraudsters, it makes sense that proxy
detection is a useful tool in the fraud detection toolkit. Detecting proxies
comes with two challenges. The first is how to recognize an IP address as a
proxy. The second is how to distinguish a “good” proxy from a “bad” one; since,
by definition, a proxy is merely an intermediary, a proxy is not high risk in
and of itself.

To consider how best to address these challenges, it’s helpful to look to the
primary goal of ecommerce fraud detection: thinking intelligently about the IP
address associated with a transaction in order to assess risk.

Fraud detection uses transaction data as the basis for this thinking and risk
assessment. Using this data and analysis, we gain insight into the kind of
traffic on a particular IP address. At MaxMind, the minFraud Network provides
the backbone for this reputation analysis. It informs our our proxyScore, a
summary of risk associated with an IP address.

In conclusion, fraudsters know how to use proxies to further their scams. Fraud
detection systems need to incorporate monitoring for this type of activity in
order to stop them. Since proxies can generate good traffic as well as bad,
proxy detection requires analysis of transaction data to assess which IPs are
higher risk. Merchants using MaxMind’s
[minFraud service](https://www.maxmind.com/en/minfraud-services) benefit from a
corresponding increased risk score to enable them to take action.

![open proxy list](/images/2015/01/open-proxy-list-300x231.png)

Open proxies change frequently. Would you trust traffic originating from here?
