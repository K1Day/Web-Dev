n = int(input())
arr = list(map(int, input().split()))
runner_up = max([x for x in arr if x != max(arr)])
print(runner_up)
