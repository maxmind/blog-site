---
title: "Case Study: Reducing Chargebacks Using the minFraud Service"
date: "2016-05-04"
category:
  - "Online Fraud Detection"
tag:
  - "Anonymizer and Proxy Detection"
  - "Case Studies"
  - "Ecommerce fraud detection"
  - "Risk Scoring"
authors:
  - "the team at MaxMind"
---

Thexyz, a Canadian company, provides a secure email service. This paid platform
gives customers an email address that is secure and private while keeping the
user experience ad-free.

Introducing the minFraud service had a dramatic effect on their chargeback rate.
Here’s their story.

As Thexyz ramped up their business, they noticed that fraud was impacting their
bottom line. “Fraud was becoming a problem we could not ignore with chargebacks
coming in on a daily basis,” said Tom Alexander, Sales Manager at Thexyz.

At the time, Thexyz had a simple order review process in place to approve new
subscription purchases. The payment processor provided an IP address in
association with each order. A fraud analyst checked to confirm that this IP
address was associated with a legitimate location in line with the billing
address used by the customer and, if they matched, the subscription order was
approved.

Despite these checks, some approved orders proved fraudulent. Although their
initial review process revealed that it was common to find IP address associated
with VPNs and proxies, some of these proxies represented legitimate business. As
a result,Thexyz was reluctant to exclude all orders associated with them.

Thexyz decided it was time to bring additional fraud detection tools in-house.
“We needed a tool that integrated easily with our existing WHMCS billing
software. We also wanted a simple and accurate fraud score at a price we could
afford, all while maintaining our positive customer user experience,” explained
Perry Toone, CEO at Thexyz.

MaxMind’s minFraud service fit the bill.

<!--lint disable no-emphasis-as-heading-->

**How did MaxMind help?**

Integrating the minFraud service with WHMCS had an immediate impact. Orders with
unacceptably high riskScores and proxyScores are now canceled automatically. In
other cases, Thexyz reviews minFraud information before manually canceling an
order and providing a refund, avoiding a chargeback.

In addition, using the minFraud service had a significant impact by reducing the
time analysts spent reviewing orders. Analysts have more time and data to
perform manual review on the orders that need it most.

This addressed fraud associated with initial subscription payment, but Thexyz
recognized a second point of vulnerability. This was at the time of account set
up, after the initial subscription purchase, when the customer created their
email address and provided other account details.

Since email is a subscription service, fraud detection practices must ensure
more than that the first payment is legitimate. Savvy fraudsters know to keep
the first interaction clean, showing their true hand in subsequent interactions.
This threatens the revenue associated with ongoing subscription payments.

As a result, Thexyz implemented an additional IP address check. They look to see
if the IP address used for payment matches that used for account set up. If
there is any change in the IP address, especially to one in a high-risk country,
Thexyz considers the account risky and may take action to prevent further
chargebacks.

With their implementation of the minFraud service, Thexyz saw an immediate
reduction in chargebacks. In the initial three months of using the minFraud
service, chargeback rates were reduced substantially, by 75%. In the first
months of 2016, the chargeback rate has been reduced even further, and now
stands at only about 12% of what it was a year ago.

“The minFraud service has given us the needed insight to make our online
ordering easy enough for customers and secure enough to protect ourselves from
fraud ,” said Perry.
