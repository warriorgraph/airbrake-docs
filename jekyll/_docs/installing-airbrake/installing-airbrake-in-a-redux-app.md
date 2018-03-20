---
layout: classic-docs
title: Installing Airbrake in a Redux application
short-title: Redux
categories: [installing-airbrake]
description: Installing Airbrake in a Redux application
---

![](https://s3.amazonaws.com/document-resources/jsbrakeman.png)

{% include_relative airbrake-js/features.md %}

## Installation

```
npm install airbrake-js redux-airbrake --save
```

## Configuration

After you have installed the [airbrake-js notifier](https://github.com/airbrake/airbrake-js)
and the [redux-airbrake middleware](https://github.com/alexcastillo/redux-airbrake),
the remaining steps are to import the dependencies and configure the middleware.

### Import dependencies

```js
import AirbrakeClient from 'airbrake-js';
import airbrakeMiddleware from 'redux-airbrake';
```

### Configure the `AirbrakeClient` and middleware

```js
const airbrake = new AirbrakeClient({
    projectId: '******',         // replace with actual project id
    projectKey: '**************' // replace with actual project api key
});

const errorMiddleware = airbrakeMiddleware(airbrake);

export const store = createStore(
    rootReducer,
    applyMiddleware(
        errorMiddleware
    )
);

export default store;
```

The [redux-airbrake middleware](https://github.com/alexcastillo/redux-airbrake)
also supports additional options like
[sending last action & state to Airbrake](https://github.com/alexcastillo/redux-airbrake#sending-last-action-and-store-state-to-airbrake)
and
[Adding extra details to errors before they are sent](https://github.com/alexcastillo/redux-airbrake#adding-notice-annotations-optional).

{% include_relative airbrake-js/going-further.md %}

