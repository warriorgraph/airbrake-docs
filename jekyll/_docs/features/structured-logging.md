---
layout: classic-docs
title: Structured logging
categories: [features]
description: Sending structured text data
---

To improve grouping and aggregation of errors it is strictly advised to use machine readable format in error messages. Airbrake supports 2 main formats:

- JSON appearing anywhere in error message, for example `User not found {"id":123,"email":"support@airbrake.io"}`.
- `key=value` pairs, for example `User not found id=123 email="support@airbrake.io"`.

In both variants Airbrake extracts data from error message and saves it in `context.messageParams` field, which can be used later for aggregation.

Besides that error messages like `User 123 with email support@airbrake.io not found` are also parsed properly, but it is much less reliable way to send structured data.
