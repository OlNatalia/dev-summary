# Callback Function

**Callback** is a function that will be executed after another function has finished executing

In JavaScript, functions are objects because of this, functions can take functions as arguments, and can be returned by other functions.  
Functions that do this are called **higher-order functions**.   
Any function that is passed as an argument is called a callback function.


## Reason to use callback

JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events. 

### Basic Example

```javascript
function firstFunc(){
  console.log(1);
}
function secondFunc(){
  console.log(2);
}
firstFunc();
secondFunc();
// 1
// 2
```

```
As expected, first is executed the function firstFunc and then the function secondFunc.

But what if function firstFunc contains some sort of code that can’t be executed immediately? 
For example, an API request where we have to send the request then wait for a response? 

To simulate this action, we're going to use setTimeout which is a JavaScript function that calls a function after a set amount of time. We’ll delay our function for 500 milliseconds to simulate an API request.  
The new code will look like this:
```

```javascript
function firstFunc(){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
  }, 500 );
}

function secondFunc(){
  console.log(2);
}

firstFunc();
secondFunc();
// 2
// 1
```

```
It’s not that JavaScript didn’t execute the functions in the order we wanted it to, it’s instead that JavaScript didn’t wait for a response from firstFunc() before moving on to execute second().
```

**Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.**

## Create a callback function

```javascript
// simple function =========================
function doHomework(subject) {
  alert(`Starting my ${subject} homework.`);
}

doHomework('math');
// Alerts: Starting my math homework.


// callback function =========================

// define the callback function in the second argument of our call to doHomework()
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});


// But callback functions don’t always have to be defined in our function call. They can be defined elsewhere in the code like this:

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

function alertFinished(){
  alert('Finished my homework');
}

doHomework('math', alertFinished);

```
