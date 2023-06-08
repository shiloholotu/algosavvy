```cpp
int bruteForceRecursion(int n, int m, int i = 1, int j = 1){
    if(i > n || j > m)return 0;
    if(i == n && j == m)return 1;

    return bruteForceRecursion(n,m,i+1,j) + bruteForceRecursion(n,m,i,j+1);
}
```