---
layout: classic-docs
title: Installing Airbrake in an AngularJS application
short-title: AngularJS
categories: [installing-airbrake]
description: Installing Airbrake in an AngularJS application
---

![](https://s3.amazonaws.com/document-resources/jsbrakeman.png)

{% include_relative airbrake-js/features.md %}

{% include_relative airbrake-js/installation.md %}

## Configuration

After you have installed the [airbrake-js notifier](https://github.com/airbrake/airbrake-js)
the next step is configuring Airbrake in your app. This involves initializing
an `airbrakeJs.Client` with your `projectId` and `projectKey` and adding an
[$exceptionHandler](https://docs.angularjs.org/api/ng/service/$exceptionHandler).

The following config snippet should be added to your `app.js`
file. Be sure to replace the values for `projectId` and `projectKey` with the
real values from your project's settings page.

```js
angular
  .module('app')
  .factory('$exceptionHandler', function ($log) {
    var airbrake = new airbrakeJs.Client({
      projectId: 1,
      projectKey: 'FIXME'
    });

    airbrake.addFilter(function (notice) {
      notice.context.environment = 'production';
      return notice;
    });

    return function (exception, cause) {
      $log.error(exception);
      airbrake.notify({error: exception, params: {angular_cause: cause}});
    };
  });
```

{% include_relative airbrake-js/going-further.md %}
