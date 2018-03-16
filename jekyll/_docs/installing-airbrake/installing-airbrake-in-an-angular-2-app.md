---
layout: classic-docs
title: Installing Airbrake in an Angular 2 application
short-title: Angular 2
categories: [installing-airbrake]
description: Installing Airbrake in an Angular 2 application
---

![](https://s3.amazonaws.com/document-resources/jsbrakeman.png)

{% include_relative airbrake-js/features.md %}

{% include_relative airbrake-js/installation.md %}

## Configuration

### Create an error handler
The first step is to create an error handler with an `AirbrakeClient`
initialized with your `projectId` and `projectKey`. Your `projectId` and
`projectKey` are available on your project's settings page. In this example the
handler will be in a file called `error_handler.ts`.

```ts
// contents of error_handler.ts
import { ErrorHandler } from '@angular/core';
import AirbrakeClient from 'airbrake-js';

export class AirbrakeErrorHandler implements ErrorHandler {
  airbrake: AirbrakeClient;

  constructor() {
    this.airbrake = new AirbrakeClient({
      projectId: 1,
      projectKey: 'FIXME'
    });
  }

  handleError(error: any): void {
    this.airbrake.notify(error);
  }
}
```


### Add the error handler to your `AppModule`

The last step is adding the `ErrorHandler` to your `AppModule`, then your app
will be ready to report errors to Airbrake.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { AirbrakeErrorHandler } from './error_handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: ErrorHandler, useClass: AirbrakeErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

{% include_relative airbrake-js/going-further.md %}
