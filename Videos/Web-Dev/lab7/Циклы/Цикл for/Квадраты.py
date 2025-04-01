import math
a = int(input())
b = int(input())
for i in range(a,b):
    if math.isqrt(i)**2 == i:
        print(i)