n = int(input())
arr = []
for i in range(n):
    num = int(input())
    arr.append(num)

for num in range(0,n,2):
        print(arr[num])