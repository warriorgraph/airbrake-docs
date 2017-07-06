---
layout: classic-docs
title: Installing Airbrake in a Go app
short-title: Go
categories: [installing-airbrake]
description: installing airbrake in a Go app
---

![Go flag](/docs/assets/img/docs/go_flag.jpeg)

### Features
* Notify Airbrake on panics
* Ignore errors based on class, message, status, file, or any other filter
* [Send errors from glog to Airbrake](https://github.com/airbrake/glog)
* Add extra context to errors before reporting them
* Set error severity to control notification thresholds

### Example usage

To include Airbrake in your Go application you'll need to import the Gobrake
code, available at
[https://github.com/airbrake/gobrake](https://github.com/airbrake/gobrake). To
configure the Go notifier you will need your `PROJECT ID` and `PROJECT API KEY` available
from your project's settings page.

```go
package main

import (
    "errors"

    "gopkg.in/airbrake/gobrake.v2"
)

var airbrake = gobrake.NewNotifier(<Your project ID>, "<Your project API KEY>")

func init() {
    airbrake.AddFilter(func(notice *gobrake.Notice) *gobrake.Notice {
        notice.Context["environment"] = "production"
        return notice
    })
}

func main() {
    defer airbrake.Close()
    defer airbrake.NotifyOnPanic()

    airbrake.Notify(errors.New("operation failed"), nil)
}
```

### More info on GitHub
For more information on [ignoring
notices](https://github.com/airbrake/gobrake#ignoring-notices), [setting
severity](https://github.com/airbrake/gobrake#setting-severity), or our [glog
fork]() please visit our [official GitHub
repo](https://github.com/airbrake/gobrake).
Contributors always welcome!
