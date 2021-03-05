# Function

Function is a block of code designed to perform a particular task.  

You can use the same code (reusable) many times with different arguments, to produce different results.  
Functions are objects.

## First-Class Object

That means you can define a function inside another function.

## Function Advantages

- all functionality is kept in one place (DRY = Don't Repeat Yourself)
- reusable, no need to write repetitive blocks of code

---

## Function Decorations

This is called also **named function** (function has a name e.g. 'hello').

#### Syntax

```javascript
// es5
function name(parameters) {
  statements;
}

// es6
let name = (parameters) => {
  statements;
}
```

#### Example

```javascript
function hello() {
  console.log("Hello");
}
```

---

## Function Expressions

This assigns an anonymous function to a variable.

#### Syntax

```javascript
let name = function(parameters) {
  statements;
};
```

#### Example

```javascript
let hello = function() {
  console.log("Hello JavaScript");
};
```

### **Note**:

Function Expression ends with a semicolon, Function Decoration ends in a block (without semicolon).

---

## Arrow Function Expression

Modern (ES6) and shorter syntax for writing function expressions. Arrow functions do not create their own this value.

#### Syntax

```javascript
let name = parameters => {
  statements;
};
```

#### Example

```javascript
let greetUser = userName => {
  return `Hello ${userName}`;
};
```

---

## Function() Constructors

```javascript
var hi = new Function('consol.log("Hi");)';
```

**Do not use this way of declaring functions**  
(cause it is slower and there are problems with placing the function inside a string).

---

## Invoking a Function

Functions are executed when they are called. This is known as invoking a function. That means to run the code inside the function's body.

```javascript
hello(); // Hello JavaScript
```

### **Remember:**

you need parentheses to invoke a function (either by name or reference to the assign-variable).

---

## Function Return

Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

#### Example

```javascript
let x = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}
```

The variable **x** now points to the value of **a \* b**.

---

## Parameters vs. Arguments

### Parameters

are used when defining a function, they are the names created in the function definition. In fact, during a function definition, we can pass in up to 255 parameters! Parameters are separated by commas in the ().

#### Example

```javascript
// const param1 = 5;
// const param2 = 7;

function twoParams(param1, param2) {
  console.log(param1, param2);
}
```

### Arguments

are the values the function receives from each parameter when the function is executed (invoked).

#### Example

```javascript
twoParams("John", 35);
```

or whatever you want to pass to a function

```javascript
twoParams(5, 7);
```
