---
layout: classic-docs
title: Backtrace links to GitHub
categories: [airbrake-faq]
last_updated: Sept 27, 2016
description: backtrace links to GitHub
---

## How do I get lines in my backtraces to link to GitHub?
Airbrake creates links from lines in an error's backtrace by using the
data supplied when you enable
[deploy tracking](/docs/airbrake-faq/deploy-tracking) for your project.

## Deploys create backtrace links
When you use [deploy tracking](/docs/airbrake-faq/deploy-tracking), Airbrake
will create helpful links out of lines in your backtraces that lead to the file,
line, and revision in GitHub or GitLab.

![backtrace link to github](/docs/assets/img/docs/airbrake/backtrace_link_to_github.png)
