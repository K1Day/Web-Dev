n = 4
arr = []
for i in range(n):
    num = int(input())
    arr.append(num)

def min(a, b, c, d):
    min_num = a
    if b<min_num:
        min_num = b
    elif c<min_num:
        min_num = c
    elif d<min_num:
        min_num = d
    return min_num
print(min(arr[0], arr[1], arr[2], arr[3]))