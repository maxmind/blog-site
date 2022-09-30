---
title: "Behind the Scenes: High Risk Shipping Addresses"
date: "2016-04-04"
category:
  - "Online Fraud Detection"
tag:
  - "eCommerce"
  - "Risk Data"
authors:
  - "Miguel Atienza"
---

Just like good customers, fraudsters must provide a shipping address in order to
receive merchandise. But fraudsters, who need to evade detection and efficiently
resell stolen goods, leave traces in the shipping addresses they use. The
minFraud Network collects data on shipping addresses and uses it to identify any
high risk shipping addresses associated with the transactions you submit for
review.

This blog post investigates some high risk shipping addresses known to MaxMind,
as well as provides some general fraud review tips for identifying them.

<!--lint disable no-emphasis-as-heading-->

**Where are the most high risk shipping addresses?**

Let’s take a look at the current top ten zip codes with the most high risk
shipping addresses, as identified by minFraud’s _shipForward_ \* data point, and
see what insight they provide.

As indicated on this map, all top ten zip codes are on the coast and near a
shipping port:

<iframe width="300" height="150" style="width: 100%; height: 300px;" src="https://blog.maxmind.com/wp-content/uploads/2016/03/map5.html"></iframe>

Six of the ten zip codes are in Miami, FL. In fact, 75% of the high risk
shipping addresses associated with these ten zip codes were in Miami, FL.

The location of these zip codes suggests that many of these high risk shipping
addresses are associated with freight forwarders. Freight forwarders are in a
position to receive multiple shipments, consolidate them, and ship them to other
countries. Of course, much freight forwarding represents legitimate traffic,
goods moving from manufacturer to market. But in many cases, freight forwarders
provide a convenient service for fraudsters moving stolen goods out of the
country.

Zooming in on a map, we can see that there are indeed a large number of freight
forwarders in the neighborhood of the risky Miami zip codes:

![Freight forwarders Miami](/images/2016/04/Freight-forwarders-Miami-e1459427863748.png)

**Tips for identifying high risk shipping addresses**

Shipping addresses associated with a freight forwarder often include an
apartment number or suite number consisting of five or more digits. This
provides the freight forwarder with necessary account information while
presenting to the merchant as something that appears to be a normal residential
address. As a result, we recommend you include apartment and suite numbers in
the data you submit with your minFraud Insights queries, as it adds to the data
for consideration in shipping address risk assessment.

Since a shipping address associated with a freight forwarder in and of itself is
not indicative of high risk, consider other factors:

- What are the billing and IP addresses associated with the order? As an
  example, it makes sense that an order placed in the USA but originating from
  Mexico might use a freight forwarder in the US to reach a final Mexican
  destination. On the other hand, it may be less obvious why a large order
  placed from Wisconsin is being shipped to a freight forwarder.
- What items are included in the order? Does the order include higher risk
  items, for example, electronics or luxury goods?
- What is the velocity around the shipping address? A large number of orders to
  the same shipping address may warrant additional scrutiny.
- What delivery speed is associated with the order? Those paying with a stolen
  credit card can afford overnight shipping. Fraudsters are looking to have the
  goods in hand as soon as possible and prior to the credit card being reported
  as stolen. Consider the cost of the delivery option in comparison to the cost
  of the item. If the cost of delivery is more than 50% of the purchase price,
  the likelihood of fraud is higher.
- Once an order has been placed, watch out for changes in shipping address or
  delivery type. Fraudsters have learned that merchants give extra scrutiny to
  orders placed to high risk shipping addresses or with overnight delivery. To
  remain under the radar, fraudsters may place an order and then follow up with
  customer service to change a shipping address or delivery option. Train your
  support representatives to keep an eye out for changes to orders which may
  reflect fraudulent activity.

The shipping address associated with an order provides clues to the risk
associated with a transaction. Leverage the data of the minFraud network to
identify high risk addresses, stop shipments to fraudsters, and prevent
chargebacks.

\* _The equivalent data point in minFraud Insights is
shipping_address/is_high_risk._
