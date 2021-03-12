# Lambda

A lambda function is a **small anonymous function**.

A lambda function **can take any number of arguments**, but can **only** have **one expression**.

After the expression is executed and the result will be returned.

The **power of lambda** is better shown when you use them as an **anonymous function inside another function**.

:memo: Use lambda functions when an anonymous function is required for a short period of time.

```py
# syntax
lambda arguments : expression

# example
# add 10 to argument a, and return the result
x = lambda a : a + 10
print(x(5)) # 15

# multiply argument a with argument b and return the result
x = lambda a, b : a * b
print(x(5, 6))  # 30

# summarize argument a, b, and c and return the result
x = lambda a, b, c : a + b + c
print(x(5, 7, 2)) # 14


# function definition that takes one argument, and that argument will be multiplied with an unknown number
def myfunc(n):
  return lambda a : a * n 

# make a function that always doubles the number you send in
def myfunc(n):
  return lambda a : a * n
mydoubler = myfunc(2)
print(mydoubler(11)) # 22

# make a function that always triples the number you send in
def myfunc(n):
  return lambda a : a * n
mytripler = myfunc(3)
print(mytripler(11)) # 33

# use the same function definition to make both functions, in the same program
def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11)) # 22
print(mytripler(11)) # 33

```
