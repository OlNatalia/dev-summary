## Python Inheritance

Inheritance allows us to define a class that **inherits all the methods and properties from another class**.

:pushpin: **Parent class** is the class being inherited from, also called **base class**.

:pushpin: **Child class** is the class that inherits from another class, also called **derived class**.

### :computer: Example

```py
# parent/base class
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

# use the Person class to create an object, and then execute the printname method

x = Person("John", "Doe")
x.printname() 


# child/derived class
class Student(Person):
  pass 

x = Student("Mike", "Olsen")
x.printname() 

```

:memo: Note:    
The child's `__init__()` function **overrides** the inheritance of the parent's `__init__()` function.

To keep the inheritance of the parent's `__init__()` function, add a call to the parent's `__init__()` function.

```py
# keep inheritance of the parents function
class Student(Person):
  def __init__(self, fname, lname):
    Person.__init__(self, fname, lname) 
```

### super() Function

Python also has a `super()` function that will make the **child class inherit all the methods and properties from its parent**.

```py
# make the child class inherit all the methods and properties from its parent
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname) 


# add a property called graduationyear to the Student class
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)
    self.graduationyear = 2019

# to add value as a variable, add another parameter in the __init__() function (year)
class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

    def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear) 

# create an instance
x = Student("Mike", "Olsen", 2019) 

```

:pushpin: By using the `super()` function, you do not have to use the name of the parent element, it will automatically inherit the methods and properties from its parent.

:pushpin: If you add a method in the child class with the same name as a function in the parent class, the inheritance of the parent method will be overridden.
