---
layout: classic-docs
title: Installing Airbrake in an Angular JS application
short-title: Angular JS
categories: [installing-airbrake]
description: Installing Airbrake in an Angular JS application
---

![](https://s3.amazonaws.com/document-resources/jsbrakeman.png)

## Features

- Easy and flexible installation options including NPM, Bower and a public CDN
- Send uncaught errors to Airbrake or manually using a try/catch
- [Add custom parameters](https://github.com/airbrake/airbrake-js#filtering-errors) to your errors for more context
- [Private sourcemap support](/docs/installing-airbrake/private-sourcemaps)
- Control which errors you send with customizable filtering options

## Installation

### Using npm

```
npm install airbrake-js
```

### Using Bower

```
bower install airbrake-js-client
```

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

## Going Further

Installation and configuration is just the beginning. The [airbrake-js
notifier](https://github.com/airbrake/airbrake-js) supports many other advanced uses and options including:

- [adding extra details to errors](https://github.com/airbrake/airbrake-js#notice-annotations)
- [sourcemaps for easy to parse backtraces](https://github.com/airbrake/airbrake-js#source-map)
- [filtering errors](https://github.com/airbrake/airbrake-js#filtering-errors)
- [specifying error severity](https://github.com/airbrake/airbrake-js#severity)
- [adding custom reporters](https://github.com/airbrake/airbrake-js#custom-reporters)

Please visit the [airbrake-js GitHub repo](https://github.com/airbrake/airbrake-js)
for more usage and configuration examples.
