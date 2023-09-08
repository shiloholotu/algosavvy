# **Brains vs Brawn:** Implementing Brute Force
**When in doubt, use brute force!**

Sometimes the most obvious way to solve a problem is to check every possible answer until you find the solution. While you should always attempt figure the most efficient algorithm for a problem, sometimes **brute force** is the only option.

**Note: All code examples in this tutorial are in pseudocode.**

## Max Distance Problem

For example, lets say we have a list of unique coordinate pairs, like this:
```html
coordinates = [
    [5,10],
    [8,2],
    [13,9]
]
```
And we want to determine the maximum distance between any pair of coordinates. Unfortunately, there is no special algorithm for a scenario like this, so all we can do is **brute force** our way through the problem. 

To implement brute force, we can iterate through every possible pair of the coordinates while keeping track of the current max. The solution would look something like this:
```html
mx = 0

for i of coordinates {

     for j of coordinates{

          if j == i {
               continue //we can't have a pair of the same coordinate
          }

          dist = sqrt((j[0] - i[0])^2 + (j[1] - i[0])^2) //distance formula
          mx = max(mx, dist)
     }

}

print(mx)
```

This has algorithm has a **time complexity** of $O(n^2)$, where $n$ is the number of coordinate pairs. It's important to note that brute force solutions are often slow and inefficient and should only be used as a last resort.