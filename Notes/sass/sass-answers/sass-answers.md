I am not sure why CSS variables in abstracts/_variables.scss file 
are directly accessible to all files in components folder 
without mentioning @use in any of those files?

Ans:

Great question — this often confuses developers transitioning to `@use` and modular SCSS architecture.

### Here's why CSS variables work without explicit `@use`:

#### ✅ CSS Variables (`--var-name`) live in actual CSS

* CSS variables are not SASS variables (like `$color-primary`). Instead, they are compiled into the **root** of your CSS — often via `:root { --var-name: value; }`.
* Once compiled, they become **global in scope** and are accessible anywhere in your stylesheets (regardless of file or module separation), as long as they’re defined early enough in the compiled CSS.

#### 🧩 Why they work without `@use`

* `@use` is only required for **SASS variables, mixins, and functions**.
* Since CSS variables are part of the final CSS output (not part of SCSS logic), they behave like normal CSS and are inherited across all your styles.

---

### ✅ Summary:

* You don’t need `@use 'abstracts/variables'` in every component to access `--my-css-var`.
* You **do need `@use`** for things like `$my-sass-var`, `@include mixin-name`, or `function-name()`.

If you’re seeing `--var-name` working in deeply nested components, it’s because it was compiled into a top-level selector like `:root` and is being inherited — exactly how CSS is designed to work.

