```cpp
int solve(int n, int m, int i = 1, int j = 1){
    if(i > n || j > m)return 0;
    if(i == n && j == m)return 1;

    return solve(n,m,i+1,j) + solve(n,m,i,j+1);
}
```