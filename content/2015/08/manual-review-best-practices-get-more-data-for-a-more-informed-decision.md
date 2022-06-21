---
title:
  "Manual Review Best Practices: Get More Data for a More Informed Decision"
date: "2015-08-31"
category:
  - "Online Fraud Detection"
tag:
  - "Risk Data"
  - "Risk Scoring"
authors:
  - "The Team at MaxMind"
---

Thus far, our Best Practices Series has discussed how you can use the data
provided by the minFraud service for better decision making during manual
review.

But actionable data from minFraud starts with the inputs you include with each
query.

The minFraud service requires that each query include the IP address associated
with the transaction at a minimum; as best practices, MaxMind recommends you
send as many data points as possible.

The more data points you provide, the better the riskScore and the more
information you make available to your fraud analysts as part of the manual
review process.

Prudent online merchants balance the need for collecting as much information as
possible against the shopping experience of the customer providing it. If the
order entry process is too onerous, customers may give up and abandon their
purchase. Experts advise that
[minimizing data entry](https://www.inc.com/dan-leberman/how-to-avoid-losing-4-trillion-to-abandoned-carts.html)
is one of the best ways to improve conversions.

Customers provide an email address with just about any online transaction.
Including this as part of a minFraud query provides significant lift to the
riskScore. In order to assess email reputation and associated risk, the minFraud
service determines if the email has a history (good or bad) amongst the
merchants of the minFraud Network. The minFraud service can also look for signs
of high transaction velocity around that email address which may indicate higher
risk due to account takeover or other factors. This is then taken into account
for the riskScore calculation for the transaction.

Email address is good data to include because it is almost always available to
you. For other data points, it’s sometimes just not possible to capture
information you would like to have. For example, most customers are unwilling to
provide credit card information when signing up for a free trial. Additionally,
if you are selling digital goods, you may not be able to get a shipping address.

<!--lint disable no-emphasis-as-heading-->
**Expert Tips**

As you assess the data you have available to you, we encourage you to think
creatively about your business specifics and how you might use them to identify
fraud patterns. For example, consider one targeted solution we recommended to a
customer who sells electronic concert tickets: pre-populate the shipping address
on the order form with the address of the concert venue. You can then flag
orders for review where the geolocation of the IP address, the billing address
and the location of concert venue are disparate enough to cause concern.

In a similar fashion, those selling air or bus tickets can send minFraud the
departure airport or bus terminal as the shipping address. A ticket purchased
using a billing address in Florida with a departure airport in Chicago fails the
common sense test from a consumer point of view, and could be pulled for review.

Think about fraud scenarios common to your business and review the
[inputs available to you](https://dev.maxmind.com/minfraud/minfraud-score-and-insights-api-documentation/).
Prioritize the data you want to collect, and weigh the cost of increased
customer friction relative to the benefits of enhanced fraud detection. Provide
these inputs to the minFraud service for the best possible riskScore and help
your fraud analysts have the data they need to make informed decisions.
