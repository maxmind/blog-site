---
title: "Using MaxMind GeoIP2 Databases with HAProxy Enterprise"
date: "2020-03-02"
category:
  - "IP Geolocation and Network Data"
tag:
  - "Case Studies"
  - "Geofiltering and Geofencing"
  - "Technical Tutorials"
authors:
  - "Miguel Atienza"
---

The MaxMind module for HAProxy Enterprise enables you to perform geolocation
lookups from a single point at the edge of your network allowing you to offload
this work from your backend servers. This native module integration lets you
analyze real-time traffic and assign GeoIP properties to requests as they pass
through your HAProxy Enterprise load balancer in order to make decisions on this
data. You can package the values up as HTTP request headers before the request
is proxied. The integration also allows GeoIP2 databases to be updated quickly
and seamlessly without the need for scripts across your application fleet.

[HAProxy Enterprise](https://www.haproxy.com/products/haproxy-enterprise-edition/)
combines HAProxy, the world's fastest and most widely used, open-source load
balancer, with enterprise-class features, services, and premium support. By
placing it at the edge of your network, you instantly gain access to improved
observability over the load placed upon your servers, whether there is any
suspicious client behavior, and how quickly your services are responding to
requests.

## Adding the GeoIP Module for HAProxy

HAProxy Enterprise provides the MaxMind module via your system's package
manager. Once you've added the HAProxy package repositories, you can use apt on
Ubuntu or yum on CentOS to install it. Check out the
[official documentation here](https://www.haproxy.com/haproxy-integrations/maxmind/)
(you will need subscriptions to the
[GeoIP2 databases](https://www.maxmind.com/en/geoip2-databases) to make use of
the integration).

Within your HAProxy configuration, you choose which GeoIP2 databases to query.
For example, the following snippet shows how to load the module and the GeoIP2
City and ISP databases:

```bash
global
module-path /opt/hapee-1.9/modules
module-load hapee-lb-maxmind.so
maxmind-load mlock_max 512000000 CITY /etc/hapee-1.9/GeoIP2-City.mmdb ISP /etc/hapee-1.9/GeoIP2-ISP.mmdb
```

HAProxy Enterprise makes it easy to keep these databases up to date. Use the
`maxmind-update` directive within the same section in order to fetch a given
update URL at a defined interval and replace the contents of the databases.
Here's an example:

```bash
maxmind-update url CITY http://localhost:8000/geoip/GeoIP2-City.mmdb url ISP http://localhost:8000/geoip/GeoIP2-ISP.mmdb
```

Then, you can inspect incoming IP addresses and look up their associated cities
and countries. Use the `http-request add-header` directive to add a custom HTTP
request header before the message is forwarded to your backend servers. Here's
an example:

```bash
listen www_proxy
bind :80
mode http
http-request add-header X-Country %[src,maxmind-lookup("CITY","country","iso_code")]
server s1 127.0.0.1:8080
```

The resulting request header will look like this: _X-Country: US_.

## Conclusion

In the guide, you learned about the integration between MaxMind's GeoIP2
databases and HAProxy Enterprise. You can use this to gain better insights about
your clients so that you can customize your site's content depending on their
location. Tailoring content based on geolocation data is a great way to optimize
advertisements, marketing copy, local events, and more. Being able to offload
this task to HAProxy makes it easy.
