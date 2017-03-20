---
layout: classic-docs
title: How to send a percentage of the total errors
categories: [airbrake-faq]
last_updated: March 16, 2017
description: how to send a percentage of the total errors
---

Sometimes you might want to reduce the total amount of errors a project reports.
This could be helpful in cases where a specific project is reporting a large
amount of errors and is contributing to the account reaching its
[rate limit](https://airbrake.io/docs/airbrake-faq/what-is-a-rate-limit/) often.

By only reporting a percentage of errors, you'll hit your plan's rate limit
less often while ensuring that you still receive an accurate sample of your
project's errors. A simple way to do this is to use a random number.

### Example in JavaScript
In this example, we'll use our [JavaScript notifier's `addFilter`
method](https://github.com/airbrake/airbrake-js#filtering-errors) along with a
random number to ignore 1/3 of the errors reported by this project.

```js
airbrake.addFilter(function(notice) {
  // Generate random number between 1 and 3
  var randomNumber = Math.floor(Math.random() * 3) + 1;

  // Ignore error if random number is 1
  if (randomNumber == 1) return null;

  return notice;
});
```

### Example in Ruby

In this example, we'll ignore the same percentage of errors but we'll be using
[our gem's `add_filter`
method](https://github.com/airbrake/airbrake-ruby#airbrakeadd_filter).

```rb
Airbrake.add_filter do |notice|
  # Generate random number between 1 and 3
  random_number = Random.rand(3) + 1

  # Ignore error if random number is 1
  notice.ignore! if random_number  == 1
end
```

There's a ton more you can do with error filtering so check out our notifiers'
[GitHub pages](https://github.com/airbrake) if you want to learn more.
