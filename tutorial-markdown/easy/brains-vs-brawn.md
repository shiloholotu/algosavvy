# **Brains vs Brawn:** Implementing Brute Force
**When in doubt, use brute force!**

Sometimes the most obvious way to solve a problem is to check every possible answer until you find the solution. While you should always attempt figure out the most efficient algorithm for a problem, sometimes **brute force** is the only option.

**Note: All code examples in this tutorial are in C++.**

## Max Distance Problem
Imagine you have a list of $n$ unique integer coordinates and you need to find the maximum distance between any possible pair of coordinates. 

**Input**

- 1st line: $n$, the number of coordinates
- Next $n$ lines: $a$ and $b$, representing a coordinate at $(a,b)$
- Example:
```html
3
5 10
8 2
13 9
```

**Output**

The square of the maximum distance between any possible pair of coordinates
- Example:
```html
74
```

This is an example of a problem where you would have to use brute force. To implement brute force, we can iterate through every possible pair of the coordinates while keeping track of the current max. The solution would look something like this:

```cpp
#include <bits/stdc++.h>
using namespace std;


int main(){

    int n; cin >> n;
    vector<pair<int,int>> coords;

    for(int i = 0; i < n; i++){
        int a,b; cin >> a >> b;
        coords.push_back(make_pair(a,b));
    }

    int mx = 0;

    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){

            int d = pow(coords[i].first - coords[j].first,2) + pow(coords[i].second - coords[j].second,2);//find the square of the distance between the 2 points
            mx = max(mx, d); // check if the squared distance is greater than the current max
        }
    }

    cout << mx << endl; // output the square of the maximum distance

    return 0;
}

```

This has algorithm has a **time complexity** of $O(n^2)$, where $n$ is the number of coordinates. It's important to note that brute force solutions are often slow and inefficient and should only be used as a last resort.