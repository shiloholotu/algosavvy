# **It Takes 10 to Tango:** Binary Search
**Efficiently searching monotonic and sorted functions.**

There are many scenarios where you need to pick an optimal number from a range of numbers. Sometimes you need to pick the perfect amount of time to microwave a snack. Sometimes you need to pick the perfect temperature for your AC to make you feel cozy. There are many scenarios like this in programming and we can use the **binary search** algorithm to help us find solutions.

**Note: All examples in this tutorial are in pseudocode.**

## Finding an Exact Value: Phonebook☎️ 
Imagine you have a very lengthy phone book with $n$ pages, each with 1 name on it, and need to find a specific name. The phone book is sorted alphabetically. You could flip page by page until you reach it(this would represent a **brute force** solution), but this would take quite a while. What's another way to do this?

**Example:**
```html
nameToFind = "Jerry" // assume 'Jerry' is somewhere in the names list
n = 1e19 // shorthand for 10^19
names = [
"Alvin",
"Barry",
"Bill"
"Bobert",
"Cathy",
...
"Zach",
"Zoe"
]
```

In this scenario, we can use **binary search**. To start, we can jump to the middle of the phone book. Then, we check if the name on that page matches the desired name, is before the required name, or after the required name. If it is the desired name, we can end the search there. If it before the desired name, we know that the desired name is in the second half of the book, considering the book is sorted alphabetically. If it is after the desired name, we know that the desired name is in the first half of book, by similar logic. Then we do this process again with the half that we know contains the desired name. Its important to note that this solution only works because the book is **sorted**.

The code would loke something like this:
```html
nameToFind = "Jerry"
n = 1e19
names = [
"Alvin",
"Barry",
"Bill"
"Bobert",
"Cathy",
...
"Zach",
"Zoe"
]

hi = n-1 // upper bound of potential solutions
lo = 0 // lower bound of potential solutions
ans = -1
while(lo <= hi){
    mid = (lo + hi)/2 // pick the name in the middle of the range
    if(names[mid] == nameToFind){// we found the name
        ans = mid
        break
    }
    else if(names[mid] > nameToFind){ // the middle name is after the desired name
        hi = mid-1 // set the upper bound to right before the selected middle name, cutting off the second half potential solutions
    }
    else{ // the middle name is before the desired name
        lo = mid+1 // set the lower bound to right after the selected middle name, cutting off the first half of potential solutions
    }
}

print(ans) // prints index of name
```

## Finding the Minimum Valid Value: Sneaker Haul👟
Imagine you have $n$ shoes and the sizes of the shoes can be represented by an array $sizes$, where $sizes\_i$ represents the size of the $i$th shoe. Array $sizes$ is sorted in **non-decreasing** order. Lets say you have a shoe size of $x$ and you want to figure out the smallest shoe in your collection that has a size $\ge x$. The brute force solution for this problem is to simply iterate from the beginning of $sizes$ until you reach a value that is $\ge x$. But for this example, I want you to imagine that $n$ is a super large number, like $10^{18}$, so you can't brute force through $sizes$. How else could you solve this? 

**Example:**
```html
n = 1e18
sizes = [1, 4, 4, 6, ..., 21, 22, 22]
x = 13
```

Just like in the previous example, we can use **binary search**. To start, we can jump to the middle of the collection. Then, we check if the size of that shoe is $<x$. If so, then we know that this shoe and all the shoes before it are too small, considering they are sorted from smallest to largest size. If the shoe's size is $\ge x$, then we know that all the shoes after this shoe have no chance of being the minimum valid shoe size, by similar logic. So then, if the size of the selected shoe is $<x$, then we can focus our search on all the shoes after it. Otherwise, we can focus our search on all the shoes before it, including the selected shoe. Then we repeat the same process on the selected portion of shoes until we find a solution. Its important to note that this solution only works this situation is **monotonic**. This means that at some point in the list of sorted potential solutions, all solutions before that point are valid and all solutions after are invalid(or vice versa). There is a point in the array $sizes$ where all sizes before it are $<x$(invalid) and all sizes after it are $\ge x$(valid).

The code would loke something like this:
```html
n = 1e18
sizes = [1, 4, 4, 6, ..., 21, 22, 22]
x = 13

hi = n-1 // upper bound of potential solutions
lo = 0 // lower bound of potential solutions
ans = -1
while(lo <= hi){
    mid = (lo + hi)/2 // pick the shoe in the middle of the range
    if(sizes[mid] < x){// size is invalid, too small
        lo = mid+1 // set lower bound to right after selected size, cutting off first half of potential solutions
    }
    else{ // size is valid
        ans = mid // store valid potential answer
        hi = mid-1 // set the upper bound to right before the selected size, cutting off the second half potential solutions
    }
}

print(ans) // prints index of minimum valid shoe
```

## Finding the Maximum Valid Value: Movie Hunt🍿
Imagine the movie theater has $n$ movie showings tonight and the age requirments of the movies can be represented by an array $req$, where $req\_i$ represents the age requirment of the $i$th movie. Array $req$ is sorted in **non-decreasing** order. Lets say are $x$ years old and you to find the movie with the highest age requirement that is still $\le x$. The brute force solution for this problem is to simply iterate backwards from the end of $req$ until you reach a value that is $\le x$. But for this example, I want you to imagine that $n$ is a super large number, like $10^{18}$, so you can't brute force through $req$. How else could you solve this?

**Example:**
```html
n = 1e18
req = [3, 4, 4, ..., 20, 20, 20]
x = 15
```

As you probably guessed, we can use **binary search**. To start, we can jump to the middle of the movies. Then, we age requirement of that movie is $>x$. If so, then we know that this movie and all the movies after it are too mature, considering they are sorted from smallest to largest age requirement. If the movie's age is $\le x$, then we know that all the movies before this movie have no chance of being the maximum valid movie, by similar logic. So then, if the age requirement of the selected movie is $>x$, then we can focus our search on all the movies before it. Otherwise, we can focus our search on all the movies after it, including the selected move. Then we repeat the same process on the selected portion of movies until we find a solution. Just like the previous example, its important to note that this solution only works this situation is **monotonic**. There is a point in the array $req$ where all age requirements before it are $\le x$(valid) and all sizes after it are $\g x$(invalid).

The code would loke something like this:
```html
n = 1e18
req = [3, 4, 4, ..., 20, 20, 20]
x = 15

hi = n-1 // upper bound of potential solutions
lo = 0 // lower bound of potential solutions
ans = -1
while(lo <= hi){
    mid = (lo + hi)/2 // pick the movie in the middle of the range
    if(req[mid] > x){// movie is invalid, too mature
        hi = mid-1 // set upper bound to right before selected movie, cutting off second half of potential solutions
    }
    else{ // movie is valid
        ans = mid // store valid potential answer
        lo = mid+1 // set the lower bound to right after the selected movie, cutting off the first half potential solutions
    }
}

print(ans) // prints index of maximum valid movie
```
## Sources
- **[Binary Search - USACO Guide](https://usaco.guide/silver/binary-search)**