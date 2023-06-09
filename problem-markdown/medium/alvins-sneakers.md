# Alvin's Sneakers
Alvin has $n$ coins and the value of the coins can be represented by an array $v$, where $v\_i$ is the value of the $i$th coin in dollars. Alvin really wants to buy the new **Mikey Air Runners™**, which cost $m$ dollars. However, **the Mikey Store** has a very unusual rule: **You can only buy Mikey Air Runners™ if you pay with exactly $m$ dollars.** Given his $n$ coins, Alvin wants to determine if it is possible for him to buy the shoes. How can this be determined?

**Example**
```md
Input:
n = 4
m = 8
v = [1,3,5,9]

Ouput: true
```

**Limits**
 - $1 \le n \le 1,000$
 - $1 \le m \le 100$
[BREAK]
This problem can be solved iteratively by setting up a 2D array $ans$ of size $(n+1) \times (m+1)$(zero-indexed), where the value of $ans\_{i,j}$ indicates whether it is possible to achieve a total value of $j$ by only choosing from the first $i$ coins. We can start populating this array by setting all values of $ans$ to $false$ and then setting $ans\_{0,0}$ to $true$. Then, for every $i$th row, we can iterate through every $j$th value and do the following:

$ans[i+1][j] = \max(ans[i][j]), ans[i+1][j])$

$ans[i+1][j + v[i]] = \max(ans[i][j], ans[i+1][j + v[i]])$

Then you can simply return $ans\_{n,m}$ as your answer.
[BREAK]
Dynamic Programming
[BREAK]
O(n*m)