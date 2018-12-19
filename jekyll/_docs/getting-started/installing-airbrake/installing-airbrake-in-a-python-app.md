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

## What version of Python are you using?
The version of Python your app is using determines which installation
instructions to follow.

- Using a 3.x version of Python? follow the [Python 3 instructions](#python-3x).
- Using a 2.x version of Python? follow the [Python 2 instructions](#python-27).

## Python 3.x+

### Installation

The [pybrake](https://github.com/airbrake/pybrake) notifier supports Python 3.4 and above.

```shell
pip install -U pybrake
```

### Configuration

To configure pybrake you will need your Airbrake project's `id` and `api_key`,
these are available from your project's settings page.

```python
import pybrake

notifier = pybrake.Notifier(project_id=123,
                            project_key='FIXME',
                            environment='production')
```

### Sending errors to Airbrake

```python
try:
    raise ValueError('hello')
except Exception as err:
    notifier.notify(err)
```

### Taking pybrake further
Now that pybrake is configured and ready to go we recommend you check out some
of the additional integrations and features pybrake supports:
- [integrate with the logging standard library](https://github.com/airbrake/pybrake#logging-integration)
- [integrating with Django via Airbrake middleware](https://github.com/airbrake/pybrake#django-integration)
- [integrating with Flask via the blinker library](https://github.com/airbrake/pybrake#flask-integration)
- [add custom information to notices before they are sent](https://github.com/airbrake/pybrake#usage)
- [define custom filters to ignore notices by type or any other criteria](https://github.com/airbrake/pybrake#usage)

Visit the [pybrake GitHub repo](https://github.com/airbrake/pybrake)
for full details.

## Python 2.7

Not on Python 3.4+ yet? No problem! Follow these instructions and you will
be capturing errors in no time.

### Installation

```bash
pip install -U airbrake
```

### Configuration
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

### Taking airbrake-python further
Now that you have configured Airbrake to report exceptions from your Python 2.7
app, we recommend you
[add extra context to your
errors](https://github.com/airbrake/airbrake-python#giving-your-exceptions-more-context) and
[add Airbrake to your existing
logger](https://github.com/airbrake/airbrake-python#adding-the-airbrakehandler-to-your-existing-logger).
Please visit the [airbrake-python GitHub
repo](https://github.com/airbrake/airbrake-python) for the full list of notifier
features.
