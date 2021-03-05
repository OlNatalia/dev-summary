# JavaScript 

JavaScript is the world's most popular programming language of the Web.

JavaScript is used to **program the behavior** (functionality) of web pages.


## Use The `<script> `Tag

In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.


### :pushpin: Note
Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.

External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension *.js*.

To use an external script, put the name of the script file in the src (source) attribute of a `<script>` tag:

```javascript
<script src="myScript.js"></script> 
```

You can place an external script reference in `<head>` or `<body>` as you like.

#### :pushpin: Note
External scripts cannot contain `<script>` tags.


## :100: External JavaScript Advantages

-  :white_check_mark: It **separates** HTML and code
-  :white_check_mark: It makes HTML and JavaScript **easier to read** and **maintain**
-  :white_check_mark: Cached JavaScript files can **speed up page loads**


<br>

---

## Change HTML content

JavaScript can change HTML content

```javascript
document.getElementById('demo').innerHTML = 'Hello JavaScript'; 
```




```javascript

```
