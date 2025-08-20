---
title: "Fraud detection accuracy: An analysis of data inputs that significantly improve risk scoring"
heading:
  "How choosing the right data inputs can significantly improve fraud detection accuracy"
description:
  "Using the PR-AUC metric, we investigate the contributions of various inputs on fraud detection accuracy to help provide more information for customers deciding which inputs to send to the minFraud API."
date: "2025-08-20"
headerImage: /images/2025/08/improve-fraud-detection-accuracy.png
category:
  - "Fraud and risk"
  tag:
  - "Fraud prevention"
  - "Fraud screening"
  - "Risk data"
  - "Risk scoring"
authors:
  - "Miguel Atienza"
---

## Introduction

Powered by evolving machine learning models and one of the largest global fraud
detection networks, minFraud<sup>U+00AE</sup> helps assess online transaction
data and improve fraud detection accuracy.

The built-in flexibility of the
[minFraud API](https://www.maxmind.com/en/solutions/fraud-prevention/for-platforms)
allows for a customizable approach to integrating robust risk scoring and data
enrichment into a variety of business applications.

This flexibility, however, means that our customers sometimes pass fewer than
the
[recommended minimum inputs for the minFraud service](https://support.maxmind.com/hc/en-us/articles/4407964824859-Pass-Inputs-to-minFraud#h_01GD1ECZX37JKW9DF69K5AXX7S).

Limiting the number of inputs sent to the minFraud API limits risk score
accuracy. As highlighted in our
[case study with crypto market leader Simplex](https://blog.maxmind.com/2021/08/simplex-uses-minfraud-data/),
more inputs enrich data outputs—and increase fraud detection accuracy.

The decision to limit inputs is usually due to implementation costs, including
the effort needed to ensure compliance with applicable data security and privacy
regulations (which MaxMind is
[deeply committed to](https://www.maxmind.com/en/company/commitment-to-security)).
To help provide a solution for businesses in such situations, we performed a
series of tests to determine the relative value of several minFraud inputs.

We undertook this analysis to provide a clear, data-forward evaluation of how
(and how much) various inputs contribute to fraud detection accuracy, helping
provide more information for customers who are considering which inputs to send
to the minFraud API.

## Methodology

At MaxMind, we use the
[Precision-Recall Area Under the Curve (PR-AUC) metric](https://coralogix.com/ai-blog/ultimate-guide-to-pr-auc-calculations-uses-and-limitations/)
to evaluate whether updates to our risk scoring models help separate fraud from
legitimate transactions.

The PR-AUC is a well-known measure of the performance of a machine learning
model. PR-AUC is especially useful in cases where the outcome of interest for a
prediction is rare, as is the case in fraud and risk detection contexts.

The PR-AUC metric reflects a model's ability to balance precision (how many of
the positive predictions are truly positive) and recall (how many true positives
were predicted as positive).
[See this article](https://towardsdatascience.com/precision-and-recall-88a3776c8007/)
for further information on precision and recall.

The metric examines the confusion matrix across the full range of possible risk
score thresholds. Higher PR-AUC values indicate better performance in fraud
detection accuracy, i.e. distinguishing fraudulent transactions from legitimate
ones.

## Fraud detection accuracy: minFraud vs. GeoIP<sup>U+00AE</sup>

Many of our customers choose to include our
[IP intelligence data](https://www.maxmind.com/en/geoip-anonymous-ip-database)
in their fraud and risk management models.

In particular, it’s common for enterprises to ingest proxy/VPN/anonymizer
detection signals as part of IP address assessment.

In the first part of our analysis, we benchmarked three risk indicators from
MaxMind data—the Anonymous IP flag, the IP risk score, and the minFraud overall
risk score—to predict chargebacks in a third-party payment fraud context.

Before we reveal the results, here are the three risk indicators in detail:

- **Anonymous IP flag** Available in our
  [GeoIP Anonymous IP database](https://www.maxmind.com/en/geoip-anonymous-ip-database),
  the
  [`is_anonymous` boolean flag](https://dev.maxmind.com/geoip/docs/web-services/responses/#schema--response--traits__is_anonymous)
  indicates whether we believe the IP address to be part of an anonymizing
  network, such as a proxy or VPN.

- **IP risk score** Available in the
  [minFraud API](https://www.maxmind.com/en/solutions/fraud-prevention/overview[),
  the
  [IP risk score](https://support.maxmind.com/hc/en-us/articles/30721692872603-IP-Risk-Score)
  goes beyond the Anonymous IP flag to report the relative riskiness of IPs,
  which includes risky IPs that are not flagged as anonymous.

- **minFraud risk score** Available in the
  [minFraud API](https://www.maxmind.com/en/solutions/fraud-prevention/overview),
  the
  [overall risk score](https://support.maxmind.com/hc/en-us/articles/4408382414235-Overall-Risk-Score)
  factors in the IP risk score and also incorporates real-time dynamic checks
  from a wide range of input data (i.e. attributes such as email, phone number,
  shipping address, IIN, and billing postal code).

For each risk indicator, we assessed its ability to distinguish chargeback
transactions from non-chargeback ones using PR-AUC.

Since fraud detection performance can vary significantly across businesses, we
computed the average PR-AUC across our customer base. To provide a meaningful
benchmark, we expressed performance relative to a random guessing model.

The final evaluation metric is the average percentage increase in PR-AUC
achieved by using the risk indicator compared to random guessing:

| **Risk indicator**  | **Chargeback account averaged PR-AUC vs random guessing** |
| ------------------- | --------------------------------------------------------- |
| is_anonymous        | +43%                                                      |
| IP risk score       | +125%                                                     |
| minFraud risk score | +300                                                      |

For predicting chargeback risk, the IP risk scoring model outperforms a simple
anonymizer check by about 3 times, while the multi-attribute risk scoring model
outperforms IP risk scoring by over 2 times (and outperforms the anonymous flag
by nearly 7 times).

## Digging deeper: Analyzing the impact of specific minFraud inputs

The previous analysis demonstrated how the minFraud risk score is the most
effective at chargeback fraud prevention. As previously mentioned, the minFraud
risk score is determined by a wide range of data inputs.

We now proceed to investigate the relative impact of the following data inputs:

- IP address
- email
- partial credit card (the first 6-8 digits and the last 2-4 digits)
- phone number
- billing address
- shipping address
- browser
- device
- order amount

The method used is similar to our initial minFraud vs. GeoIP analysis. For each
input, we compared minFraud risk score performance (measured by PR-AUC for
chargebacks vs. non-chargebacks) when the input is included versus when it’s
omitted.

After a transaction was scored, we removed a single input and then re-scored the
transaction to measure the difference in PR-AUC. The average PR-AUC gain from
including each input was calculated using the following formula:

`Account-averaged-PR-AUC / Account-averaged-PR-AUC-Without-input - 1`

As highlighted in the chart below, the IP address input contributed the most,
followed by email address and credit card—although all of the analyzed data
points had a positive impact when it came to correctly predicting chargebacks.

![Image shows the impact of the average PR-AUC increase vs. the minFraud input.](/images/2025/08/average-pr-auc-increase-minfraud-inputs.png)

## Conclusion

As this analysis shows, more input data enhances the risk model’s context,
allowing it to detect more fraud while reducing false positives.

While we recommend passing as many inputs as possible, our goal with this
analysis was to curate a “must-have” list of the most important inputs for the
minFraud model, especially helpful when only a limited number of inputs are
passed.

That said, there are other inputs that further increase lift.

We plan to analyze the impact of the event type input when scoring multi-event
flows, i.e. account creation, login, email change, password reset, etc. If you
want to know when we publish these findings,
[subscribe to our blog email notifications](https://comms.maxmind.com/maxmind-blog-subscription).

[Reach out to your customer success manager](mailto:customersuccess@maxmind.com)
if you’d like guidance on how to optimize your minFraud integration for your
specific situation.
