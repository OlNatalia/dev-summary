# JSON - JavaScript Object Notation

JSON is a syntax/text for storing and exchanging data.  

## Advantages
- lightweight data-interchange format 
- easy for humans to read and write
- easy for machines to parse and generate
- language independent (JSON format is text only)

## Structure
- A collection of name/value pairs  
In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array
- An ordered list of values     
In most languages, this is realized as an array, vector, list, or sequence

---

### Converting data

JavaScript has a built in functions to convert a string, written in JSON format, into native JavaScript objects and versa:

- **JSON.parse()**  
to convert text into a JavaScript object

- **JSON.stringify()**  
to convert a JavaScript object into a string

---

## Exchanging Data

When exchanging data between a browser and a server, the data can only be text.

JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

We can also convert any JSON received from the server into JavaScript objects.

This way we can work with the data as JavaScript objects, with no complicated parsing and translations.


## Sending Data

If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:

### Example

```javascript
let myObj = {
    name: "John", 
    age: 31, 
    city: "New York"
};

let myJSON = JSON.stringify(myObj);

window.location = "demo_json.php?x=" + myJSON;
```

## Receiving Data

If you receive data in JSON format, you can convert it into a JavaScript object:

### Example

```javascr---

read more about json:
- https://lerneprogrammieren.de/json/ipt
let myJSON = '{"name":"John", "age":31, "city":"New York"}';

let myObj = JSON.parse(myJSON);

document.getElementById("demo").innerHTML = myObj.name; 
```
---

## Looping an Object

 loop through object properties by using the for-in loop

### Example

```javascript
myObj = { 
    "name":"John", 
    "age":30, 
    "car":null 
};

for (x in myObj) {
    // access the property values
  document.getElementById("demo").innerHTML += x;
    //  or with bracket notation
    document.getElementById("demo").innerHTML += myObj[x];
} 
```

### Arrays in JSON Objects

### Example

```javascript
{
"name":"John",
"age":30,
"cars":[ "Ford", "BMW", "Fiat" ]
} 

// access the array value by using index number
x = myObj.cars[0];

// or looping through an array
// with for-in-loop
for (i in myObj.cars) {
  x += myObj.cars[i];
} 

// or with for-loop
for (i = 0; i < myObj.cars.length; i++) {
  x += myObj.cars[i];
}

```
### Nested Arrays in JSON Objects

### Example

```javascript
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", "models":[ "500", "Panda" ] }
  ]
 } 

// access arrays inside arrays, use a for-in loop for each array
for (i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}

// Modify Array Values
myObj.cars[1] = "Mercedes"; 

// delete items from an array
delete myObj.cars[1]; 

```
---

read more about json:
- https://lerneprogrammieren.de/json/

public APIs
- https://github.com/public-apis/public-apis

any APIs
- https://any-api.com/
