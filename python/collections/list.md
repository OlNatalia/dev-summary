# Python Lists

Lists are used to **store multiple items in a single variable**.

Lists are created using square brackets.

```py
# create a list
thislist = ["apple", "banana", "cherry"]
print(thislist)
```

## List Items

List items are **ordered, changeable**, and **allow duplicate values**.

List items are indexed, the **first item** has **index [0]**, the second item has index [1] etc.


### Ordered

The items have a **defined order**, and that order will **not change**.

If you add **new items** to a list, the new items **will be placed at the end of the list**.

:memo: Note: There are some list methods that will change the order, but in general: the order of the items will not change.

### Changeable

It is possible to change, add, and remove items in a list after it has been created.

### Allow Duplicates

Since lists are **indexed**, lists can have items with the **same value**

```py
# lists allow duplicate values
thislist = ["apple", "banana", "cherry", "apple", "cherry"]
print(thislist)
```

### List Length

To determine how many items a list has, use the `len()` function.

```py
# print the number of items in the list
thislist = ["apple", "banana", "cherry"]
print(len(thislist)) # 3
```

### List Items - Data Types

List items can be of any data type and also can contain different data types.

```py
# String, int and boolean data types:
list1 = ["apple", "banana", "cherry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]

# a list with strings, integers and boolean values
list1 = ["abc", 34, True, 40, "male"]
```

### type()

From Python's perspective, lists are defined as **objects with** the **data type 'list'**:
<class 'list'>

```py
# What is the data type of a list?
mylist = ["apple", "banana", "cherry"]
print(type(mylist)) # <class 'list'>
```

### The list() Constructor

It is also possible to use the `list()` constructor when creating a new list.

```py
# using the list() constructor to make a List
thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
print(thislist)
```

## Access Items

List items are indexed and you can access them by referring to the index number.

:memo: Note: The first item has index 0.

```py
# print the second item of the list
thislist = ["apple", "banana", "cherry"]
print(thislist[1]) 
```

### Negative Indexing

Negative indexing means **start from the end**:

**-1** refers to the **last item**,     
-2 refers to the second last item etc.

```py
# print the last item of the list
thislist = ["apple", "banana", "cherry"]
print(thislist[-1])
```

### Range of Indexes

You can specify a range of indexes by **specifying where to start and where to end** the range.

When specifying a range, the return value will be a **new list with the specified items**.

```py
# return the third, fourth, and fifth item
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5]) 
# output: ['cherry', 'orange', 'kiwi'] 
```
:memo: Note: The search will start at index 2 (included) and end at index 5 (not included).

By **leaving out the start value**, the range will **start at the first item**:

```py
# returns the items from the beginning to, but NOT including, "kiwi"
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[:4])
# output: ['apple', 'banana', 'cherry', 'orange'] 
```
By **leaving out the end value**, the range will **go on to the end of the list**:

```py
# returns the items from "cherry" to the end
print(thislist[2:])

# output: ['cherry', 'orange', 'kiwi', 'melon', 'mango'] 
```

### Range of Negative Indexes

Specify negative indexes if you want to start the search from the end of the list.

```py
# returns the items from "orange" (-4) to, but NOT including "mango" (-1)
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1])
# output: ['orange', 'kiwi', 'melon']
```
### Check if Item Exists

To determine if a specified item is present in a list use the `in` keyword.

```py
# check if "apple" is present in the list
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
  print("Yes, 'apple' is in the fruits list") 
```
## Change Item Value

To change the value of a specific item, **refer to the index number**.

```py
# change the second item
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)
```
### Change a Range of Item Values

To change the **value of items within a specific range**, define a list with the new values, and refer to the range of index numbers where you want to insert the new values.

```py
# change the values "banana" and "cherry" with the values "blackcurrant" and "watermelon"
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)
# output: ['apple', 'blackcurrant', 'watermelon', 'orange', 'kiwi', 'mango']
```
If you insert more items than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly.

```py
# change the second value by replacing it with two new values
thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist) 
# output: ['apple', 'blackcurrant', 'watermelon', 'cherry']
```
:memo: Note: The length of the list will change when the number of items inserted does not match the number of items replaced.

If you insert less items than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly.

```py
# change the second and third value by replacing it with one value
thislist = ["apple", "banana", "cherry"]
thislist[1:3] = ["watermelon"]
print(thislist) 
# output: ['apple', 'watermelon']
```
### Insert Items

To insert a new list item, **without replacing any of the existing values**, we can use the `insert()` method.

The `insert()` method **inserts an item at the specified index**.

```py
# insert "watermelon" as the third item
thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)
# output: ['apple', 'banana', 'watermelon', 'cherry']
```
:memo: Note: As a result of the example above, the list will now contain 4 items.

## Add List Items

To add an item to the end of the list, use the `append()` method.

```py
# using the append() method to append an item
thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)
# output: ['apple', 'banana', 'cherry', 'orange'] 
```
### Extend List

To **append elements from another list to the current list**, use the `extend()` method.    
The elements will be added to the end of the list.


```py
# add the elements of tropical to thislist
thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
print(thislist)
# output: 
```
### Add Any Iterable

The `extend()` method does not have to append lists, you can **add any iterable object** (tuples, sets, dictionaries etc.).

```py
# add elements of a tuple to a list
thislist = ["apple", "banana", "cherry"]
thistuple = ("kiwi", "orange")
thislist.extend(thistuple)
print(thislist)
# output: ['apple', 'banana', 'cherry', 'kiwi', 'orange']
```

## Remove List Items

The `remove()` method removes the **specified item**.

The `pop()` method removes the **specified index**. If you do **not specify the index**, this method removes the **last item**.

The `del` keyword also removes the **specified index**. It can also **delete the list completely**.


```py
# remove "banana":
thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)


# remove the second item
thislist = ["apple", "banana", "cherry"]
thislist.pop(1)
print(thislist)


# remove the first item
thislist = ["apple", "banana", "cherry"]
del thislist[0]
print(thislist)

# delete the entire list
thislist = ["apple", "banana", "cherry"]
del thislist 
```

### Clear the List

The `clear()` method **empties the list**. The list still remains, but it has no content.

```py
# cear the list content
thislist = ["apple", "banana", "cherry"]
thislist.clear()
print(thislist)
# output: []
```

## Loop List

### Loop Through a List

You can loop through the list items by using a `for` loop.

```py
# pint all items in the list, one by one
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x) 
# output: 
 apple
 banana
 cherry
```
### Loop Through the Index Numbers

You can also loop through the list items by **referring to their index number**.

Use the `range()` and `len()` functions to create a suitable iterable.

```py
# print all items by referring to their index number
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i]) 
# output:  
 apple
 banana
 cherry
## The iterable created in the example above is [0, 1, 2].
```
### Using a While Loop

Use the `len()` function to **determine the length of the list**, then start at 0 and loop your way through the list items by refering to their indexes.

 :balloon: Remember to increase the index by 1 after each iteration.

```py
# print all items, using a while loop to go through all the index numbers
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1
```

### Looping Using List Comprehension

List Comprehension offers the **shortest syntax for looping** through lists.

```py
# a short hand for loop that will print all items in a list
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist] 
```

## List Comprehension

List comprehension offers a **shorter syntax** when you want to **create a new list based on the values of an existing list**.

Based on a list of fruits, you want a new list, containing only the fruits with the letter "a" in the name.

```py
# without list comprehension you will have to write a for statement with a conditional test inside
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []
for x in fruits:
  if "a" in x:
    newlist.append(x)
print(newlist) 


# with list comprehension you can do all that with only one line of code
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if "a" in x]
print(newlist) 


# output: ['apple', 'banana', 'mango']
```
###  Syntax

```py
newlist = [expression for item in iterable if condition == True]
```

The **return value is a new list**, leaving the old list unchanged.     
The **condition** is **like a filter that only accepts** the items that valuate to **True**.

```py
# only accept items that are not "apple"
newlist = [x for x in fruits if x != "apple"] 
# output: ['banana', 'cherry', 'kiwi', 'mango'] 

# with no if statement
newlist = [x for x in fruits] 
# output: ['apple', 'banana', 'cherry', 'kiwi', 'mango'] 


# iterable

# use the range() function to create an iterable
newlist = [x for x in range(10)]

# accept only numbers lower than 5
newlist = [x for x in range(10) if x < 5] 
```

## Expression

The **expression is the current item in the iteration**, but it is **also the outcome**, which you can manipulate before it ends up like a list item in the new list.

The expression can also contain conditions, not like a filter, but as a way to manipulate the outcome.

```py
# set the values in the new list to upper case
 newlist = [x.upper() for x in fruits] 
# output: ['APPLE', 'BANANA', 'CHERRY', 'KIWI', 'MANGO'] 

# set all values in the new list to 'hello'
newlist = ['hello' for x in fruits] 
# output: ['hello', 'hello', 'hello', 'hello', 'hello'] 

# return "orange" instead of "banana"
newlist = [x if x != "banana" else "orange" for x in fruits] 
# output: ['apple', 'orange', 'cherry', 'kiwi', 'mango'] 
```
## Sort Lists

### Sort List Alphanumerically

List objects have a `sort()` method that will sort the list **alphanumerically**, **ascending, by default**.

To sort **descending**, use the keyword argument `reverse = True`.

```py
# sort the list alphabetically
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort()
print(thislist)
# output: ['banana', 'kiwi', 'mango', 'orange', 'pineapple'] 

# sort the list numerically
thislist = [100, 50, 65, 82, 23]
thislist.sort()
print(thislist)
# output: [23, 50, 65, 82, 100] 

# sort the list descending
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort(reverse = True)
print(thislist)
# output: ['pineapple', 'orange', 'mango', 'kiwi', 'banana'] 

# sort the list descending
thislist = [100, 50, 65, 82, 23]
thislist.sort(reverse = True)
print(thislist)
# output: [100, 82, 65, 50, 23] 
```

## Copy Lists

Copy a list simply by typing `list2 = list1`, because: ***list2* will only be a reference to *list1***, and **changes made in list1 will automatically also be made in *list2***.

There are ways to make a copy, one way is to use the built-in List method `copy()`.

Another way to make a copy is to use the built-in method `list()`.

```py
# make a copy of a list with the copy() method
thislist = ["apple", "banana", "cherry"]
mylist = thislist.copy()
print(mylist)
# output: ['apple', 'banana', 'cherry'] 

# make a copy of a list with the list() method
thislist = ["apple", "banana", "cherry"]
mylist = list(thislist)
print(mylist)
# output: ['apple', 'banana', 'cherry'] 
```
##  Join Lists

There are several ways to join, or concatenate, two or more lists in Python.

One of the **easiest ways are by using the + operator**.

Another way to join two lists are by **appending all the items from list2 into list**1, one by one.

Or you can use the `extend()` method, **which purpose is to add elements from one list to another list**.

```py
# join two list
 list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list3 = list1 + list2
print(list3) 
# output: ['a', 'b', 'c', 1, 2, 3] 

# append list2 into list1

list2 = [1, 2, 3]

for x in list2:
  list1.append(x)

print(list1) 
# output: ['a', 'b', 'c', 1, 2, 3] 

# extend() method to add list2 at the end of list1
list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]

list1.extend(list2)
print(list1) 
# output: ['a', 'b', 'c', 1, 2, 3] 
```

## List Methods

[link to list methods](list-methods.md)
