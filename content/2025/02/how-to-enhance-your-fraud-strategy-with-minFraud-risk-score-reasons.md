---
title: "Enhance your fraud strategy with risk score reasons | MaxMind"
heading: "How to enhance your fraud strategy with minFraud risk score reasons"
date: "2025-02-19"
images:
  - /images/2025/02/risk-score-reasons-jpg
category:
  - "Online Fraud Detection"
tag:
  - "Product Updates"
  - "Risk Scoring"
  - "Risk Score Reasons"
  - "minFraud"
authors:
  - "Miguel Atienza"
---

Fraud has always been a covert war between cybercriminals and fraud teams.

With the rise of GenAI and increased access to sophisticated tools, it has
unfortunately never been easier for bad actors to evolve and automate their
attack patterns—succeeding in committing fraud, when before their attempts may
have been repulsed by time-tested fraud prevention mechanisms.

Fraud teams must evolve as well, and equip themselves with critical fraud data
that allows them to prioritize continuous improvement. In short, they absolutely
must enhance their current fraud strategy to keep up with the (fraudulent)
Joneses.

However, this kind of evolution has its challenges. One particular challenge is
that the data and the methodology behind most fraud models are both often
concealed or poorly explained. This can cause serious issues when—not if—new
fraud risk patterns emerge and performance drops.

This realization, namely that most current fraud models are a blackbox, is what
inspired the MaxMind minFraud team to introduce risk score reasons.

## What are risk score reasons?

Risk score reasons are a set of data that provide users with specific and
understandable reasons for why a risk score is high or low.

Here is an example of a demo transaction that has been determined to be
high-risk.

![high risk demo](/images/2025/02//high-risk-demo.png)

We return a risk multiplier value in addition to a reason code and a
human-readable string. Multipliers greater than 1.5 (risk increaser) and less
than 0.66 (risk decreaser) are considered significant and lead to risk reason(s)
being present.

Only risk score reasons that change the risk score significantly for a given
transaction are returned. A list of current codes may be provided on request,
and more reason codes may be added in future.

## How to combat fraud with risk score reasons

Risk score reasons are a set of data that help fraud and risk professionals
understand risk patterns for individual transactions and for their overall
transaction stream, both at a point in time and over time. The detailed
information provided by risk score reasons intends to transform the traditional
blackbox process into a transparent one, giving fraud analysts insights into our
fraud signals at a granular level.

Fraud patterns change constantly. Risk score reasons allow customers to identify
which patterns are driving the scores and fine-tune specific aspects of their
fraud strategy accordingly, allowing them to build powerful fraud models that
continuously improve.

If you’re someone who values the ‘why’ behind fraud scoring, you’ll appreciate
the insights provided by risk score reasons.

## Case example #1

Aggregate risk score reasons allow for deeper investigation into the source of
fraud. In the real-life example below, a MaxMind minFraud customer was able to
isolate a pair of attacks based on the risk score reasons returned for
individual transactions within that time frame.

![case exammple #1](/images/2025/02/case-example-1.png)

In this image above, the yellow line is the average risk related to email
domains, and the spike indicates fraud attempted with fake email domains. The
purple line represents the average IP activity, and the spike indicates a high
velocity bot attack, with IP addresses exhibiting significant and concurrent
activity across the minFraud network.

![mean risk multiplier example](/images/2025/02//mean-risk-multiplier-example.png)

## Accessing risk score reasons

Risk score reasons are present in the API response for queries sent to the
minFraud Factors service, ideal to feed into your ML fraud models. For more
details, please see the
[technical documentation on our developer portal](https://dev.maxmind.com/minfraud/api-documentation/responses/#risk-score-reasons).

You can also manually view the risk score reasons for any individual transaction
on the Transaction Details page in the Admin portal. This option is available to
all tiers of the minFraud service.

Not yet a minFraud customer?
[Connect with one of our fraud experts](https://www.maxmind.com/en/solutions/fraud-prevention/connect-with-a-minfraud-expert)
to discuss how risk score reasons can support your use case(s).

## Recommended use cases for risk score reasons

Here are some suggestions for how risk score reasons can help you to enhance
your fraud strategy:

### Forensic investigation

If you question the accuracy of a score for any reason, the risk score reasons
can give you an understanding of what our model is doing. The multipliers give
you a sense of the relative magnitude of each reason, and how they impact the
overall score.

### Post-incident analysis

Take the mean multiplier of risk score reasons to get insight into what is
driving the score for a given snapshot of time. You can analyze a specific
target class, such as false negatives or false positives.

### Pattern analysis over time

Fraud patterns change constantly, so you can identify which patterns are driving
the scores and adjust specific aspects of your fraud strategy accordingly.

### Feature data for your risk models

Surface new features that add lift to your machine learning (ML) models with
over 30 data points that we consider high-signal for fraud and risk
applications.

## Case example #2

In the real-life example below, another minFraud customer was able to pinpoint
an increase in IP activity risk (purple spike) to a bot attack involving
anonymous IPs (yellow) which led to an increase in payment card declines.

![case exammple #2](/images/2025/02/case-example-2.png)

## Information sharing and its role in fraud detection

MaxMind is more than a fraud prevention tool; we are an active partner.

We strive for better performance and better outcomes for our customers, and we
know that the path to continuous improvement in performance is plain and simple,
yet often overlooked or underutilized.

That path is effective information sharing, which ranges from the breadth and
quality of inputs that you share with us to the machine-learning powered
predictions and data enrichment we provide to you. A secondary element is the
exchange of “truth” labels, i.e. whether a transaction is truly fraudulent or
not, and the greater context that customers feed back to us.

Cybercriminals have been known to share information with each other to
strengthen their attacks. Taking the same approach with your partners can help
you fight fraud more effectively and efficiently.
[Learn how to enhance your fraud strategy with minFraud risk score reasons](https://www.maxmind.com/en/solutions/fraud-prevention/connect-with-a-minfraud-expert).
