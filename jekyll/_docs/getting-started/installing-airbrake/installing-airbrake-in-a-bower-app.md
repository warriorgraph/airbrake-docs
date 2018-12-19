---
layout: classic-docs
title: Installing Airbrake in a Bower application
short-title: Bower
categories: [installing-airbrake]
description: Installing Airbrake in a Bower application
---

![](https://s3.amazonaws.com/document-resources/jsbrakeman.png)

{% include_relative airbrake-js/features.md %}

{% include_relative airbrake-js/installation.md %}

## Configuration

To report errors from your Bower app you configure an `airbrakeJs.Client` with
your `projectId` and `projectKey` and report errors with the `notify` function.
Here is an example from our
[Bower example app](https://github.com/airbrake/airbrake-js/tree/master/examples/bower-wiredep):

```js
{% include_relative airbrake-js/bower/app.js %}
```

{% include_relative airbrake-js/going-further.md %}
