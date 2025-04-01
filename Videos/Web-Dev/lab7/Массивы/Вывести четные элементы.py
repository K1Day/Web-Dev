n = int(input())
arr = []
for i in range(n):
    num = int(input())
    arr.append(num)
for num in arr:
    if num % 2 == 0:
        print(num) 