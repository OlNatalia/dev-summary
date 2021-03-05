# CSS - Cascading Style Sheets

CSS is used to **define styles** for your web pages, including the design, layout and variations in display for different devices and screen sizes (on screen, paper, or in other media).

CSS saves a lot of work. It can control the layout of multiple web pages all at once (stylesheets).

The **style definitions** are normally saved in **external *.css* files**.

## Insert CSS

There are three ways of inserting a style sheet:

- External CSS
- Internal CSS
- Inline CSS

<br>

### External CSS

With an external style sheet, you can change the look of an entire website by changing just one file!

Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.

```css
<head>
    <link rel="stylesheet" href="mystyle.css">
</head>
```

<br>

### Internal CSS

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the `<style>` element, inside the head section.

```css
<head>
    <style>
        body {
            background-color: linen;
        }

        h1 {
            color: maroon;
            margin-left: 40px;
        }
    </style>
</head>
```

<br>

### Inline CSS

An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

```css
<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
```

### :pushpin: Note

All the styles in a page will **"cascade"** into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

So, an **inline style** has **the highest priority**, and will **override** external and internal styles and browser defaults.

<br>

---

## CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

```css
p {
  color: red;
  text-align: center;
}
```

- **p** is a *selector* in CSS (it points to the HTML element you want to style: `<p>`)
- **color** is a *property*, and **red** is the property *value*
- **text-align** is a property, and **center** is the property *value*

We can divide CSS selectors into five categories:

- **Simple selectors** (select elements based on name, id, class)
- **Combinator selectors** (select elements based on a specific relationship between them)
- **Pseudo-class selectors** (select elements based on a certain state)
- **Pseudo-elements selectors** (select and style a part of an element)
- **Attribute selectors** (select elements based on an attribute or attribute value)

