# **Think Greedy, Act Greedy:** Greedy Algorithms
**A lesson on greedy algorithms.**

A greedy algorithm is an algorithm that picks the best available choice at each step, with no regard to how that choice will effect future choices. So technically, "Greedy" isn't algorithm, like BFS/DFS, but an general problem solving strategy that can be applied to certain problems.

**Note: All examples in this tutorial are in pseudocode.**

## Bad Example: Max Path🪙
When solving problems, using a greedy algorithms may look like an appealing potential solution, but there are many scenarios where we can't use this way of thinking. Lets an example...

Imagine you are placed on a maze, with coins of various values placed on each step. You're not allowed to revisit position that you've already been on. Your goal is to maximize the total value of the coins you collect. How would you do this?

**Example(x indicates start position):**
```html
 [6][5][7]
    [4]
 [3][x][2]
 [1]
```

The greedy way of solving this problem would be to look at all possible directions from your current location(which would be 3, 4, and 2), and then move onto the highest one(4). Then you would repeat this pattern until there is no more positions to travel to.

For this specific example, the greedy algorithm works. However, **don't be deceived!** This algorithm only looks at the positions directly adjacent to the current position and doesn't consider the total amount of coins that can be collected on a certain path. Lets look another example

**Example(x indicates start position):**
```html
 [6][5][7]
    [4]
 [3][x][2][9][9][9]
 [1]
```

For this example, the obvious route is to go right, but since 2 is less than 3 and 4, the algorithm will fail to consider this path.


## Good Example: Speed Read🏁
Imagine you have $n$ books. Each books takes a certain amount of time to read. We can represent the needed reading times of each book with an array $t$, where $t\_i$ is the needed reading time of the $i$th book. Lets say you can only pick $m(1 \le m \le n)$ books. What is the maximum amount of time you can spend reading?

**Example:**
```html
n = 5
m = 3
t = [1,4,2,8,3]
```

For this problem, a greedy solution will work. For each choice, we choose the book with the highest reading time among the remaining books and remove it. This always guarantees we pick the $m$ books with the highest reading time, giving us the maximum total reading time. A potential algorithm for this is to simply sort the array in decreasing order and sum the first $m$ elements.

## More examples: freeCodeCamp.org
Here you can find a bunch more examples and explanations of greedy algorithms: [Greedy Algorithms Tutorial – Solve Coding Challenges](https://www.youtube.com/watch?v=bC7o8P_Ste4&ab_channel=freeCodeCamp.org)