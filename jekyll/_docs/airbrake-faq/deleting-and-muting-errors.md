---
layout: classic-docs
title: Deleting and muting errors
categories: [airbrake-faq]
description: how to delete and mute errors
---
Errors can be deleted or muted through the Airbrake UI. In each error overview
you'll see buttons you can use to either delete the error or mute the error.

![delete and mute buttons](/docs/assets/img/docs/airbrake/mute-delete-buttons.png)

- Deleting an error will permanently remove that error. Deleted errors can not be
recovered. If you receive a new occurrence of a deleted error, it will create a 
new error group and you will be notified.
- Muting an error will prevent notifcations from being received for that error
but the error will be visible on your dashboard and marked as muted. Muted
errors can be unmuted.

![muted error indicator](/docs/assets/img/docs/airbrake/mute-delete-indicator.png)
