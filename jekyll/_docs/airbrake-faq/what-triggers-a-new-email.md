---
layout: classic-docs
title: What triggers a new notification
categories: [airbrake-faq]
---

Airbrake will send you a new error notification when:
- a new error is received
- a new occurrence of an error previously marked as resolved is received
- an error group reaches a high volume threshold (see [high volume
  notifications](/docs/airbrake-faq/what-triggers-a-new-email/#high-volume-notifications)
  section for more info)

When an error comes in, we review information about the error to determine
whether the error is a new error entirely, or just another occurrence of an
error we've previously seen.  We currently review:

- The error class of the error
- The error message of the error with data values extracted (see [structured
  logging](/docs/features/structured-logging))
- The file in which the error occurred
- The line number at which the error occurred
- The `environment` where the error occurred (see
  [environments](/docs/airbrake-faq/configuring-project-environments/))

## What is a notification?
A notification can be:

- Your personal email notifications
- Your team's messaging (eg: Slack) notifications
- Or your project's webhook integration if enabled

## Resolved notices

If you **resolve an error group** from within the application, don't worry --
if it comes in again, we'll "unresolve" it, and send you another notification
to indicate that it's been reopened. This is part of the benefit and purpose
behind the resolved feature. You should be able to remove from your immediate
view anything you believe is dealt with, but have the confidence to know that
you'll see it again if it's actually not done with, or it comes up again in the
future because of further changes.

To cut down on noise, Airbrake will not send you a new email notification for
an error if you have already received an email for that error less than one
minute ago.

## Error severity

Errors with a [severity](/docs/airbrake-faq/what-is-severity) of `debug`,
`info`, `notice`, or `warning` will not trigger a notification.

## High volume notifications

High volume notifications will send you repeat email notifications for errors
that reach occurrence thresholds. If you have this feature enabled, you will
get new error notifications at these intervals:

| Threshold         | Notification interval           |
|-------------------|---------------------------------|
| 1 - 1,000         | Every 100 error occurrences     |
| 1,000 - 10,000    | Every 1,000 error occurrences   |
| 10,000 - 100,000  | Every 10,000 error occurrences  |
| 100,000 and above | Every 100,000 error occurrences |

High volume notifications can be enabled per project on your [user
profile](https://airbrake.io/users/notifications). High volume notifications help you keep
tabs on which errors occur most in your project, and depending on frequency
can be a useful indicator for larger issues.

High volume notifications are available on the [Business plan and
above](https://airbrake.io/account/plan/edit).
