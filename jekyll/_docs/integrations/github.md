---
layout: classic-docs
title: GitHub
categories: [integrations]
description: GitHub
---

# Adding the GitHub integration
Create GitHub issues for new Airbrake errors!
This integration allows you to create a GitHub issue from an Airbrake error manually.
You can also set this integration to automatically create a GitHub issue when a new type of error is reported to Airbrake.

## Authenticate with GitHub
Airbrake needs permission to create GitHub issues for your project.

1. Click **Integrations** for your project
2. Click **GitHub**
3. Click the button that says **Redirect to GitHub for authentication**

![github auth](/docs/assets/img/docs/integrations/github_auth.png)

## Add your project's GitHub repo url
For a GitHub user **mmcdaris** who has a repo named **coffee-bot** the GitHub repo URL you would use is:

{% highlight bash %}
https://github.com/mmcdaris/coffee-bot.git
{% endhighlight %}

1. Enter GitHub repo URL
2. Click **Save**

![github repo url](/docs/assets/img/docs/integrations/github_repo_url.png)

## Troubleshooting - 404 error

>Github integration could not connect. Error: 404 - Not Found - Please make sure
the credentials are correct and try again.

If you're seeing this 404 error despite having full access to the repo you're
trying to integrate with, please make sure third-party application access is
granted for the Airbrake application.

You can find this option in your organization's settings page:
https://github.com/organizations/YOUR_ORG_NAME/settings/oauth_application_policy

To enabled third-party access, please click Airbrake then click the "grant"
button. If you do not see this button, go to your personal settings, in the
"third-party access" section, and revoke the Airbrake token and try again.
