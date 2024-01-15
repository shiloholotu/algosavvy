# **Getting Graphy with It:** Adjacency Lists, BFS, and DFS
**An dive into graph data structures.**

A graph is a non-linear data structure that consists of nodes connected by edges. This sort of data structure can be very useful, like when trying to represent different routes between houses or a series of flights between airports.

**Note: All examples in this tutorial are in C++.**

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
```html
{
    0:[1,2],
    1:[0,2],
    2:[0,1],
    3:[4],
    4:[3]
}
``` 

Adjacency lists make it easy to retrieve the neighbors of nodes without having to iterate through every single edge in the graph. Most graph-related programming problems will give you a list a connections between nodes, which you can easily iterate through and convert into an adjacency list. The input format for these types of problems usually look something like this:

**Input**

- 1st line: $n$, the number of nodes
- 2nd line: $m$, the number of connections
- Following $m$ lines: $a$ and $b$, representing a connection between node $a$ and node $b$
- Example:
```html
5
4
1 2
2 3
1 3
4 5
```

Here's how you would process this input:

**Adj. List Code**

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){

    //adj list using hashmap
    map<int,vector<int>> adj;

    //getting input
    int n,m;
    cin >> n >> m;
    for(int i = 0; i < m; i++){
        int a,b;
        cin >> a >> b;
        adj[a].push_back(b); // add b to a's list
        adj[b].push_back(a); // add a to b's list

    }
}
```

## Navigation
There are 2 main methods of navigating through graphs. Both have equal time complexities, $O(n)$, $n$ being the number of nodes, but parse through nodes in a different order.

### Breadth-First Search
**Breadth-First Search(BFS)** takes in a source node and then navigates to all the nodes 1 edge away from the source node. Then the algorithm navigates to all nodes 2 edges away from the source node. This continues until all nodes in the connected component have been navigated. BFS should be used when we want to search the graph in a pattern that spreads out evenly from a source node. Now, lets see how we would use BFS to print out all the nodes in a component(Don't worry if its a lot at once, we'll walk through it after)

**Graph model:**
```html
       (1)
       / \
     (2) (3)
     / \   \
   (4) (5) (6)
```

**BFS Algorithm:**
```cpp
#include <bits/stdc++.h>
using namespace std;

//set up adj list
map<int, vector<int>> adj;

// an array to track whether we've already navigated to a certain node
// seen[i] = 0 means node i hasn't been navigated, 1 means it has
vector<int> seen = {0,0,0,0,0};

void bfs(int source){
    queue<int> q;
    q.push(source);
    seen[source-1] = 1; // mark source node as visited/seen; using source-1 because seen array is zero-indexed

    while(q.size() > 0){ //keep running until there are no more nodes to navigate through

        int cur = q.front();
        q.pop();

        cout << cur << endl; // print out the current node

        for(int i : adj[cur]){

            if(seen[i-1] == 0){ // check if node hasn't been visited yet; using i-1 because seen array is zero-indexed
                q.push(i);
                seen[i-1] = 1; // mark node as seen/visisted
            }
        }
    }
}


int main(){

    //populate adj list
    adj[1] = {2,3};
    adj[2] = {1,4,5};
    adj[3] = {1,6};
    adj[4] = {2};
    adj[5] = {2};
    adj[6] = {3};

    bfs(1);//print out all nodes connected to node 1
    return 0;
}

```

**Output:**
```
1
2
3
4
5
6
```

Let's analyze what we just did. We created an adjacency list, representing each nodes edges. We also created an array `seen` with all zeroes, where `seen[i] = 0` means that node `i+1` hasn't been navigated yet. We then created a function `bfs` which takes in 1 parameter, `source`, the node we want to start from. Then, we create a queue with only the source node in it. Then, we create a while loop that continues until the queue is empty. Within the loop, we store the front of the queue as `cur` and then print `cur`. Then, we remove `cur` from the queue and use our adjacency list to iterate through all of the neighboring nodes of `cur`. For every neighbor, we check if it has already been navigated and if not, we add it to the queue(remember that items added to queues are sent to the back) and set its value in `seen` to 1. By the end of this loop, we will have printed every node in the source node's connected component, in order of distance from the source node.


### Depth-First Search
**Depth-First Search(DFS)** differs from BFS in the order in which nodes are navigated. While BFS uses a queue, meaning that it will navigate to all the source node's direct neighbors before any other nodes, DFS uses a **stack**, meaning that the algorithm will follow one path as deep as possible and then backtrack until reaching an unavigated path. This probably wont make a lot of sense without the code, so lets see how we would implement the same algorithm above but with DFS instead of BFS.


**Graph model:**
```html
       (1)
       / \
     (2) (3)
     / \   \
   (4) (5) (6)


```

**DFS Algorithm:**
```cpp
#include <bits/stdc++.h>
using namespace std;

//set up adj list
map<int, vector<int>> adj;

// an array to track whether we've already navigated to a certain node
// seen[i-1] = 0 means node i hasn't been navigated, 1 means it has
vector<int> seen = {0,0,0,0,0,0};

void dfs(int source){
    stack<int> st;
    st.push(source);
    seen[source-1] = 1; // mark source node as visited/seen; using source-1 because seen array is zero-indexed

    while(st.size() > 0){ //keep running until there are no more nodes to navigate through

        int cur = st.top();
        st.pop();

        cout << cur << endl; // print out the current node

        for(int i : adj[cur]){

            if(seen[i-1] == 0){ // check if node hasn't been visited yet; using i-1 because seen array is zero-indexed
                st.push(i);
                seen[i-1] = 1; // mark node as seen/visisted
            }
        }
    }
}


int main(){

    //populate adj list
    adj[1] = {2,3};
    adj[2] = {1,4,5};
    adj[3] = {1,6};
    adj[4] = {2};
    adj[5] = {2};
    adj[6] = {3};

    dfs(1);//print out all nodes connected to node 1
    return 0;
}

```

**Output:**
```
1
3
6
2
5
4
```

- **Important note:** DFS's order of navigation can be quite hard to conceptualize when first learning it. All you need to know is that if you need to navigate nodes in order of distance from a source node(for example, if a problem asks to find the farthest connected node of a source node), then you shouldn't use DFS, since it doesn't navigate in order of distance from a source. Otherwise you can usually use BFS and DFS interchangeably.

Because of how stacks place their most recently added element in front, instead of in the back like a queue, the DFS's order of navigation is different than BFS. DFS goes as deep as possible in a single path, and then backtracks until reaching an unavigated path and continues the loop until navigating through all the available paths. **Try not to get too caught up on DFS's order of navigation, as you will rarely being using it in situations where the order of navigation is important.** Let's see what the stack will look like through each loop of the while loop:
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
       (1)
       / \
     (2) (3)
     / \   \
   (4) (5) (6)
```

**DFS Algorithm:**
```cpp
#include <bits/stdc++.h>
using namespace std;

//set up adj list
map<int, vector<int>> adj;

// an array to track whether we've already navigated to a certain node
// seen[i-1] = 0 means node i hasn't been navigated, 1 means it has
vector<int> seen = {0,0,0,0,0,0};

void dfs(int source){

    if(seen[source-1]) return; // if the current node has already been navigated, end this recursion
    seen[source-1] = 1; // mark current node as navigated/seen

    cout << source << endl; // print current node

    for(int i : adj[source]) dfs(i); // call dfs on all neighboring nodes
}

int main(){

    //populate adj list
    adj[1] = {2,3};
    adj[2] = {1,4,5};
    adj[3] = {1,6};
    adj[4] = {2};
    adj[5] = {2};
    adj[6] = {3};

    dfs(1);//print out all nodes connected to node 1
    return 0;

}

```

**Output:**
```
1
2
4
5
3
6
```

Note how the order of our recursion DFS is different than our stack DFS, as the recursion DFS prioritizes the elements **first** in the current nodes adj. list while the stack DFS prioritizes the **last** elements in the current nodes adj. list.

## Common Problem: Counting Connect Components
A very common BFS/DFS problem is counting the connected components within a graph. Here's how you would do that with either BFS, stack DFS, or recursion DFS.

**Graph model:**
```html
(1)———(2)
  \   /     (4)——(5)
   (3)

```

**General Algorithm:**
```cpp
#include <bits/stdc++.h>
using namespace std;

map<int, vector<int>> adj;
vector<int> seen = {0,0,0,0,0};

void graphAlgo(int source){
    // insert code for whatever version of BFS/DFS you want
    // for this example we'll use recursion DFS

    if(seen[source-1]) return;
    seen[source-1] = 1;

    for(int i : adj[source]) graphAlgo(i);
}

int main(){

    adj[1] = {2,3};
    adj[2] = {1,3};
    adj[3] = {1,2};
    adj[4] = {5};
    adj[5] = {4};

    int cnt = 0; // track number of connected components
    for(int i = 1; i <= 5; i++){
        if(seen[i-1]) continue; // check if node already navigated
        graphAlgo(i); // mark node all nodes connected to it
        cnt++;
    }

    cout << cnt << endl; // 2

    return 0;
}

```

**Explanation:** Note that BFS and DFS navigate through all nodes **in the same connected component** as the source node. Since BFS/DFS spreads through edge connections defined in our adj. list, it can't spread to other connected components. So all we need to do is to check for every node $i$ from 1 to 5 and see if it has been marked in `seen`. If it isn't, this means that node $i$'s connected component hasn't been navigated through yet and we can run DFS/BFS with node $i$ as the source node, which will mark all the other nodes in node $i$'s connect component. Then we can add 1 to our connected component count. If node $i$ has been marked, then this can only mean that node $i$ is included in a previous node's connected component, so we can move on without adding to the count.

# Sources

- [Fundamental Graphs Knowledge - Intro + Basic Algorithms**(Highly recommended that you watch this!!)**](https://www.youtube.com/watch?v=awqss7Kjt2Y&t=449s)
- [Difference between BFS and DFS - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/)