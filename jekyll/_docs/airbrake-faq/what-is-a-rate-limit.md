---
layout: classic-docs
title: What is a rate limit
categories: [airbrake-faq]
description: what is a rate limit
---

> **Note:** If your [current plan](https://airbrake.io/account/error-quota)
> displays the number of errors per month, your plan has a [monthly error
> quota](/docs/airbrake-faq/monthly-error-quota/) and this section does not
> apply to your plan.

#### How does the rate limit work
Rate limits determine the number of incoming exceptions that Airbrake will
accept per minute. Your account will have a rate limit if you are on a legacy
plan or have set a rate limit for your monthly error quota plan.  Once the limit
is reached, all incoming exceptions for your account will be discarded for the
rest of that minute.

#### For example

If you have an account with a rate limit of 3 errors per minute, all errors
after the first 3 for that minute will be rate limited. The rate limit will be
reset at the start of the next minute:

![rate limit](/docs/assets/img/docs/airbrake/rate_limit.png)

#### Where can I find my rate limit?
You can view the rate limit for your current plan by visiting your [account
settings](https://airbrake.io/account/error-quota).

#### Rate limit notification
You'll receive an email notification each day that your account goes over the
limit for your plan. The dashboard notification is displayed for 24 hours after
your account reaches the rate limit. If you see this notification, that means
that sometime in the past day your account has reached the rate limit. The rate
limit is reset each minute so if your account hits the rate limit, then your
projects will stop reporting errors for the rest of that minute and start again
the next minute.

#### How can I increase my rate limit?
If you are exceeding your rate limit, you may want to [upgrade your
plan](https://airbrake.io/account/plan/edit). An increased rate limit can reduce
error loss after bad deploys, during an outage, and in periods of high traffic.

#### How many errors have I lost from not being on the right plan?
You can view the number of errors you are missing from rate limiting on each
project's overview graph. The number of errors you have lost in the last 90
days will be shown. This information should help you to decide which plan to
upgrade to.
