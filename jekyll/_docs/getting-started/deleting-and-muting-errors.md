---
layout: classic-docs
title: Deleting and muting errors
categories: [features]
description: how to delete and mute errors
---

Errors can be deleted or muted through the Airbrake UI. In each error overview
you'll see buttons you can use to either delete the error or mute the error.

Error muting is available on [all paid plans](https://airbrake.io/pricing).

![delete and mute buttons](/docs/assets/img/docs/features/mute-delete-buttons.png)


## Deleting an error

Deleting an error will permanently remove that error. Deleted errors can not be
recovered. If you receive a new occurrence of a deleted error, it will create a
new error group and you will be notified.

Deleting an error can also be done via our API. Check out our
[API docs](https://airbrake.io/docs/api/#delete-group-v4) to learn more.

## Muting an error

Muting an error will prevent notifications from being sent for that error but
the error will be visible on your dashboard and marked as muted. Muted errors
can be unmuted.

![muted error indicator](/docs/assets/img/docs/features/mute-delete-indicator.png)

Muting and unmuting an error can also be done via our API. Check out our
[API docs](https://airbrake.io/docs/api/#mute-group-v4) to learn more.
