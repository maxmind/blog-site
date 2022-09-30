---
title: "E-commerce Fraud 101: Account Takeover"
date: "2017-08-16"
category:
  - "Online Fraud Detection"
tag:
  - "Account Takeover"
  - "eCommerce"
  - "Manual Review"
authors:
  - "Miguel Atienza"
---

In the battle against e-commerce fraud, it is incumbent upon online merchants to
know the enemy and the tactics they employ. When it comes to account takeover,
online merchants face the added challenge of recognizing a fraudster
masquerading as a valued and trusted customer.

In this blog post, we will provide you with information on what account takeover
is, and how to combat it.

## Account Takeover

As the term suggests, account takeover is a type of fraud attack where a
fraudster gains access to a good customer’s account. The takeover can occur in a
number of ways but one of the most common is when compromised information from a
data breach gets into the hands of a fraudster. Even if a fraudster doesn’t get
unhashed usernames and passwords, other sensitive information can potentially be
used for
[social engineering](<https://en.wikipedia.org/wiki/Social_engineering_(security)>)
or other exploits. Malware, such as a keylogger, or phishing scams are other
common ways for fraudsters to get a hold of the keys to the castle.

Having used stolen credentials to access an account, fraudsters can potentially
fly under the radar of several layers of fraud detection that online merchants
typically have in place. By using a trusted customer’s account (perhaps with
credit card information already stored), the fraudster can place unauthorized
orders or engage in other bad activities while appearing squeaky clean. As a
result, it is important to not let your guard down when it comes to this method
of attack. Account takeover is no small problem for online merchants, with
losses in 2016
[estimated to be $2.3 billion](https://www.javelinstrategy.com/press-release/identity-fraud-hits-record-high-154-million-us-victims-2016-16-percent-according-new).

## Friendly Fire?

Seeing as an account takeover scenario allows a fraudster to appear as a
legitimate customer, you may believe chargebacks initiated by the true
cardholder constitute friendly fraud. Friendly fraud refers to the filing of
illegitimate chargebacks by customers. The
[US Fair Credit Billing Act](https://www.consumer.ftc.gov/articles/0219-disputing-credit-card-charges)
(FCBA) allows cardholders to dispute credit card charges and file chargebacks to
get their money back only in disputes related to billing errors. This definition
includes unauthorized charges, double-billing, incorrect charge amounts, etc. In
cases of friendly fraud, the conditions for a legitimate chargeback are not met
but the merchant still incurs losses (e.g. lost merchandise, chargeback fines
and fees, time and resources disputing the chargeback).

If you confuse account takeover with friendly fraud, you may dispute a
chargeback only to find it is a legitimate chargeback after you’ve already spent
time and resources in the dispute process.

## What Do I Do?

Typical signs of account takeover include a change in email address, shipping
address and password, and perhaps a sudden change in buying patterns. Using
MaxMind’s minFraud service with Custom Inputs and Custom Rules can bolster your
capabilities in fighting account takeover. Implementing rules using inputs
related to recent account changes or buying pattern changes can help identify
orders that should be scrutinized more closely with manual review. Additionally,
IP, email, and device intelligence from the minFraud service provides you with
the tools and context to identify suspicious activity and make better decisions.
Below are some tips on detecting account takeover with the help of the minFraud
service.

- Implement the
  [Device Tracking Add On](https://www.maxmind.com/en/minfraud-device-tracking)
  to
  [evaluate the riskiness of an IP address](https://www.maxmind.com/en/explanation-of-minfraud-riskscore)
  making account changes or placing orders on your site
- Use [Custom Inputs](https://www.maxmind.com/en/minfraud-custom-inputs) and
  [Custom Rules](https://www.maxmind.com/en/minfraud-custom-rules) to flag
  potential account takeover scenarios. For example, you may define Custom
  Inputs for the number of days since the last email, password, and shipping
  address change, and manually review orders from accounts where those pieces of
  information were recently changed
- Check IP address distances, such as distance between IP location and
  billing/shipping/historical login locations
- Check for sudden pattern changes in the IP address or ISP used. For example, a
  customer who lives in Miami, FL who typically connects from Comcast cable in
  Miami suddenly changes to connecting from T-mobile in Bronx, NY
- Watch out for package rerouting scenarios where existing emails and addresses
  are used but where a fraudster is able to contact the shipping service and
  reroute or hold the package for pickup

---

To learn more about how our minFraud service can help you, please visit our
[website](https://www.maxmind.com/en/minfraud-services) or
[contact our sales team](https://www.maxmind.com/en/sales_contact).
