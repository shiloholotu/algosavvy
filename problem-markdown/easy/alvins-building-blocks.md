# Alvin's Building Blocks
Alvin has $n$ building blocks and the heights of the blocks can be represented by an array $h$, where $h\_i$ is the height of the $i$th building block. Using the building blocks, Alvin wants to build a tower of at least height $x$. However, Alvin wants to determine **the minimum amount of blocks needed to build a tower of at least height $x$.** How can this be done?

**Example**

```md
Input:
n = 3
h = [1, 5, 6]
x = 6

Output: 1
```

**Limits**

- $1 \le n \le 10^5$
- $1 \le h\_i \le 10^4$
- $1 \le x \le 10^9$ 
- Assume that there is always enough blocks to reach the desired height.
[BREAK]
It is always optimal to choose the tallest blocks, as using them will allow Alvin to cover more height with less blocks.  Therefore, to solve this problem we should do the following: 

- Sort $h$ in **non-increasing** order

- Iterate through the blocks. For each block, add its height to the variable $totalHeight$ and add $1$ to the variable $totalBlocks$

- Once $totalHeight \ge x$, we can stop iterating and output $totalBlocks$ as our answer.
[BREAK]
Greedy
[BREAK]
O(n)