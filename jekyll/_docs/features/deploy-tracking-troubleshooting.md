---
layout: classic-docs
title: Deploy tracking troubleshooting
categories: [features]
description: deploy tracking troubleshooting
---

*For more general information on tracking your application's deploys, Please
read our [article on deploy tracking](/docs/features/deploy-tracking).*

# Deploy Tracking is not resolving errors for your environment?

### Reason 1: Environment name does not match exactly

Deploy tracking environment names are case sensitive. Therefore `Production`
and `production` would be treated as different environments. Ensure that the
`environment` string you specify for your deploys is an exact match of the
`environment` string of your errors.

If you are using the [airbrake Ruby gem](https://github.com/airbrake/airbrake),
you may want to check that `RAILS_ENV` is identical to the `environment`
variable you initialized your notifier with.

### Reason 2: **Resolve all errors after a deploy** is unchecked

The **Resolve all errors after a deploy** setting is enabled by default, but it
can be disabled. It can be found on your project's settings page.

![resolve all checkbox](/docs/assets/img/docs/airbrake/resolve_all_checkbox.png)

# Capistrano Deploys
If the notification of the deploy is not happening automatically when you do a
capistrano deploy, you may need to add `require 'airbrake/capistrano'` to your
`deploy.rb`. Refer to the [airbrake Ruby gem docs](https://github.com/airbrake/airbrake#capistrano)
for usage.
