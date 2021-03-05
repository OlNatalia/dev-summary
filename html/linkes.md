## HTML Links - Hyperlinks

HTML links are hyperlinks.  
You can click on a link and jump to another document.

###  :memo: Note: 

A link does not have to be text. A link can be an image or any other HTML element!

### Syntax

The HTML `<a>` tag defines a hyperlink.

```html
<a href="url">link text</a>
```

The most important attribute of the `<a>` element is the `href` attribute, which indicates the link's destination.


By default, links will appear as follows in all browsers:

    - An unvisited link is underlined and blue
    - A visited link is underlined and purple
    - An active link is underlined and red


The target attribute specifies where to open the linked document.

    _self - Default. Opens the document in the same window/tab as it was clicked
    _blank - Opens the document in a new window or tab
    _parent - Opens the document in the parent frame
    _top - Opens the document in the full body of the window


```html
 <a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a> 
```

---

## Absolute URLs vs. Relative URLs

Both examples above are using an **absolute URL** (a full web address) in the href attribute.

```html
<!-- Absolute URLs -->
<p><a href="https://www.w3.org/">W3C</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<!-- Relative URLs -->
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p> 
```

A **local link** (a link to a page within the same website) is specified with a relative URL (without the "https://www" part)

---

## Link to an Email Address

Use mailto: inside the href attribute to create a link that opens the user's email program (to let them send a new email):

```html
<a href="mailto:someone@example.com">Send email</a> 
```

---

## Bookmark in HTML

Bookmarks can be useful if a web page is very long.     
When the link is clicked, the page will scroll down or up to the location with the bookmark.

To create a bookmark - first create the bookmark, then add a link to it.

```html
<!-- first, use the id attribute to create a bookmark -->
<h2 id="C5">Chapter 5</h2>

<!-- then, add a link to the bookmark ("Jump to Chapter 4"), from within the same page -->
<a href="#C5">Jump to Chapter 5</a> 
```

    - Use the id attribute (id="value") to define bookmarks in a page
    - Use the href attribute (href="#value") to link to the bookmark

---
