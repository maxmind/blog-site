---
title: "minFraud services now support 8 digit IINs"
date: "2022-01-31"
images:
  - /images/minfraud.svg
category:
  - "Fraud and risk"
  - "News"
tag:
  - "Credit card fraud"
  - "Product updates"
authors:
  - "Christopher Luna"
---

For many years, the issuer of a credit card could be identified by the first 6
digits of the card number. Due to recent changes to the standards around credit
card numbers, the issuer identification number (IIN) can now be either 6 or 8
digits long.

Because the IIN can be 6 or 8 digits long, the input handling the last digits of
a credit card has been renamed from `last_4_digits` to `last_digits`, and will
accept 2 or 4 digits.

**These are non-breaking changes. Specifically, the old input name
`last_4_digits` will continue to function as an alias for the new input name,
`last_digits`.**

## 8 digit IINs and data handling of credit card numbers

Best practices for data handling include never collecting and storing more
personal, sensitive data than is necessary for your business. There are specific
regulations around the storage and processing of credit card numbers issued by
the Payment Card Industry (PCI). Depending on how you or your payment processor
handle credit card numbers, you may need to adjust your data storage and
processing practices to ensure those practices comply with PCI standards and any
other applicable laws or regulations.

The minFraud service supports compliance with PCI standards by processing only
the credit card data that is necessary to provide risk scoring and risk data. If
you send more credit card data than we need, the minFraud service will issue a
warning in its API response.

## Credit card data in the minFraud services

When you send credit card data to the minFraud services, we compare two inputs
to determine how much data we need to do risk analysis:

- `credit_card/issuer_id_number`
- `credit_card/last_digits`

First, we check to see whether the IIN that was sent can be identified as an 8
digit IIN. Even if you only send us 6 digits of an 8 digit IIN, our system will
detect and treat the IIN as 8 digits. If you send us 8 digits for the IIN and we
cannot identify it as an 8 digit IIN, our system will truncate the IIN to 6
digits, and the minFraud service will issue a warning in its API response.

If the IIN you send is identified as an 8 digit IIN, we check to see whether it
is permissible under PCI standards to collect 2 or 4 of the last digits of the
credit card number depending on the card network scheme. In rare cases, it is
not permissible to collect both the 8 digit IIN and the last 4 digits of the
credit card number. In these cases, we will truncate the last_digits input, only
accepting 2 of the digits, and the minFraud service will issue a warning in its
API response.

## How to handle the minFraud truncation warning

If you receive the minFraud truncation warning, it may indicate that the amount
of credit card data being sent to us does not comply with PCI standards.
Alternatively, it may be the case that you or your payment processor already
have other data handling safeguards in place that make our method of truncation
necessary only for our systems.

If you are concerned about these warnings, you should see whether the PCI
standard applies to your business, and look at the acceptable methods of data
handling set out by the PCI to ensure that you’re in compliance with the latest
standard.

**The truncation warning should not affect risk scoring. The minFraud Insights
and Factors services will still return risk data and risk scores associated with
the credit card, as long as a valid IIN can be detected in your input.**

## Read the documentation

You can find documentation about how many digits to send for the minFraud credit
card inputs in the API schema on our developer's portal:

- [`/credit_card/issuer_id_number`](https://dev.maxmind.com/minfraud/api-documentation/requests#schema--request--credit-card__issuer_id_number)
- [`/credit_card/last_digits`](https://dev.maxmind.com/minfraud/api-documentation/requests#schema--request--credit-card__last_digits)
