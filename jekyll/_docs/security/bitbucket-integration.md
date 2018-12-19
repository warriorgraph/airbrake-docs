---
layout: classic-docs
title: Bitbucket integration
categories: [security]
description: Bitbucket integration
---
> **NOTE:** This doc is only for on-premise installations. [See Bitbucket
> integration doc for our cloud service](/docs/integrations/bitbucket).

Adding the Airbrake-Bitbucket integration will create Bitbucket issues for new
Airbrake errors.
The default behaviour is to automatically create a Bitbucket issue when a new
type of error is reported to Airbrake, this can be turned off if you prefer to
create a Bitbucket issue from an Airbrake error manually.

### Add Bitbucket authentication
Airbrake needs permission to create Bitbucket issues for your project, our next
step is to configure authentication settings.

From your [profile settings](https://bitbucket.org/account) inside the Bitbucket
create a new App password.

![bitbucket
app pwd](/docs/assets/img/docs/integrations/bitbucket-app-password.png)

Enter **Airbrake** as a label name and make sure to give it read and write issue
access. Copy your created App password as you will need it in the next step.

![bitbucket app pwd access
scope](/docs/assets/img/docs/integrations/bitbucket-app-password-access-scope.png)


### Add Bitbucket integration
Enter your Bitbucket username and paste newly created App password from
the previous step. Click on the **Save** button.

![bitbucket auth
settings](/docs/assets/img/docs/integrations/on-premise-bitbucket-auth-settings.png)

Add your Bitbucket account name and project's repository name then click on the
**Save** button.

![bitbucket int
settings](/docs/assets/img/docs/integrations/on-premise-bitbucket-int-settings.png)
