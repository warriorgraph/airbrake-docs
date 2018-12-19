---
layout: classic-docs
title: Installing Airbrake in a Rack app
short-title: Rack
categories: [installing-airbrake]
description: Installing Airbrake in a Rack app
---

![ruby flag](/docs/assets/img/docs/ruby_flag.jpeg)

### Features
* Simple to install and configure
* Automatic reporting of unhandled exceptions
* Ignore specific errors and filter out sensitive information
* Append information from Rack requests

View the full list of features [on GitHub](https://github.com/airbrake/airbrake-ruby#introduction).

### Install with bundler

Add the Airbrake Ruby gem to your Gemfile and run `bundle install`:

```ruby
gem 'airbrake'
```

### Manual installation

Invoke the following command from your terminal:

```bash
gem install airbrake
```

### Configuration

To send exceptions to Airbrake from any Rack application, simply `use` our Rack
middleware, and configure with your `PROJECT ID` and `PROJECT API KEY` available
from [your project's settings
page](https://github.com/airbrake/airbrake-ruby#config-options).

```ruby
require 'airbrake'

Airbrake.configure do |c|
  c.project_id = '<Your PROJECT ID>'
  c.project_key = '<Your PROJECT API KEY>'
end

use Airbrake::Rack::Middleware
```

**Note:** be aware that by default the library doesn't filter any parameters,
including user passwords. To filter out passwords [add a
filter](https://github.com/airbrake/airbrake-ruby#airbrakeadd_filter).


### Going further
For advanced configuration options like
[ignoring errors with
`add_filter`](https://github.com/airbrake/airbrake-ruby#airbrakeadd_filter),
[appending info from Rack
requests](https://github.com/airbrake/airbrake#appending-information-from-rack-requests),
[configuring multiple notifiers for
subprojects](https://github.com/airbrake/airbrake#configuring-individual-notifier-for-each-subproject),
and more please visit the
[airbrake-ruby](https://github.com/airbrake/airbrake-ruby) and
[airbrake](https://github.com/airbrake/airbrake#rack) GitHub repos.
