# Alvin's City Plan
Alvin has decided to become a city planner. When planning a city, Alvin uses a list of instructions that describe connections between houses. These instructions are in the format of:
```
House (n) connects to House (m)
```
For example, one instruction may look like:
```
House 1 connects to House 2
```
A **neighborhood** is described as a group of houses in which all houses are somehow connected and no houses share a connection to a house outside the neighborhood(Otherwise, that outside house would also have to be included in the neighborhood).

Today, Alvin plans to build $n$ houses, numbered from $1$ to $n$, and has a list of $m$ instructions$(1 \le m \le n-1)$ that describe connections between different houses. Given these things, Alvin wants to **determine the number of neighborhoods that would be built by using the instructions.** How can this be done?
[BREAK]
This problem can be solved with simple BFS/DFS. The list of instructions can be interpreted as an **adjacency list**. It is also important to note that just because a house is not mentioned in the instructions does not mean that that house does not exist, it simply means that that house does not connect to any other houses. Using this knowledge, we can set up an array $seen$ of length $n$ where $seen\_i(1 \le i \le n )$ denotes whether the $i$'th house has been visited. All values will be initialized to $false$. We will also initialize the variable $totalNeighborhoods$ to $0$. Then we can start a loop of $i$ from $1$ to $n$ and for each value, if $seen\_i$ is $false$ we can add $1$ to $totalNeighborhoods$ and then run a BFS/DFS on the $i$'th house and for every $j$'th  house that we visit(including the $i$'th house), we can set seen $seen\_j$ to $true$.

Finally, at the end of the loop, we can return $totalNeighborhoods$ as our answer.
[BREAK]
BFS/DFS
[BREAK]
O(n + m)