---
title: "Why and how Quad9 relies on user type data and other GeoIP data"
heading: "How open DNS recursive service Quad9 uses MaxMind’s data to understand usage patterns and secure funding"
description: "DNS recursive service Quad9 uses MaxMind’s data to understand usage patterns and secure funding. Read our blog post for more details/inspiration."
date: "2025-03-25"
images:
  - /images/2025/03/quad9.png
category:
  - "IP Geolocation and Network Data"
tag:
  - "Case Studies"
  - "IP Geolocation Accuracy"
  - "GeoIP"
  - "Data Privacy"
authors:
  - "Christopher Luna"
---

[Quad9](https://quad9.net/) is a free recursive DNS (domain name server) that provides enhanced cybersecurity measures, privacy protection, and improved internet performance for privacy-conscious users around the world. The only global DNS security provider that offers universal privacy protections, Quad9 moved its headquarters to Zürich, Switzerland in 2021. As Quad9 writes in their [announcement of the move](https://www.quad9.net/news/blog/quad9-public-domain-name-service-moves-to-switzerland-for-maximum-internet-privacy-protection/), “Switzerland has a legal privacy regime harmonized with the European-standard General Data Protection Regulation. It grants individuals enforceable rights and effective remedies, giving Quad9 users around the world the full protection of Swiss law.” In fact, Quad9’s privacy policy, published under a Creative Commons Attribution-NonCommercial-ShareAlike license, is widely regarded as the standard for privacy policies for recursive DNS resolvers.

By replacing a user’s default Internet Service Provider (ISP) or enterprise DNS configuration, the Quad9 service blocks lookups of malicious host names from an up-to-the-minute list, guarding against a wide range of threats such as malware, phishing, spyware, and botnets. 

As [John Todd](https://www.linkedin.com/in/johntodd/), Quad9’s Chief Technical Officer sums up: “We block domains where we have sufficient evidence that the intentions of the website are not in line with the intentions of the end-user.” 

![A world map illustrating the number of malicious lookups blocked by Quad9.](/images/2025/03/Quad9 malicious lookups blocked.png)

Quad9 currently operates in more than 240 locations across over 110 nations and protects more than an estimated 100 million users daily. While Quad9 operates extensively in Western Europe and North America, the company’s primary goal is to proactively safeguard citizens and organizations in developing countries from malware, ransomware, stalkerware, malvertising, and other kinds of cyber threats. For a detailed look, [see this report](https://quad9.net/uploads/Quad9_Cyber_insights_Malawi_dbb9c0acfc.pdf) on Quad9’s implementation in Malawi.

> “Quad9 deploys in places where for-profit companies have no interest to go 
> because it’s not profitable, and other non-profits would have no resources. 
> We bring a lot of value in underserved nations where digital literacy is still 
> evolving and where cyber-protection and privacy services are not otherwise 
> available.” 

Quad9’s efforts to deploy recursive DNS services in underserved communities, together with an increasing demand for online privacy and security services, has seen the company grow at a rate that John describes, only half-jokingly, as "terrifying”. 

For-profit companies typically have growth as a core KPI, as growth in users correlates with growth in revenue. As a non-profit, Quad9’s continuing growth means they’re fulfilling their mission, but they also need to expend effort on generating funding from sponsors to invest in more infrastructure, labor, and equipment. 

Quad9 does not collect or sell personal data, which is often a revenue stream relied on by other free DNS services. More specifics can be found in Quad9’s [Transparency Report](https://www.quad9.net/about/transparency-report/) but John summarizes: 

“It’s impossible for us to associate DNS queries with any one person. This is by design. There’s no sign-up process or contract to use our service. We store no information about end-users on the platform. We also don’t store IP addresses. IP addresses are deleted at the edge of the network, meaning the endpoint closest to the end-user, and an IP address never leaves the server in which it's received.”

This focus on privacy is one of Quad9’s core tenets, but limiting data only to volume of requests means it can be challenging to measure the impact of Quad9’s mission, which is to serve select cohorts of users: individual users, schools, healthcare, critical infrastructure, and other underserved or at-risk institutions, and especially these demographics in countries with limited resources and access.

So the question is: How can Quad9 maintain an ironclad standard of privacy while still learning more about the demographics that they serve, so they accurately measure their impact and secure more funding? 

The answer is [MaxMind’s GeoIP® data](https://www.maxmind.com/en/geoip-api-web-services). Quad9 has been using MaxMind’s geolocation data for years. This allows Quad9 to fine-tune their investment in new infrastructure and measure their impact geographically. “Understanding which regions have the most need for our services, where we see higher number of blocks,” John explains, “allows us to identify where we need to install more physical servers to improve latency.” 

An additional benefit to understanding global usage is the ability to map a “geography of threats” from the data and share this information with cyber threat hunters who need to prioritize often-limited resources. 

But geographical impact is only one piece of the puzzle. Quad9 also needed to understand the kinds of users they’re serving. They initially tried solving this challenge through IP to ASN mapping. ASN, or Autonomous System Number, is a unique identifier assigned to a network operator and thus can be used to determine the ownership of an IP address. However, it’s a tedious manual process and often generates inaccurate and over-generalized results. ASN mapping did not work for Quad9.

That’s when Quad9 looked for alternative solutions—and discovered MaxMind’s user type data ([available in the GeoIP Enterprise database](https://www.maxmind.com/en/geoip-enterprise-database) and the [GeoIP Insights web service](https://www.maxmind.com/en/geoip-api-web-services)). User type leverages a breadth of signals to sort IP addresses into various usage buckets: residential networks, business VPNs, networks used by travelers, and networks associated with educational institutions, to name a few. Initial tests showed that user type data allowed Quad9 to quantify the demographic impact of the service they provide without ever violating user privacy. John shares that “sponsors are interested in data. For example, they want to know that we did this many event protections today in Venezuela, and this amount was residential, and this amount was schools, and this amount was mobile.” 

> “Seeing the user type field in MaxMind data was a lightbulb moment for me. I 
> knew immediately how we could generate broad categories to show user impact in 
> a way that’s non-invasive to privacy.” 

Quad9 hopes to publish insights derived from using user type data to measure the impact of their services on their target demographic, both internally and to prospective sponsors. However, you don’t have to be a privacy-focused non-profit to understand the value of non-invasive user context data about IP addresses.

The so-called “cookie apocalypse” that has adtech scrambling is, in many ways, a measure of Quad9’s success in advancing the industry standard of data privacy. As regulations and standards increasingly move towards the high bar that Quad9 has set, there’s a subsequent demand for solutions that help businesses understand something about their user base and demographic impact without invasive cookies and other methods that regulators frown upon. On that front, MaxMind offers powerful solutions for the next decade. As John shares:

> “We blur and summarize the data as much as possible because we actually find 
> the data we get from MaxMind is too precise for our use case—we ‘round up’ to 
> larger geographic areas.” 

While the level of detail in MaxMind data may be too sharp for Quad9’s use case and mission, it can be a great fit for businesses transitioning from device and cookie data to more regulator-friendly IP intelligence data. For such businesses, that level of accuracy may be more of a value than a liability.

If you would like to support Quad9 in its mission to provide everyone with a safer and more robust Internet, you can [donate online](https://www.quad9.net/donate).