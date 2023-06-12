```cpp
int solve(vector<int> v, int n){
    
    int left = 0;
    int right = v.size()-1;
    while(left <= right){

        int mid = (left + right)/2;
        
        if(v[mid] == n) return mid;
        if(v[mid] > n)right = mid-1;
        if(v[mid] < n)left = mid+1;

    }

    return -1;
}
```