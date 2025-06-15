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


## Single share button instead of two:

- It is possible to use only 1 share button instead of using a duplicate share button inside card__social-links-box.

## **Problem**: On screen widths >600px, .card__social-links-box (the social sharing popup) is not popping out over .card__footer and seems to be hidden.

###  Why position: relative on .card__footer wasn’t enough

Even though you had:

```scss
.card__footer {
  position: relative;
}
```

`.card__social-links-box` is a child of `.card__footer`, so it was being positioned relative to `.card__footer` — but that was also constrained by `.card`'s default `overflow: hidden` (or layout context).

So unless the outer container (`.card`) allows overflow and sets positioning, it’ll prevent the popup from appearing properly.

### Solution:

```css

.card {
    position: relative;
    overflow: visible;

    .card__social-links-box {
      position: absolute;
      left: 310px;
      top: -50px;
      width: fit-content;
      height: auto;
      border-radius: 0.5rem;
    }

    .card__social-links-box::after {
      content: "";
      position: absolute;
      right: 40%;
      bottom: -0.5rem;
      height: 0;
      width: 0;
      border-top: 0.5rem solid var(--gray-900);
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
    }
  }

  ```

- This does two important things:

`position: relative`
→ Makes .card the positioning context (aka containing block) for absolutely positioned children, like .card__social-links-box.
→ Now the top: -70px shifts the box relative to .card, not some ancestor or default context.

`overflow: visible`
→ Ensures that if .card__social-links-box overflows .card’s boundaries (e.g. pops above it), it won’t get clipped.
→ Without this, some browsers might clip or hide overflowing content.

## declaration-property-unit-disallowed-list:

- Consider using relative units (em, rem) instead of absolute units (px, pt) to support resizing and improve accessibility.
<br>*Incorrrect:*<br>
`font-size: 13px;`

## no-duplicate-selectors:

- Consolidate duplicate selectors to maintain an organized and efficient stylesheet.

## frontend-mentor/use-logical-properties

- Use logical properties (e.g., `inline-start` instead of `left`) to support different reading directions and improve internationalization.
<br>*Incorrect:*<br>
`margin-left: 2rem;`

## frontend-mentor/encourage-css-functions

- Consider using CSS functions like calc(), min(), and clamp() to create more responsive and flexible layouts that adapt to different viewport sizes.
The following can be improved:<br>
`font-size: 13px;`

## frontend-mentor/encourage-css-variables

- Use CSS custom properties (variables) to centralize values, improve consistency, and make site-wide changes easier to implement.
<br>*Incorrect:*<br>
`background-color: #fff;`

## media-feature-range-notation

- Consider using prefix notation for media queries (e.g., min-width: instead of width >=) for better browser compatibility. 
<br>*Incorrect:*
```css
@media screen and (width >= 480px) {
  article {
    max-width: 480px;
  }
```


## Margin

- Use logical properties (e.g., inline-start instead of left) to support different reading directions and improve internationalization

Physical property	-----  Logical property <br>
margin-top----------------margin-block-start <br>
margin-bottom	------------margin-block-end <br>
margin-left	--------------margin-inline-start <br>
margin-right--------------margin-inline-end <br>