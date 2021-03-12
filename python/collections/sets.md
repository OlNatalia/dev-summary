## Python Sets

Sets are used to store multiple items in a single variable.

A set is a **collection** which is both **unordered, unindexed** and **do not allow duplicate values**.

Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

Once a set is created, you cannot change its items, but you can add new items.

Set items can be of **any data type**.

From Python's perspective, sets are defined as objects with the **data type 'set'**: 
`<class 'set'>` .

Sets are written with curly brackets.

It is also possible to use the set() constructor to make a set.

```py
# create a Set
thisset = {"apple", "banana", "cherry"}
print(thisset) 

# duplicate values will be ignored
thisset = {"apple", "banana", "cherry", "apple"} # {'banana', 'cherry', 'apple'} 
print(thisset)

# get the number of items in a set:
thisset = {"apple", "banana", "cherry"}
print(len(thisset))  # 3

# a set with strings, integers and boolean values
set1 = {"abc", 34, True, 40, "male"} 

# data type of a set
myset = {"apple", "banana", "cherry"}
print(type(myset)) # <class 'set'> 

# using the set() constructor to make a set
thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
print(thisset) 
```

:memo: Note: Sets are unordered, so you cannot be sure in which order the items will appear.

<br>

### Access Set Items

You cannot access items in a set by **referring to an index or a key**.

But you can loop through the set items using a for loop, or ask if a specified value is present in a set, by using the in keyword.

```py
# loop through the set, and print the values
thisset = {"apple", "banana", "cherry"}
for x in thisset:
  print(x) 

# check if "banana" is present in the set
thisset = {"apple", "banana", "cherry"}
print("banana" in thisset) 
```

:memo: Once a set is created, you **cannot change its items**, but you **can add new items**.

### Add Set Items

To add one item to a set use the `add()` method.

To add items from another set into the current set, use the `update()` method.

The object in the update() method does not have be a set, it can be any iterable object (tuples, lists, dictionaries etc.).

```py
# add an item to a set, using the add() method
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
print(thisset) # {'cherry', 'banana', 'apple', 'orange'} 


# add elements from tropical and thisset into newset
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}
thisset.update(tropical)
print(thisset) # {'apple', 'mango', 'cherry', 'pineapple', 'banana', 'papaya'} 


# add elements of a list to at set:
thisset = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]
thisset.update(mylist)
print(thisset) # {'banana', 'cherry', 'apple', 'orange', 'kiwi'} 
```

### Remove Set Items

To remove an item in a set, use the `remove()`, or the `discard()` method.

:memo: Note: If the item to remove does not exist, 
- `remove()` will raise an error :x:
- `discard()` will NOT raise an error 

You can also use the `pop()` method to remove an item, but this method will **remove the last item**.   
:pushpin: Remember that **sets are unordered**, so you will **not know what item that gets removed**.       
The return value of the pop() method is the removed item.

```py
# remove "banana" by using the remove() method
thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset) # {'cherry', 'apple'} 

# remove "banana" by using the discard() method
thisset = {"apple", "banana", "cherry"}
thisset.discard("banana")
print(thisset) # {'apple', 'cherry'} 


# remove the last item by using the pop() method
thisset = {"apple", "banana", "cherry"}
x = thisset.pop()
print(x)
print(thisset)


# clear() method empties the set
thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset) # set() 

# del keyword will delete the set completely
thisset = {"apple", "banana", "cherry"}
del thisset
print(thisset) # Traceback (most recent call last): ... NameError: name 'thisset' is not defined 
```

### Loop Sets

You can loop through the set items by using a `for` loop:.

```py
# loop through the set, and print the values
thisset = {"apple", "banana", "cherry"}
for x in thisset:
  print(x) 
```

### Join Sets

There are several ways to join two or more sets in Python.

You can use the `union()` method that returns a new set containing all items from both sets, or the `update()` method that inserts all the items from one set into another.

The `union()` method returns a new set with all items from both sets.

The `update()` method inserts the items in set2 into set1.

:memo: Note: Both `union()` and `update()` will **exclude any duplicate items**.

```py
# union()
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}
set3 = set1.union(set2)
print(set3) # {2, 'a', 'c', 'b', 3, 1}

# update()
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}
set1.update(set2)
print(set1) # {'b', 2, 3, 'a', 1, 'c'} 
```

### Keep ONLY the Duplicates

The `intersection_update()` method will **keep only the items that are present in both sets**.

The `intersection()` method will **return a new set**, that only contains the items that are present in both sets.

#### Keep All, But NOT the Duplicates

The `symmetric_difference_update()` method will keep only the elements that are NOT present in both sets.

The `symmetric_difference()` method will return a new set, that contains only the elements that are NOT present in both sets.

```py
# keep the items that exist in both set x, and set y
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}
x.intersection_update(y)
print(x) # {'apple'}

# return a set that contains the items that exist in both set x, and set y
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}
z = x.intersection(y)
print(z)  # {'apple'} 

# keep the items that are not present in both sets:
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}
x.symmetric_difference_update(y)
print(x) # {'google', 'banana', 'microsoft', 'cherry'} 

# return a set that contains all items from both sets, except items that are present in both:
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}
z = x.symmetric_difference(y)
print(z) # {'google', 'banana', 'microsoft', 'cherry'} 
```

### Set methods

[link to set methods](set-methods.md)

