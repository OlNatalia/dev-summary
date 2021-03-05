# JavaScript Array

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

You access an array element (the values) by referring to the index number.

for example: an array is like this shelf
![array](shelf1b.jpg)

## Creating an Array / variable declaration statement

```javascript
let myArray = [“one”, “two”, 3];
```

## Array autonomy

```
name:                   myArray
array literal:          [“first item”, “two”, 3]
separator / delimiter:  ,
square brackets:        []
```

---

### Note:

One array contains **elements**.
Element is accessible by its **index**.

---

## Access the elements of an array

### accessing the **first** array element

```javascript
myArr[0];
```

### accessing the **last** array element

```javascript
myArr[myArr.length - 1];
```

### access the **full** array

```javascript
myArr;
```

## Changing an Array Element

### chang **first** array element

```javascript
myArr[1] = “second element”;
```

## Adding Array Elements

```javascript
myArr.push(“add it to end”);
or
myArr.unshift(“add it to begin”);
```

---

## Array Properties and Methods (built-in)

## Property

**length**

returns the length of an array (the number of array elements)

```javascript
myArr.length;
```

---

### Note:

The **length** property is always one more than the highest array index (because it starts at index 0).

---

## Methods:

- **push()**  
  adds one or more elements to the end of an array and returns the resulting length of the array

  ```javascript
  myArray.push("John");
  ```

- **unshift()**  
   adds one or more elements to the front of an array and returns the new length of the array

  ```javascript
  myArray.push("Anna");
  ```

* **pop()**
  removes the last element from an array and returns that element

  ```javascript
  myArray.pop();
  ```

- **shift()**
  removes the first element from an array and returns that element

  ```javascript
  myArray.shift();
  ```

![array methods](js-add-remove-methods.png)

**pop() & shift()** remove element - returns the removed elements

**push() & unshift()** add element -returns the new length

<br>

- **join(delimiter = ',')**

  joins all elements of an array into a string

- **sort()**

  sorts the elements of an array in place, and returns a reference to the array

```javascript
myArr.sort();
```

- **slice(start_index, upto_index)**

extracts a section of an array and returns a new array

- **splice(index, count_to_remove, addElement1, addElement2, ...)**

removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array

- **reverse()**

transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array

- **indexOf(searchElement[, fromIndex])**

searches the array for searchElement and returns the index of the first match

- **lastIndexOf(searchElement[, fromIndex])**

works like indexOf, but starts at the end and searches backwards

- **forEach(callback[, thisObject])**

executes callback on every array item and returns undefined

---

#### Main questions about methods

1. does it change the original?
2. does it add or remove an element?
3. does it affect the start or end?
4. what is the return value?
5. what kind of parameters are accepted?

---

<br>

## Multidimensional array / nested array

A multidimensional array is an array containing one or more arrays.

for example: a nested array is like this shelf

![multidimensional array](shelf2b.png)

---

### Note

The dimension of an array indicates the number of indices you need to select an element.

- For a two-dimensional array you need two indices to select an element
- For a three-dimensional array you need three indices to select an element

---

### Examples

## create a nested array

```javascript
let nestedArray = [["John", 35, ["Hello", "world"]], ["Anna", 28], ["Max", 25]];
```

## access nested array

```javascript
nestedArray[0][0];
nestedArray[0][2];
nestedArray[0][2][1];
```

<br>

---

## Associative Arrays

Arrays with named indexes are called associative arrays (or hashes).
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes.

Example

```javascript
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length; // person.length will return 3
var y = person[0]; // person[0] will return "John"
```

