# Alvin's Heavy Wallet
Alvin has $n$ coins. The **weights** of the coins can be represented by an array $w$, where $w\_i$ represents the weight of the $i$th coin. The **values** of the coins can be represented by an array $v$, where $v\_i$ represents the value of the $i$th coin. Alvin's wallet can hold a maximum weight of $m$. Alvin wants to determine **the maximum total value of coins he can fit in his wallet while maintaining a weight $\le m$.** How can this be done?

**Example**
```md
Input:
n = 5
m = 8
w = [1,3,5,2,7]
v = [2,10,3,5,9]

Output: 17
```

**Limits**
- $1 \le n \le 1,000$
- $1 \le m \le 100$
[BREAK]
This problem is nothing more than the common [0/1 Knapsack Problem](https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/). This problem can be solved iteratively by setting up a 2D array $ans$ of size $(n+1) \times (m+1)$(zero-indexed), where the value of $ans\_{i,j}$ indicates the **maximum** value that can be achieved by choosing from the first $i$ coins while maintaining a total weight $\le j$. We can populate the array by first setting all values $0$. Then, for every $i$th row, we can iterate through every $j$th value and do the following:

$ans[i+1][j] = \max(ans[i][j], ans[i+1][j])$

$ans[i+1][j+w[i]] = \max(ans[i][j] + v[i], ans[i+1][j+w[i]])$

Then you can simply return $ans\_{n,m}$ as your answer.
[BREAK]
Dynamic Programming
[BREAK]
O(n*m)