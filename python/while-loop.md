
# The while Loop

With the **`while`** loop we can **execute a set of statements** as long as a condition is true.

The `while` loop requires relevant variables to be ready, in this example we need to define an **indexing variable**, **i**, which we set to 1.

```py
# print i as long as i is less than 6
i = 1
while i < 6:
  print(i)
  i += 1

# output: 
1
2
3
4
5 
```

:memo: Note: remember to **increment i**, or else the loop will continue forever (infinite loop).

## The break Statement

With the `break` statement we can **stop the loop even if the while condition is true**.

```py
# exit the loop when i is 3
i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1

# output: 
1
2
3 
```
## The continue Statement

With the `continue` statement we can **stop the current iteration**, and **continue with the next**.

```py
# continue to the next iteration if i is 3
i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)

# output: 
1
2
4
5
6
```

## The else Statement

With the `else` statement we can **run a block of code** once when the **condition nolonger is true** .

```py
# print a message once the condition is false
i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")
```

### :computer: Examples

```py
# count yes
count = 0
answer = 'y'
while answer == 'y':
  count += 1 # count = count + 1
  print(count + " rounds")
  answer = input("one more round? (y/n)")


# break infinitive loop
while True:
  answer = input("one more round? (y/n)")
  if answer == "y":
    print("It was short")
    beak

# print all items (go through all the index numbers)
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1
```



