---
layout: classic-docs
title: Installing Airbrake in a Magento app
short-title: Magento
categories: [installing-airbrake]
description: installing airbrake in a Magento app
---

![PHPBrake](https://s3.amazonaws.com/document-resources/phpbrakeman.png)

### Features
* Simple to install and configure
* Automatic reporting of uncaught exceptions
* Set a custom environment, e.g. production, staging, development

### Installing with Modman

```bash
cd <your-magento-project>
modman init
git clone https://github.com/airbrake/Airbrake-Magento.git .modman/CodebaseExceptions
modman deploy CodebaseExceptions --force
```

### Configuration

To configure Airbrake Magento, visit your admin panel
(http://\[YOURDOMAIN\]/admin) and navigate to _System_ → _Configuration_. On the
left sidebar, find the _ELGENTOS_ section and click on _CodebaseExceptions_.

Copy and paste your `PROJECT API KEY` into the relevant field and save the new
configuration. You can find your `PROJECT API KEY` in your project's settings
page.

![configuration](https://s3.amazonaws.com/airbrake-misc-assets/airbrake_magento.png)

The configuration process is done. To make sure it works correctly, visit
http://\[YOURDOMAIN\]/exceptions/index/test. This will trigger a new test
exception. It can be found in your project's dashboard.

For more information please visit our
[official GitHub repo](https://github.com/airbrake/Airbrake-Magento).
