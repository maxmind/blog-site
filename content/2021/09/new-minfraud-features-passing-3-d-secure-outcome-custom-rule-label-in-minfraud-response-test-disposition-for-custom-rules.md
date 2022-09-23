---
title:
  "New minFraud features: passing 3-D Secure outcome, custom rule label in
  minFraud response, “test” disposition for custom rules"
date: "2021-09-03"
category:
  - "Online Fraud Detection"
tag:
  - "Credit Card Fraud"
  - "Manual Review"
  - "Product Updates"
authors:
  - "Christopher Luna"
---

We’re excited to share a couple of new features that we recently added to our
[minFraud service client APIs](https://dev.maxmind.com/minfraud/api-documentation?lang=en#api-clients).

## Passing 3-D Secure Outcomes

You can now send us whether the outcome of
[3-D Secure verification](https://en.wikipedia.org/wiki/3-D_Secure) (e.g.
Safekey, SecureCode, Verified by Visa) was successful. Sharing this data will
help improve your risk scoring by providing our scoring model with positive
feedback.

This new input is present in the
[Credit Card request object](https://dev.maxmind.com/minfraud/api-documentation/requests?lang=en#schema--request--credit-card__was_3d_secure_successful)
(links to our developer documentation).

## Receiving Custom Rule Labels in the minFraud Response

You now receive the custom rule label (the name you set for a rule) for minFraud
transactions which were affected by a rule. This will allow you to better
fine-tune the workflows you may have for specific types of transactions.

This new output is present in the
[Disposition response object](https://dev.maxmind.com/minfraud/api-documentation/responses?lang=en#schema--response--disposition__rule_label)
(links to our developer documentation). You can read more about
[minFraud custom rules here](https://support.maxmind.com/hc/en-us/articles/4408801942811-Use-Custom-Rules-and-Dispositions).

## A ‘Test’ Disposition

You can now set a rule disposition action to “test” on top of the existing
“accept”, “reject”, and “manual review” actions. This additional disposition
action can be used to separate transactions for rules which you are interested
in actively testing without affecting your existing workflows.

For example, assume you have custom rules A, B, C that trigger accept, reject,
and manual review workflows respectively in your production system. If you would
like to observe the effect of a new custom rule D for some period of time before
full use in production, you may choose to set its disposition action to “test”
as to not interfere with existing production workflows. This new value is
present in the
[Disposition response object in the `/action/` output](https://dev.maxmind.com/minfraud/api-documentation/responses?lang=en#schema--response--disposition__action)
(links to our developer documentation). You can read more about
[minFraud custom rules here](https://support.maxmind.com/hc/en-us/articles/4408801942811-Use-Custom-Rules-and-Dispositions).
