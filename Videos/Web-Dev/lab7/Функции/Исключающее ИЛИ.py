a = int(input())
b = int(input())
def xor(x,y):
    if(x * y == 0):
        if(x + y == 0):
            return False
        else:
            return True
print(xor(a,b))
