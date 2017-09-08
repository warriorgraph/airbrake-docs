---
layout: classic-docs
title: What triggers a new email
categories: [airbrake-faq]
description: what triggers a new email
---

Airbrake will send you an email notification for a new error or for new
occurrence of an error previously marked as resolved.  When an error comes in,
we review information about the error to determine whether the error is a new
error entirely, or just another occurrence of an error we've previously seen.
We currently review...

- The error class of the error
- The file in which the error occurred
- The line number at which the error occurred
- The action that was running when the error occurred
- The controller that the action is in
- The RAILS_ENV that was set when the error occurred

## Resolved notices

If you **resolve an error group** from within the application, don't worry -- if
it comes in again, we'll "unresolve" it, and send you another email to indicate
that it's been re-opened.  This is part of the benefit and purpose behind the
resolved feature.  You should be able to remove from your immediate view
anything you believe is dealt with, but have the confidence to know that you'll
see it again if it's actually not done with, or it comes up again in the future
because of further changes.

## Error severity

Errors with a [severity](/docs/airbrake-faq/what-is-severity) of `debug`,
`info`, `notice`, or `warning` will not trigger an email notification.

## High volume notifications

If you have enabled high volume notifications for your project you will be
re-notified when an error's occurrences reach 10k, 100k, 200k, 300k, etc.
High volume notifications can be enabled per project on your [user
profile](https://airbrake.io/users/edit). High volume notifications help you keep
tabs on which errors occur most in your project, and depending on frequency
can be a useful indicator for larger issues.
