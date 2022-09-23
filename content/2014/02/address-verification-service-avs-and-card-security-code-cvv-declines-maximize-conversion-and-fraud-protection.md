---
title: '"AVS" and "CVV" Declines - Maximize Conversion AND Fraud Protection'
date: "2014-02-14"
category:
  - "Online Fraud Detection"
tag:
  - "Credit Card Fraud"
  - "eCommerce"
authors:
  - "The Team at MaxMind"
---

![img for blog](/images/2014/02/img-for-blog.jpg)

Welcome to our first installment of MaxMind’s Best Practices Blog Series!

In this post, we discuss using the minFraud Service in conjunction with your AVS
and CVV declined transactions in order to help you increase your conversion rate
and stop more fraud. **When are AVS and CVV checks performed?** The AVS and CVV
checks (more fully explained below) are usually done as part of a merchant’s
request for payment authorization from the issuing bank. For most merchants, the
request for payment authorization is done as soon as the transaction is
initiated and before risk assessment via the minFraud Service.

**What is an AVS Check?**
[Address Verification Service](https://en.wikipedia.org/wiki/Address_Verification_System)
checks (AVS) are performed by credit card associations and issuing banks
typically when you request authorization for a credit card purchase. AVS checks
work by comparing the numerical portion of the cardholder’s billing address
(street number and ZIP code) against information in the credit card issuing
bank’s databases. The AVS code returned will reflect a range of different
degrees of match. This check is useful because buyers who can provide the street
number and ZIP code on file with the issuing bank are more likely to be the
actual account holder. AVS is widely supported by Visa and MasterCard in the
USA, Canada and United Kingdom. American Express only supports AVS in the USA.

**What is a CVV check?** The
[card security code](https://en.wikipedia.org/wiki/Card_security_code) (CVV) is
a 3- or 4-digit number (not part of the credit card number) that appears on a
credit card. It is also typically checked when you request authorization for a
credit card payment. (Different names for the CVV might be CVV2, CVC2, or CID,
depending on the issuing bank.) Because the CVV appears only on the physical
card, verification of this number provides some assurance that the physical card
is in the possession of the buyer when they place a purchase.

**What to do with the AVS and CVV results?** Many issuing banks and gateway
providers, recommend that you simply reject all transactions where there is no
AVS or CVV match. However, mismatches may be the result of typographical errors
or failure of the issuing bank to support AVS or CVV checking.

Because of these cases, it is minFraud Service Best Practices recommendation to
submit AVS or CVV declined transactions to the minFraud Service for scoring and
fraud assessment. This allows you to increase opportunities to accept good
transactions thereby increasing sales and conversion.

**AVS and CVV Checks and Carding Attacks** In addition, submitting transactions
to the minFraud Service, which have received an AVS or CVV decline or mismatch
from the issuing bank, will help prevent carding attacks. A carding attack
occurs when a person attempts to test a list of stolen credit cards on your site
to check if they are valid. Fraudsters test credit cards on websites that have
real-time transaction processing. If the card is processed successfully, meaning
the merchant permitted the transaction to complete after an AVS or CVV check,
the fraudster knows that the card is still good. The item purchased is not
important and in fact doesn’t need to be a physical product at all, as web site
subscriptions, digital goods or charitable donations work well to test credit
cards. Transactions like these, which are small in value, avoid attracting the
card issuer’s attention.

If you only submit transactions to the minFraud Service that pass the issuing
bank’s AVS and CVV validations, you may miss recognizing such a carding attack.
The minFraud Service will identify the majority of these attacks through the use
of velocity checks, which compares factors such as cards, billing areas, or
email addresses per customer along with comparing other data points against our
minFraud network of over 500 million transactions a year.

**Using the minFraud Service to Avoid Chargebacks due to Card Testing or Carding
Attacks** Being able to identify card testing or carding attacks is particularly
important to merchants. Transactions which pass AVS or CVV verifications from
the issuing bank that are then passed through the minFraud Service may not
appear fraudulent or risky without the accompanying declined transaction data
associated with the full fraud attack. This may ultimately result in a
chargeback for the merchant.

Even though these carding attack transactions may be for nominal amounts,
issuing banks do not care about the dollar amount of chargebacks – they care
about your chargeback count or how many of your total transactions result in
chargebacks. In order to stay out of credit card company merchant fine programs
(and possible ultimate suspension of your ability to accept that credit card),
you need to be vigilant about all possible chargebacks regardless of value.

**Best Practices Recommendation** Get the most out of your use of the minFraud
Service today and make sure you submit all of your transactions for real-time
fraud analysis. The more input fields you pass to the minFraud Service, the more
accurate the riskScore will be.

To provide the AVS and CVV fields you must run the AVS and/or CVV checks before
calling the minFraud Service. For further information regarding implementing
additional minFraud Service inputs, please click
[here](https://dev.maxmind.com/minfraud/) for the minFraud Service Developer
Documentation.

If you have any questions about this minFraud Service Best Practices
recommendation and how your use of the minFraud Service can benefit by this Best
Practice, please let us know at <support@maxmind.com>.
