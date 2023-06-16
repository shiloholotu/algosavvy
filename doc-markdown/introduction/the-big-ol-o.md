# **The Big Ol' O:** Big-O Notation and Time Complexity
**Analyzing the efficiency of algorithms.**

When trying to write fast and efficient solutions, its important to have a way of measuring the efficiency of an algorithm. An amazing way of doing this is through **Big-O Notation,** which measures the amount of operations an algorithm will run relative to an input size of $n$.

## Common Rules:

### Drop the constants
Let's say we have an algorithm that, when given an input of $n$, outputs `"Hello World!"` $2n$ times. As $n$ grows arbitrarily, the $2$ matters less and less to the efficiency of the algorithm(For input size of $10^{50}$, $10^{50}$ operations isn't much better than $2 \times10^{50}$ operations. They're both **a lot** of operations). So then we can simplify this notation to $O(n)$. We would do the same for an algorithm with a complexity of $O(n+1)$ or $O(5n)$ or something similar.

### Drop Lower Order Terms
Just like how $n$ dominates constants in Big-O notation, as stated in the previous rule, higher order terms of $n$ dominate the lower order terms. For example, $O(n!\log n)$ would often be simplified to $O(n!)$, as $\log n$ matters less relative to $n!$ as $n$ grows.

### Use the worst case scenario
When determining the Big-O notation of an algorithm, you should try to view the problem from the perspective of the worst possible scenario. For example, lets say you wanted to use [**The Quick Sort algorithm**](https://www.geeksforgeeks.org/quick-sort/) to sort an array of size $n$. The **best case scenario** for this algorithm would be if the array was already sorted. In that case, the algorithm would run with an extremely low time complexity, as there would be no calculations needed to be done. However, this calculation isn't very helpful if we are assuming the array isn't already sorted. But now, try to imagine if the array was scrambled in a way where it would take Quick Sort the longest possible time to sort an array of size $n$. This calculation, **the worst case scenario,** is much more indicative of the complexity of the algorithm relative to $n$.

## Common Complexities
Here's a list of common complexities from best to worst

- $O(1)$ - An algorithm runs a constant number of operations(e.g., an algorithm that outputs `"Hello World!"` 5 times regardless of the input).

- $O(\log n)$ - As $n$ grows, the rate of increase of operations performed by an algorithm decreases. In other words, the growth in number of operations slows down as $n$ grows(e.g., an algorithm that divides an input $n$ in half until its value is $\le 1$).

- $O(n)$ - As $n$ grows, the number of operations performed by an algorithm grows at the same rate(e.g., an algorithm that outputs `"Hello World"` $n$ times).

- $O(n^2)$ - As $n$ grows, the number of operations performed by an algorithm grows quadratically with $n$(e.g., an algorithm that counts from $1$ to $n$, $n$ times; `1, 2, 3...1, 2, 3...1, 2, 3` for $n = 3$).

- $O(2^n)$ - As $n$ grows, the number of operations performed by an algorithm grows exponentially with $n$(e.g., an algorithm that examines all possible subsets of a set of $n$ elements).

- $O(n!)$ - As $n$ grows, the number of operations performed by an algorithm grows factorially with $n$(e.g., an algorithm that examines all possible permutations of a set of $n$ elements).


## Sources
- [**Big-O notation in 5 minutes - Michael Sambol**](https://www.youtube.com/watch?v=__vX2sjlpXU&ab_channel=MichaelSambol)
- [**Time Complexity - USACO Guide**](https://usaco.guide/bronze/time-comp?lang=cpp)

