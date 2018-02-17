---
layout: classic-docs
title: Installing Airbrake in a JavaScript application
short-title: JavaScript
categories: [installing-airbrake]
description: Installing Airbrake in a Javascript application
---

![](https://s3.amazonaws.com/document-resources/jsbrakeman.png)

## Features

- Easy and flexible installation options including NPM, Bower and a public CDN
- Send uncaught errors to Airbrake or manually using a try/catch
- [Add custom parameters](https://github.com/airbrake/airbrake-js#filtering-errors) to your errors for more context
- [Private sourcemap support](/docs/installing-airbrake/private-sourcemaps)
- Control which errors you send with customizable filtering options
- Support for:
  - [AngularJS](https://github.com/airbrake/airbrake-js/tree/master/examples/angular)
  - [Angular 2](https://github.com/airbrake/airbrake-js/tree/master/examples/angular-2)
  - [Backbone.js](https://github.com/airbrake/airbrake-js/wiki/Using-Airbrake-with-Backbone.js)
  - [Bower](https://github.com/airbrake/airbrake-js/tree/master/examples/bower-wiredep)
  - [Browserify](https://github.com/airbrake/airbrake-js/tree/master/examples/browserify)
  - [Express.js](https://github.com/airbrake/airbrake-js/tree/master/examples/express)
  - [hapi.js](https://github.com/airbrake/airbrake-js/tree/master/examples/hapi)
  - [Legacy](https://github.com/airbrake/airbrake-js/tree/master/examples/legacy)
  - [Rails](https://github.com/airbrake/airbrake-js/tree/master/examples/rails)
  - [React](https://github.com/airbrake/airbrake-js/tree/master/examples/react)
  - [RequireJS](https://github.com/airbrake/airbrake-js/tree/master/examples/requirejs)

## Installation

#### *Visit our [official GitHub repository](https://github.com/airbrake/airbrake-js) for full installation instructions and configuration options.*

The notifier is built using a
[standalone browserify build](http://www.forbeslindesay.co.uk/post/46324645400/standalone-browserify-builds)
and can be used with:

- [RequireJS](https://github.com/airbrake/airbrake-js/tree/master/examples/requirejs).
- [Global/Window](https://github.com/airbrake/airbrake-js/tree/master/examples/legacy).

We include the full source code with the package, so you can use
[Browserify](https://github.com/airbrake/airbrake-js/tree/master/examples/browserify) too.

If you prefer not to host the library yourself,
[airbrake-js is available on the excellent cdnjs CDN](https://cdnjs.com/libraries/airbrake-js).

## Basic Usage

First you need to initialize notifier with project id and API key taken from [Airbrake.io](https://airbrake.io):

```js
var airbrake = new airbrakeJs.Client({projectId: 1, projectKey: 'abc'});
```

Or if you are using browserify/webpack/etc:

```js
var airbrakeJs = require('airbrake-js');
var airbrake = new airbrakeJs({projectId: 1, projectKey: 'abc'});
```

The simplest method is to report errors directly:

```js
try {
  // This will throw if the document has no head tag
  document.head.insertBefore(document.createElement("style"));
} catch(err) {
  airbrake.notify(err);
  throw err;
}
```

Alternatively you can wrap any code which may throw errors using the client's `wrap` method:

```js
var startApp = function() {
  // This will throw if the document has no head tag.
  document.head.insertBefore(document.createElement("style"));
}
startApp = airbrake.wrap(startApp);

// Any exceptions thrown in startApp will be reported to Airbrake.
startApp();
```

#### *Visit our [official GitHub repository](https://github.com/airbrake/airbrake-js) for more information.*
