---
title: Adding Search to Jekyll Site
layout: post
date: '2024-05-29'
description: We'll walk through the process of setting up Jekyll Instant Search.
intro: "By leveraging client-side technologies and adhering to best practices, you can achieve fast and reliable search functionality without compromising the simplicity and elegance of the Jekyll framework."
lang: en_US
image: "/static/assets/img/blog/2024/adding_search_to_jekyll_site/adding_search_to_jekyll_site.jpg"
keywords: jekyll,website,html,json
categories:
- Other
tags:
- jekyll
- website
- html
- json
icon: fa-magnifying-glass
---

Implementing search functionality in a Jekyll-based website presents a unique challenge due to its lack of server-side execution. However, with a clever workaround, you can enable lightning-fast search capabilities for your Jekyll site using client-side techniques.

In this guide, we'll walk through the process of setting up Jekyll Instant Search, a powerful search feature that allows users to quickly find relevant content on your site. By leveraging JSON (JavaScript Object Notation) and simple scripting, we'll transform your Jekyll data into a searchable format without the need for complex backend infrastructure.

<br>

* TOC 
{:toc}

<br>

## How to implement Jekyll Instant Search

Since Jekyll has no server side execution, we have to rely on storing all the required content in a single file and search our keyword from that file.

We will be creating a JSON file in which we will store page title, page link, category, tags, description(if needed) etc., JSON(JavaScript Object Notation) is a human readable way to store data in key-value pairs(it can take other forms as well).

<br>

### Step 1 - Create a JSON file


Create a file in the root of your Jekyll blog and name it `search.json`. Now, copy the code [here](https://raw.githubusercontent.com/jamisonjcjohnson/jamisonjcjohnson.github.io/master/search.json) and save it.


What it does is that it converts your Jekyll data from all the posts and puts it as key value pair which can then be easily read by a search script.

<br>

### Step 2 - Save the search script

Save the search script available [here](https://raw.githubusercontent.com/jamisonjcjohnson/jamisonjcjohnson.github.io/master/search-script.js) and save it as `search-script.js` (or any name that you prefer) on the root of your repo.

<br>

### Step 3 - Create a Jekyll search page

Create a page with the name `search.html` and add the following in it :

```html
<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="search blog...">
<ul id="results-container"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="/path/to/search-script.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>
```

Now your search is ready! Now when you navigate to `yourwebaddress/search`, you will see your new search page. Try to type something in the input field and see if it fetches any result.

If the search doesn’t work then use inspection » console option on chrome browser to see what the error was. Many times the JSON created will be invalid because of some special character.

There are many other configurations that can be tweaked. Please visit [this repository](https://github.com/christian-fei/Simple-Jekyll-Search) to know more.

<br>

## Conclusion

With these three simple steps, you can empower your Jekyll website with instant search capabilities, enhancing user experience and enabling efficient content discovery. By leveraging client-side technologies and adhering to best practices, you can achieve fast and reliable search functionality without compromising the simplicity and elegance of the Jekyll framework.


