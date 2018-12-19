---
layout: classic-docs
title: Installing Airbrake in a Java application
short-title: Java
categories: [installing-airbrake]
description: Installing Airbrake in a Java application
---

![java flag](/docs/assets/img/docs/java_flag.jpeg)

### Step 1: Install

#### Install option 1: Maven
Add the javabrake dependency through your IDE or directly to your `pom.xml` file:

```xml
<dependency>
  <groupId>io.airbrake</groupId>
  <artifactId>javabrake</artifactId>
  <version>0.1.3</version>
  <type>pom</type>
</dependency>
```

#### Install option 2: Gradle
Add javabrake to your Gradle dependencies:

```
compile 'io.airbrake:javabrake:0.1.3'
```

#### Install option 3: Ivy
Add javabrake to your Ivy dependencies:

```xml
<dependency org='io.airbrake' name='javabrake' rev='0.1.3'>
  <artifact name='javabrake' ext='pom'></artifact>
</dependency>
```

### Step 2: Configuration

Copy this configuration snippet into your Java app.

```java
import io.airbrake.javabrake.Notifier;

int projectId = YOUR_PROJECT_ID;
String projectKey = "YOUR_PROJECT_API_KEY";
Notifier notifier = new Notifier(projectId, projectKey);

notifier.addFilter(
    (Notice notice) -> {
      notice.setContext("environment", "production");
      return notice;
    });
```

Example of reporting a caught exception:

```java
try {
  do();
} catch (IOException e) {
  notifier.report(e);
}
```

Visit our [official GitHub repo](https://github.com/airbrake/javabrake) for advanced information and integrations like [log4j](https://github.com/airbrake/log4javabrake), [log4j2](https://github.com/airbrake/log4javabrake2), and [logback](https://github.com/airbrake/logback).
