def high_and_low(numbers):
    numb_split = numbers.split(" ")
    numb_split = list(map(int, numb_split))
    maxn = max(numb_split)
    minn = min(numb_split)
    
    return f"{maxn} {minn}"