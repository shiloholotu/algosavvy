# Alvin's Heavy Wallet
Alvin has $n$ coins and the $i$'th coin$(1\le i\le n)$ has a weight of $w\_i$ and a value of $v\_i$. Alvin's wallet can hold a maximum weight of $m$. Alvin wants to determine **the maximum total value of coins he can fit in his wallet while maintaining a weight $\le m$.** How can this be done?
[BREAK]
This problem is nothing more than the common [0/1 Knapsack Problem](https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/). This problem can be solved iteratively by setting up a 2D array $ans$ of size $(n+1) \times (m+1)$, where the value of $ans\_{i,j}$ indicates the **maximum** value that can be achieved by choosing from the first $i$ coins while maintaining a total weight $\le j$. We can populate the array by first setting all values $0$. Then, for every $i$'th row, we can iterate through every $j$'th value and do the following:

$ans\_{i+1,j} = max(ans\_{i,j}, ans\_{i+1,j}$

$ans\_{i+1,j+w\_i} = max(ans\_{i,j} + v_i, ans\_{i+1,j + w\_i})$

Or

```cpp
ans[i+1][j] = max(ans[i][j], ans[i+1][j])
ans[i+1][j+w[i]] = max(ans[i][j] + v[i], ans[i+1][j+w[i]])
```
Then you can simply return $ans\_{n,m}$ as your answer.
[BREAK]
Dynamic Programming
[BREAK]
$O(n*m)$