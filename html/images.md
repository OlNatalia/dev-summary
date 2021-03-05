##  :notebook_with_decorative_cover: HTML Image Tags

Images can improve the design and the appearance of a web page.

The HTML `<img>` tag is used to embed an image in a web page.

Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.


The `<img>` tag has two required attributes:

    src - Specifies the path to the image
    alt - Specifies an alternate text for the image


### Syntax

```html
<img src="url" alt="alternatetext"> 
```

###   :memo: Note 

Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads.

```html
<img src="img_sun.jpg" alt="Sun in the sky" width="500" height="600"> 
```

### :pushpin: Tip

A screen reader is a software program that reads the HTML code, and allows the user to "listen" to the content. Screen readers are useful for people who are visually impaired or learning disabled.

<br>

`<img>` 	Defines an image    
`<map>` 	Defines an image map    
`<area>` 	Defines a clickable area inside an image map    
`<picture>` Defines a container for multiple image resources

<br>

##  :book: Image map
The idea behind an image map is that you should be able to perform different actions depending on where in the image you click.


    - Use the HTML <map> element to define an image map
    - Use the HTML <area> element to define the clickable areas in the image map
    - Use the HTML usemap attribute of the <img> element to point to an image map


    Shape
    - rect - defines a rectangular region
    - circle - defines a circular region
    - poly - defines a polygonal region
    - default - defines the entire region


    <area shape="rect" coords="34, 44, 270, 350" href="computer.htm">


### :pushpin: Tip

You can use any image as an image map.

<br>

---

## :book: Picture element

The HTML `<picture>` element allows you to display different pictures for different devices or screen sizes.

<br>

### :memo: Note: 

Always specify an `<img>` element as the last child element of the `<picture>` element. The `<img>` element is used by browsers that do not support the `<picture>` element, or if none of the `<source>` tags match.

The browser will use the first `<source>` element with matching attribute values, and ignore any following `<source>` elements.

<br>

### :page_facing_up: Examples

```html
<!-- image map -->
<section>
    <h2>Image Maps</h2>
    <p>Click on the computer, the phone, or the cup of coffee to go to a new page and read more about the topic:</p>

    <img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

    <map name="workmap">
        <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
        <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
        <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
    </map>
</section>

<!-- picture element -->
 <picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture> 

```

### :memo: Note

Loading large images takes time, and can slow down your web page. Use images carefully.

<br>

---

### Common Image Formats

    APNG 	Animated Portable Network Graphics 	    .apng
    GIF 	Graphics Interchange Format 	        .gif
    ICO 	Microsoft Icon 	                        .ico, .cur
    JPEG 	Joint Photographic Expert Group image 	.jpg, .jpeg, .jfif, .pjpeg, .pjp
    PNG 	Portable Network Graphics 	            .png
    SVG 	Scalable Vector Graphics 	            .svg

---

<br>

[ :bus: back to HTML readme](readme.md)
