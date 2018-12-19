---
layout: classic-docs
title: When is data removed from Airbrake
categories: [security]
description: when is data removed from Airbrake
---

In order to reduce space consumed by old or redundant data Airbrake may remove
backtraces and extra request information from individual error occurrences. If
data is removed, the Rails environment name, error class, error message, file,
controller, action, and date are preserved.  When information has been removed,
you will see information message that reads:

> "Some information on the occurrence of this error has been removed from the
database."

Airbrake deletes this information based on your plan's retention period.
