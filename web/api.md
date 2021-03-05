# API - Application Programming Interface

A Web API is an application programming interface for the Web.

Browser API and Server API can **extend the functionality** of a web browser or server.


## Browser APIs

All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.


```javascript
// get the latitude and longitude of the user's position
let x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
```

---

## Third Party APIs

Third party APIs are not built into your browser.

To use these APIs, you will have to download or fetch the code from the Web.

Examples:

- YouTube API - Allows you to display videos on a web site.
- Twitter API - Allows you to display Tweets on a web site.
- Facebook API - Allows you to display Facebook info on a web site.

---

## Fetch API

The Fetch API interface allows web browser to make HTTP requests to web servers.

If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.

```javascript
// fetche a file and displays the content
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));

// fetch is based on async and await, so you can use this way of fetching
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(y);
}
```

---
<br>

## Web Storage API

The Web Storage API is a simple syntax for **storing and retrieving data** in the browser.

The **localStorage** object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.

The data is stored with no expiration date, and will not be deleted when the browser is closed.

The data will be available for days, weeks, and years.


The **localStorage.setItem()** method **stores a data** item in a storage.  
It takes a name and a value as parameters.

The **localStorage.getItem()** method **retrieves a data** item from the storage.   
It takes a name as parameter.

```javascript
// simple to use
localStorage.setItem("name", "John Doe");
localStorage.getItem("name");
```
<br>

## The sessionStorage Object

The sessionStorage object is identical to the localStorage object.  
The difference is that the sessionStorage object **stores data for one session**.

The **data is deleted when the browser is closed**.

```javascript
// similar to localStorage
sessionStorage.setItem("name", "John Doe");
sessionStorage.getItem("name");
```

### :book: Storage Object Properties and Methods

- key(n)    
Returns the name of the nth key in the storage
- length 	                
Returns the number of data items stored in the Storage object
- getItem(keyname) 	        
Returns the value of the specified key name
- setItem(keyname, value) 	
Adds that key to the storage, or update that key's value if it already exists
- removeItem(keyname) 	    
Removes that key from the storage
- clear() 	                
Empty all key out of the storage


---

<br>

## Web Workers API

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

```javascript
// check web worker support before creating it
if (typeof(Worker) !== "undefined") {
  // Yes! Web worker support!
  // Some code.....
} else {
  // Sorry! No Web Worker support..
} 

// simple example of creating web worker
let i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();

```
<br>

###  :book: Web Workers and the DOM

Since web workers are in external files, they do not have access to the following JavaScript objects:

- The window object
- The document object
- The parent object

---

## Web Geolocation API

The HTML Geolocation API is used to get the geographical position of a user.

Since this can compromise privacy, the position is not available unless the user approves it.

### :pushpin: Note 
Geolocation is most accurate for devices with GPS, like smartphone.

---

<br>

## Web History API

The Web History API provides easy methods to access the windows.history object.

The **window.history** object contains the URLs (Web Sites) visited by the user.


```html

<button onclick="myFunction()">Go Back</button>

<script>
function myFunction() {
  window.history.back();
}
</script> 
```
###  :book: History Object Methods

- back() 	    
Loads the previous URL in the history list
- forward() 	    
Loads the next URL in the history list
- go() 	    
Loads a specific URL from the history list
