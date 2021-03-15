## Python Classes

:computer: examples

```py
# define class 
class Dog:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def bark(self):
        print("bark)


# instance of the class
d = Dog("Tim")
d.bark( )
print(type(d)) # <class '__main__.Dog'>

# another instance of the class
d2 = Dog("Tom")
d2.name

```
