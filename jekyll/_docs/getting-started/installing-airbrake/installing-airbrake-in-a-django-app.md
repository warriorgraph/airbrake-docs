---
layout: classic-docs
title: Installing Airbrake in a Django app
short-title: Django
categories: [installing-airbrake]
description: installing airbrake in a Django app
---

![python flag](/docs/assets/img/docs/python_flag.jpeg)

## Features
* Simple to install and configure
* Automatically report exceptions from your django app
* Compatible with [Airbrake on-premise](https://airbrake.io/enterprise)

## Installation

```sh
pip install git+https://github.com/airbrake/airbrake-django.git
```

## Configuration
To configure airbrake you will need to add airbrake to your `INSTALLED_APPS`
and create the `AIRBRAKE` dictionary. Add `airbrake` to `INSTALLED_APPS` in
your `settings.py`:

```python
INSTALLED_APPS = (
    'django.contrib.admin',
    # ...
    'airbrake'
)
```

Create the `AIRBRAKE` dictionary in your `settings.py` for project:

```python
# Airbrake settings
AIRBRAKE = {
    'API_KEY': 'YOUR_PROJECT_API_KEY',
    'TIMEOUT': 5,
    'ENVIRONMENT': 'production',
}
```

Then just restart your server!

## Automatically sending errors

```python
MIDDLEWARE = (
    ...,
    'airbrake.middleware.AirbrakeNotifierMiddleware'
)
```

## Going further

Please visit our [official GitHub repo](https://github.com/airbrake/airbrake-django)
for details on
[manually sending errors](https://github.com/airbrake/airbrake-django#manually-sending-errors-to-airbrake),
additional configuration options, and more.
