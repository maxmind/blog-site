---
title: "What Are minFraud Alerts And What Do I Do With Them?"
date: "2021-05-12"
category:
  - "Online Fraud Detection"
tag:
  - "Product Updates"
authors:
  - "Miguel Atienza"
---

We recently released a number of updates to our minFraud alerts functionality,
and we’d like to take the opportunity to explain how
[minFraud service](https://www.maxmind.com/en/solutions/minfraud-services)
customers can benefit from alerts.

## Recognizing fraud attacks in real-time

The [minFraud service](https://www.maxmind.com/en/solutions/minfraud-services)
is a real-time risk scoring API that adapts its scoring based on the stream of
transactions (and transaction feedback) submitted by thousands of businesses
world-wide. In some cases, transactions we initially scored as low-risk are
later found to be high-risk due to new and emerging risk signals, which come
from either your own transaction stream or the minFraud network at-large. We
built minFraud alerts to sound the alarm for these kinds of transactions.

## Alerts and re-scoring transactions

After initial scoring, we continue to monitor transactions with risk scores less
than or equal to 10 for another 24 hours. If we receive new information related
to these transactions that leads to a transaction having a re-calculated risk
score greater than or equal to 75, a minFraud Alert is sent out containing the
re-calculated risk score and a reason code.

You can receive alerts by email and/or webhook by configuring your
[minFraud alerts settings in your account portal \[login required\]](https://www.maxmind.com/en/accounts/current/minfraud/alerts/settings).

![Sample alerts from alert log.](/images/2021/05/sample-alerts-log.png)

Sample alerts from the minFraud alert log.

## What do I do with minFraud alerts?

A number of options are available to you based on the nature of your business.
First, you may wish to perform a deeper review of transactions tagged by alerts
to see whether you agree with the updated risk assessment. You may also choose
to perform additional verification on the related account/user. Reason codes
(described on the
[minFraud alert settings page](https://www.maxmind.com/en/accounts/current/minfraud/alerts/settings)),
which are included in the alert, provide additional insight on the re-scoring.

E-commerce businesses may have the option to stop or delay fulfillment and/or
refund the payment. Other types of businesses may opt to stop or delay payouts
or delivery of incentives, or take steps to limit the activities of the related
account/user.

---

If you have any questions about minFraud alerts or any feedback, please
[contact us](https://support.maxmind.com/hc/en-us/requests/new/).
