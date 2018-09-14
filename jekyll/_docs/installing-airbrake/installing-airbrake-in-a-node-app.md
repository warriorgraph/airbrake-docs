---
layout: classic-docs
title: Installing Airbrake in a Node.js app
short-title: Node.js
categories: [installing-airbrake]
description: installing airbrake in a node app
---
![node flag](/docs/assets/img/docs/node_flag.jpeg)

{% include_relative airbrake-js/features.md %}

## Installation

**Step 1:** Add the library

Add the Airbrake error notifier to your `package.json` then run `npm install` from your project's directory:

```json
{
  "dependencies": {
    "airbrake-js": "^1.4.6"
  }
}
```

Or install the notifier [manually](https://github.com/airbrake/airbrake-js#installation)

_**Note:** if you're not already using the [request](https://github.com/request/request) library, you should install it as well when installing `airbrake-js`._

**Step 2:** Configure the library

This is a simple Node app `app.js` file that throws an error and sends it to Airbrake. To configure Airbrake in your project, just `require` the airbrake-js library and instantiate the client as shown:

```js
var http = require('http');
var AirbrakeClient = require('airbrake-js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  throw new Error('I am an uncaught exception');
}).listen(8080);

console.log('Server running on port 8080.');

var airbrake = new AirbrakeClient({
  projectId: 'Your Project ID',
  projectKey: 'Your Project API Key'
});
```

*For our [full Node example app code](https://github.com/airbrake/airbrake-js/tree/master/examples/nodejs) and more information, please visit our [official GitHub repo](https://github.com/airbrake/airbrake-js).*

