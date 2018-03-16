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
// example server.js file
'use strict';

const Hapi = require('hapi');
const AirbrakeClient = require('airbrake-js');
const makeErrorHandler = require('airbrake-js/dist/instrumentation/hapi');


// Create Airbrake client
const airbrake = new AirbrakeClient({
  projectId: 1,       // replace with real project id
  projectKey: 'FIXME' // replace with real project api key
});

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function hello(request, reply) {
    throw new Error('hello from hapi');
    return reply('hello world');
  }
});

// Register Airbrake error handler
server.register({
  register: makeErrorHandler(airbrake),
}, (err) => {
  if (err) {
    throw err;
  }
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
```

{% include_relative airbrake-js/going-further.md %}
