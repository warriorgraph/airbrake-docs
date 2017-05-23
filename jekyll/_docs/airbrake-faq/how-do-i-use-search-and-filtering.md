---
layout: classic-docs
title: How do I use search and filtering
categories: [airbrake-faq]
description: how do I use search and filtering
---
![Search Box](/docs/assets/img/docs/airbrake/search_box.png)

Search and filtering are available in one easy-to-use search box. Switch between "Resolved" and "Unresolved" errors, search, and filter all in one place.

## Search Input

![Search Input](/docs/assets/img/docs/airbrake/search_input.png)

Start typing in the search box and see your results update in real-time. The input at the top of your error list supports text searches for:

- Error type
- Error message
- Filename
- Environment

## Advanced Filtering

![Advanced Filtering](/docs/assets/img/docs/airbrake/advanced_filtering.png)

Advanced filtering options allow for further narrowing of results. These options are shown as suggestions beneath the search input and will autocomplete as you type.

- **Environment**: e.g. Production, Staging, QA, etc.
- **Component**: The controller the error occurred in
- **Action**: The controller method the error occurred in
- **Deploy**: Set up using [Deployment Tracking](/docs/deploy-tracking)
- **Before**: Shows all groups with last occurrence before a specific date
- **After**: Shows all groups with last occurrence after a specific date
- **On**: Shows all groups with last occurrence on a specific date
- **File**: The file associated with the error
- **Muted**: Shows all muted/unmuted errors
- **Hostname**: The hostname associated with the error
- **RemoteAddr**: The remote address where the error occurred

*Note: You'll only see an option to filter if you are sending the data. E.g. If you don't have [Deployment Tracking](/docs/deploy-tracking) set up, you won't see the filter by deploy option.*

## Sort by options
![sort by options](/docs/assets/img/docs/airbrake/sort_options.png)

Sort by options include:

- **Last notice occurrence**: Sorts by most recent notice
- **Notice count**: Sorts by the number of notices in an error group
- **Creation date**: Sorts by error group creation date
- **Error Weight**: Sorts by recent error impact based on traffic distribution and density
