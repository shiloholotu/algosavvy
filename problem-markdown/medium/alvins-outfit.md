# Alvin's Outfit
Alvin is getting ready for his day and its time to choose his outfit. Alvin has $n$ shirts and $n$ pants. Alvin has given each of his shirts and each of his pants a **fashion score**, which indicates how fashionable he finds each piece of clothing. The fashion scores of clothing can be represented by an array $a$ and an array $b$, where $a\_i$ and $b\_i$ represent the fashion scores of the $i$th shirt and the $i$ pair of pants respectively. Alvin wants to look fashionable, but also doesn't want to show off. After some thinking, Alvin has decided that he wants to wear an outfit with a total fashion score of exactly $m$. Alvin needs to **determine if it is possible to create an outfit with a score exactly $m$.** How can this be done?

**Example**
```html
Input:
n = 3
m = 12
a = [1,3,8]
b = [2,9,4]


Output:
true
```

**Limits**
- $1 \le n \le 10^9$
- $1 \le a\_i, b\_i \le 10^5$
[BREAK]
Your first instinct might have been to run a nested loop that checks every possible combination of shirts and pants. However, this solution has a $O(n^2)$ time complexity, which would become very slow, considering $n$ can be as large as $10^9$. The most optimal solution would be to loop create an array $occ$ of size $10^5$, where $occ\_i$ indicates that a shirt with fashion score $i$ exists. We can populate there array with 0s and then loop through each $a\_i$ and set $occ[a\_i]$ to 1. Then we can loop through each $b\_i$ and if $occ[m - b\_i]$ is 1, then we can break the loop and output $true$. If we reach the end of the loop without finding a successful pair, we output $false$.
[BREAK]
Brute Force
[BREAK]
O(n)