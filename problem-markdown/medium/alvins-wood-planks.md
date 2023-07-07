# Alvin's Shape Puzzle
Alvin has decided to play with the [shape hole puzzle](https://www.alisonsmontessori.com/v/vspfiles/photos/i61-2.jpg?v-cache=1609315033). This one is a little unusal. In this puzzle, all of the holes and pieces are rectangles of various sizes. Alvin has $n$ wooden rectangles. The widths and heights of the rectangles can be represented by an array $a$ and an array $b$, where $a\_i$ and $b\_i$ are width and height of the $i$th rectangle, respectively. The puzzle has $m$ holes. The widths and heights of the holes can be represented by an array $c$ and an array $d$, where $c\_i$ and $d\_i$ are width and height of the $i$th hole, respectively. For each hole, Alvin wants to **determine how many of the rectangle pieces can fit into the hole.** How can this be done?

**Example**
```md
Input:
n = 5
m = 3
a = [1,4,5,2,7]
b = [1,3,9,100,3]
c = [1,10,3]
d = [1,9,5]

Output:
1
4
1
```
**Limits**
- $1 \le n \le 10^4$
- $1 \le m \le 10^4$
- $1 \le a\_i,b\_i,c\_i,d\_i, \le 1,000$
[BREAK]
This problem can be solved by setting up 2D prefix sum array of size $\max(a,c) \times \max(b,d)$, which we can call $pre$, where $pre[i][j]$ represents how many pieces have a width $\le i$ and a length $\le j$. Then we can set up a loop of $i$ from $1$ to $m$ and on each iteration, output $pre[c\_i][d\_i]$.
[BREAK]
Prefix Sums
[BREAK]
O(n + \max(a,c)\times \max(b,d)+m)