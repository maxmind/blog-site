---
title: "How to Use Geolocation to Identify Higher Risk Transactions"
date: "2015-06-26"
category:
  - "Online Fraud Detection"
tag:
  - "Manual Review"
authors:
  - "The Team at MaxMind"
---

In our last blog post, we discussed how you can use a risk score to automate
fraud screening, saving you time and money.

In this blog post, we begin our discussion of manual review best practices.

Studies show that, in North America, one in four orders on average receive extra
scrutiny through the manual review process. The goal is to prevent the expense
of chargebacks and customer issued credits associated with fraud. At the same
time, you need to ensure that legitimate orders are not rejected unnecessarily,
and estimates suggest that this is the case with up to 10% of orders. Rejecting
good orders negatively impacts the bottom line, and drives away good customers.

During manual review, fraud analysts examine data associated with an order to
assess how likely it is to be fraudulent. One key area of data points to
consider is that of geolocation.

A fraudster (or indeed, anyone) placing an order on a website uses a device
(computer, mobile phone or tablet) and this device is associated with an IP
address. The physical location of the IP address can be matched against other
location information to see if anything looks suspicious.

What constitutes suspicious behavior will be specific to your business. However,
there are some rules of thumb. As you review geolocation data associated with an
order, ask yourself these questions:

**Does the country of the IP address match the billing address country?**

A mismatch indicates a higher risk of fraud. However, a cardholder on vacation
in another country would also generate a mismatch.

**Is the shipping zip extremely far from the IP location? Or the billing zip?**

A greater distance in either case indicates a higher risk of fraud. But keep in
mind that there are legitimate reasons for distance mismatches. A case in point
is a gift purchase, where you can expect greater distance between IP location
and shipping zip.

**Was the order placed from a high risk country?**

Is the IP address located in a high risk country? For example, Ghana, Nigeria
and Vietnam are countries included on high risk lists for most businesses.

**What is the postal code, city and country associated with the IP address?**

Use this information to quickly identify orders from locations you know to be
high risk for your business. This covers situations such as a series of bad
transactions originating from Russia or Toledo, OH, resulting in low tolerance
for orders from those locations.

**Is the order associated with a high risk shipping address?**

Fraudsters like to ship merchandise to addresses which are difficult to trace
back to them. This can include P.O. boxes, hotel addresses and freight
forwarders. Certain cities, such as Houston, Seattle, Miami and Newark, are
known freight forwarding hubs, and addresses in those cities may be higher risk.

Keep in mind, a single datapoint is only one piece as you puzzle over the bigger
picture. Best practices include using all of the data available to assess the
risk for a specific transaction.

Given the usefulness of geolocation data provided by the IP address, it’s no
surprise that savvy fraudsters take evasive measures to hide their location. How
do they do that? We’ll discuss that in a future blog post on the topic of high
risk IP addresses.
