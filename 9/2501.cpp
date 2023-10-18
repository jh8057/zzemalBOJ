#include <iostream>
using namespace std;

int main()
{
    int n, k;
    cin >> n >> k;

    int cnt = 0;
    for (int i = 1; i <= n; i++)
    {
        if (n % i == 0)
        {
            cnt++;
            if (cnt == k)
            {
                cout << i << endl;
            }
        }
    }

    if (cnt < k)
    {
        cout << 0 << endl;
    }

    return 0;
}

// #include<cstdio>
// int i,n,k;
// int main() {
//     scanf("%d %d", &n, &k);
//     for (i = 1; i <= n&&k; i++) k -= !(n%i); // n을 i로 나눈 나머지가 0인 경우 !(n%i)의 값이 1이 되어 k에서 1을 빼게 됩니다.
//     printf("%d", k ? 0 : i - 1);
//     return 0;
// }
