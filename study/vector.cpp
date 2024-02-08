#include <iostream>
#include <vector>
using namespace std;
int main()
{
    vector<int> A;

    A.push_back(1);
    A.push_back(6);
    A.push_back(5);
    A.push_back(4);
    A.push_back(2);

    A.insert(A.begin(), 999);
    A.insert(A.begin() + 2, 10);

    A.erase(A.begin() + 3);

    A.pop_back();

    for (int i = 0; i < A.size(); i++)
    {
        cout << A[i] << " ";
    }
    cout << A.front() << endl;
    cout << A.back() << endl;
    cout << A.at(2) << endl;
    cout << *A.begin() << endl; // 위치값
    cout << *A.end() << endl;
    cout << A.empty() << endl; // 0이면 비어있지 않음

    return 0;
}