---
layout: post
title: "Sass Not Compiling"
date: 2021-10-02 15:09:12 +0000
categories: stylesheets
tags: Pinned
author: Melissa Kipp
description: >
  These are some errors I came across when learning Sass. As a beginner, the current list of projects that I have used Sass in development are my personal portfolio site using Jekyll and NodeJS.
image: /assets/images/arizona-gallery-5.webp
image_alt: "Desert flower"
---

![desert flower](/assets/images/arizona-gallery-5.webp){: .center-img}

Being a newbie, there has been some head banging frustrations along the way, but with every obstacle there is always light at the end of the tunnel.

## Common Causes of Sass Compiling Problems

I had to stop the server and restart it when…

- Blank element or property
- A syntax error in Sass file
- @import partials sass files without having the proper file name.

## Blank Element or Property

Leaving a property will cause the compiling to stop with or without an error.
Error:
Blank element

![Blank Elements](/assets/images/1-error-a.webp){:class="screenshot"}
![Commenting out property](/assets/images/1-error-b.webp){:class="screenshot"}
![Empty property](/assets/images/1-error-c.webp){:class="screenshot"}

### Solution:

Comment the property entirely or delete.

![Remove or comment out entire element](/assets/images/1-solution-a.webp){:class="screenshot"}

## Syntax Error

Any CSS or Sass syntax error will stop the compiling process, so don’t forget the semicolons.

### Solution:

Install Prettier to help with small and common mistakes.

## @import partials

Importing as been a bit confusing for me but as I have learned the wrong and right way to handling partials in Jekyll and in a simple setup with just VS Code.

   <!-- Read more about Jekyll and Sass setup here (add link to blog post) -->

## Visual Studio Code

Extension Install Requirements:

- Live Server
- Live Sass Compiler

### Error:

When using Live Server to preview your work in a browser and you also want to use Sass. The Live Sass Compiler extension is very helpful. A mistake that I had made when working with partials is that I didn’t have the underscore before the partial file.

### Solution:

What I was trying to do is make a partial Sass with the header CSS (./sass/partials/header.scss) and then importing it into the homepage Sass file (./sass/homepage.scss).

When you are importing a file into another you must have a '\_' (underscore) in front of the partial file.

![Jekyll Sass File Stucture](/assets/images/3-solution-a.webp){:class="screenshot"}
![Importing into another file](/assets/images/3-solution-b.webp){:class="screenshot"}

_Note: the file extension is not necessary._

### Another Example:

`_base.scss` imported into `_header.scss files` (note: base and header files are in the same folder).

![Imporing one file into another that are not in the same folder](/assets/images/3-solution-c.webp){:class="screenshot"}

#### Conclusion:

To be continue…