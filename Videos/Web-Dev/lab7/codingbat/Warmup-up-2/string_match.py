def string_match(a, b):
    count = 0
    for i in range(min(len(a), len(b)) - 1):
        if a[i] == b[i] and a[i + 1] == b[i + 1]:
            count += 1
    return count