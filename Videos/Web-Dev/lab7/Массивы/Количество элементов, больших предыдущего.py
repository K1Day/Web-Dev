n = int(input())
arr = []
for i in range(n):
    num = int(input())
    arr.append(num)
c = 0
for i in range(n):
    if(arr[i]> arr[i-1]):
        c += 1
print(c)
