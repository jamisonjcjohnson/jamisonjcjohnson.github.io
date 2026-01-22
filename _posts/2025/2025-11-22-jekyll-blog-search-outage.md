---
title: Jekyll Blog Search Outage — Root Cause and Fix
layout: post
date: '2026-11-22'
description: A postmortem of a Jekyll blog search outage caused by missing JavaScript dependencies and incorrect script load order.
intro: "The search feature on a Jekyll blog silently failed — no errors, no overlay, and no results. The issue turned out to be a classic JavaScript dependency and load-order problem that broke the search UI without breaking the page."
lang: en_US
image: "/static/assets/img/blog/2025/jekyll-blog-search-outage/jekyll-blog-search-outage.jpg"
keywords: jekyll,blog search,javascript,jquery,postmortem,web troubleshooting
categories:
- Other
tags:
- jekyll
- javascript
- troubleshooting
- postmortem
icon: fa-search
---

Search outages are some of the most frustrating issues on content-driven sites. Pages load, links work, and nothing appears obviously broken — yet a core feature silently fails.

In this blog post, we will document a real-world **Jekyll blog search outage**, explain how it was diagnosed, and walk through the exact fix that restored full search functionality.

<br>

* TOC
{:toc}

<br>

## Issue Overview

The blog search feature stopped working entirely. Clicking the search icon in the bottom-right corner either did nothing or displayed an empty overlay with no results.

There were no visible page errors and no immediate JavaScript failures reported at first glance.

<br>

## Symptoms Observed

The following behaviors were confirmed during investigation:

- Clicking the search icon produced no visible response
- The search overlay failed to open or opened without results
- Initial DevTools inspection showed no obvious search-related console output
- After manually adding the search script, the console reported:
  - **Uncaught ReferenceError: $ is not defined**

That error strongly suggested a missing JavaScript dependency.

<br>

## Root Cause

The search overlay HTML exists in:

- `_includes/blog_header.html`

However, the JavaScript responsible for powering the overlay — including click handlers, keyboard shortcuts, and typeahead initialization — lives in:

- `static/js/search.js`

At some point, `search.js` was no longer being loaded on pages that rendered the search overlay. As a result:

- No event handlers were attached to the search icon
- The overlay could not open or close
- Typeahead search against `search.json` was never initialized

When `search.js` was manually reintroduced, it failed because it depended on jQuery (`$`), which was either not loaded yet or not included at all due to script ordering.

<br>

## Investigation Notes

Several checks were performed using browser DevTools:

- `typeof jQuery` returned **"function"** once the correct bundles were loaded
- `jQuery.fn.typeahead` existed after the blog JavaScript bundle loaded
- The Network tab confirmed `static/js/search.js` was not initially requested
- After adding `search.js`, the `$ is not defined` error confirmed a load-order issue

Additional validation:

- `https://jamisonjohnson.me/search.json` returned HTTP 200 with valid JSON
- `https://jamisonjohnson.me/blog/search.json` returned 404

This confirmed the site was being served from the domain root (`/`) and not from a `/blog` baseurl path.

<br>

## Fix Applied

The fix required explicitly restoring the JavaScript dependency chain and ensuring proper load order.

The following scripts were added to `_includes/head.html`:

- Main application bundle (includes jQuery)
- Blog JavaScript bundle (includes typeahead)
- Search overlay logic script

In the correct order:

- **{{ '/static/assets/app-20190620.min.js' | relative_url }}**
- **{{ '/static/assets/blog-20190620.min.js' | relative_url }}**
- **{{ '/static/js/search.js' | relative_url }}**

Loading `search.js` *after* the main bundles ensured all required dependencies were available.

<br>

## Final Working State

Search functionality was confirmed restored when all of the following were true:

- The page loads:
  - `/static/assets/app-20190620.min.js`
  - `/static/assets/blog-20190620.min.js`
  - `/static/js/search.js`
- `search.json` returns valid content from the site root
- Clicking the search icon opens the overlay
- Typing produces live search suggestions
- Keyboard shortcuts function as expected

<br>

## Conclusion

This outage was caused by a missing and incorrectly ordered JavaScript dependency chain. The search UI existed in the DOM, but the script responsible for binding behavior and initializing search was not loaded — and when it was added, it depended on jQuery being loaded first.

The resolution was to explicitly include `static/js/search.js` after the main JavaScript bundles and use `relative_url` to avoid path-related issues.
