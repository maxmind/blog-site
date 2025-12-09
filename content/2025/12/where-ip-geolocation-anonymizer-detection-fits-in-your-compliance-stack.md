---
title:
  "IP geolocation & anonymizer detection: Key filters for your compliance stack"
heading: "Leveraging IP Intelligence in your compliance data stack"
description:
  "Learn how to leverage IP intelligence as a scalable, low-friction front line
  in your compliance stack to reduce risk, cut costs, and move to a more
  effective, risk-based screening approach."
summary:
  "Reserve premium verification for high-risk traffic. Learn how IP intelligence
  can enable a risk-based screening for compliance use cases."
date: "2025-12-09"
headerImage: /images/2025/12/where-ip-geolocation-anonymizer-detection-fits-in-your-compliance-stack.webp
category:
  - "IP intelligence"
tag:
  - "IP network data"
  - "IP geolocation accuracy"
authors:
  - "Christopher Luna"
---

We continue to hear a similar story: regulatory pressure and the cost of
non-compliance is increasing, forcing businesses to adapt extremely fast and
search for effective ways to optimize their compliance toolsets. Even for
established enterprises, the risk of doing business with sanctioned entities or
serving regulated content to a prohibited audience is becoming a major issue.
Robust compliance solutions protect your business, but this protection comes at
a cost—increased operational burdens and loss of revenue due to additional
friction for end users. IP intelligence can be a core part of these solutions,
reducing friction in the vast majority of cases and providing valuable insights
that you can leverage when an interaction looks risky. While IP intelligence
can’t replace sophisticated verification methods alone, it acts as a front line
in your workflows, providing a fast, non-invasive, scalable filter that delivers
outsized value for the cost and helps optimize your compliance stack as a whole.

### Uniform screening practices frustrate users and impact revenue

Many organizations apply the same rigorous verification processes to all user
interaction, which sometimes means a returning customer's login from a
high-confidence location receives the same level of scrutiny as a new account
connecting through an anonymizer.

A one-size-fits-all approach can create several challenges:

- **Performance issues**: Fully comprehensive verification adds latency and
  friction for all users, disrupting the user experience and reducing conversion
  rates.
- **Privacy concerns**: Consumers are increasingly privacy conscious, and are
  more and more hesitant to provide precise location data (e.g. GPS -sourced
  from their phone).
- **Resource constraints**: Compliance teams waste valuable time on cases where
  location confidence is high and network intelligence shows a low-risk
  connection. Such cases could be automated, freeing up resources for critical,
  high-risk investigations.
- **Compounding costs**: Applying high-friction validation, verification, or
  authentication to all traffic, regardless of risk, often means businesses are
  spending more than necessary. Without an approach informed by high quality IP
  intelligence data, companies have to pay to screen high-risk traffic they know
  will fail verification and also pay for advanced verifications on low-risk
  users.

## An example of IP intelligence filters:

Let’s look at an example using the fictional business Kryptonite Financial.
Kryptonite Financial (KF) is a US-based financial institution that must block
transactions from sanctioned countries such as Russia and North Korea due to
OFAC regulations. KF are highly risk-averse and have opted to take the most
proactive approach to blocking non-compliant traffic/risky traffic.

When an IP address is run through MaxMind, a number of different data fields are
returned that provide risk context to Kryptonite Financial’s automated
compliance system. They’ve designed and implemented IP intelligence as a front
line traffic filter using the following rules:

**1. Detect and block all anonymized traffic** `is_anonymous = false`

The risk with anonymized traffic is that the geolocation data it provides is
that of the anonymizing host—the server or compromised personal computer being
used as a proxy—rather than the location of the end user themselves. Allowing
connections from a potential anonymizer means that you don’t know where the user
is, exposing you to traffic from sanctioned countries and putting your
compliance at risk. The amount of anonymized traffic a site receives can vary
significantly. We’ve seen rates of anonymized traffic as low as 0.2% and as high
as 35%. It depends largely on industry, geography and the type of business you
operate.

**Decision**: continue filtering **Rationale**: Despite the traffic not being
associated with an anonymizer, KF’s system continues to evaluate inputs to
ensure regulatory compliance.

**2. Detect and block traffic from countries associated with OFAC sanctions**
`Country = Ukraine`

Kryptonite Financial’s internal compliance team has created a list of countries
they use to determine which traffic to block. Kryptonite Financial has flagged
traffic associated with Ukraine, triggering the evaluation of additional inputs.

Decision: <mark>continue filtering</mark> Rationale: While Ukraine is not
explicitly listed as a sanctioned country, there are regions of the Ukraine that
are occupied by Russia or whose claims are currently contested. Kryptonite
Financial’s compliance team has triggered the evaluation of additional inputs to
avoid doing business with people operating in those regions.

**3. Evaluate geolocation subdivision** `Subdivision = Dnipropetrovsk Oblast`

ISO subdivisions are an internationally recognized standard for dividing
countries into regions of different scales. In most countries, level 1
subdivisions are typically provinces, like Fujian or Guangdong in China. In the
United States these are states like California. In our Kryptonite Financial
example, the subdivision data returns Dnipropetrovsk, an oblast (province) in
Ukraine.

Decision: <mark>continue filtering</mark> Rationale: Since Dnipropetrovsk
borders Donesk, a region of Ukraine currently occupied by Russia and subject to
sanctions, additional data is needed to determine whether or not to serve this
traffic.

**4. Evaluate subdivision confidence** `Subdivision_confidence = 40`

This field returns a value between 0-100 indicating the confidence with which
MaxMind has geolocated the subdivision. A lower number indicates lower
confidence. In our example, the value returned is 40.

Decision: <mark>continue filtering</mark> Rationale: The subdivision level data
for this IP address has relatively low confidence. Kryptonite. Financial would
need more information In order to determine if they should block or serve this
traffic.

**5. Evaluate user type** `User_type = cellular`

Decision: <mark style="background-color: lightred">block traffic</mark> Because
the IP address is associated with a cellular network, it could be in use by
people on the move or across the border of the province in a potentially
sanctioned region. Considering that Kryptonite Financial is concerned with
Russian actors attempting financial transactions through cell networks, their
system would and should block this traffic.

## Best practice: IP Intelligence is foundational for risk-based compliance

By nature of its scalability, outsized value, and negligible latency, IP
intelligence data can be an effective first line filer to help organizations
better allocate their compliance resources. By identifying potential risk
signals upfront, organizations can apply more appropriate levels of verification
to each interaction, ensuring that higher-risk users are blocked or receive
thorough scrutiny while low-risk users experience a more seamless process. The
example provided above is just one of many potential implementations. There are
many other ways you can integrate IP intelligence filters depending on your risk
tolerance and operational needs:

**1. High-risk blocking:** Block traffic identified as high risk based on IP
intelligence data. Direct lower-risk traffic through a secondary screening
process utilizing GPS-data sourced from the user’s device.

**2. Tiered verification:** Route all traffic for secondary screening, but
adjust the level of verification based on the risk profile (e.g. simpler
verification for low-risk traffic, more comprehensive for high-risk traffic).

**3. Targeted verification:** Allow clean, verifiable traffic direct access,
reserving more intensive verification for users exhibiting specific risk
signals.

### What data fields do you need?

The best data for your application hinges on a variety of factors including your
budget and tolerance for false positives. In the absence of a comprehensive risk
score, we recommend at minimum a combination of proxy detection and geolocation
data that contains at least the ISO subdivision.

### Why proxy detection is critical

Proxy detection is critical for compliance applications. If you choose to rely
on IP geolocation data alone, you will inevitably permit traffic from users who
are obscuring or spoofing their location with an anonymizer—which undermines
your efforts to reliably block traffic from users in specific regions. That
said, not all proxies carry the same risk, and a blanket-blocking of all
anonymized traffic may not be the most effective strategy. A nuanced approach is
often key to balancing security with user experience.

### Why country level data alone is insufficient

As shown through the above example, subdivision and city level data can help to
minimize the risk of OFAC non-compliance. It’s worth keeping in mind that even
[OFAC does not maintain a list of blocked countries](https://ofac.treasury.gov/sanctions-programs-and-country-information/where-is-ofacs-country-list-what-countries-do-i-need-to-worry-about-in-terms-of-us-sanctions#:~:text=Due%20to%20the%20diversity%20among,at%20our%20Frequently%20Asked%20Questions),
“due to the diversity among sanctions” as there are a number of politically
contested regions also affected. In disputed regions, MaxMind makes its own
determinations as to which country the region should be assigned to, and does
not optimize this country assignment for any particular use case or political
position. It is for this reason that we encourage you to generate your own lists
of countries, subdivisions, and cities where you cannot do business, and not to
rely on any underlying assumptions about whose political claims will be
preferred for country labeling purposes. It’s important to consistently revise
your list to minimize the risks of accidental non-compliance due to shifting
geographic boundaries or changes in sanctioned regions.

## Bottom line

IP intelligence is not a complete compliance solution, it’s a core strategic
component that enhances its efficiency. With real-time risk signals at the
outset of each interaction, you can route traffic appropriately and allocate
verification resources appropriately. For businesses processing a high volume of
verifications, this approach can lead to significant cost-savings, improved
performance, and stronger regulatory documentation. The value lies in treating
IP intelligence as foundational infrastructure, enabling more costly and
friction-inducing tools to operate more intelligently and effectively.

To learn more about how MaxMind’s data can support your compliance stack,
[connect with one of our experts today](https://www.maxmind.com/en/solutions/compliance#connect-with-a-geoip-expert).
