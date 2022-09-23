---
title: "Using MaxMind’s accuracy radius"
date: "2022-06-06"
featuredImage: /images/2022/06/accuracy-radius.png
isFeatured: true
category:
  - "IP Geolocation and Network Data"
tag:
  - "Data Privacy"
  - "eCommerce"
  - "Geofiltering and Geofencing"
  - "IP Geolocation Accuracy"
  - "Technical Tutorials"
authors:
  - "Christopher Luna"
---

As more of the world takes a privacy-focused approach to web use, IP geolocation
fills an essential niche in customer analytics. It’s fast, it’s non-invasive and
doesn’t require the customer to opt-in, and it works for most IP addresses. If
you want to get the most value out of IP geolocation, however, you have to
understand how to use the data effectively.

The mappable geolocation area data included in MaxMind’s geolocation products
and services is composed of geolocation coordinates (latitude and longitude),
and an accuracy radius (in kilometers). This mappable area is our most precise
geolocation data because, as discussed in our previous post on accuracy, IP
[geolocation isn’t precise enough to put a pin on a map](/2021/07/how-accurate-is-ip-geolocation).
Some geolocation technology (for example, GPS) may return a point, or a point
with such a small accuracy radius that it can easily be treated as a point, but
IP geolocation is different.

When doing data analysis and building applications, working with geolocation
area data is different than working with a geolocation point. If we assume we
are locating IP addresses down to a narrow, fixed location, when in fact we are
locating them down to a probable area of 80 square kilometers or more, we may
build applications that don’t perform their intended task.

This post will look at how to use MaxMind’s mappable IP geolocation area
alongside other tools by looking at an example use case. Below, you will find:

- an overview of our example use case,
- a discussion of other tools that should be used alongside IP geolocation
  lookups,
- and how to work with MaxMind’s mappable IP geolocation area (accuracy radius)
  instead of a geolocation point.

This guide will cover how data may be used, but will not cover a technical
integration in any specific programming language.
[For help with integration, see the resources on our developer portal.](https://dev.maxmind.com/geoip/geolocate-an-ip?lang=en)

For our example, we’ll consider a simple localization use case.

## Example use case

We would like to make an application for a chain store with many retail branches
across the country. The store wants to provide its customers with in-store
shopping, curbside pickup, and delivery options. The customer is likely to
constrain their choices based on their location, perhaps considering curbside
pickup or in-store shopping for nearby locations. Other customers may prefer
delivery in all cases. To make matters more complicated, different products are
only available in certain locations, or are only available to ship. You want to
build an application that will make it easy for customers to select the best
localization options as quickly as possible, ensuring that they don’t search for
products that aren’t available to them.

One part of this application will use a customer’s geolocation to suggest the
best local branch(es) to a customer, and automatically filter their search
results based on that assumption.

![A map of part of Massachussetts with several retail locations
marked.](/images/2022/06/map-with-stores.png)

Our application should leverage available customer preference and geolocation
data to give the prospective customer the best possible experience in the least
intrusive way.

## IP geolocation is one among many tools

When we say “in the least intrusive way,” that’s because IP geolocation may be
only one of many sources of information we could use to deliver localized
content to our prospective customer.

Before doing an IP geolocation look up, for example, we might see if we have any
kind of record of dealing with this customer, for example, a cookie from a
previous session in which the customer identified their localization
preferences. If you can tie the browser or IP address to a previous record in
your own database, you may not need to do IP geolocation at all.

If you try IP geolocation and it doesn’t yield the best results, you might try
opt-in HTML5 geolocation, or prompting customers to identify their localization
preferences manually.

![A flow chart, which reads "Do you have information about the customer's
geolocation? A returning customer may have a cookie set on their browser, or may
have localization preferences set in their account. You may have recently done
geolocation on this IP address and have the results cached." This branches to
"Yes," which terminates, or "No," which proceeds to the next box in the flow
chart. This box reads, "Does IP geolocation give you enough information?
Depending on your use case and the specific IP address, IP geolocation may give
you enough information about the customer's likely location to provide them with
a localized experience without any friction." This branches to "Yes," which
terminates, or "No," which proceeds to the next box in the flow chart. This box
reads, "Prompt the customer to allow other geolocation methods. The customer can
opt-in to geolocation through their mobile phone GPS, or they may simply select
the nearest store from a list of options."](/images/2022/06/flow-chart.png)

Among these different options, IP geolocation fills a valuable niche. It’s
non-intrusive, it’s fast, it works for many IP addresses, and it doesn’t require
the customer to opt-in. This means you don’t have to interrupt the user
experience.

## Using mappable areas

One of the most important things to understand about MaxMind’s geolocation data
when building applications is that it returns a mappable **area**, not a point.
It’s true that MaxMind products return a point, defined by latitude and
longitude, for IP addresses, but the point is only half of the data. We also
return an accuracy radius. Together, these three data points define a mappable
circle in which we think the IP address is likely to be located.

Why does this matter? Let’s look at our use case to see how we would solve the
problem of localizing a customer’s content using a mappable point, versus the
mappable areas in MaxMind products and services.

### Treating geolocation like a point

MaxMind data returns a mappable area, but if we forget about that or treat the
data as if it’s a point anyway, we may not always get the best results.

When a new prospective customer visits our website, we check their IP
geolocation. The GeoIP City Plus web service returns the geolocation coordinates
42.1293, -72.7522.

![The same map of Massachussetts with store branches marked, as above, but this
time there is also an IP geolocation point labeled on the map. The IP
geolocation point on the map is located near a city named Springfield. There are
store branches marked in Chicopee, near Springfield, but also further away to
the northwest, northeast, and south.](/images/2022/06/map-with-point.png)

It also returns an accuracy radius of 50 kilometers, but we may not pay too much
attention to that if we are thinking about the data as a point. We might assume
that the customer is in a population center near the geographical coordinates,
probably Springfield. We don’t really know where the customer is, but maybe this
is what we expect:

![The same map of Massachussetts with store branches and IP geolocation point
marked, as above, but this time there is also a marker for the actual customer
location. The actual customer location marker is near the IP geolocation point
marker, in the heart of Springfield, the largest town near the IP geolocation
point.](/images/2022/06/map-with-point-and-location.png)

Using these assumptions, we build our application to select the closest store to
the geolocation coordinates, which in this case is obviously the Chicopee store.

### Working with mappable areas instead of points

As was discussed above, GeoIP location data is not a point, but a mappable area,
a circle on the globe. We believe that the IP address is more likely than not to
be inside of this mappable area. However, it is no more likely to be at the
center of the mappable area (the point on the map), than it is to be anywhere
else within the circle.

If we build our application with the accuracy radius in mind from the beginning,
we’ll have something that looks like this:

![This map has the store branches marked, but instead of an IP geolocation point
there is a circle with a radius of 50 kilometers marked on the map, centered
around the IP geolocation point. Two different store branches fall inside of
this circle, the one in Chicopee mentioned above, but also a store nearly 50
kilometers to the south, located in Hartford. There's also a store a little
more than 50 kilometers to the north-west, in Pittsfield, just outside the IP
geolocation area.](/images/2022/06/map-with-area.png)

Using the latitude, longitude, and accuracy radius, we now have a better sense
of where this prospective customer might be. Instead of one specific store, we
may need to recommend several. We could build our application to give
prospective customers a choice between a select number of stores, cutting down
the time it takes to get the right localization.

We might be tempted to simply include all stores that are within the circle,
offering the options of Hartford and Chicopee. In most cases, this would work
out well:

![The same map as shown previously, with the store branches and IP geolocation
area marked. This time actual customer location is also marked. This time,
however, the actual customer location is marked far to the south of the IP
geolocation point, but still within the IP geolocation area. The mark is near
Hartford, one of the two stores enclosed in the IP geolocation
area.](/images/2022/06/map-with-area-and-location.png)

However, we should remember that the mappable area represents the area in which
we believe the IP address is likely to be located. We don’t know that the IP
address is more likely to be at the center of this circle than any other place
inside of it. For example:

![The same map as above, but now the actual customer location marker has been
moved to be almost 50 kilometers north-west of the IP geolocation point, near
the boundary of the IP geolocation area. Just outside the IP geolocation area,
the closest store to the customer is
Pittsfield.](/images/2022/06/map-with-area-and-another-location.png)

The customer may be located near the perimeter of the circle. The circle is also
only the area in which we believe the IP address is likely to be, so the
customer may be outside of the circle as well. Understanding this, we probably
want to build our application to include stores that are within an area similar
to the one provided by GeoIP, but with a larger radius to account for the
possibility that an IP address is near the perimeter or outside of the mappable
area.

### Learn more about IP geolocation

This guide has been provided as a basic overview of how and why to use mappable
geolocation areas rather than geolocation points in your applications. We
discussed a simple use case of localizing the online storefront for a brick and
mortar chain based on the prospective customer’s geolocation, but treating IP
geolocation as an area rather than a point has implications for many other
applications.

You can learn more about IP geolocation by reading:

- How accurate is IP geolocation data? on the MaxMind blog
- [Geolocation Accuracy](https://support.maxmind.com/hc/en-us/articles/4407630607131-Geolocation-Accuracy)
  on the MaxMind Knowledge Base
- [Documentation on mappable area data](https://support.maxmind.com/hc/en-us/articles/4414877149467-IP-Geolocation-Data#h_01FRRHZZP6RAYSNZTYE4MQ3MWY)
  on the MaxMind Knowledge Base
