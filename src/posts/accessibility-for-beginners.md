---
layout: post
title: "Accessibility for Beginner"
date: 2021-10-06 15:09:12 +0000
categories: a11y
tags: Pinned
author: "Melissa Kipp"
description: >
  We can influence the future of the web. Web development is not only about learning syntax. It is about how the website will be used by the end user. The site should be usable to as many people as possible.
image: /assets/images/arizona-gallery-1.webp
image_alt: "Desert flower"
---

![desert flower](/assets/images/arizona-gallery-1.webp){: .center-img}

## Writing with Assistive Technology in Mind

There are many elements that go into making a website accessible. As someone with dyslexia I come to enjoy the availability of tools to make daily task run smoother. A frequent problem for beginners is to rush over the subject of Semantic HTML. After a year of studying, I realized I was not writing the best code for accessible content. Even though I was enthusiastic about the topic, I had lost my way. An essential notion to keep in mind is that not everyone is here to teach you about accessibility. For example, when you run into a problem and go searching for a solution. The solutions that you find are small parts to the final code. The sample code is not a perfect snippet of code. The goal of the solution is to give coders a piece of the puzzle. It is our responsibility to put in the details so that it delivers accessible content.

> "The power of the Web is in its universality.
> Access by everyone regardless of disability is an essential aspect.
> -- <cite> Tim Berners-Lee, W3C Director, and inventor of the World Wide Web <cite>

## Where can you find documentation?

Accessible Rich Internet Application (WAI-ARIA) 1.0

- https://www.w3.org/TR/wai-aria/
- How to use ARIA - https://www.w3.org/TR/aria-in-html/

A list of tips that I have picked up along the way:

- Use headings to outline your content
  - **Suggestion**: Create an outline of your site. Also break down your components and markup content in a hierarchical format.
- Using Alternate descriptions or not
- Be descriptive when necessary
- Use plain language
  - Sites I like to use:
    - https://hemingwayapp.com/
    - https://datayze.com/readability-analyzer
    - https://readabilityformulas.com/free-readability-formula-tests.php
    - https://juicystudio.com/services/readability.php#readintro
- Plan for testing for visual, auditory, motor, and cognitive
  - An automated test – [Tenon API](https://tenon.io) with a free plan
  - [W3C validator](validator.w3.org)
  - [WebAIM’s WAVE browser extension](https://wave2.webaim.org/)
  - Color Contrast Checker by [Color Oracle](https://colororacle.org/)
  - Readability (see above resources in ‘Use plain language’)
  - Manual testing with JAWS or NVDA

On the surface, accessibility seems overwhelming, but developers should start small and build of over time. As a designer and developer, I am still working on this improvement. Our responsibility is to make the web usable for everyone because this is a topic that concerns all of us.