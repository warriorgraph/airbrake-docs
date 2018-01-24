---
layout: classic-docs
title: What is a rate limit
categories: [airbrake-faq]
description: what is a rate limit
---

## Monthly error quota
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

## Per minute rate limits

#### How does the per minute rate limit work?
The Airbrake plan you have selected determines the number of incoming exceptions
that it will accept per minute. Once the limit is reached, all incoming
exceptions for your account will be discarded for the rest of that minute.

#### For example

If you have an account with a rate limit of 3 errors per minute, all errors
after the first 3 for that minute will be rate limited. The rate limit will be
reset at the start of the next minute:

![rate limit](/docs/assets/img/docs/airbrake/rate_limit.png)

#### Where can I find my rate limit?
The limit is different for each plan. To see what your rate limit is, visit the
**Account settings** page at: [https://airbrake.io/account/edit](https://airbrake.io/account/error-quota)
You'll receive an email notification each day that your account goes over the
limit for your plan.

#### Rate limit notification
The dashboard notification is displayed for 24 hours after your account reaches
the rate limit. If you see this notification, that means that sometime in the
past day your account has reached the rate limit. The rate limit is reset each
minute so if your account hits the rate limit, then your projects will stop
reporting errors for the rest of that minute and start again the next minute.

#### How can I increase my rate limit?
If you are exceeding your rate limit, you may want to upgrade your Airbrake
account's plan. An increased rate limit can stop error loss during high traffic
times. You can upgrade your Airbrake account's plan here: [https://airbrake.io/account/plan/edit](https://airbrake.io/account/plan/edit)

#### How many errors have I lost from not being on the right plan?
You can view the number of errors you are missing due to rate limit via the new
project overview graphs. The number of errors you have lost in the last 90 days
will be shown. This information should help you to decide which plan to upgrade
to.
