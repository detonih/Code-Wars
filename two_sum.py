def two_sum(numbers, target):
  combinations = []
  for i in range(0, len(numbers)):
    print("comb ", combinations)
    combinations.append( (numbers[i ] if numbers[i] == numbers[i] else numbers[i-1] , [n for n in numbers if n != numbers[i]][i-1]))
  print(combinations)
  result = []
  for i in combinations:
    sum_comb = sum(i)
    print(sum_comb)
    if sum_comb == target:
      n, y = i[0], i[1]
      print(i)
      result.append(numbers.index(n))
      result.append(numbers.index(y))
        
  return sorted(result)

print(two_sum([1,2,3], 4))
# [0,2]
# print(two_sum([1234,5678,9012], 14690))
# [1, 2]
print(two_sum([2,2,3], 4))
# [0, 1]
