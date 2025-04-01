n = int(input())
arr = []
for i in range(n):
    num = int(input())
    arr.append(num)
for i in range(n // 2):  
    temp = arr[i]  
    arr[i] = arr[n - i - 1]  
    arr[n - i - 1] = temp  
for i in range(n):  
    print(arr[i])  