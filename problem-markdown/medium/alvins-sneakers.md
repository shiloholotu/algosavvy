# Alvin's Sneakers
Alvin has $n$ coins and the $i$'th coin has a value of $v\_i$ dollars. Alvin really wants to buy the new **Mikey Air Runners™**, which cost $m$ dollars. However, **the Mikey Store** has a very unusual rule: **You can only buy Mikey Air Runners if you pay with exactly $m$ dollars.** Given his $n$ coins, Alvin wants to determine if it is possible for him to buy the shoes. How can this be determined?

This problem can be solved iteratively by setting up a 2D array $ans$ of size $(n+1) \times (m+1)$, where the value of $ans\_{i,j}$ indicates whether it is possible to achieve a total value of $j$ by only choosing from the first $i$ coins. We can start populating this array by setting all values of $ans$ to $false$ and then setting $ans\_{0,0}$ to $true$. Then, for every $i$'th row, we can iterate through every $j$'th value and do the following:


$ans\_{i+1,j} = max(ans\_{i,j} , ans\_{i+1,j})$

$ans\_{i+1,j + v\_i} = max(ans\_{i,j}, ans\_{i+1,j + v\_i})$

Or

```cpp
ans[i+1][j] = max(ans[i][j]), ans[i+1][j]
ans[i+1][j + v[i]] = max(ans[i][j], ans[i+1][j + v[i]])
```

Then you can simply return $ans\_{n,m}$ as your answer.

Dynamic Programming

$O(n*m)$