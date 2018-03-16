---
layout: classic-docs
title: Installing Airbrake in an Express application
short-title: Express
categories: [installing-airbrake]
description: Installing Airbrake in an Express application
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
the next step is configuring Airbrake in your Express app.  Configuration
involves creating an `AirbrakeClient` with your `projectId` and `projectKey` and
registering an Express error handler. The error handler should be registered
below all other `app.use()` and routes calls.

### Configuring in an example Express app
Here is the configuration for an
[example Express app](https://github.com/airbrake/airbrake-js/tree/master/examples/express),
this app throws and reports an error to Airbrake when you visit
 [localhost:3000](http://localhost:3000). You will want to replace the
placeholder `projectId` and `projectKey` with the real values from your
project's settings page.

```js
var express = require('express');
var AirbrakeClient = require('airbrake-js');
var makeErrorHandler = require('airbrake-js/dist/instrumentation/express');

var app = express();

app.get('/', function hello (req, res) {
  throw new Error('hello from Express');
  res.send('Hello World!');
})

var airbrake = new AirbrakeClient({
  projectId: 1,
  projectKey: 'FIXME',
});

// Error handler middleware should be the last, after other app.use() and routes calls.
// http://expressjs.com/en/guide/error-handling.html
app.use(makeErrorHandler(airbrake));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
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
