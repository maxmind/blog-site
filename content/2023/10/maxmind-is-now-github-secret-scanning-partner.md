---
title: "MaxMind is now a Github secret scanning partner"
date: "2023-10-30"
images:
  - /images/2023/10/maxmind-is-now-github-secret-scanning-partner.png
category:
  - "News"
tag:
  - "Fraud screening"
  - "Data privacy"
  - "Product updates"
authors:
  - "Andra Mircioiu"
---

Secret scanning helps to prevent data leaks and fraud by identifying and
flagging known types of secrets (tokens, private keys, etc.). Secrets can
accidentally end up published in repositories—even experienced developers can
slip up and find that a secret has been included in code published to a
repository.

Once a secret is published (in our case, a license key), anyone with read access
to the repository can use that license key to query the minFraud®, GeoIP®, and
GeoLite services, or download the GeoIP and GeoLite databases—with your
privileges.

As GitHub recently announced,
[MaxMind is now a GitHub secret scanning partner](https://github.blog/changelog/2023-10-05-maxmind-is-now-a-github-secret-scanning-partner/).

This partnership adds extra layers of security for MaxMind customers. GitHub
will scan repositories for MaxMind license keys and forward them to our team. We
will then notify affected users and deactivate the compromised license key
within 7 days.

If your license key has been exposed, you can replace it and correct the
underlying issue that’s exposing your license key in your repositories.
[Here’s how to replace your license key](https://support.maxmind.com/hc/en-us/articles/4407111761435-Replace-my-License-Key).

All GitHub users can
[enable push protection](https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations)
for free, which prevents MaxMind keys from entering your organization or public
repositories. If you’re a GitHub Advanced Security customer, you can also scan
for and block MaxMind keys in your private repositories.

If you’re publishing code that uses MaxMind products and services, you should
store your license keys securely following industry and framework best practices
such as
[OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html),
[NIST](https://csrc.nist.gov/Projects/ssdf), and
[MITRE](https://attack.mitre.org/techniques/T1213/003/).

However, if you accidentally check your MaxMind license key into a repository,
we can take action together to prevent fraudulent use.
