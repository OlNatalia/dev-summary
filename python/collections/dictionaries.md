## Python Dictionaries

Dictionaries are used to **store data** values in **key:value pairs**  and can be referred to by using the key name.

A dictionary is a collection which is **ordered***, **changeable** and does **not allow duplicates**.

| :notebook: * As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.

- The items have a defined order, and that order will not change.

- The values in dictionary items can be of any data type.

From Python's perspective, dictionaries are defined as objects with the **data type 'dict'**  `<class 'dict'> `.

### access

The items of a dictionary can be access by referring to its key name, inside square brackets.

The list of the keys is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the keys list.

Dictionaries are written with curly brackets, and have keys and values.

### copy a dictionary

You cannot copy a dictionary simply by typing `dict2 = dict1`, because: `dict2` will only be a reference to `dict1`, and changes made in `dict1` will automatically also be made in `dict2`.

There are ways to make a copy, one way is to use the built-in Dictionary methods `copy()` and `dict()`.

### loop through a dictionary

You can loop through a dictionary by using a `for` loop.

When looping through a dictionary, the return value are the keys of the dictionary, but there are methods to return the values as well.


```py
# create and print a dictionary
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
print(thisdict)
# output: {'brand': 'Ford', 'model': 'Mustang', 'electric': False, 'year': 1964, 'colors': ['red', 'white', 'blue']} 


# print the number of items in the dictionary
print(len(thisdict)) # 5

# print the data type of a dictionary
print(type(thisdict)) # <class 'dict'> 


# get the value
# get the value of the "model" key
x = thisdict["model"] # Mustang 
# or with get() method
x = thisdict.get("model") # Mustang


# get the key
# get a list of the keys
x = thisdict.keys()  # dict_keys(['brand', 'model', 'year']) 
# or with values() method
x = thisdict.values() 

# get a list of the key:value pairs
x = thisdict.items() # dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)]) 


# check if key exists
if "model" in thisdict:
  print("Yes, 'model' is one of the keys in the thisdict dictionary") 


# change item
thisdict["year"] = 2018
# or with update() method
thisdict.update({"year": 2020}) 


# add item
thisdict["color"] = "red"
# or with update() method
thisdict.update({"color": "red"}) 


# remove item
# pop() method removes the item with the specified key name
thisdict.pop("model")
# popitem() method removes the last inserted item (in versions before 3.7, a random item is removed instead)
thisdict.popitem()
# del keyword removes the item with the specified key name
del thisdict["model"]
# del keyword can also delete the dictionary completely
del thisdict # #this will cause an error because "thisdict" no longer exists

# clear() method empties the dictionary
thisdict.clear() # {}


# copy
# make a copy of a dictionary with the copy() method
mydict = thisdict.copy()
# ake a copy of a dictionary with the dict() function
mydict = dict(thisdict)


# loop
# print all key names in the dictionary, one by one
for x in thisdict:
  print(x) 
# or with keys() method
for x in thisdict.values():
  print(x) 

# print all values in the dictionary, one by one
for x in thisdict:
  print(thisdict[x]) 
# or with values() method
for x in thisdict.values():
  print(x) 

# loop through both keys and values, by using the items() method
for x, y in thisdict.items():
  print(x, y) 
```

### Nested Dictionaries

A dictionary can contain dictionaries, this is called nested dictionaries.

```py
# create a nested dictionary
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'},
          3: {'name': 'Luna', 'age': '24', 'sex': 'Female', 'married': 'No'}
        }
print(people)

# asses value of nested dictionary
print(people[1]['name'])

# delete element
del people[3]['married']
# delete dictionary from a nested dictionary
del people[3]

#  iterate through a nested dictionary
for p_id, p_info in people.items():
    print("\nPerson ID:", p_id)
    
    for key in p_info:
        print(key + ':', p_info[key])

```

[link to dictionary methods](dictionary-methods.md)
