---
layout: classic-docs
title: Installing Airbrake in a React application
short-title: React
categories: [installing-airbrake]
description: Installing Airbrake in a React application
---

![](https://s3.amazonaws.com/document-resources/jsbrakeman.png)

{% include_relative airbrake-js/features.md %}

{% include_relative airbrake-js/installation.md %}

## Configuration

After you have installed the [airbrake-js notifier](https://github.com/airbrake/airbrake-js)
the next step is configuring Airbrake in your app. You need to set up an
[`errorBoundary` component](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)
and initialize an `AirbrakeClient`. Be sure to replace the values for
`projectId` and `projectKey` with the real values from your project's settings
page.

```js
import AirbrakeClient from 'airbrake-js';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.airbrake = new AirbrakeClient({
      projectId: 1,       // replace with actual project id
      projectKey: 'FIXME' // replace with actual project api key
    });
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // Send error to Airbrake
    this.airbrake.notify({
      error: error,
      params: {info: info}
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

After that you can use your new `errorBoundary` component.

```html
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

For more details on error handling please visit [error handling in react 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html).

{% include_relative airbrake-js/going-further.md %}
