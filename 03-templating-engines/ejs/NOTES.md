## Templating Engines

### This guide provides a basic set of rules to convert HTML into Pug.

## Basic Elements

1. **HTML Tags to Pug Elements:**
   - HTML: `<tagName>`
   - Pug: `tagName`
2. **Attributes:**
   - HTML: `<a href="https://example.com">`
   - Pug: `a(href="https://example.com")`
3. **Text Content:**
   - HTML: `<p>Hello World</p>`
   - Pug: `p Hello World`

## Nesting

Pug uses indentation (typically 2 spaces) for nesting elements:

- HTML:

  ```html
  <div>
    <p>Hello World</p>
  </div>
  ```

- Pug:
  ```
  div
    p Hello World
  ```

## Classes and IDs

1. **Classes:**
   - HTML: `<div class="myClass">`
   - Pug: `.myClass` or `div.myClass`
2. **IDs:**
   - HTML: `<div id="myID">`
   - Pug: `#myID` or `div#myID`

## Comments

- HTML: `<!-- This is a comment -->`
- Pug: `// This is a comment`

## Doctype

- HTML: `<!DOCTYPE html>`
- Pug: `doctype html`

## Scripts and Styles

1. **Inline Scripts:**
   - HTML:
     ```html
     <script>
       console.log("Hello");
     </script>
     ```
   - Pug:
     ```
     script.
         console.log('Hello');
     ```
2. **External Scripts and Styles:**
   - HTML:
     ```html
     <link rel="stylesheet" href="styles.css" />
     <script src="script.js"></script>
     ```
   - Pug:
     ```
     link(rel="stylesheet", href="styles.css")
     script(src="script.js")
     ```

## Self-Closing Tags

In Pug, you don't need to close tags. But for self-closing tags in HTML:

- HTML: `<img src="image.jpg" alt="Description">`
- Pug: `img(src="image.jpg", alt="Description")`

## Conditionals & Iterations

While these require a deeper dive, here's a basic example:

- **Looping:**
  - HTML:
    ```html
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    ```
  - Pug (with a JavaScript loop):
    ```
    ul
      each val in [1, 2, 3]
        li= 'Item ' + val
    ```
