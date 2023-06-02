# Alvin's Wood Planks
Alvin has decided to build a nice wooden house. However, before he can start building anything, he needs to organize his materials. Alvin has $n$ wooden planks. The $i$th plank has a width of $a\_i$ and a length of $b_i$. These planks can be classified into $m$ groups. For a plank to be classified in the $i$th group, the plank must have a width $\le c\_i$ and a length $\le d\_i$. **A planks can be classified into multiple groups.** For each group, Alvin wants to **determine how many planks can be classified into the group.** How can this be done?

$1 \le n \le 10^4$

$1 \le m \le 10^4$

$1 \le a\_i,b\_i,c\_i,d\_i, \le 1,000$
[BREAK]
This problem can be solved by setting up 2D prefix sum array of size $\max(a,c) \times \max(b,d)$, which we can call $pre$, where $pre[i][j]$ represents how many planks have a width $\le i$ and a length $\le j$. Then we can set up a loop of $i$ from $1$ to $m$ and on each iteration, output $pre[c\_i][d\_i]$.
[BREAK]
Prefix Sums
[BREAK]
$O(n + \max(a,c)\times \max(b,d)+m)$