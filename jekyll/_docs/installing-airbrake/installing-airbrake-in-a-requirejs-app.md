---
layout: classic-docs
title: Installing Airbrake in a RequireJS application
short-title: RequireJS
categories: [installing-airbrake]
description: Installing Airbrake in a RequireJS application
---

![](https://s3.amazonaws.com/document-resources/jsbrakeman.png)

{% include_relative airbrake-js/features.md %}

{% include_relative airbrake-js/installation.md %}

## Configuration

To report errors from your RequireJS app you configure an `AirbrakeClient` with
your `projectId` and `projectKey` and report errors with the `notify` function.
Here is an example from our
[RequireJS example app](https://github.com/airbrake/airbrake-js/tree/master/examples/requirejs):

```js
{% include_relative airbrake-js/requirejs/app.js %}
```

{% include_relative airbrake-js/going-further.md %}
