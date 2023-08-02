# **Get in Line:** Queues, Stacks, Heaps, and More
**Some more very useful data structures.**

As you tackle more and more programming problems, you will encounter situations where you will need to organize values in a specific way. The data structures discussed below each organize collections of values in their own unique ways and are all extremely powerful tools to have in your arsenal!

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

**Keep in mind that queues, stacks, and heaps can't use bracket indexing(`arr[ind]`) like arrays. For these data structures, you can only access the front/top element.**

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

### Multisets

## Maps