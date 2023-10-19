# **Getting Graphy with It:** Adjacency Lists, BFS, and DFS
**An dive into graph data structures.**

A graph is a non-linear data structure that consists of nodes connected by edges. This sort of data structure can be very useful, like when trying to represent different routes between houses or a series of flights between airports.

**Note: All examples in this tutorial are in psuedocode.**

## Important Vocabulary
Before we dive deeper, lets introduce some important words that you'll encounter a lot when dealing with graphs. Don't worry if its a too much to memorize right now, these terms will become natural as you gain more experience with graphs.
- **Node(vertex)** - individual stops or points in a graph
- **Edge** - a connection between nodes
- **Adjacent** - when two nodes have an edge between them
- **Path** - a list of non-repeating adjacent nodes leading from one node to another
- **Cycle** - a path that starts and ends at the same node
- **Connected** - when two nodes have at least one path between them
- **Connected component** - a group of nodes that are all connected to each other and share no connections to nodes outside of the group(otherwise, those outside nodes would have to be included in the component)
- **Directed** - when an edge between nodes only exists in a specific direction
- **Undirected** - when an edge between nodes exists both ways
- **Weighted** - when a graph's edges each have weights associated with them(i.e., a graph of a city might have connections between neighborhoods weighted by their distance)
- **Simple graph** - a graph that has no duplicate edges and no edges from a node to itself
- **Connected graph** -  a graph that only consists of one connected component
- **Complete graph** - a graph where all possible edges exist; every possible pair of nodes are adjacent
- **Acyclic graph(Forest)** - a graph with no cycles

## Adjacency List
**Adjacency lists** are probably to most popular way to represent graphs in code. To create one, we iterate through each node and store its neighbors. This is can be done in an array of lists or a map/dictionary. The following graph may look like this when represented as an adjancency list:
![https://ci3.googleusercontent.com/mail-img-att/AM67uIMRl7fWX0G-TDRH3P7HHs_8Dw7OOOS_DLz1SCzwMFbasPL-wzib3WRWvQFMRMBSI2ytKQChJoaaq3M9h-EFmX-PgRZ9-aZTOf0E_bzUi5VFkmsBZ2AYjBa7_US5lqN60G21I27WPYV4zmU6IR0R3LWqksPMF77xlOYd1y-iUuFSa7DGZ9IKYSfIMRPkjDqFQaEVtE5YkJBJoBRRnwIfoy3bkl8T6uyp5UdGw5fT4V6ZhybziH8Ef3GLjy0zN9S5dPXkHoUL-4PFX9pO2KXxqDmFL6QDJdwppq_Mp7eepHz6pTxQCDukpm8f2Aq3PSin8pqwBltf0nmbqT9ZAre7etkJVYg7LKVUxWyH4MSx1vWHpifo_4HKS89gZY19nuN9XRqY38UYIao72k3XdLRTeAGQ4qrqnlYm7mIC10CqFK5PsdQQAAp3-6aFJycT4ZxdXutzitG3FVpbh3I8HkUA6HMTLsGQi3fY9kQ66B9WAiPAgMVVn-KqcqG3j01lC7baYvQ1JgT1_BjrOCItyyxvZbgJDoCRN9wF_X_0Pz-mBdSspUvY2IfZwpcYime__Bd45AkFDpWWZez3mth6uV4MrJLoZCwMCwk9nVsf5vH1AUB4cyxhOV5tIyKp-f3yWnha62sfwpsbQ-dUtuFVtc-uKiwoopvP1BqAVqvtGkmIIqevwGTrbkTHzqWj0Ob-jIkBxmMigGzk8vaHeNzFR_vx_Bg3EtmdX2buuBXhVj7As2SYkOR4bGzzOnsDYRpMH8c-YNVazynpEYRukVPZ1Wi6PLDwxA-A23v144xuqWqltyzjiwkecwsvTI_v75Q98mnGsLG1CwtVFgw1NJiPiCxKZXID46eQy9K64yB-lkzHEtNWqBCPhUWfslCEfzgqQtFEAiorFm6Tcui03YHILp-RdVL90b5Xd6HslfN7VgApIyIZ50_e_eAahubKmwZyP6pnfq47HUhIvPAVoyLGkH3RfAGpORqL2a4tLvfqH0gizM1z4Nlr1jd-3Nk8TWgtmj-0zDtMmv3Zr81HEz3pL7mSXIxM8AKb1I14nkkhirXSsOU_JLtdClH21vpSOLgr5qtY83ZH5s7o_ohwKN2SJiNgmrAK=s0-l75-ft](bruh)
```html
{
    1:[2,3]
    2:[1,3]
    3:[1,2]
    4:[5]
    5:[4]

}
``` 
A queue, similar to queues in real life, is a linear data structure uses **FIFO(First in First Out)**. This means that elements are added to the back of the queue and are removed from the front. Imagine a line for an ice-cream vendor. People join the line from the back and when the person in front is served, they leave the line and everyone else moves up.

In most languages, queues have 3 functions(they may be named differently):
- **Push** - Add an element to the back of the queue
- **Pop** - Remove the element in the front of the queue
- **Front** - Retrieve the element in the front of the queue

```cpp
queue<char> myQueue;
myQueue.push('🍔'); // [🍔]
myQueue.push('🍕'); // [🍔🍕]
myQueue.push('🍟'); // [🍔🍕🍟]
cout << myQueue.front() << endl; // 🍔
myQueue.pop(); // [🍕🍟]
```



## Stacks
A stack is almost identical to a queue, except that a stack uses **LIFO(Last in Last Out)**. This means that elements are added to the top of the stack and removed from the top. Imagine a stack of pancakes. The newest pancakes are on the top of the stack and are eaten first. The oldest pancakes are on the bottom and are eaten last.

In most languages, stacks have 3 functions(they may be named differently):
- **Push** - Add an element to the top of the stack
- **Pop** - Remove the top element from stack
- **Top** - Retrieve the top element in the stack

```cpp
stack<char> myStack;
myStack.push('🍔'); // [🍔]
myStack.push('🍕'); // [🍕🍔]
myStack.push('🍟'); // [🍟🍕🍔]
cout << myStack.top() << endl; // 🍟
myStack.pop(); // [🍕🍔]
```

## Heaps(Priority Queues)
Sometimes referred to as a **priority queue**, a heap  has the same functions as a queue or stack, but instead of sorting elements using FIFO or LIFO, heaps sort elements by their **priority**. By default, priority is determined by which elements are greater than($>$) another($5$ has a higher priority than $4$).

```cpp
priority_queue<int> pq;
pq.push(5); // [5]
pq.push(2); // [5 2]
pq.push(10); // [10 5 2]
pq.push(1); // [10 5 2 1]
cout << pq.top() << endl; // 10
pq.pop(); //[5 2 1]
cout << pq.top() << endl; // 5 
```

## Sets
A **set** is a collection of unique elements with no duplicates. You can add, remove, and search for elements in a set but any duplicates are automatically ignored. Sets usually come in two types, **ordered** and **unordered**.


### Ordered
An **ordered set**,(`set` in C++ and `TreeSet` in Java), sorts its elements automatically as they are added. This is useful for when you need to keep track of unique elements in a sorted order. However, ordered sets complete their operations with $O(\log n)$, $n$ being the number of elements in the set.

```cpp
set<int> mySet;
mySet.insert(5); // [5]
mySet.insert(10); // [5 10]
mySet.insert(5); // [5 10]
mySet.insert(-5); // [-5 5 10]
mySet.erase(10); // [-5 5]
mySet.count(10); // 0
mySet.count(5); // 1

```

In C++, you can iterate through sets with the following syntax
```cpp
for(int i : mySet){ 
     cout << i << endl;
}
```

### Unordered
An **unordered set**,(`unordered_set` in C++ and `HashSet` in Java), sorts its elements in an arbitrary order through hashing. Unordered sets are faster than ordered sets(all operations are done with $O(1)$) so they are the best choice when you need to keep track of unique elements, but their order isn't important.

```cpp
unordered_set<int> mySet;
mySet.insert(5); // [5]
mySet.insert(10); // [5 10]
mySet.insert(5); // [5 10]
mySet.insert(-5); // [5 10 -5]
mySet.erase(5); // [10 -5]
mySet.count(5); // 0
mySet.count(10); // 1
```


### Multisets(C++ only)
A **multiset** is just like an **ordered set**, except it allows duplicate elements.
 - The `find` function returns an iterator pointing to the **first** occurence of an element.
 - The `count` function returns how many occurrences there are of an element.
 - The `erase` function erases **all** occurrences of an element.

```cpp
multiset<int> mySet;
mySet.insert(5); // [5]
mySet.insert(10); // [5 10]
mySet.insert(5); // [5 5 10]
mySet.insert(-5); // [-5 5 5 10]
mySet.count(5); // 2
mySet.erase(5); // [-5 10]
mySet.count(10); // 1
```

## Maps
A **map**, or **dictionary**, is a data structure that associates unique keys with corresponding values. Each key in a map is unique, and it allows efficient lookup and retrieval of values based on the associated key. Using bracket indexing(`map[key]`), you can create new key-value pairings and retrieve values from keys.

```cpp
map<char,int> dogRatings;
dogRatings['🐕'] = 100; // Creating a new key-value pair(Golden Retrievers are awesome!)
cout << dogRatings['🐕'] << endl; // 100; Retrieving a value from a key
dogRatings['🐩'] = 75; // Poodles are ok, I guess
cout << dogRatings['🐩'] << endl; // 75
```

## Sources
- [Fundamental Graphs Knowledge - Intro + Basic Algorithms](https://www.youtube.com/watch?v=awqss7Kjt2Y&t=449s)