# Data Types

Variables can store data of different types, and different types can do different things.

## Built-in Data Types

    - Text Type: 	    str
    - Numeric Types: 	int, float, complex
    - Sequence Types: 	list, tuple, range
    - Mapping Type: 	dict
    - Set Types: 	    set, frozenset
    - Boolean Type: 	bool
    - Binary Types: 	bytes, bytearray, memoryview

### Getting the Data Type

x = 5
print(type(x))

### Python Numbers

- int
- float
- complex

```py
x = 1    # int
y = 2.8  # float
z = 1j   # complex
```

Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.

Float, or "floating point number" is a number, positive or negative, containing one or more decimals.


## Python Casting

### Specify a Variable Type

Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.

Casting in python is therefore done using constructor functions:

- int() - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)

- float() - constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)

- str() - constructs a string from a wide variety of data types, including strings, integer literals and float literals

```py
# int
x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3

# float
x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2

# string
x = str("s1") # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0' 
```

### Strings

[link to string](string.md)

