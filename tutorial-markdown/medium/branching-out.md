# **Branching Out:** Navigating Trees
**Efficiently searching monotonic and sorted functions.**

There are many scenarios where you need to pick an optimal number from a range of numbers. Sometimes you need to pick the perfect amount of time to microwave a snack. Sometimes you need to pick the perfect temperature for your AC to make you feel cozy. There are many scenarios like this in programming and we can use the **binary search** algorithm to help us find solutions.

**Note: All examples in this tutorial are in Java.**

## Finding an Exact Value: Phonebook☎️ 
Imagine you have a very lengthy phone book with $n$ pages, each with 1 name on it, and need to find a specific name. The phone book is sorted alphabetically. You could flip page by page until you reach it(this would represent a **brute force** solution), but this would take quite a while. What's another way to do this?

**Example:**
```java
String nameToFind = "Jerry"; // assume 'Jerry' is somewhere in the names list
long n = 1e18; // the length of the phone book, shorthand for 10^18, using long instead of int because value is too large
ArrayList<String> names = {
"Alvin",
"Barry",
"Bill"
"Bobert",
"Cathy",
...
"Zach",
"Zoe"
};
```

In this scenario, we can use **binary search**. To start, we can jump to the middle of the phone book. Then, we check if the name on that page matches the desired name, is before the required name, or after the required name. If it is the desired name, we can end the search there. If it before the desired name, we know that the desired name is in the second half of the book, considering the book is sorted alphabetically. If it is after the desired name, we know that the desired name is in the first half of book, by similar logic. Then we do this process again with the half that we know contains the desired name. Its important to note that this solution only works because the book is **sorted**.

The code would look something like this:
```java
import Java.util.*;

public class Main{
    public static void main(String[] args){
        String nameToFind = "Jerry"; // assume 'Jerry' is somewhere in the names list
        long n = 1e18; // the length of the phone book, shorthand for 10^18, using long instead of int because value is too large
        ArrayList<String> names = {
        "Alvin",
        "Barry",
        "Bill"
        "Bobert",
        "Cathy",
        ...
        "Zach",
        "Zoe"
        };

        long hi = n-1; // the upper bound of potential solution indexes
        long lo = 0; // the lower bound of potential solution indexes
        long ans = -1;

        while(lo <= hi){

            long mid = (lo + hi)/2; // pick the name in the middle of the range, round down

            if(names[mid].equals(nameToFind)){// we found the name
                ans = mid;
                break;
            }

            else if(names[mid].compareTo(nameToFind) > 1){ // the middle name is after the desired name
                hi = mid-1; // set the upper bound to right before the selected middle name, cutting off the second half potential solutions
            }
            else{ // the middle name is before the desired name
                lo = mid+1; // set the lower bound to right after the selected middle name, cutting off the first half of potential solutions
            }
        }

        if(ans == -1) System.out.println(nameToFind + "isn't in the phone book :("); // the desired name was never found, so ans was never changed from -1
        else System.out.println(nameToFind " is on page " + ans + "!");
    }
}

```

## Finding the Maximum Valid Value: Movie Hunt🍿
Imagine the movie theater has $n$ movie showings tonight and the age requirements of the movies can be represented by an array $req$, where $req\_i$ represents the age requirement of the $i$th movie. Array $req$ is sorted in **non-decreasing** order. Lets say are $x$ years old and you to find the movie with the highest age requirement that is still $\le x$. The brute force solution for this problem is to simply iterate backwards from the end of $req$ until you reach a value that is $\le x$. But for this example, I want you to imagine that $n$ is a super large number, like $10^{18}$, so you can't brute force through $req$. How else could you solve this?

**Example:**
```cpp
long long n = 1e18;
vector<int> req = {3, 4, 4, ..., 20, 20, 20};
int x = 15;
```

As you probably guessed, we can use **binary search**. To start, we can jump to the middle of the movies. Then, we age requirement of that movie is $>x$. If so, then we know that this movie and all the movies after it are too mature, considering they are sorted from smallest to largest age requirement. If the movie's age is $\le x$, then we know that all the movies before this movie have no chance of being the maximum valid movie, by similar logic. So then, if the age requirement of the selected movie is $>x$, then we can focus our search on all the movies before it. Otherwise, we can focus our search on all the movies after it, including the selected move. Then we repeat the same process on the selected portion of movies until we find a solution. Just like the previous example, its important to note that this solution only works this situation is **monotonic**. There is a point in the array $req$ where all age requirements before it are $\le x$(valid) and all sizes after it are $> x$(invalid).

The code would loke something like this:
```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    long long n = 1e18;
    vector<int> req = {3, 4, 4, ..., 20, 20, 20};
    int x = 15;

    long long hi = n-1; // upper bound of potential solutions
    long long lo = 0; // lower bound of potential solutions
    long long ans = -1;
    while(lo <= hi){
        long long mid = (lo + hi)/2; // pick the movie in the middle of the range
        if(req[mid] > x){// movie is invalid, too mature
            hi = mid-1; // set upper bound to right before selected movie, cutting off second half of potential solutions
        }
        else{ // movie is valid
            ans = mid; // store valid potential answer
            lo = mid+1; // set the lower bound to right after the selected movie, cutting off the first half potential solutions
        }
    }

    cout << ans << endl; // prints index of maximum valid movie
    return 0;
}
```
## Sources
- **[Binary Search - USACO Guide](https://usaco.guide/silver/binary-search)**