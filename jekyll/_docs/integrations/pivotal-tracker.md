---
layout: classic-docs
title: Pivotal Tracker
categories: [integrations]
last_updated: May 11, 2016
description: Pivotal Tracker
---

## [Airbrake](http://airbrake.io) integrates with [Pivotal Tracker](http://pivotaltracker.com)

After configuring the Pivotal Tracker integration you get several additional benefits:

-  Story auto-creation as soon as a new error occurs
-  Creates comments on the Airbrake error for new activity on Pivotal Tracker
-  When a story is delivered in Pivotal Tracker the Airbrake errors is marked as resolved
-  You can manually pull errors from Pivotal Tracker
-  Allows for Webhook updates stored as Airbrake error comments. When a Pivotal Tracker
   story is closed, its corresponding Airbrake error will be resolved.

## Configuring the Pivotal Tracker integration

Configuring the Pivotal Tracker integration requires a Pivotal Tracker **API key** and **Project ID**.
Your Pivotal Tracker user must be an admin as well.

### Retrieve your Pivotal Tracker **API Token**

Your Pivotal Tracker **API Token** is located on your personal profile page.
Visit your profile page directly via
[https://www.pivotaltracker.com/profile](https://www.pivotaltracker.com/profile)
or navigate to your profile page by clicking your name in the top right corner
and selecting **Profile**.

### Retrieve your Pivotal Tracker **Project ID**

Retrieve your **Project ID** from the URL of your Pivotal Tracker project's
dashboard or settings page.

![pivotal project id](/docs/assets/img/docs/integrations/pivotal_project_id.png)

### Putting it all together
In Airbrake, first navigate to your project's settings with the upper left cog.
From the project's settings page click **Integrations** and then **Pivotal
Tracker**.

From here you can input your **API Token** and **Project ID** in the corresponding field.

![pivotal settings](/docs/assets/img/docs/integrations/pivotal_settings.png)

### Enabling Webhooks updates

Our Pivotal Tracker integration allows for Webhook updates stored as Airbrake error
comments. This option can be enabled or disabled from the integration settings page
for your project under Pivotal Tracker. Just check/uncheck the Enable Pivotal webhook
activity checkbox. Here's an example of the Pivotal Tracker activity recorded in the
comments section of an Airbrake error:

![pivotal webhooks example](/docs/assets/img/docs/integrations/pivotal_webhooks_example.png)
