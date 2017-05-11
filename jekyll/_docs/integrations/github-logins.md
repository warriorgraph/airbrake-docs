---
layout: classic-docs
title: GitHub logins
categories: [integrations]
last_updated: May 8, 2017
description: GitHub Logins
---

## Overview
Airbrake supports using your GitHub account to log in to Airbrake.

## How to link your GitHub account
You can link your GitHub account to your Airbrake account from
[your profile settings page](https://airbrake.io/users/edit).

### Enable GitHub logins
![github logins enabled button](/docs/assets/img/docs/integrations/github_logins_enable_button.png)

You can also enable GitHub logins from the Airbrake login page. To do this,
just select the "Sign in with GitHub" button from the
[login page](https://airbrake.io/login) and follow the instructions.

![github logins sign in page](/docs/assets/img/docs/integrations/github_logins_sign_in_page.png)

## Security options
Airbrake allows you to require that all users in your Airbrake account use
GitHub authentication to log in to Airbrake. When this setting is enabled, no
users in your account will be able to log in using their email and password.
Instead they will be required to use GitHub authentication to sign in.

This option allows users to take advantage of
[GitHub's two factor authentication](https://help.github.com/articles/about-two-factor-authentication/)
to secure their Airbrake accounts.

You can find this option in your
[account security settings](https://airbrake.io/account/security)
