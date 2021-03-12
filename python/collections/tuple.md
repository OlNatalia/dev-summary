## Python Tuples

Tuples are used to s**tore multiple items in a single variable**.

A tuple is a **collection** which is **ordered and unchangeable (immutable)**  and **allow duplicate values**.

It's not possible to cannot change, add or remove items after the tuple has been created (unchangeable).

Since tuple are indexed, tuples can have items with the same value. The **first item has index [0]**, the second item has index [1] etc.

The items have a **defined order**, and that order will not change.

Tuple items can be of **any data type**.

From Python's perspective, tuples are defined as objects with the **data type 'tuple**' `<class 'tuple'> `.

Tuples are written with round brackets.

It is also possible to use the `tuple()` constructor to make a tuple.

```py
# create a Tuple
thistuple = ("apple", "banana", "cherry")
print(thistuple)

# ERROR: once a tuple is created, you cannot add items to it
    thistuple = ("apple", "banana", "cherry")
    thistuple.append("orange") # This will raise an error
    print(thistuple)

    
# one item tuple, remember the commma
thistuple = ("apple",)
print(type(thistuple)) # <class 'tuple'>

#NOT a tuple
thistuple = ("apple")
print(type(thistuple)) # <class 'str'> 


# tuples allow duplicate values
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple) # ('apple', 'banana', 'cherry', 'apple', 'cherry') 


# print the number of items in the tuple
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))


# a tuple with strings, integers and boolean values
tuple1 = ("abc", 34, True, 40, "male")

# using the tuple() method to make a tuple
thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)
```
### Access Tuple Items

You can access tuple items by referring to the index number, inside square brackets.

**Negative indexing** means **start from the end**.     
**-1** refers to the **last item**, -2 refers to the second last item etc.

#### Range
You can **specify a range of indexes** by specifying where to start and where to end the range.     
When specifying a range, the return value will be a new tuple with the specified items.     
By leaving out the start value, the range will start at the first item.     
By leaving out the end value, the range will go on to the end of the list.      
Specify negative indexes if you want to start the search from the end of the tuple.

#### Check
To determine (check) if a specified item is present in a tuple use the `in` keyword

```py
# print the second item in the tuple
thistuple = ("apple", "banana", "cherry")
print(thistuple[1])

# print the last item of the tuple
thistuple = ("apple", "banana", "cherry")
print(thistuple[-1])

# return the third, fourth, and fifth item
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:5]) # ('cherry', 'orange', 'kiwi') 
# the search will start at index 2 (included) and end at index 5 (not included).

# returns the items from the beginning to, but NOT included, "kiwi"
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[:4]) # ('apple', 'banana', 'cherry', 'orange') 

# returns the items from "cherry" and to the end
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:]) # ('cherry', 'orange', 'kiwi', 'melon', 'mango') 

# returns the items from index -4 (included) to index -1 (excluded)
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[-4:-1]) # ('orange', 'kiwi', 'melon') 


# check if "apple" is present in the tuple
 thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple") 
```

### Change Tuple Values / Update

Tuples are **unchangeable (immutable)**, meaing that you cannot change, add, or remove items once the tuple is created.

:bulb: But there are some **workarounds**. You can **convert** the tuple into a list, change the list, and convert the list back into a tuple.

```py
# convert the tuple into a list to be able to change it
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
print(x) # ("apple", "kiwi", "cherry") 


# convert the tuple into a list, add "orange", and convert it back into a tuple
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.append("orange")
thistuple = tuple(y)
print(thistuple) # ('apple', 'banana', 'cherry', 'orange') 
```
### Remove Items

:memo: Note: You **cannot remove items in a tuple**  :x:.    
:bulb: But you can use the same **workaround** as we used for changing and adding tuple items.

```py
# convert the tuple into a list, remove "apple", and convert it back into a tuple
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.remove("apple")
thistuple = tuple(y)
# output: ('banana', 'cherry') 


# delete the tuple completely
 thistuple = ("apple", "banana", "cherry")
del thistuple
print(thistuple) # this will raise an error because the tuple no longer exists 
```

### Unpacking a Tuple

When we create a tuple, we normally assign values to it. This is called "packing" a tuple.

But, in Python, we are also allowed to extract the values back into variables. This is called "unpacking":.

```py
# unpacking a tuple
fruits = ("apple", "banana", "cherry")
(green, yellow, red) = fruits
print(green)
print(yellow)
print(red)

# output: 
apple
banana
cherry
```
:memo: Note: The number of variables must match the number of values in the tuple, if not, you must use an asterix to collect the remaining values as a list.

### Using Asterisk*

If the number of variables is less than the number of values, you can add an * to the variable name and the values will be assigned to the variable as a list.

```py
# assign the rest of the values as a list called "red":
fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
(green, yellow, *red) = fruits
print(green)
print(yellow)
print(red)
# output:
apple
banana
['cherry', 'strawberry', 'raspberry'] 
```
If the asterix is added to another variable name than the last, Python will assign values to the variable until the number of values left matches the number of variables left.

```py
# add a list of values the "tropic" variable
fruits = ("apple", "mango", "papaya", "pineapple", "cherry")
(green, *tropic, red) = fruits
print(green)
print(tropic)
print(red)
# output: 
apple
['mango', 'papaya', 'pineapple']
cherry
```

## Loop Tuples

### for loop
You can loop through the tuple items by using a `for` loop.

You can also loop through the tuple items by **referring** to their **index number**.   
Use the `range()` and `len()` functions to create a suitable iterable.

### while loop
You can loop through the list items by using a `while` loop.

Use the `len()` function to determine the length of the tuple, then start at 0 and loop your way through the tuple items by refering to their indexes.

Remember to increase the index by 1 after each iteration.

```py
# iterate through the items and print the values
thistuple = ("apple", "banana", "cherry")
for x in thistuple:
  print(x) 

# print all items, using a while loop to go through all the index numbers
thistuple = ("apple", "banana", "cherry")
i = 0
while i < len(thistuple):
  print(thistuple[i])
  i = i + 1 
```

## Join Tuples

To join two or more tuples you can use the + operator.

If you want to multiply the content of a tuple a given number of times, you can use the * operator.

```py
# join two tuples
tuple1 = ("a", "b" , "c")
tuple2 = (1, 2, 3)
tuple3 = tuple1 + tuple2
print(tuple3)
# output: ('a', 'b', 'c', 1, 2, 3) 


# multiply the fruits tuple by 2
fruits = ("apple", "banana", "cherry")
mytuple = fruits * 2

print(mytuple)
# output: ('apple', 'banana', 'cherry', 'apple', 'banana', 'cherry')

```

### Tuple methods

[link to tuple methods](tuple-methods.md)
