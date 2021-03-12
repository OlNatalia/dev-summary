## String Formatting

To make sure a string will display as expected, we can **format the result** with the `format()` method.

- If you want to use more values, just add more values to the `format()` method by adding more placeholders.

- You can use index numbers (a number inside the curly brackets `{0}`) to be sure the values are placed in the correct placeholders


- You can also use named indexes by entering a name inside the curly brackets `{carname}`, but then you must use names when you pass the parameter values `txt.format(carname = "Ford")`.


```py
# add a placeholder where you want to display the price
price = 49
txt = "The price is {} dollars"
print(txt.format(price)) # The price is 49 dollars

# format the price to be displayed as a number with two decimals
txt = "The price is {:.2f} dollars"
print(txt.format(price)) # The price is 49.00 dollars


# multiple values
quantity = 3
itemno = 567
price = 49
my_order = "I want {} pieces of item number {} for {:.2f} dollars."
print(my_order.format(quantity, itemno, price)) # I want 3 pieces of item number 567 for 49.00 dollars.


# be sure the values are placed in the correct placeholders
my_order = "I want {0} pieces of item number {1} for {2:.2f} dollars."
print(my_order.format(quantity, itemno, price)) # I want 3 pieces of item number 567 for 49.00 dollars. 


# refer to the same value more than once, use the index number
age = 36
name = "John"
txt = "His name is {1}. {1} is {0} years old."
print(txt.format(age, name)) # His name is John. John is 36 years old. 


# named indexes
my_order = "I have a {carname}, it is a {model}."
print(my_order.format(carname = "Ford", model = "Mustang")) # I have a Ford, it is a Mustang.
```

