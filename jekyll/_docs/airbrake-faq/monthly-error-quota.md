---
layout: classic-docs
title: Monthly error quota
categories: [airbrake-faq]
description: Monthly error quota
---

> **Note:** If your [current plan](https://airbrake.io/account/error-quota)
> does not display the number of errors per month, your plan uses a [per minute
> rate limit](/docs/airbrake-faq/per-minute-rate-limits/) and this section does not apply to your plan.

Your plan's monthly error quota determines the number of errors that can be sent
to your Airbrake account within a billing period. Having a monthly error quota
gives you more freedom in how errors are collected for your apps. In the event
of an unexpected spike in errors, more errors will be accepted giving you a
fuller picture of the issue and decreasing debugging time. Your monthly error
quota is refilled at the beginning of each new billing period.

### Spike coverage
When a bad deploy or service outage causes a large spike in error volume,
Airbrake has you covered. The monthly error quota allows us to accept more
errors during the spike, collecting all the information needed to provide a
complete view of the problem and solve it quickly.

### Accept more errors
Applications don’t report errors at a uniform rate. It’s common for error volume
to vary greatly each day and hour. The monthly error quota sets up a large time
frame that can accommodate different error volumes for any period of time.

### Usage alerts
Airbrake will automatically notify you when your monthly error quota reaches
certain thresholds.
You will also be notified if you completely run out of your monthly error quota
and need to take action.

### Running out of errors
If you suspect you will run out of errors before your monthly quota is refilled,
we recommend [reducing your error quota usage](/docs/airbrake-faq/reducing-error-quota-usage/) or
[upgrading to increase your quota](https://airbrake.io/billing/edit).

If you completely deplete your monthly error quota, Airbrake will stop accepting
errors until you [upgrade your plan](https://airbrake.io/billing/edit) or the
next billing cycle starts. Upgrading your plan will increase your current
monthly error quota and errors will be accepted again immediately.

### Configuring max errors per minute
Setting a rate limit controls how many errors will be accepted each minute for
your account. Errors reported that exceed your configured rate limit will be
discarded.

For example, if you set your rate limit to 100 errors/min, then you report 120
errors at 12:03 pm, the first 100 errors would be accepted and the last 20
errors would be discarded. Your account would start accepting new errors at
12:04 pm.

You can set your rate limit to any value. If you only want to protect against
using too much of your error quota during a large, unexpected spike, then you
might want to use a high value (eg: in the thousands) for a rate limit. If you
want to maximize preserving your error quota through out the month, then you
might want to use a lower value.

Any account admin can configure the max errors per minute from the
[account settings](https://airbrake.io/account/error-quota) page.
