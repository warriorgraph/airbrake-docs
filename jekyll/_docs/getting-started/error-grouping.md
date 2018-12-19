---
layout: classic-docs
title: Error grouping
categories: [getting-started]
description: How Airbrake groups errors
---

Airbrake groups errors by looking at a few specific parameters like the error
message and the file where the error occurred. Errors will be grouped together
if they share:

- **Error type** (eg: `SyntaxError`)
- **Error message** with data fields extracted (see [structured
  logging](/docs/features/structured-logging)) (eg: `illegal character`)
- **Function** (eg: `someFunctionName`)
- **File** (eg: `src/controllers/something-controller.js`)
- **Environment** (eg: `production`)
