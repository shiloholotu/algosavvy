# **Building Blocks:** Ints, Strings, Arrays, and Others
**The fundamental data structures.**

**Data structures** do exactly what you would expect: they **structure data**. Each data structure has their own unique ways of organizing data and each one has its advantages and disadvantages in certain situations. This tutorial will cover the most basic of the data structures, which serve as the building blocks of more complex ones.

**Note: All examples in this tutorial are in C++.**

## Integers
Commonly referred to as **ints**, integers store whole number value that encompass negative values, positive values, and zero(${...,-3,-2,-1,0,1,2,3,...}$). However, as you'll see below, ints have a limit on how big or small the values they store can be.

### 32-bit
32-bit integers can store whole number values from $-2,147,483,648$ to $2,147,483,648$, which sums up to $2^{32}$ different values in total. 32-bit integers will suffice in most situations. In most languages, such as C++ and Java, a 32-bit integer can be declared with the specifier `int` and serve as the default data type for storing whole number values.

```cpp
int number = 2147483648;
```

### 64-bit
64-bit integers can store whole number values from $-4,294,967,296$ to $4,294,967,296$, which sums up to $2^{64}$ different values in total. While it is tempting to use 64-bit integers by default so you rarely have to worry about hitting value limits, 64-bit integers are slower and take more memory than their 32-bit counterparts. Languages vary in how they declare 64-bit integers. In C++, you would use `long long`; in Java, you would use `long`; and in Python, you wouldn't even need to specify.

```cpp
long long number = -4294967296;
```

## Floating Point Numbers
Floating point numbers are the most common way to store decimal numbers. They are comprised of a positive or negative sign and decimal value(e.g., `-1.23`,`5.0020`). Similar to how ints have a limit on how big or small their values can be, floating point numbers have a limit on how **precise** their decimal values can be.

### 32-bit
Commonly referred to as **floats**, 32-bit floating point numbers can store up to about 7 significant digits. Floats usually suffice for operations on decimal numbers. In many languages, such C++ and Java, floats are declared with the `float` specifier, but in some languages, float values are indicated with the "f" suffix(e.g., `54.3f`).

```cpp
float pi = 3.14159;//🍰
```

### 64-bit
Commonly referred to as **doubles**, 64-bit floating point numbers can store up to about 15 significant digits. While they are more precise, doubles are slower and take up more memory that floats. In most languages, doubles are declared with the `double` specifier, but floating point literals without a specifier are usually considered doubles by default.

```cpp
double pi = 3.14159265358979;//🍰🍰
```
  
## Booleans
Booleans are used to store logical values and can have 1 of 2 states: `true` or `false`. Booleans serve as the outputs of logical operations(e.g. `5 == 10 >>> false`) and most languages even allow the use of integers as booleans, where `0` is `false` and any other value is `true`. It is commonly declared with the `bool` specifier, like in C++, or with the `boolean` specifier, like in Java.

```cpp
bool lebronIsTheGOAT = false;
bool jordanIsTheGOAT = true;
```

## Chars
Chars are used to store individual characters, like letters, digits, symbols, or special characters. Characters are mapped to unique numeric codes and these mappings depending on the encoding the char variable uses, such as Unicode or ASCII. Chars are commonly declared with the `char` specifier and char literals are often enclosed with `'` brackets, instead of `"` brackets like strings.

```cpp
char yum = '🍕';
```

## Arrays
Arrays are a collection of elements of the same data type. Each element can be accessed with a unique index, usually with the first element having the index `0` and the next having the index `1` and so on. Many languages allow the use of 2 different types of arrays: **Static and Dynamic**. Different languages can vary a lot in how they declare arrays, so its best to figure out how your language of choice does it specifically.

**Static arrays** have a **static** size, i.e. the amount of elements they can store cannot be changed.
```cpp
string dogs[3] = {"Golden Retriever🐕", "Poodle🐩","Chihuahua👹"};
cout << dog[1]; // "Poodle🐩"
```
**Dynamic arrays** can do everything that static arrays can do, but can be resized. This allows for elements to be added to the array and the array will automatically adjust its size to fit them.
```cpp
vector<string> dogs = {};
dogs.push_back("Golden Retriever🐕");
cout << dogs[0]; // "Golden Retriever🐕"
``` 

## Strings
Strings are sequence of characters and can often be treated like an array of char variables. They usually support the use of indexes to access specific characters just like arrays. In some languages, such as Java and Python, strings are **immutable**, meaning that once a string is created, it can't be changed and any operation on it will simply create a new string. In other languages, such as C++, string are **mutable**, meaning they can be modified directly.

```cpp
string name = "Alvin";
name[3] = 'y';//C++ strings are mutable
cout << name; // "Alvyn"
```