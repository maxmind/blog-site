---
title: "The impact of consumer privacy networks on geolocation, online security, 
and business tactics"
date: "2024-07-03"
images:
  - /images/2024/07/cpn_blog_post.jpg
category:
  - "Online Fraud Detection"
  - "IP Geolocation and Network Data"
tag:
  - "Anonymizer and Proxy Detection"
  - "Data Privacy"
  - "Geofiltering and Geofencing"
  - "IP Network Data"
authors:
  - "Christopher Luna"
---
In response to a growing appetite for privacy and security on the internet, 
major tech companies including Google, Apple, Microsoft, and Cloudflare now 
offer a new class of anonymizing networks administered by them and tied to a 
specific user account. 

We [first began identifying this class of IPs in 2022](https://blog.maxmind.com/2022/03/introducing-consumer-privacy-networks/)
and we refer to them as consumer privacy networks, or CPNs, to distinguish them 
from traditional proxies and VPNs. 

The consumer privacy networks most in play right now are Apple’s iCloud Private 
Relay and Google's variety of VPN-like offerings associated with Google One, 
Google Fi, and shortly the Chrome browser.

## How consumer privacy networks differ from traditional VPNs

Traditional VPNs typically anonymize all connections at the level of the 
operating system.

Consumer privacy networks protect traffic in a limited way: on special devices 
or browsers, and sometimes even specific websites. They have features built-in 
that control who can access the network, and how the network is used. These 
features include token-based authentication and session-stable IP addresses.

One thing to remember, however, is that IP addresses are not people.

A single IP address can be used by multiple people, sometimes over a very short 
period of time, as in the case of mobile networks. A user joins a mobile network 
for a brief period, ends their session, and the IP address is then passed off 
to someone else. 

>**Prefer watching instead of reading?** [Access our on-demand webinar on 
>consumer privacy networks.](https://get.maxmind.com/consumer-privacy-networks-on-demand-webinar?utm_campaign=CPN%20webinar&utm_source=blog&utm_medium=post)

The opposite is also true. People use multiple IP addresses, even in a single 
day. Take an employee who works remotely at a data company. He signs into his 
company’s secure servers using a business VPN and uses a company credit card to 
make authorized purchases. At lunch, he uses his personal Google Fi connection, 
which is secured with the Google VPN, to shop online and avoid getting targeted 
ads. In the evening, he signs into a shady VPN service he bought using 
untraceable cryptocurrency and participates in subversive discourse.

These three profiles are the same person—but to anyone in IP intelligence, he 
might as well be three different people, or rather, three different profiles. 
What we’ve described are profiles of networks and how they're used, rather than 
profiles of individuals themselves.

Profiling networks is, of course, an imperfect practice and one that always 
comes with various tradeoffs. On a topic as complex as IP intelligence, 
exceptions are the rule and there are always nuances to consider. 

## Adoption rates of consumer privacy networks 

We see the growing appetite for data privacy reflected in the adoption rate of 
consumer privacy networks. 

For much of 2023, consumer privacy networks accounted for less than 1% of all 
traffic when compared to traditional anonymizers (which accounted for 4% of all 
traffic). Towards the end of 2023, however, we saw the percentage increase to 
nearly 1.5%—a fairly significant growth. 

Apple’s iCloud Private Relay currently accounts for 94% of CPN traffic. This 
ratio is likely to change as Google rolls out CPN for the Chrome browser, which 
has a user base of billions. 

## Geolocating traditional anonymizer traffic 

Business VPNs provide a secure connection between an organization’s data and its 
employees. Typically, a business VPN user’s location is associated with the 
headquarters of the company or with one or more of its brick-and-mortars. The 
end user of a business VPN can be anywhere in the world, but their geolocation 
would still appear to be coming from a place associated with the company. 

Now, even though the end-user might be nowhere near where the network is 
located, it's still appropriate for many use cases to treat the geolocation as 
legitimate. 

Traditional proxies allow the user to arbitrarily select the location of the 
network they're using in order to bypass location-based limitations. This is the
 main draw for some users of anonymizers, that they can present as being 
 anywhere in the world. 

A common example is the user of a residential proxy who lives in Canada and 
wants to stream content from the United States. The user can simply route their 
connection through a server or a compromised desktop computer in the United 
States to access the content in question.

## Geolocating consumer privacy networks 

Geolocating consumer privacy networks is a bit different than geolocating 
business VPNs or traditional proxies. 

Unlike traditional anonymizers, consumer privacy networks do not allow for 
arbitrary geolocation selection by the end-user. CPN providers will blur the 
geolocation of the end-user, but the end-user won’t appear as if they were 
somewhere they’re not. 

Take, for example, a user located in Roxboro, North Carolina, United States. 
With a consumer privacy network, this user might have their geolocation grouped 
with a large population of other internet users in a wider area of North 
Carolina. If the user wanted additional privacy, they could be geolocated 
instead to a cluster of states on the East Coast. One level of privacy up, the 
location blurring could geolocate them to the United States, in the East Coast 
time zone. 

What a CPN user could not do, however, is choose to appear from the West Coast 
in the United States, or in Canada, or anywhere else. This means that while 
you’ll see a reduction in the geolocation precision for consumer privacy 
networks users, you won't see a deliberately false location.

Apple and Google both begin by geolocating the IP address of the user and then 
routing that user's connection to a network associated with an appropriately 
blurred geolocation. However, they each take a slightly different approach to 
geolocation blurring.

iCloud Private Relay blurs based on a limited resolution geohash. What this 
means is that the precision of the area that they blur to is about 800 square 
kilometers. The CPN user's actual location will be somewhere within this 800 
square kilometer radius. 

Private relay users also have an additional option for blurring if they want 
more anonymity, geolocating to only time zone and country level.

Google's consumer privacy networks geolocation is based on population density. 
Google approximates internet usage based on their search traffic and uses that 
data to create regions that contain about 1 million users each. They center each 
region around large population areas, allowing them to have regions of various 
sizes while still preserving a large enough pool of internet users in that 
region to ensure a level of anonymity.

From conversations with Google, we know these regions will attempt to respect 
state provincial boundaries. However, in areas with smaller, less populated 
states, it may be necessary to expand the region to preserve anonymity. 
Country-level boundaries, however, will always be respected. 

Given Apple and Google's routing procedures, we employ a trust-but-verify 
approach for geolocating consumer privacy networks. Both Apple and Google 
publish the geolocation of their networks under a publicly available geofeed 
which MaxMind consumes. 

We use the published location of these networks as a strong signal, but we weigh 
this signal against proprietary signals of our own regarding the end user's 
location.

For the most part, we see that these networks are in use where Apple and Google 
attest that they are. Occasionally, we do have strong signals that they are 
being used in other locations. In those circumstances, we make our own 
determination as to the best location for the network.

>Use our [GeoIP web services demo](https://www.maxmind.com/en/geoip-web-services-demo?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-9lzJga_HnWdqTZzffzaMYxzyAFRCNAsTJ5KY8q0Ttb0j6n_-wHrVbGxj9MQUaktpm-JLD0) 
>to preview how we identify consumer privacy networks. Enter the below IPs, 
>associated with iCloud Private Relay and Google One VPN in our services at the 
>time of publication:

><span style="color:orange">
>104.28.16.47
>162.120.128.0</span>
 
>Consumer privacy networks are identified as such under the ISP/Org column. We 
>also mark consumer privacy networks as such in our >user_type data, which does 
>not appear in our demo, but is available in the [GeoIP Insights web service](https://www.maxmind.com/en/geoip-api-web-services?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-9lzJga_HnWdqTZzffzaMYxzyAFRCNAsTJ5KY8q0Ttb0j6n_-wHrVbGxj9MQUaktpm-JLD0) and 
>the [GeoIP Enterprise database](https://www.maxmind.com/en/solutions/geoip2-enterprise-product-suite/enterprise-database?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-9lzJga_HnWdqTZzffzaMYxzyAFRCNAsTJ5KY8q0Ttb0j6n_-wHrVbGxj9MQUaktpm-JLD0).

One way to think about the geolocation challenge for consumer privacy networks 
is that geolocation is reliable but less precise. How you handle these networks 
will depend on your specific use case, i.e. what level of precision is relevant 
to your use case, and if you get it wrong, how big of an impact to your business 
is that? 

Dig further into consumer privacy networks. [Download our white paper analyzing 
the riskiness of CPNs](https://get.maxmind.com/analyzing-riskiness-of-consumer-privacy-networks-white-paper?utm_campaign=CPN%20white%20paper&utm_source=blog%20post)
