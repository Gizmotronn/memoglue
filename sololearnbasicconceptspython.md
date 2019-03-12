# Python - Sololearn Basic Concepts

[Simple Input & Output](##Simple-Input-And-Output)

## What we learn
* In Python, we use the print statement to output text - print("This is an example")
* We use quotation marks around text that should be outputed in the console

## Welcome to Python
* Python is a high-level programming language.
* It has applications in numerous areas (for example, web programming, scientific computing, and artificial intelligence)
* Used by companies such as Disney, NASA, & Google

* There are three major versions of Python - 1.xx, 2.xx, and 3.xx
* They are subdivided into minor versions (e.g.1.1)
* Code written for Python 3 is guaranteed to work for all future versions
* Python 2 & Python 3 are currently used
* An interpreter is a program that runs scripts written in an interpreted language such as python

### Questions
* Python is a *programming language*

* Which of these statements are true *Cpython is an implementation of Python*

## Your first program
* In Python, we use the print statement to output text
* We use quotation marks around text that should be outputed in the console
* We can either use "xx" or 'xx'
* The print statement can also be used to output multiple lines of text - see CODE (Your first program)

### Questions
* Fill in the blanks to print "Hi" - *print*("Hi")

## Simple Operations
* Python is capable of conducting simple calculations
* You can enter a calculation directly into Python and it will output the result for you  (see CODE (Simple operations))
* Python also carries out multiplication and division. 
* Python uses the * (shift+8) key for multiplication and the / (forward slash) key for division
* Parantheses () are used to determine which operations are performed first
* The minus sign indicates a negative number
* Operations are also performed on negative numbers
* Dividing by zero in Python gives an error as no number can be divided by zero

### Questions
* What does this code output? (1+2+3) *6*
* What is output by this code? ((4+8)/2) *6.0*

## Floats
* Floats are used in Python to represent numbers that aren't integers
* Some examples of numbers that are represented as floats are 0.5 and -7.82895
* Floats can be created directly by entering a number with a decimal point, or  by using operations such as multiplication or division on integers
* Extra zeroes at the end of the number are ignored
* Dividing any 2 numbers by each other produces a float
* A float is also produced by running an operation on 2 floats, or on a float and an integer

### Questions
* Which of these numbers will not be stored as a float? *7*

## Other numerical operations
* Exponentiation - Python also supports Exponentiation
* Raising of one number to the power of another
* This action is performed by using 2 asterisks (see Code examples|Other numerical operations)
* Quotient & Remainder - To determine the quotient and remainder of a division, use the floor division and modulo operators, respectively.
* Floor division is done using two forward slashes.
* The modulo operator is carried out with a percent symbol (%).
* These operators can be used with both floats and integers.

## Strings
* If you want to use text in Python, you have to use a string
* A string is created by entering text between 1 or 2 quotation marks (' or ")
* Some characters can't be used directly in a string
* Double quotes can't be used in a string as they would end the line prematurely
* Characters like these must be escaped by placing a backslash (\) before them
* Newlines - Python provides an easy way to avoid manually writing \n to escape newlines in a string
* Create a string with 3 sets of quotes, and newlines that are created by pressing enter are automatically escaped for you

(## Simple Input and Output)
* Usually, programs take an input and process it to produce an output
* In Python, you can use the print function to produce an output
* This creates a textual representation of something to the screen (see Code Examples\Simple Input & Output)
* To get input from the user in Python, you can use the input function
* This function prompts the user for an input, and returns what they answers as a __string__ (the contents are automatically __escaped__) (see Code Examples\Simple Input & Output)

## String Operations

# Code Examples

## Your first program

```print("Hello World")
print("Second sentence")
```

## Simple Operations
```2+2
Result = 4
```
## Other numerical operations
```2**5
32
2*5
10
```

## Simple input & output
```>>>print(1+1)
2
>>>print("Hello\nWorld!")
Hello
World!
```

```>>>name = input("What's your name?")
What's your name? (user enters "Liam")
>>>print("Hello, " + name)
Hello, Liam
```
