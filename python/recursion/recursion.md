## Recursion

It is a process in which a function calls itself directly or indirectly.

Decompose the original problem into simpler instances of the same problem. 

### :computer: Example

```py
# factorial
def fact(n):
    if n == 0:
        return 1
    return n * fact(n -1)

result = fact(5)

print(result) # 120


# explanation
fact(5) ->  5 * 4!  ->  5 * 24 = 120
fact(4) ->  4 * 3!  ->  4 * 6 = 24
fact(3) ->  3 * 2!  ->  3 * 2 = 6
fact(2) ->  2 * 1!  ->  2 * 1 = 3
fact(1) ->  1 * 0!  ->  1 * 1 = 1
fact(0) ->  !0 = 1

```

<br>

### :white_check_mark: Advantages of using recursion

- a complicated function can be split down into smaller sub-problems

- sequence creation is simpler through recursion than utilizing any nested iteration

- the code look simple and effective


### :x: Disadvantages of using recursion

- recursive calls use a lot of memory and time 

- challenging to debug

- the reasoning behind recursion can sometimes be tough to think through

