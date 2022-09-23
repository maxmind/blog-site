---
title: "Why Should I Use the minFraud Service's ‘riskScore’ Instead of ‘score’?"
date: "2013-06-04"
category:
  - "Online Fraud Detection"
tag:
  - "Risk Scoring"
authors:
  - "The Team at MaxMind"
---

The ‘riskScore’ is the most actionable piece of data returned by MaxMind’s
minFraud service. The ‘riskScore’ simplifies the accept/reject/review decision
for online orders, helping merchants to prevent fraud and reduce time spent on
manual review. This blog post will explain why minFraud service users should use
the ‘riskScore’ instead of the ‘score’ to catch fraud.

Prior to February 2007, before the 'riskScore' was introduced, the only risk
estimation element the minFraud service returned was the ‘score’ value. The
‘score’ ranges from 0-10 and is calculated by a static risk model formula that
uses previously observed risk factors. This return value is deprecated and the
risk model behind it is no longer updated. Since 2007, the minFraud service has
returned the ‘riskScore’ value (ranging from 0.10 - 100), a replacement for the
‘score’. In the interest of backwards compatibility, the ‘score’ is still
returned to users using minFraud versions 1.0 - 1.2 in addition to a score
‘explanation’, which provides a reason for the particular ‘score’ returned.

There are a number of limitations in the ‘score’ and its formula that motivated
the development of the ‘riskScore’. First, the rapidly changing online fraud
landscape can outpace static fraud rules. That is, fraud patterns can change in
an instant and a risk model where there are only a handful of fixed fraud rules
that are only occasionally changed isn’t good enough for fraud _prevention_.
Second, with a published fraud formula, fraudsters essentially have a blueprint
of how to bypass a fraud detection system. With the sophistication of today’s
fraudster, spoofing enough elements to circumvent a static risk model is
relatively easy.

The ‘riskScore’ addresses these concerns to provide a significantly better risk
model to catch fraud. While it performs similar checks that were part of the
‘score’, the ‘riskScore’ is adaptive. Utilizing statistical methods and
supervised machine learning, the risk model behind the ‘riskScore’ adds a layer
of intelligence that is lacking in the ‘score’. It weighs various risk elements
differently instead of using fixed risk multipliers and also takes more inputs,
which allows for the analysis of more risk elements. In addition, the
‘riskScore’ takes into consideration past and current transactions across the
network of minFraud merchants in order to better recognize patterns of
fraudulent behavior and adapt accordingly. Lastly, the algorithms behind the
‘riskScore’ aren’t disclosed. To learn more about the ‘riskScore’, please see
our [website](https://www.maxmind.com/en/riskscore).

MaxMind is constantly improving the ‘riskScore’ model to catch more fraud and we
highly recommend that minFraud service users keep their
[minFraud versions](https://www.maxmind.com/en/minfraud_version) and
[APIs](https://dev.maxmind.com/minfraud/#Client_APIs-1) up to date, and use the
minFraud [chargeback reporting API](https://dev.maxmind.com/minfraud/chargeback)
in order to take advantage of this. To receive the ‘riskScore’, minFraud service
users will need to use at least minFraud version 1.1 (users with older minFraud
versions may also need to update their API).

_\*Beginning January 1, 2014, the ‘score’ and ‘explanation’ fields will no
longer be supported by MaxMind._
