---
layout: classic-docs
title: User hotspots
short-title: User hotspots
categories: [features]
description: User hotspots
---

### What are User hotspots

User hotspots are aggregated data of users who experienced errors with your
app. The aggregation is sorted by the amount of error occurrences that the user
has stumbled upon.

![user hotspots](/docs/assets/img/docs/features/hotspots_user.png)

User hotspots can display:

* name
* email
* user id
* username

Some information may be missing depending on the notifier you use.

### How do User hotspots work

User hotspots are calculated from the `context/user` payload that an Airbrake
report contains. Usually this payload is populated by Airbrake notifiers
automatically, so you don't need to do anything special in order to make User
hotspots work.

However, there are certain circumstances when `context/user` is not populated:

* your notifier doesn't support the feature
* the context of the error doesn't provide user information (e.g. the error
  happened in a worker)
* your application doesn't expose user fields the notifier tries to read (for
  example, `User#email` doesn't exist)

That said, it's still possible to use User hotspots with any notifier that
allows modifying the error before sending it. If you notify Airbrake manually
and have the user in the context, you can attach the user to `context/email`
manually.

Using Ruby:

```ruby
my_user = ... # initialize user

Airbrake.notify('oops') do |notice|
  notice[:context][:user] = {
    id: my_user.id
    name: my_user.name,
    email: my_user.email,
    username: my_user.username,
  }
end
```

Using JavaScript:

```js
my_user = ... # initialize user

airbrake.notify({
  error: err,
  context: {
    user: {
      id: my_user.id
      name: my_user.name,
      email: my_user.email,
      username: my_user.username
    }
  }
});
```

Using Golang:

```go
notice := airbrake.Notice("operation failed", nil, 3)
notice.Context["user"] = map[string]string{
	"id": "1",
	"name": "Kyrylo Silin",
	"email": "kyrylo@example.com",
	"username": "kyrylo",
}
airbrake.Notify(notice, nil)
```
