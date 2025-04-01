n = int(input())
arr= []
for i in range(n):
    num = int(input())
    arr.append(num)
c = 0
for i in range(1,n-1):
     if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        c += 1
print(c)