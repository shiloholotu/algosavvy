# Alvin's Building Blocks
Alvin has $n$ building blocks and the $i$'th building block$(1 \le i \le n)$ has a height of $h_i$. Using the building blocks, Alvin wants to build a tower of at least height $x$. However, Alvin wants to determine **the minimum amount of blocks needed to build a tower of at least height $x$.** How can this be done?

Note: Assume that there is always enough blocks to reach the desired height.
[BREAK]
It is always optimal to choose the tallest blocks, as using them will allow Alvin to cover more height with less blocks.  Therefore, to solve this problem we should do the following: 

- Sort the blocks in **non-increasing** order

- Iterate through the blocks. For each block, add its height to the variable $totalHeight$ and add $1$ to the variable $totalBlocks$

- Once $totalHeight \ge x$, we can stop iterating and output $totalBlocks$ as our answer.
[BREAK]
Greedy
[BREAK]
$O(n)$