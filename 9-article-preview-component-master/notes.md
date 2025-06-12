# Notes

## In, <time> use ISO format for better parsing and accessibility

```html
<div class="card__details">
  <p class="card__author-name">Michelle Appleton</p>
  <!-- <time class="card__date" datetime="28-06-2020">28 Jun 2020</time> -->
  <!-- Use ISO format for better parsing and accessibility: -->
  <time class="card__date" datetime="2020-06-28">28 Jun 2020</time>
</div>
```

## Specifying a uniform font size for `<h1>`

Before May 2025, the HTML standard specified that `<h1>` elements in a `<section>, <article>, <aside>, or <nav>` element should render as an `<h2>` (smaller font-size with an adjusted margin-block), or as an `<h3>` if nested another level, and so on. This special context-dependent default style has now been removed.

Refer this [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements#specifying_a_uniform_font_size_for_h1).

