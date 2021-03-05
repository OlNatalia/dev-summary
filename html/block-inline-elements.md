## :notebook_with_decorative_cover: Block and Inline Elements

Every HTML element has a default display value, depending on what type of element it is.    
There are two display values: block and inline.


- There are two display values: block and inline
- A block-level element always starts on a new line and takes up the full width available
- An inline element does not start on a new line and it only takes up as much width as necessary
- The `<div>` element is a block-level and is often used as a container for other HTML elements
- The `<span>` element is an inline container used to mark up a part of a text, or a part of a document


<br>

## :book: Block-level Elements

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

:clipboard: The `<div>` element is a block-level element.

The `<div>` element is often used as a container for other HTML elements and has no required attributes, but `style, class` and `id` are common.

[block-elements](block-elements.md)

<br>

## :book: Inline-level Elements

An inline element does not start on a new line. 
It only takes up as much width as necessary.

###  :memo: Note: 
An **inline** element **cannot** contain a block-level element!

<br>

###  :page_facing_up: Examples

```html
<!-- block element -->
<div>Hello World</div> 

<!-- inline element -->
<span>Hello World</span> 

```

[inline-elements](inline-elements.md)