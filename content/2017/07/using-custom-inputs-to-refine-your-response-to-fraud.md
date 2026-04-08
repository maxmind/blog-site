---
title: "Examples of minFraud custom inputs to help you detect more fraud"
heading: "Using custom inputs to refine your response to fraud"
description:
  "Learn how to create your own MaxMind minFraud custom inputs and how custom
  inputs can be used in your fraud prevention strategy together with custom
  rules."
summary:
  "Explore examples of how custom data fields can be used to improve risk
  scoring accuracy and fraud detection when used together with minFraud custom
  rules."
date: "2017-07-13"
lastmod: "2026-04-09"
headerImage: "/images/2017/07/using-custom-inputs-to-refine-your-response-to-fraud.webp"
category:
  - "Fraud and risk"
  - "Tutorials"
tag:
  - "Manual review"
  - "Risk scoring"
  - "Risk data"
authors:
  - "the team at MaxMind"
---

Online fraud is a complex, constantly evolving type of crime that has a
significant impact on revenue and major business consequences.

While eCommerce merchants are exploring new ways to provide customers with a
seamless and ultra-personalized experience, scammers are also innovating in
their own way. Every touchpoint you create—from buy online/pick-up-in-store
options to social click-to-buy ads, mobile shopping to loyalty rewards
programs—is another opportunity for cybercriminals to bypass your fraud
screening.

Scammers often make multiple attempts to infiltrate your systems. To determine
the most effective response to stopping their ever-evolving tactics, it’s
essential to analyze transactional data for clues on how to refine your
approach.

## Refine your custom rules with custom inputs

As a
[minFraud](https://www.maxmind.com/en/solutions/fraud-prevention/overview?utm_source=blog&utm_medium=article&utm_campaign=update)
customer, you can use custom inputs to create custom rules that are fine-tuned
by you to identify fraudulent activity in your specific business environment.
Custom inputs can be used during review of transactional details in support of
your minFraud queries to help identify suspicious activities and prevent
chargebacks, card association fines, and false positives.

Custom Inputs can help you:

- Extend minFraud service features to capture data points specific to your
  experience with fraud
- Use data points you define to automatically accept, reject, or send
  transactions to manual review
- Enable review of custom data points in the context of minFraud service data
  points

We currently support custom inputs using the following data types: string,
boolean, number, and phone number.

Custom inputs are available for all tiers of minFraud service: Score, Insights,
and Factors.

## Example: How custom inputs can help reduce loyalty program fraud

Let’s consider how you can use custom inputs to help prevent a common type of
fraud: Loyalty program fraud.

Loyalty programs are an excellent way to strengthen customer relationships and
gain repeat business, which is why most online retailers offer a type of loyalty
program.

You can reduce the possibility of loyalty program fraud by using custom inputs
to create custom rules that target activities commonly linked to loyalty program
fraud: unusual spending patterns, warehouse timezones, different IP addresses,
or any other data that may mean a scammer has taken over a customer’s account.

Let’s look at an example using the “earn points on purchases” model. In this
scenario, your customers can apply loyalty points to the purchase price of a
gift card so that instead of paying $100 for a gift card valued at $100, they
only pay $90.

Scammers will try to use stolen credit cards to either purchase enough on your
website to earn enough loyalty points for the discounted gift cards or attempt
to purchase the gift cards at the full (not discounted) price from your loyalty
store. Scammers won’t care what they pay for the gift cards because they’re
using stolen credit cards. To summarize:

- Genuine customers buy gift cards from your loyalty store with full discount
  ($100 gift card for $90 by applying $10 in loyalty rewards to the purchase).
- Scammers buy gift cards from your loyalty store at a less-than-full discount
  ($100 gift card for $95, $98, or even $100).

By creating a custom input “loyalty store price” using the `number` data type,
you can create a custom rule to manually review a purchase if the purchase price
of the gift card in your loyalty store is greater than the loyalty program’s
maximum discounted price. Your custom rule would look like this:
`If price (input) < loyalty store price (Custom Input), THEN manual review`. By
creating this custom rule, your fraud analyst can take a better look at the
transaction, reviewing it with additional intelligence returned by the minFraud
network, to determine if the customer is actually a scammer.

You can also create a custom rule to help reduce your manual review efforts by
automatically resolving known high-risk transactions. Borrowing from the loyalty
program example above, your custom rule would be:
`If price (input) < loyalty store price (Custom Input) AND riskScore > 20, THEN reject`.

This is, of course, just one example of how you can use custom inputs. You can
also leverage your own blocklists by creating custom inputs of greylists,
blacklisted, or whitelisted data. You then create a custom rule that confirms
whether a scammer alias, email address, email domain, phone number, shipping
address etc. is on a specific blocklist. MaxMind does not have direct access to
your blocklist details, and no one on our side can view the data contained
within your blocklist.

To reduce money laundering attempts, you can also create a daily cap
(transaction limit) as a custom input to help you limit the total amount of
money you can settle as a business within a 24-hour period.

You can also add promotional codes as custom inputs and use them as part of
custom rules to help triage orders and better identify potential fraud.

You can create up to 100 custom inputs for use with custom rules.
[Learn more about custom inputs](https://support.maxmind.com/knowledge-base/articles/use-custom-inputs-minfraud?utm_source=blog&utm_medium=article&utm_campaign=update)
on the MaxMind Knowledge Base.

If you’re not already using
[minFraud](https://www.maxmind.com/en/request-service-trial?utm_source=blog&utm_medium=article&utm_campaign=update)
as part of your fraud detection strategy, learn more or try minFraud for free on
the MaxMind website.
