---
layout: classic-docs
title: What is severity
categories: [airbrake-faq]
description: what is severity
---

### What is severity?

![severity.png](/docs/assets/img/docs/airbrake/severity.png)

Big Airbrake projects receive a lot of errors. Every new error triggers an email
notification. Not every error is equally important, and a large amount of error
emails can be overwhelming.

Severity allows you to control the importance of every single error your
notifier sends. Consult your notifier's README to learn how to control severity
for your errors.

Airbrake supports the following severities (defaults to `error`):

* `debug`
* `info`
* `notice`
* `warning`
* `error`
* `critical`
* `alert`
* `emergency`

Errors with a severity of `debug`, `info`, `notice`, or `warning` will not
trigger error emails or integration notifications.
