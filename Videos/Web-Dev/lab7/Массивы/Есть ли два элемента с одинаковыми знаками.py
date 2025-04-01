n = int(input())
arr = []
for i in range(n):
    num = int(input())
    arr.append(num)
for i in range(n-1):
    if(arr[i] * arr[i+1]>0):
        print("Yes")
        break
else:
    print("No")