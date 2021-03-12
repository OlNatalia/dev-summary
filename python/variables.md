## Varaibles

Python has no command for declaring a variable.     
A variable is created the moment you first assign a value to it.

Variables do not need to be declared with any particular type, and can even change type after they have been set.

```py
x = 5
y = "John"
print(x)
print(y)

# get the type
print(type(x))
print(type(y)) 
```
### Casting

If you want to **specify the data type of a variable**, this can be done **with casting**.

```py
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0 
```


### Unpack a Collection

If you have a collection of values in a list, tuple etc. Python allows you **extract the values into variables**. This is called unpacking.

```py
Unpack a list:
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)
```

## Global Variables

Variables that are created **outside of a function** are known as **global variables.**

Global variables can be used by everyone, both inside of functions and outside.

If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function. The global variable with the same name will remain as it was, global and with the original value.

```py
# Create a variable outside of a function, and use it inside the function
 x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)

# output
Python is fantastic
Python is awesome
```

### The global Keyword

To create a **global variable inside a function**, you can use the *global* keyword.

```py
def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x) 
```

Also, use the global keyword if you want to **change a global variable inside a function**.

```py
x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x) 
```
