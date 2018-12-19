---
layout: classic-docs
title: Installing Airbrake in a Laravel application
short-title: Laravel
categories: [installing-airbrake]
description: Installing Airbrake in a Laravel application
---

![PHPBrake](https://s3.amazonaws.com/document-resources/phpbrakeman.png)

## Overview

[Laravel-airbrake](https://github.com/TheoKouzelis/laravel-airbrake) is the
community created Laravel service provider for [the official Airbrake PHP
package](https://github.com/airbrake/phpbrake).

## Installation

Require via composer:

```
composer require airbrake/phpbrake
```

For Laravel >=5.5 the package will be discoverd. For Laravel <=5.4 add package
to list of service providers in `config/app.php`:

```php
<?php

    //config/app.php

    'providers' => [
        Kouz\LaravelAirbrake\ServiceProvider::class,
    ],
```

Publish and fill out the `config/airbrake.php` file with your `projectId` and
`projectKey`:

```
php artisan vendor:publish --provider="Kouz\LaravelAirbrake\ServiceProvider"
```

## Configuration

The variables `projectId` and `projectKey` are required. Leave the rest empty
to use Airbrake's default values.

```php
  'projectId'     => '',
  'projectKey'    => '',
  'environment'   => env('APP_ENV', 'production'),

  //leave the following options empty to use defaults

  'appVersion'    => '',
  'host'          => '',
  'rootDirectory' => '',
  'httpClient'    => '',
```

For more info, please check out [the official GitHub repo for
laravel-airbrake](https://github.com/TheoKouzelis/laravel-airbrake).
