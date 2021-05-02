def capitalize(s)

  joinArrays = []
  chars = s.split('')

  alternateEvenChars =  chars.map.with_index do |char, i|
    
    if i % 2 == 0
      char.upcase
    else
      char.downcase

    end
    
  end

  alternateOddChars = chars.map.with_index do |char, i|
    
    if i % 2 != 0
      char.upcase
    else
      char.downcase

    end
    
  end

  
  joinEvenArray = alternateEvenChars.join
  joinOddArray = alternateOddChars.join

  joinArrays.push(joinEvenArray, joinOddArray)
  
  return joinArrays

end

result = capitalize("abcdef")

puts result