# String

## Multiline Strings

You can assign a multiline string to a variable by using three quotes:

```py
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""

print(a) 
```
:memo: Note: in the result, the line breaks are inserted at the same position as in the code.

### Strings are Arrays

Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.

However, Python does not have a character data type, a single character is simply a string with a length of 1.

```py
# access elements of the string
a = "Hello, World!"
print(a[1])
#output is e

# loop through the characters in a string
for x in "banana":
  print(x)

# get the length of a string
a = "Hello, World!"
print(len(a))

# check if "free" is present in the following text
txt = "The best things in life are free!"
print("free" in txt)

# print only if "free" is present
txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")

# check if "expensive" is NOT present in the following text
 txt = "The best things in life are free!"
print("expensive" not in txt)

# print only if "expensive" is NOT present
txt = "The best things in life are free!"
if "expensive" not in txt:
  print("Yes, 'expensive' is NOT present.")
```

## Slicing Strings

You can return a range of characters by using the slice syntax.

Specify the start index and the end index, separated by a colon, to return a part of the string.

```py
# get the characters from position 2 to position 5 (not included)
b = "Hello, World!"
print(b[2:5]) # llo

# get the characters from the start to position 5 (not included)
b = "Hello, World!"
print(b[:5]) # Hello

# get the characters from position 2, and all the way to the end
b = "Hello, World!"
print(b[2:]) # llo, World!
```

### Negative Indexing

Use negative indexes to start the slice from the end of the string

```py
# get the characters from: "o" in "World!" (position -5) to, but not included: "d" in "World!" (position -2)
b = "Hello, World!"
print(b[-5:-2]) # orl
```

## Modify Strings

Python has a set of built-in methods that you can use on strings.

```py
# upper() method returns the string in upper case
a = "Hello, World!"
print(a.upper()) # HELLO WORLD!

# lower() method returns the string in lower case
a = "Hello, World!"
print(a.lower()) # hello, world!

# remove any whitespace from the beginning or the end
a = " Hello, World! "
print(a.strip()) # "Hello, World!" 

# replace a string with another string
a = "Hello, World!"
print(a.replace("H", "J")) # Jello, World!

# splits the string into substrings if it finds instances of the separator
# returns a list where the text between the specified separator becomes the list items
a = "Hello, World!"
print(a.split(",")) # ['Hello', ' World!'] 

```
## String Format

 :heavy_exclamation_mark: Python cannot combine strings and numbers like this:

 :x:
```py
# error
age = 36
txt = "My name is John, I am " + age
print(txt)
```

So combine strings and numbers by using the **format() method**!    
The format() method takes the passed arguments, formats them, and places them in the string where the placeholders {} are.

```py
# insert numbers into strings
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

# format() method takes unlimited number of arguments, and are placed into the respective placeholders
 quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))

# You can use index numbers {0} to be sure the arguments are placed in the correct placeholders
 quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))
```

## Escape Characters

To insert characters that are illegal in a string, use an escape character.

An escape character is a backslash \ followed by the character you want to insert.

An example of an illegal character is a double quote inside a string that is surrounded by double quotes.

```py
# escape character allows you to use double quotes when you normally would not be allowed
txt = "We are the so-called \"Vikings\" from the north."
```

Other escape characters used in Python

    \' 	Single Quote 	
    \\ 	Backslash 	
    \n 	New Line 	
    \r 	Carriage Return 	
    \t 	Tab 	
    \b 	Backspace 	
    \f 	Form Feed 	
    \ooo 	Octal value 	
    \xhh 	Hex value
    