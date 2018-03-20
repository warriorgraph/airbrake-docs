---
layout: classic-docs
title: Installing Airbrake in a hapi.js application
short-title: hapi.js
categories: [installing-airbrake]
description: Installing Airbrake in a hapi.js application
---

![](https://s3.amazonaws.com/document-resources/jsbrakeman.png)

{% include_relative airbrake-js/features.md %}

{% include_relative airbrake-js/installation.md %}

## Configuration

After you have installed the [airbrake-js notifier](https://github.com/airbrake/airbrake-js)
the next step is configuring Airbrake in your app. This involves registering an
error handler with a configured `AirbrakeClient`. Be sure to replace the values
for `projectId` and `projectKey` with the real values from your project's
settings page. Here is an
[example hapi.js app](https://github.com/airbrake/airbrake-js/tree/master/examples/hapi)
that shows the basics of configuration and reports an error to Airbrake when
you visit [localhost:8000/hello](http://localhost:8000/hello):

```js
{% include_relative airbrake-js/hapijs/server.js %}
```

{% include_relative airbrake-js/going-further.md %}
