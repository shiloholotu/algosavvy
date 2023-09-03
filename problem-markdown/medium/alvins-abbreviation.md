# Alvin's Abbreviation
Alvin has has a list of $n$ names of his friends and the names of his friends can be represented by an array $f$, where $f_i$ is the name of the $i$th friend. Alvin wishes type out these names on his phone to save them for later, but he wants to abbreviate them to save time. **Conveniently, all of the names are the same length.** However, Alvin isn't sure how short to abbreviate the names. 

For example, if Alvin's list of names includes the names `Jakie` and `Jacob`, abbreviating the names to a length of two would create duplicates, which Alvin doesn't want. Alvin wants to determine **the minimum length of characters the names can be abbreviated while creating no duplicates.** How can this be done?

**Example**

```md
Input:
n = 3
f = ["Jakie", "Jacob", "Jarold"]

Output: 3
```

**Limits**

- $1 \le n \le 10^5$
- $1 \le |f\_i| \le 10^5$ ($|x|$ indicates the length of string $x$)
- Assume all names are the same length

[BREAK]
It is always optimal to choose the tallest blocks, as using them will allow Alvin to cover more height with less blocks.  Therefore, to solve this problem we should do the following: 

- Sort $h$ in **non-increasing** order

- Iterate through the blocks. For each block, add its height to the variable $totalHeight$ and add $1$ to the variable $totalBlocks$

- Once $totalHeight \ge x$, we can stop iterating and output $totalBlocks$ as our answer.
[BREAK]
Greedy
[BREAK]
O(n)