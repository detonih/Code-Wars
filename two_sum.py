def two_sum(numbers, target):
    numb_map = {}

    for i, numb in enumerate(numbers):
        if numb in numb_map: return [numb_map[numb], i]    
        numb_map[(target - numb)] = i      
    return False