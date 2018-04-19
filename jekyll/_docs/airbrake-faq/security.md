---
layout: classic-docs
title: Security
categories: [airbrake-faq]
description: Airbrake Security and Compliance
---

### Is data encrypted in transit?
Communication between customers and Airbrake is by default sent securely 
via TLS. 

Airbrake currently supports TLS protocols v1.0, v1.1 and v1.2 with a planned
deprecation for TLSv1.0 and TLSv1.1 on June 30, 2018.

## Is data encrypted at rest?
All Airbrake customer data is stored encrypted at rest. This includes backups.

## Where is Airbrake hosted?
Airbrake is hosted on Amazon Web Services in facilities which maintain
various levels of compliance, certifications and assurance. More information
can be found on the [AWS security pages](https://aws.amazon.com/security/) or [requested from AWS](https://pages.awscloud.com/compliance-contact-us.html).

## Does Airbrake have two-factor authentication?
For paid plans Airbrake integrates with GitHub to provide 2FA. By enabling 2FA on
your GitHub organization you help secure your Airbrake account with 2FA.

## Does Airbrake maintain any certifications, attestation, or compliance?
Airbrake has [certified it's compliance](https://www.privacyshield.gov/participant?id=a2zt0000000TTiJAAW) with the EU-U.S. and Swiss-U.S [Privacy Shield](https://www.privacyshield.gov) as set forth by the U.S. Department of commerce.

Airbrake also maintains GDPR compliance. For our EU customers we offer a Data Protection Addendum available by contacintg <a href="mailto:privacy@airbrake.io?subject=GDPR Data Protection Addendum">privacy@airbrake.io</a>.

Airbrake is currently preparing for a [SOC 2 Type 2 Audit](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report.html).

## What about PCI DSS?
Airbrake's payment and card information is handled by [Stripe](https://stripe.com/docs/security) a certified [PCI Level 1 Service Provider](http://www.visa.com/splisting/searchGrsp.do?companyNameCriteria=stripe,%20inc). Stripe has been audited by an independent PCI Qualified Security Assessor (QSA) and is certified PCI DSS compliant.

When accepting payments Airbrake does so in a PCI compliant manner. Our PCI SAQ is available by <a href="mailto:support@airbrake.io?subject=PCI SAQ">contacting support<a/>.

## Vulnerability or security disclosure

If you would like to report a vulnerability, security issue or have other security related concerns about an Airbrake product please contact <a href="mailto:security@airbrake.io">security@airbrake.io</a>.

If you are disclosing a vulnerability please provide

- a summary of the vulnerability
- a proof of concept
- a list of tools used
- the output from the tools used
- the commands used to execute the tools
