---
title: "Using Custom Inputs to Refine Your Response to Fraud"
date: "2017-07-13"
category:
  - "Online Fraud Detection"
tag:
  - "Manual Review"
  - "Product Updates"
  - "Risk Data"
authors:
  - "The Team at MaxMind"
---

Online fraud is a complex, hard to detect, and constantly evolving type of crime
with serious business consequences. While many e-commerce merchants are
[looking for new ways](https://www.jazva.com/blog/ecommerce-trends-2017) to
engage with customers, fraudsters are also looking for new ways to exploit them.
In a way, every touchpoint you create - from buy online/pick up in store options
to social click-to-buy ads, mobile shopping to loyalty rewards programs - is
another opportunity for cybercriminals to bypass your fraud screening.

Fraudsters are clever. They will often make multiple attempts to infiltrate your
systems before being detected. To determine the most effective response to
stopping their ever-evolving tactics, you first have to look at what the
transactional evidence is telling you. And each transaction may require a
different analysis and approach.

## Introducing Custom Inputs

minFraud Score, minFraud Insights, and minFraud Factors customers can now use
Custom Inputs to create Custom Rules that are fine-tuned by YOU to identify
fraudulent activity in your specific business environment. Custom Inputs can be
used during review of transactional details in support of your minFraud queries
to help identify suspicious activities and prevent chargebacks, card association
fines, and false positives.

Custom Inputs can help you...

- Extend minFraud service features to capture data points specific to your
  experience with fraud
- Use data points you define to automatically accept, reject, or send
  transactions to manual review
- Enable review of custom data points in the context of minFraud service data
  points

We currently support Custom Inputs using the following data types: **string,
Boolean, number, and phone number**.

## Custom Inputs and Loyalty Program Fraud

Let’s consider how you can use Custom Inputs to help prevent a type of fraud
that’s becoming increasingly popular with cybercriminals:
[Loyalty Program Fraud.](https://www.digitaltransactions.net/magazine_articles/loyalty-and-fraud-how-to-keep-one-and-avoid-the-other/)

Loyalty programs are an excellent way to strengthen your relationship with
customers. In fact, loyalty programs in the U.S. alone
[achieved double-digit growth](https://www.colloquy.com/latest-news/u-s-customer-loyalty-program-memberships-reach-double-digit-growth-at-3-8-billion-2017-colloquy-loyalty-census-reports/)
(to 3.8 billion members) in 2017. Loyalty points can be spent like cash, making
them highly appealing to fraudsters. Data-profiling solutions that monitor
transactions for suspicious activities commonly linked to Loyalty Program Fraud
can help prevent that fraud from ever occurring in the first place.

Seeking transactional irregularities with loyalty programs, you can use Custom
Inputs to create Custom Rules that target unusual spending patterns, warehouse
timezones, different IP addresses, or any other data that may mean a fraudster
has hijacked your customer’s account.

For example, let’s imagine that you run a loyalty rewards program offering
Amazon gift cards for 10% off the regular price. In that scenario, customers can
apply up to $10 in loyalty rewards to the purchase of a $100 gift card in your
loyalty store. You may notice that someone is trying to buy those cards for less
than the full discounted price. That “someone” may in fact be a fraudster
attempting to use a stolen credit card number to purchase gift cards only
available in your loyalty program and which are easily resold and converted to
cash.

In order to purchase the highly desirable Amazon gift cards, a fraudster
acquires loyalty points on your site by making fraudulent purchases or makes a
purchase in your loyalty store without applying any loyalty rewards at all.
Simply put:

- Good customers buy Amazon gift cards from loyalty store with full discount
  ($100 gift card for $90 by applying $10 in loyalty rewards to the purchase)
- Fraudsters buy Amazon gift cards from loyalty store with less than full
  discount ($100 gift card for $98 or even full price for the gift cards.
  _Fraudsters don’t care what they pay for the gift cards because they are using
  stolen credit cards.)_

Creating a parameter “loyalty store price” using the “number” data type, you can
create a Custom Rule to manually review a purchase if the purchase price of the
gift card in your loyalty store is greater than the loyalty program’s maximum
discounted price. Your Custom Rule would look like this:
`If price (input) < loyalty store price (Custom Input), THEN manual review`. By
doing that, your fraud analyst can take a better look at the transaction,
reviewing it with additional intelligence returned by the minFraud Network, to
determine if the customer is actually a fraudster in disguise.

That’s not all. Keep in mind, you create your own Custom Inputs. So, you could
also pull from the intelligence within the minFraud service to create a Custom
Rule that reduces your manual review times by automatically resolving known high
risk transactions. Borrowing from the loyalty program example above, your Custom
Rule would be:
`If price (input) < loyalty store price (Custom Input) AND riskScore > 20, THEN reject`.

Those are just a few examples of how you can use Custom Inputs as part of your
fraud prevention strategy. You can create up to 24 Custom Inputs for use with
Custom Rules. With Custom Inputs fueling the creation of Custom Rules combined
with results from the minFraud Network, your risk analysis can stay ahead of
fraudsters.

---

To learn more about MaxMind’s Custom Inputs, Custom Rules, or our minFraud
services, simply
[click here](https://www.maxmind.com/en/minfraud-custom-inputs).
