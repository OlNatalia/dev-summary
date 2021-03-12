## Python Functions

A function is a block of code which only runs when it is called.

You can pass data, known as parameters, into a function.

A function can return data as a result. To let a function return a value, use the `return `statement.

### Arguments

Information can be passed into functions as **arguments** (`args`).      
You can add as many arguments as you want, just separate them with a comma.     

Function definitions cannot be empty, but if you for some reason have a function definition with no content, put in the `pass` statement to avoid getting an error.



:blue_book: :bulb: Note:

:memo: A **parameter is the variable** listed inside the parentheses in the function definition.

:memo: An **argument is the value** that is sent to the function when it is called.

By default, a function must be called with the correct number of arguments. Meaning that if your function expects 2 arguments, you have to call the function with 2 arguments, not more, and not less.

You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.

### Arbitrary Arguments, *args

If you do not know how many arguments that will be passed into your function, add a `*` before the parameter name in the function definition.       
This way the function will receive a tuple of arguments, and can access the items accordingly.

### Keyword Arguments

You can also send arguments with the key = value syntax.        
This way the order of the arguments does not matter.

The phrase Keyword Arguments are often shortened to `kwargs` in Python documentations.


### Arbitrary Keyword Arguments, **kwargs

If you do not know how many keyword arguments that will be passed into your function, add two asterisk: `**` before the parameter name in the function definition.

### Default Parameter Value

The function without argument can use the default value.

<br>

### :computer: Examples

```py
# creating a function
def my_function():
  print("Hello from a function") 

#  calling a function
my_function()

# function with one argument
def my_function(name):
  print(" Hello" + name)

my_function("Lina")
my_function("Alex")


# unknown number of arguments
def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus") 


# keyword arguments
def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus") 


# unknown number of keyword arguments 
def my_function(**kid):
  print("His last name is " + kid["lname"])

my_function(fname = "Tobias", lname = "Refsnes") 


# default value
def my_function(country = "Norway"):
  print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()


# passing a list as an argument
def my_function(food):
  for x in food:
    print(x)

fruits = ["apple", "banana", "cherry"]

my_function(fruits)

# function definition with no content
def myfunction():
  pass

```

### Recursion

Recursion is a common mathematical and programming concept. It means that a **function calls itself**.  
 :white_check_mark: This has the benefit of meaning that you can **loop through data to reach a result**.

 :pushpin: Be very careful with recursion as it can be quite easy to slip into writing a function which never terminates, or one that uses excess amounts of memory or processor power.

 :pushpin: However, when written correctly recursion can be a very efficient and mathematically-elegant approach to programming.

#### :computer: Example

```py
# recursion
def tri_recursion(k):
  if(k > 0):
    result = k + tri_recursion(k - 1)
    print(result)
  else:
    result = 0
  return result

print("\n\nRecursion Example Results")
tri_recursion(6)

# output:
Recursion Example Results
1
3
6
10
15
21 
```

In this example, tri_recursion() is a function that we have defined to call itself ("recurse"). We use the k variable as the data, which decrements (-1) every time we recurse. The recursion ends when the condition is not greater than 0 (i.e. when it is 0).

