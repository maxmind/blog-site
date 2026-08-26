---
title: "What MaxMind chargeback data shows about residential proxies"
heading:
  "Hiding in plain sight: what chargeback data reveals about residential proxies"
description:
  "Read our expert analysis of residential proxies and other anonymized fraud
  methods + learn how to effectively detect fraudulent traffic with confidence
  scores."
summary:
  "Discover what chargeback data reveals about the growing threat of residential
  proxy fraud, and how to use confidence scoring to effectively detect
  anonymized traffic."
date: "2026-08-26"
headerImage: "/images/2026/08/residential-proxies-chargebacks.webp"
category:
  - "Anonymizer and proxy detection"
tag:
  - "Data privacy"
  - "Types of proxy"
  - "Residential proxy"
authors:
  - "Miguel Atienza"
popular: true
---

We examined transactions that
[minFraud](https://www.maxmind.com/en/solutions/fraud-prevention/overview)
clients reported back to us as chargebacks, and analyzed what share of the
fraud-coded ones showed signs of anonymization, and which kinds. Close to half
of chargebacks in our analysis were associated with some form of anonymizer,
versus roughly a fifth of ordinary transactions. The breakdown below tells you
which anonymization methods dominate confirmed card fraud, by how wide a margin,
and why the largest category is also the hardest to detect reliably.

## Residential proxies dominate the anonymized slice

Of the chargeback-reported transactions that were **anonymized**, at least 70%
traced to residential proxies. Put on the scale of all chargeback-reported
transactions, roughly one in three came from a residential proxy detected by
active probing versus roughly one in six ordinary transactions.

<figure>
  <figcaption>Residential proxies found by active probing account for about 32% of chargebacks against 16% of ordinary transactions, and most of that volume sits in the low-confidence band.</figcaption>
</figure>

What this means is that the method that looks most like legitimate traffic, and
also defeats geographic checks and static IP lists at the same time, accounts
for most of the anonymized fraud we see.

## What one in six ordinary transactions really means

A residential proxy showing up in one of every six ordinary transactions should
give you pause, and it's worth thinking about why that number is as high as it
is. Residential proxy detection doesn't only identify 'rented' living rooms. It
also picks up on shared infrastructure like
[carrier-grade NAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT), where many
unrelated people sit behind one address. Shared infrastructure can look like
proxy infrastructure from the outside, because in both cases traffic from many
different people originates from a single IP.

That distinction is what the confidence bands in Chart 1 separate. Most
residential proxy detections fall into the low-confidence band, which is where
we tag/identify shared infrastructure. A low-confidence detection is better read
as "many people use this address, and some of that traffic may be proxy traffic"
than as "this address is a proxy."

Those detections still carry risk, though. If they were mostly errors, they
would appear in chargebacks at roughly the same rate they appear in ordinary
transactions. Instead they appear about twice as often, and high-confidence
detections appear about three and a half times as often. Confidence therefore
tells you two things: how likely it is that a network is a proxy, and how much
fraud to expect from it. That is why these detections are more useful as
weighted inputs than as a single yes or no.

## Why simple, static IP lists are ineffective

Static IP lists work well against datacenter proxies, which sit at stable
addresses in known ranges. Residential proxies are a harder problem, because the
addresses they use are ordinary home connections that serve real customers both
before and after the proxy traffic passes through. Proxy networks also rotate
through millions of addresses, so an address rarely stays associated with abuse
long enough for a list to be useful. By the time a list reaches you, a good
portion of it is stale.

That leaves direct observation as the practical option: probing address space to
confirm that a proxy is actually running, and tracking how recently we saw it
operating.

There are two ways an IP picks up a residential proxy label in our data. Active
probing identifies individual residential IPs operating as proxies right now or
at some point in the recent past. The inference-based signal identifies
something different: IP ranges that major ISPs route as residential through
Bring Your Own IP programs, where traffic across the range looks like high-risk
infrastructure rather than household use. Because those changes happen at the
ASN level, the label describes a network rather than a single address.

Active probing accounts for far more of what you'll see in practice, covering
about a third of all chargeback-reported transactions against a fraction of a
percent for the inference-based signal. That makes it the one to build on first,
though the inference-based signal is still worth acting on as the transactions
it flags are about three and a half times more likely to be charged back than
average.

![residential proxy signals](/images/2026/08/res-proxy-signals.webp)

_Share of chargeback-reported transactions carrying each of our two residential
proxy signals. Active probing identifies individual residential IPs operating as
proxies. The inference-based signal identifies residential ranges routed through
Bring Your Own IP programs, applied at the ASN level. Probing covers far more
volume, though transactions associated with the inference-based signal flags are
about three and a half times more likely to be charged back than average._

## What we did about it

We've incorporated probe-based residential proxy risk directly into minFraud's
real-time IP risk scoring, so this signal now affects the risk score on
transactions you send us—without any integration change on your side. In our
model evaluations, probe-based residential proxy data improved precision-recall
performance (PR-AUC) by an estimated 1 to 2%, which in practice means catching
more fraud at the same false positive cost.

For clients who want the detections themselves, they're exposed in a new
residential sub-object under the anonymizer object in GeoIP Insights and
minFraud Insights and Factors: a 1-to-99 confidence score, the date the network
was last seen operating as a proxy, and the proxy provider's name. The
residential object can be present even when no other anonymizer field is
populated.

Residential proxy detection is probabilistic, so we publish a confidence score
rather than a flag. Detections range from proxies we've confirmed are currently
active down to addresses where the evidence is older or the infrastructure is
shared. The gap between those cases is wide enough to act on, since
high-confidence detections are close to twice as concentrated in chargebacks as
low-confidence ones. A high-confidence detection on a high-exposure transaction
is worth acting on directly. A low-confidence detection is better used as a few
points of added risk, or in a rule that only fires when something else
corroborates it.

## A note on method

Transactions were assigned to a single anonymization category each, in a fixed
order from most to least specific signal, so no transaction is counted twice and
subset signals (a named VPN provider, for instance) win over broader ones
(hosting). Residential proxy categories sat near the end of that order, which is
why we describe their share as a floor. Confidence bands follow our published
anonymizer confidence score: low is the band where networks are most likely to
be shared infrastructure and carries the greatest false positive risk, and high
is where networks are most likely to be actively operating proxies. The
"high-risk IP tag" covers IPs tagged as proxies in minFraud through inference
from risky activity observed across our network. The dataset covers
chargeback-reported transactions from minFraud clients from April to
mid-August 2026.
