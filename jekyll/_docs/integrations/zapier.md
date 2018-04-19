---
layout: classic-docs
title: Zapier
categories: [integrations]
description: Zapier
---

### **Airbrake V2 Beta** integration
You can turn Airbrake errors into triggers for 500+ apps with the Airbrake V2
Zapier integration. Combine with
[filters](https://zapier.com/learn/how-to-use-zapier/custom-filters/) to
specify which errors trigger actions and which are ignored. Easily create
pingdom incidents, phone calls, slack `@channel` messages, SMS messages, and
more.

## Step 1: Unlock Beta & Configure Airbrake V2

**Before continuing, it's important to [unlock the Airbrake V2 Beta](https://zapier.com/developer/invite/43597/a3ddaac2be57f3689b589faf761460bd/).
You won't be able to integrate correctly without first unlocking Airbrake V2.**

![search-for-v2](/docs/assets/img/docs/integrations/zapier/search-for-v2.png)

### Connect account with **Subdomain** and user `AUTH_TOKEN`
Follow the prompts to connect a new account.
Zapier will open a new browser window to collect your Airbrake account info.
Your subdomain is present in the address bar after [logging
into Airbrake](https://airbrake.io/login) and Your `AUTH_TOKEN` is available
from the your user settings accessible from the settings link in the upper
right dropdown in the Airbrake UI.

![subdomain-and-auth-token](/docs/assets/img/docs/integrations/zapier/subdomain-and-auth-token.png)

### Choose a project to watch for new errors
![select-project](/docs/assets/img/docs/integrations/zapier/select-project.png)

### Test the project and continue
![project-test-succeeded](/docs/assets/img/docs/integrations/zapier/project-test-succeeded.png)

## Step 2: Adding a filter
Triggering on every exception might quickly consume your [available
tasks](https://zapier.com/help/tasks/#what-is-a-task) in Zapier. You can leverage
[filters](https://zapier.com/learn/how-to-use-zapier/custom-filters/) to put rules
in place that only continue if, for example the error type matches one you
specify. If you want to create a Zap to serve as an early alert, it might be
worth filtering for errors caused by:

- database connectivity problems
- payment processing failures
- email delivery failures
- unavailable third party services
- failed production smoke tests

In this example we will create a filter that triggers an action only for some
database connectivity related errors. Specifically for `PG::ConnectionBad` and
`Redis::CannotConnectError` errors.

### Select the filter
We want to use an `Only continue if...` filter where we specify conditions/rules
that decide if the Zap continues to the next action.

![select-filter](/docs/assets/img/docs/integrations/zapier/select-filter.png)

### Adding our Filters
We only want to continue to the next action if the error's type is
`PG::ConnectionBad` or `Redis::CannotConnectError`, our filter does just that:

![setup-filter](/docs/assets/img/docs/integrations/zapier/setup-filter.png)

### Test the filter
If the last error in your project matches our above filter then testing this
one should pass. This is what a pass looks like for our `Redis::CannotConnectError`:

![filter-test-results](/docs/assets/img/docs/integrations/zapier/filter-test-results.png)

## Step 3: Adding an action

### Chose an action app
You can choose any of the [500+ apps available from
Zapier](https://zapier.com/app/explore). For this example we are going to be
using be the built-in SMS app to send an SMS message with basic details of the
error.

### Configuring the SMS message

If we want our SMS message to read like this:

>Airbrake error for `PROJECT_NAME` [`ENVIRONMENT`] `TYPE`: `MESSAGE` occurred
`COUNT` times.
For more details check out:
>
>`ERROR_URL`

Then this is how we configure the SMS message in Zapier:

![setup-sms](/docs/assets/img/docs/integrations/zapier/setup-sms.png)

### SMS example message
Here is a  web preview of the SMS message sent as part of the test for the SMS
action app.  You should have received the SMS message to the number configured
and be able to see expected values in the web output of the message body:
![example-sms](/docs/assets/img/docs/integrations/zapier/example-sms.png)
