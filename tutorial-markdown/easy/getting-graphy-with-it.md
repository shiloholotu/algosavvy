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
**Adjacency lists** are probably to most popular way to represent graphs in code. To create one, we iterate through each node and store its neighbors. This is can be done in an array of lists or a hashmap/map/dictionary where keys are node IDs and values are lists of other node IDs. The following graph may look like this when represented as an adjancency list:

**Graph model:**
```html
(0)———(1)
  \   /     (3)——(4)
   (2)

```


**Adjacency list representation:**
```HTML
{
    0:[1,2],
    1:[0,2],
    2:[0,1],
    3:[4],
    4:[3]
}
``` 

Adjacency lists make it easy to retrieve the neighbors of nodes without having to iterate through every single edge in the graph. Most graph-related programming problems will give you a list a connections between nodes, which you can easily iterate through and convert into an adjacency list. The code to do so may look something like this:
```html
edges = [
    [0,1],//describes an edge between node 0 and 1
    [1,2],
    [0,2],
    [3,4]
]
adj = {}

for(each edge in edges){

    adj[ edge[0] ].add( edge[1] )
    adj[ edge[1] ].add( edge[0] )
}
```

## Navigation
There are 2 main methods of navigating through graphs. Both have equal time complexities, but parse through nodes in a different order.

### Breadth-First Search
**Breadth-First Search(BFS)** takes a starts in a source node and then navigates to all the nodes 1 edge away from the source node. Then the algorithm navigates to all nodes 2 edges away from the source node. This continues until all nodes in the connected component have been navigated. BFS should be used when we want to search the graph in a pattern that spreads out evenly from a source node. Now, lets see how we would use BFS to print out all the nodes in a component(Don't worry if its a lot at once, we'll walk through it after)

**Graph model:**
```html
       (0)
       / \
     (1) (2)
     / \   \
   (3) (4) (5)


```

**BFS Algorithm:**
```html

// adjency list
adj = {
    0:[1,2],
    1:[0,3,4],
    2:[0,5],
    3:[1],
    4:[1],
    5:[2]
}

// an array to track whether we've already navigated to a certain node
// seen[i] = 0 means node i hasn't been navigated, 1 means it has
seen = [0,0,0,0,0,0]


function bfs(source){

    queue = [] // imagine this is a queue, not an array like seen
    queue.push(source)

    while(queue.size() > 0){ //keep running until there are no more nodes to navigate through

        cur = queue.front()
        queue.pop()

        print(cur)// print out the current node

        for(every i in adj[cur]){

            if(seen[cur] == 0){
                queue.push(i)
                seen[i] = 1

            }

        }
        
        
    }

}

bfs(0)

```

**Output:**
```
0
1
2
3
4
5
```

Let's analyze what we just did. We created an adjacency list, representing each nodes edges. We also created an array `seen` with all zeroes, where `seen[i] = 0` means that node `i` hasn't been navigated yet. We then created a function `bfs` which takes in 1 parameter, `source`, the node we want to start from. Then, we create a queue with only the source node in it. Then, we create a while loop that continues until the queue is empty. Within the loop, we store the front of the queue as `cur` and then print `cur`. Then, we remove `cur` from the queue and use our adjacency list to iterate through all of the neighboring nodes of `cur`. For every neighbor, we check if it has already been navigated and if not, we add it to the queue(remember that items added to queues are sent to the back) and set its value in `seen` to 1. By the end of this loop, we will have printed every node in the source node's connected component, in order of distance from the source node.


### Depth-First Search
**Depth-First Search(DFS)** differs from BFS in the order in which nodes are navigated. While BFS uses a queue, meaning that it will navigate to all the source node's direct neighbors before any other nodes, DFS uses a **stack**, meaning that the algorithm will prioritize a certain direction over others. This probably wont make a lot of sense without the code, so lets see how we would implement the same algorithm above but with DFS instead of DFS.


**Graph model:**
```html
       (0)
       / \
     (1) (2)
     / \   \
   (3) (4) (5)


```

**DFS Algorithm:**
```html

// adjency list
adj = {
    0:[1,2],
    1:[0,3,4],
    2:[0,5],
    3:[1],
    4:[1],
    5:[2]
}

// an array to track whether we've already navigated to a certain node
// seen[i] = 0 means node i hasn't been navigated, 1 means it has
seen = [0,0,0,0,0,0]


function dfs(source){

    stack = [] // imagine this is a stack, not an array like seen
    stack.push(source)

    while(stack.size() > 0){ //keep running until there are no more nodes to navigate through

        cur = stack.top()
        queue.pop()

        print(cur)// print out the current node
       
        for(every i in adj[cur]){

            if(seen[cur] == 0){
                stack.push(i)
                seen[i] = 1

            }

        }
        
    }

}

dfs(0)

```

**Output:**
```
0
2
5
1
4
3
```

- **Important note:** DFS's order of navigation can be quite hard to conceptualize when first learning it. All you need to know is that if you need to navigate nodes in order of distance from a source node(for example, if a problem asks to find the farthest connected node of a source node), then you shouldn't use DFS, since it doesn't navigate in order of distance from a source. Otherwise you can use either.

Because of how stacks place their most recently added element in front, instead of in the back like a queue, the DFS's order of navigation is different than BFS. For this specific example, the algorithm prioritizes the rightmost node over the others. This is because of the way our adjacency list is set up, where each list is ordered from leftmost to rightmost. **Try not to get too caught up on DFS's order of navigation, as you will rarely being using it in situations where the order of navigation is important.** Let's see what the stack will look like through each loop of the while loop:
```html
Before loop: [0]
1st loop: [2,1] // we pop 0, and then iterate through its neighbors that haven't been navigated(1 and 2) and add them to the stack
2nd loop: [5,1] // we pop 2, and then iterate through its neighbors that haven't been navigated(5) and add them to the stack
3rd loop: [1] // we pop 5, and then iterate through its neighbors that haven't been navigated(none) and add them to the stack
4th loop: [4,3] // we pop 1, and then iterate through its neighbors that haven't been navigated(3 and 4) and add them to the stack
5th loop: [3] // we pop 4, and then iterate through its neighbors that haven't been navigated(none) and add them to the stack
Final loop: [] // we pop 3, and then iterate through its neighbors that haven't been navigated(none) and add them to the stack
```

While DFS is a little harder to wrap you head around, it is often favored over BFS because it can be implemented using **recursion**(calling a function within itself), which is often much cleaner and easier to read than using a stack or queue. Lets see the code for it.

**Graph model:**
```html
       (0)
       / \
     (1) (2)
     / \   \
   (3) (4) (5)


```

**DFS Algorithm:**
```html

// adjency list
adj = {
    0:[1,2],
    1:[0,3,4],
    2:[0,5],
    3:[1],
    4:[1],
    5:[2]
}

// an array to track whether we've already navigated to a certain node
// seen[i] = 0 means node i hasn't been navigated, 1 means it has
seen = [0,0,0,0,0,0]


function dfs(cur){

    //check if we've already navigated to node

    if(seen[cur]){
         return // if already navigated, exit the function
    }
    seen[cur] = 1 // if not navigated, mark it in seen array
    
    for(every i in adj[cur]){
        dfs(i) // spread to neighbors of current node
    }

}

dfs(0)

```

**Output:**
```
0
1
3
4
2
5
```

Note how the order of our recursion DFS is different than our stack DFS, as the recursion DFS prioritizes the elements **first** in the current nodes adj. list while the stack DFS prioritizes the **last** elements in the current nodes adj. list.

## Common Problem: Counting Connect Components
A very common BFS/DFS problem is counting the connected components within a graph. Here's how you would do that with BFS, stack DFS, and recursion DFS.

**Graph model:**
```html
(0)———(1)
  \   /     (3)——(4)
   (2)

```

**BFS Algorithm:**
```html

// adjacency list
adj = {
    0:[1,2],
    1:[0,2],
    2:[0,1],
    3:[4],
    4:[3]
}

// an array to track whether we've already navigated to a certain node
// seen[i] = 0 means node i hasn't been navigated, 1 means it has
seen = [0,0,0,0,0,0]


function bfs(source){

    queue = [] // imagine this is a queue, not an array like seen
    queue.push(source)

    while(queue.size() > 0){ //keep running until there are no more nodes to navigate through

        cur = queue.front()
        queue.pop()

        print(cur)// print out the current node

        for(every i in adj[cur]){

            if(seen[cur] == 0){
                queue.push(i)
                seen[i] = 1

            }

        }
        
        
    }

}

cnt = 0
for(every i from 0 to 4){
     if(seen[i]){
          continue
     }
     bfs(i)
     cnt++
}

print(cnt)

```

**Recursion DFS Algorithm:**
```html

// adjacency list
adj = {
    0:[1,2],
    1:[0,2],
    2:[0,1],
    3:[4],
    4:[3]
}

// an array to track whether we've already navigated to a certain node
// seen[i] = 0 means node i hasn't been navigated, 1 means it has
seen = [0,0,0,0,0,0]

function dfs(source){

    stack = [] // imagine this is a stack, not an array like seen
    stack.push(source)

    while(stack.size() > 0){ //keep running until there are no more nodes to navigate through

        cur = stack.top()
        queue.pop()

        print(cur)// print out the current node
       
        for(every i in adj[cur]){

            if(seen[cur] == 0){
                stack.push(i)
                seen[i] = 1

            }

        }
        
    }

}

cnt = 0
for(every i from 0 to 4){
     if(seen[i]){
          continue
     }
     dfs(i)
     cnt++
}

print(cnt)

```

**Stack DFS Algorithm:**
```html

// adjacency list
adj = {
    0:[1,2],
    1:[0,2],
    2:[0,1],
    3:[4],
    4:[3]
}

// an array to track whether we've already navigated to a certain node
// seen[i] = 0 means node i hasn't been navigated, 1 means it has
seen = [0,0,0,0,0,0]


function dfs(cur){

    //check if we've already navigated to node

    if(seen[cur]){
         return // if already navigated, exit the function
    }
    seen[cur] = 1 // if not navigated, mark it in seen array
    
    for(every i in adj[cur]){
        dfs(i) // spread to neighbors of current node
    }

}


cnt = 0
for(every i from 0 to 4){
     if(seen[i]){
          continue
     }
     dfs(i)
     cnt++
}

print(cnt)

```

All of these versions should output `2`.

**Explanation:** Note that BFS and DFS navigate through all nodes **in the same connected component** as the source node. Since BFS/DFS spreads through edge connections defined in our adj. list, it can't spread to other connected components. So all we need to do is to check for every $i$ node from 0 to 4 if it has been marked in `seen`. If it isn't, this means that node $i$'s connected component hasn't been navigated through yet and we can run DFS/BFS with node $i$ as the source node, which will mark all the other nodes in node $i$'s connect component. Then we can add 1 to our connected component count. If node $i$ has been marked, then this can only mean that node $i$ is included in a previous node's connected component, so we can move on without adding to the count.

# Sources

- [Fundamental Graphs Knowledge - Intro + Basic Algorithms**(Highly recommended that you watch this!!)**](https://www.youtube.com/watch?v=awqss7Kjt2Y&t=449s)
- [Difference between BFS and DFS - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/)