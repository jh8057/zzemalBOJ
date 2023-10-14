#include <iostream>
using namespace std;

int main()
{
    int a, b;
    while (1)
    {
        cin >> a >> b;
        if (a == 0 && b == 0)
            break;
        if (a % b == 0)
        {
            cout << "multiple" << endl;
        }
        else if (b % a == 0)
        {
            cout << "factor" << endl;
        }
        else
        {
            cout << "neither" << endl;
        }
    }
    return 0;
}

// c기반
//  #include<stdio.h>

// int main(){
// 	int n,m;

// 	while(1){
// 		scanf("%d %d",&n,&m);
// 		if(n==0&&m==0) break;

// 		if(m%n==0){
// 			printf("factor\n");
// 		}
// 		else if(n%m==0){
// 			printf("multiple\n");
// 		}
// 		else{
// 			printf("neither\n");
// 		}
// 	}

// }