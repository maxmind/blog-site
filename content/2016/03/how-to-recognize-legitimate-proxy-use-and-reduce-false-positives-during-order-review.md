---
title:
  "How to recognize legitimate proxy use and reduce false positives during order
  review"
date: "2016-03-04"
category:
  - "IP Geolocation and Network Data"
  - "Online Fraud Detection"
tag:
  - "Anonymizer and Proxy Detection"
  - "IP Network Data"
  - "Risk Scoring"
authors:
  - "Miguel Atienza"
---

As a merchant, you’ll frequently see cases where multiple orders with different
billing addresses and payment methods are placed from the same IP address, and
it’s not clear whether or not this indicates fraud. Such activity could be a
sign of fraud, with a fraudster testing multiple compromised credit cards. It
could also be a sign that a fraudster is using a proxy to obscure his identity.
There are times though when such activity is expected and flagging such
transactions as fraudulent would mean denying good orders and frustrating
customers.

<!--lint disable no-emphasis-as-heading-->

**When to expect multiple different users on an IP address**

There are many cases where one should expect many different users of an IP
address. These include cases where the IP address is associated with a
corporation, university, a cellular carrier, a dial-up provider, and more. The
common factor is that traffic from these types of users is proxied through a
single public IP address. That is, all the Internet traffic from groups of
individuals is routed through a single Internet access point. This may be done
for example to share an Internet connection, apply a firewall, or improve
performance.

As an example, when employees place personal orders at work, a merchant might
see orders under a number of different names, billing addresses, and credit
cards all associated with the same IP address. Usually these individuals will at
least live within the same geographic region. In some cases however,
corporations may route traffic from a very wide geographic area through a
particular IP.

**How to identify IP addresses that may legitimately have multiple different
users**

There are several ways to identify IP addresses that may legitimately have
multiple different users. One is to analyze the registering organization of the
IP address based on the [WHOIS record](https://whois.arin.net/ui). In many
cases, this will help you determine if the IP address likely belongs to a
company, an educational institution, a cellular carrier, or the like.

MaxMind also provides several solutions to help with this. The
[GeoIP2 Precision Insights service](https://www.maxmind.com/en/geoip2-precision-insights)
includes user type data which can indicate what type of organization the IP
address belongs to. Many users of a single “business” IP address would not
itself raise the risk of fraud while many users being associated with a single
“residential” IP address would.

MaxMind’s
[Proxy Detection service](https://www.maxmind.com/en/proxy-detection-service)
scores IP addresses for their riskiness (e.g., being proxies favored by
fraudsters) and so can also be used to assess the likelihood that a given IP is
being used for fraud.

Of course, knowing that a transaction came through a corporate or other
seemingly legitimate proxy doesn’t in itself mean that it’s not fraudulent. It
does however reduce the likelihood of a false positive rejection of a good order
based on the activity of multiple users of an IP.

When assessing the risk of a transaction, it’s important to consider the IP
address. Review the proxyScore\* as well as the source of traffic to the IP
address. This will enable you not only to stop fraudulent transactions, but
reduce the false positives that impact your business as well.

\* _minFraud Insights provides an IP risk score in place of the proxyScore._
