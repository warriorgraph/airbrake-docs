---
layout: classic-docs
title: Installing Airbrake in a Swift app
short-title: Swift
categories: [installing-airbrake]
description: Installing Airbrake in a Swift app
---

### Features
- Captures unhandled exceptions and several unix signals
- Reject exceptions from earlier app versions
- Separate exceptions based on application environment
- Attach custom environment variables
- Supports custom exception logging

### Running the notifier in Swift as framework

First you will want to add `Airbrake-iOS` to the podfile:

```pod
use_frameworks!
pod 'Airbrake-iOS'
```

Next add `import Airbrake_iOS` in your app delegate (if you run into issue with
build, please refer to issue
[#58](https://github.com/airbrake/airbrake-ios/issues/58))

Finally, set up the ABNotifer in your app delegate at the beginning of your

`func application(application: UIApplication!, didFinishLaunchingWithOptions launchOptions: NSDictionary!) -> Bool {` block.

You can find your `PROJECT ID` and `PROJECT API KEY` from your project's settings:

```swift
ABNotifier.startNotifierWithAPIKey(
  "<Your PROJECT API KEY>",
  projectID: "<Your PROJECT ID>",
  environmentName: ABNotifierAutomaticEnvironment,
  useSSL: true
);
```

And you're good to go.

If you prefer, we also have instructions on [running the notifier in Swift as static
library](https://github.com/airbrake/airbrake-ios/#running-the-notifier-in-swift-as-static-library)
and [installing directly from source
code](https://github.com/airbrake/airbrake-ios#directly-from-source-code)


### Going further
Please visit the [official GitHub repo](https://github.com/airbrake/airbrake-ios) for more information on
[signals](https://github.com/airbrake/airbrake-ios/#signals),
[symbolication](https://github.com/airbrake/airbrake-ios/#symbolication),
[rejecting errors from earlier app
versions](https://github.com/airbrake/airbrake-ios/#versioning), [attaching
custom environment
variables](https://github.com/airbrake/airbrake-ios/#environment-variables) and
more.
