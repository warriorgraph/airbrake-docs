---
layout: classic-docs
title: Installing Airbrake in a Python app
short-title: Python
categories: [installing-airbrake]
description: installing airbrake in a Python app
---

![python flag](/docs/assets/img/docs/python_flag.jpeg)

## Features
* Simple to install and configure
* Integrates with your existing logger
* Add extra context to errors before they are sent
* Set error severity and control notification thresholds
* Compatible with [Airbrake On-Premise](https://airbrake.io/enterprise)

## Getting Started

### Download the Airbrake notifier

```bash
pip install -U airbrake
```

### Automatic configuration

The easiest way to get set up is with a few environment variables.
You can find your `PROJECT ID` and `PROJECT API KEY` on your project's
settings page.

```bash
export AIRBRAKE_API_KEY='<Your project API KEY>'
export AIRBRAKE_PROJECT_ID='<Your project ID>'
export AIRBRAKE_ENVIRONMENT=production
```

and you're done! These environment variables are used to automatically
configure your `AirbrakeHandler`.

### Manual configuration

Or, you can manually instantiate your `AirbrakeHandler` by passing your `PROJECT
ID` and `PROJECT API KEY` as arguments to the `getLogger()` helper.

```python
import airbrake

logger = airbrake.getLogger(api_key="<Your project API KEY>", project_id=<Your project ID>)

try:
    1/0
except Exception:
    logger.exception("Bad math.")
```

### Getting the most out of your errors
Now that your Python notifier is configured and ready to go we recommend you
[add extra context to your
errors](https://github.com/airbrake/airbrake-python#giving-your-exceptions-more-context) and
[add Airbrake to your existing
logger](https://github.com/airbrake/airbrake-python#adding-the-airbrakehandler-to-your-existing-logger).
Please visit our [official GitHub
repo](https://github.com/airbrake/airbrake-python) for the full list of notifier
features.
