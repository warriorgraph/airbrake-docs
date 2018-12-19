---
layout: classic-docs
title: Code Insights
categories: [features]
description: Code Insights
---

## Why use Code Insights?

Code Insights uses data from your version control service (GitHub, GitLab, and
Bitbucket are supported) to show you how your code changes affect your
application's errors and quality.

With Code Insights you will be able to see a diff snapshot for each deploy on
your deploy dashboard. Diff snapshots include: deployed pull requests, total
number of changed files, total code additions, total code deletions, along with
the individual code changes, additions, and deletions for each file:

![diff snapshot](/docs/assets/img/docs/features/diff_snapshot.png)

In addition to Code Insights for deploys, you will be able to see the aggregated
git data on your project dashboard which will show you the total number of
additions and deletions for the last week and the most changed and touched files
across your project:

![code insights](/docs/assets/img/docs/features/code_insights_project_dash.png)

With Code Insights you can quickly identify the change that introduced new
errors, problematic files which were changed or touched more often and much more.

## What is collected?

As part of Code Insights, we collect this data for each specific deploy
revision comparison:
- Total number of additions and deletions
- File changes
- Filenames
- Number of additions and deletions for each changed file
- Deployed pull request numbers and titles

## How do you enable Code Insights?

Airbrake supports Code Insights for the following integrations:

* [GitHub integration](/docs/integrations/github)
* [GitLab integration](/docs/integrations/gitlab)
* [Bitbucket integration](/docs/integrations/bitbucket)

To be able to collect Code Insights you have to set up [deploy tracking](
/docs/features/deploy-tracking) and one of the above-mentioned integrations. If
you've already done that, then you should be all set.

P.S. In case you don't want us to collect that data, you can disable it in the
integration's page:

![code insights setting](/docs/assets/img/docs/features/code_insights_collection_setting.png)
