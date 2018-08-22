---
layout: classic-docs
title: Rejected errors
categories: [airbrake-faq]
description: rejected errors
---

> Note: Rejected errors are different from error loss due to depleting your
> [monthly quota](/docs/airbrake-faq/monthly-error-quota) or exceeding your
> [rate limit](/docs/airbrake-faq/what-is-a-rate-limit).

# Reasons for error rejections

## 1. Minimum app version filtering
If you have a [minimum app version](/docs/features/app-versions/) set, and you
send errors that are below that version or have no version set, then they will
be rejected. This is helpful if you are only concerned with errors from your
application's latest version.

## 2. Invalid format
The error notice is rejected if it is sent with incorrect JSON/XML as determined
by:

- **JSON:** [POST data schema](https://airbrake.io/docs/api/#post-data-schema-v3) and
[POST data fields](https:/airbrake.io/docs/api/#post-data-fields-v3)
- **XML**: as described in our [XML API doc](/docs/api-2/notifier-api-v23)

## Rejections in the dashboard

### Graphed rejections
You can view rejected error trends in your project overview graph.

### Placeholder exceptions`AirbrakeNotice`
Rejections that are due to invalid error format are also displayed in your
error groups list and appear as `AirbrakeNotice` placeholder exceptions that
provide as much information as possible. These placeholders let you know that
your Airbrake notifier library couldn't parse an error into the correct format.

## Getting rejections?

### Experimental Airbrake notifier
It's common to see error rejections when using an experimental or unsupported
Airbrake notifiers. You can use the information provided by the `AirbrakeNotice`
placeholder to troubleshoot your notifier. `AirbrakeNotice` placeholders can be a
valuable debugging asset when developing a new Airbrake Notifier and reporting
GitHub issues.

### Official Airbrake notifier
Rejections are less likely with official and widely adopted Airbrake notifiers.
However, if errors sent by your Notifier are consistently getting rejected,
please help improve the Airbrake notifier you are using by creating a GitHub
issue for the notifier and reporting the problem to support@airbrake.io.
