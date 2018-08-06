---
layout: classic-docs
title: Installing Airbrake in a Flask app
short-title: Flask
categories: [installing-airbrake]
description: installing airbrake in a Flask app
---

![python flag](/docs/assets/img/docs/python_flag.jpeg)

## Features
* Simple to install and configure
* Add extra context to errors before they are sent
* Set error severity and control notification thresholds
* Compatible with [Airbrake On-Premise](https://airbrake.io/enterprise)

## Installation

Airbrake for Flask uses our official Python notifier
[pybrake](https://github.com/airbrake/pybrake). To install pybrake, you can use
pip:

```
pip install -U pybrake
```

## Configuration

The Flask integration leverages Flask signals and therefore requires the blinker library.

```py
from flask import Flask
import pybrake.flask



app = Flask(__name__)

app.config['PYBRAKE'] = dict(
    project_id=123,
    project_key='FIXME',
)
app = pybrake.flask.init_app(app)
```

## Sending errors to Airbrake

```py
try:
    raise ValueError('hello')
except Exception as err:
    notifier.notify(err)
```

For more information, check out [pybrake's official GitHub
repo](https://github.com/airbrake/pybrake#flask-integration).
