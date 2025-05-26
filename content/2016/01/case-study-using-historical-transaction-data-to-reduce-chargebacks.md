---
title: "Case Study: Using Historical Transaction Data to Reduce Chargebacks"
date: "2016-01-04"
category:
  - "Fraud and risk"
  - "Case studies"
tag:
  - "Manual review"
  - "Risk data"
  - "Case studies"
authors:
  - "Miguel Atienza"
---

The new year has arrived. With transaction history from a busy holiday season on
hand, this is a great time to take a look your historical transactions with a
fresh and critical eye.

Reviewing your chargeback data to identify fraud patterns is a good way to get
started. In this month’s blog post, we provide a case study of an online penny
auction business, which improved their bottom line by doing just that.

Penny auctions, defined by their industry as “entertainment shopping,” sell
merchandise through a live, online, auction process. Customers buy bids to
participate. Auction winners hope to win the auction and pay less than retail
price. Losers risk spending money to bid and ending up empty-handed.

To mitigate risk and encourage auction participation, some penny auction sites
offer a “Buy it now” option. This provides all auction participants who didn’t
win the option to buy the item at the retail price, less the cost of the bids
placed.

After their first holiday season, the penny auction’s Director of Operations at
that time, Jenn Sessler, decided to take action against chargebacks. A recent
operational review had shown chargebacks as a significant expense, and Jenn
wanted to see what could be done to reduce them.

Her first step was to find an internal report that could help her identify
common scenarios leading to chargebacks. She decided to work with their daily
shipping report. “I was looking to see what we had shipped that we shouldn’t
have,” she said. “What questionable transactions had our fraud system missed?”

The company’s daily shipping report supplied their warehouse with a list of
customer orders placed in the last 24 hours. The report provided not only a
record of what was to be shipped, but also what the customer had paid for the
item, how they had purchased it (through an auction or via the Buy it now
feature), as well as the retail price of the item up for bid. She combined this
information with the company’s separate chargeback report and looked for
patterns.

Jenn observed, “During my investigation, I learned that, for those using the Buy
It Now option, where the Price Paid, (the retail price, less the credit for cost
of the bids placed by the customer in the auction they lost), was more than 95%
of the retail price, I was getting chargebacks.”

Having identified this pattern, Jenn took action. Prior to providing the
warehouse with the shipping list, Jenn looked for Buy It Now transactions with a
price paid of more than 95% of the retail price. Jenn used common Excel features
(sorting and formulas) to quickly scan the daily shipping report for these
transactions. On finding one, she reversed the authorization and canceled the
transaction. To prevent further fraud from this party, she blocked the email
address. If she found a number of similar transactions associated with the same
IP address, she blocked the IP address as well.

How could Jenn be sure that the transactions she was canceling were fraudulent
transactions? Jenn anticipated that legitimate customers would complain;
however, she never heard from anyone whose transactions were canceled for this
reason.

Jenn manually canceled transactions for four weeks to further confirm her theory
and process. Once she confirmed her theory was correct, Jenn created a custom
rule so that the company’s fraud system automatically rejected these
transactions without any manual review cycles.

<!--lint disable no-emphasis-as-heading-->

**Case Study Takeaway**

Take existing order reports and compare them to known fraud or chargeback data.
Look for patterns specific to your business. Combining your data from different
sources gives you insight into your own customers’ anticipated behaviors for
good transactions and fraudsters’ anticipated behavior for bad transactions.
Test your hypothesis and use your findings to refine and automate your fraud
detection practices - increase automation and decrease manual review, all while
maintaining a positive customer experiences for your legitimate customers.

[Jenn Sessler](https://www.maxmind.com/en/leadership) is currently MaxMind,
Inc.’s Director of Business Development.
