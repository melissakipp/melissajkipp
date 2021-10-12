---
layout: post
title: "A Simple Jekyll Setup with Docker"
date: 2021-10-04 15:09:12 +0000
categories: jekyll
tags: Pinned
author: Melissa Kipp
description: As I was starting my journey to learning to code, I was downloading and installing everything that was recommended. Once it was time for a new computer, I decided to be diligent on keeping it clean and clutter-free.
image: /assets/images/arizona-gallery-2.jpg
image-alt: "Desert flower"
---

![desert flower](/assets/images/arizona-gallery-2.jpg){: .center-img}

As a beginner I was taking several courses on a variety of topics. It seemed
each course wanted to teach you by using different languages and by using
different development approaches for the course’s example projects. Learning
how to use Docker on a basic level has helped keep less clutter on my computer
and help expand my learning path.

[To learn more about Docker](https://docs.docker.com/get-started/)

**Suggested Learning Course:**

- Udemy - [Docker Mastery: with Kubernetes + Swarm from a Docker Captain](https://www.udemy.com/share/101Wek3@zOLvOQI0uRo0dS7jlYFt3X3gKAqQmMcditgCfJKL3Ccn3jdc3MYD1k_dy-SYOIa0/)

Steps To Creating a Dockerfile for a Jekyll Development Environment 1. Create your project folder.

Step 1: $ mkdir <project-name>

Step 2: $ cd <project-name>

Step 3: Run Docker command `$ docker run --rm -v $(pwd):/site bretfisher/jekyll new .`

- TIP: this must be ran in an empty directory, cannot even have any dockerfile/docker-compose files in the directory

Note:

- This install basic necessities to start a Jekyll site.
- `--rm` flag will remove this container once it is done installing the basic Jekyll files.

Step 4: Make sure you are still in the project folder `$ pwd`

Step 5: `$ touch docker-compose.yml`

Step 6: `$ vi docker-compose.yml`

```yaml
version: "2.7"

services:
  jekyll:
    image: bretfisher/jekyll-serve
    volumes:
      - .:/site
    ports:
      - "8080:4000"
```

Step 7: `$ sudo chmod -R 777 .`

Step 8: `$ docker-compose up -d`
_NOTE: I add -d flag so that it runs detach._

**Extra Docker Daily commands (make sure you are in the project folder):**

- `$ docker-compose stop`
- `$ docker-compose start`
- `$ docker-compose restart` Mostly use this command when making changes to \_config.yml
- Once the project is completed `$ docker-compose down -v --rmi all`

**Tip: \_config.yml**

```yaml
exclude:
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
  - Gemfile
  - Gemfile.lock
  - node_modules/
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/
  - docker-compose.yml
```
