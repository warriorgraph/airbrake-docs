---
layout: classic-docs
title: Pivotal Tracker
categories: [integrations]
description: Pivotal Tracker
---

## [Airbrake](http://airbrake.io) integrates with [Pivotal Tracker](http://pivotaltracker.com)

After configuring the Pivotal Tracker integration you get several additional benefits:

-  Pivotal story auto-creation as soon as a new error occurs
-  Auto re-opening of accepted, delivered or finished Pivotal story when a resolved error re-occurs
-  When a story is accepted in Pivotal the Airbrake error is marked as resolved
-  Creates comment on the Airbrake error for a new story activity on Pivotal
-  You can manually pull errors from Pivotal

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
