# **Get in Line:** Queues, Stacks, Heaps, and More
**Some more very useful data structures.**

As you tackle more and more programming problems, you will encounter situations where you will need to organize values in a specific way. The data structures discussed below each organize collections of values in their own unique ways and are all extremely powerful tools to have in your arsenal! 

**Keep in mind that the data structures discussed in this tutorial can't use bracket indexing(`arr[ind]`) like arrays. For these data structures, they have their own unique functions for accessing elements.**

**Note: All examples in this tutorial are in C++.**



## Queues
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