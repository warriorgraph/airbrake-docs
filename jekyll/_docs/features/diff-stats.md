---
layout: classic-docs
title: Diff Stats
categories: [features]
description: Diff Stats
---

## Why collect Diff Stats?

With Diff Stats you will be able to see a diff snapshot for each deploy on
your deploy dashboard. Diff snapshots include: deployed pull requests, total
number of changed files, total code additions, total code deletions, along with
the individual code changes, additions, and deletions for each file:

![diff snapshot](/docs/assets/img/docs/features/diff_snapshot.png)

In addition to Diff Stats for deploys, you will be able to see the aggregated
git data on your project dashboard which will show you the total number of
additions and deletions for the last week and the most changed and touched files
across your project:

![diff stats](/docs/assets/img/docs/features/diff_stats_project_dash.png)

With Diff Stats you can quickly identify the change that introduced new
errors, problematic files which were changed or touched more often and much more.

## What is collected?

As part of Diff Stats, we collect this data for each specific deploy
revision comparison:
- Total number of additions and deletions
- File changes
- Filenames
- Number of additions and deletions for each changed file
- Deployed pull request numbers and titles

## How do you start collecting Diff Stats?

Airbrake supports diff stat collection for the following integrations:

* [GitHub integration](/docs/integrations/github)
* [GitLab integration](/docs/integrations/gitlab)
* [Bitbucket integration](/docs/integrations/bitbucket)

To be able to collect Diff Stats you have to set up [deploy tracking](
/docs/features/deploy-tracking) and one of the above-mentioned integrations. If
you've already done that, then you should be all set.

P.S. In case you don't want us to collect that data, you can disable it in the
integration's page:

![diff stats setting](/docs/assets/img/docs/features/diff_stats_collection_setting.png)
