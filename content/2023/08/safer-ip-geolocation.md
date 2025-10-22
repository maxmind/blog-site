---
title: "Safer IP geolocation with MaxMind"
date: "2023-08-09"
headerImage: "/images/2023/08/safer-ip-geolocation.webp"
category:
  - "News"
tag:
  - "Data privacy"
  - "Product updates"
authors:
  - "Christopher Luna"
---

People who understand the inherent limitation on precision for IP geolocation
know that you should never geolocate an IP address to a point on a map. That’s
why, at MaxMind, all of our products with geolocation data return a geolocation
area. Rather than a point on a map, our products contain a circle that can be
drawn onto a map using a center defined by latitude and longitude, along with an
accuracy radius.
[Learn more about the geolocation area data we provide, how it differs from a geolocation point, and how to use a geolocation area in your applications on our blog.](/2022/06/using-maxminds-accuracy-radius/)

While using a geolocation area is safer and more accurate than relying on a
point, we wanted to add an additional layer of protection. That’s why we
developed an internal tool called Safe Coordinates, which helps us map the
latitude and longitude we return for every IP address to points in physical
space that are not able to be associated with an individual person or household.

## Safe Coordinates

Safe Coordinates uses a combination of automated algorithms and human review to
locate geographic coordinates to the nearest body of water, public park, vacant
lot, or similarly obfuscated location. To date, we’ve mapped more than 400,000
locations to Safe Coordinates. As new homes and buildings are constructed, the
work of Safe Coordinates will continue.

![safe coordinates](/images/2023/08/Safe-Coordinates-in-Action.png)

_MaxMind employees review locations through the Safe Coordinates interface._

Safe Coordinates are present in all our IP geolocation databases, APIs, and
fraud prevention products and services.

## Why is it _safer_ to avoid associating IP geolocation with individuals and addresses?

Over the past decade, there have been a proliferation of privacy laws and
regulations around the world. While the GDPR (General Data Protection Regulation
of the European Union) is the most well-known, there are similar laws in many US
states, Brazil, China, and more. These regulations provide severe penalties for
the misuse of data related to individuals, including huge fines. You can learn
more about some best (and, in some cases, required) practices for dealing with
MaxMind’s geolocation data on our Knowledge Base and Developer Portal:

- [Keep geolocation databases up to date](https://support.maxmind.com/knowledge-base/articles/download-and-update-maxmind-databases#update-schedule)
- [Delete old geolocation data](https://support.maxmind.com/knowledge-base/articles/maintain-up-to-date-data)
- [Monitor our Privacy Exclusions API](https://dev.maxmind.com/geoip/privacy-exclusions-api)

Following good data handling practices may help reduce your risk of accidental
or intentional regulatory non-compliance, and Safe Coordinates is just one of
the ways that we work to make IP geolocation data safer.
