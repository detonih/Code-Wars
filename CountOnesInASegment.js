const getNumberBetween = (firstNumber, secoundNumber) => {
  let theNumbersBetweenEachOther = [];
  
  for(let i = firstNumber; i <= secoundNumber; i++) {
    theNumbersBetweenEachOther.push(i)
  }
  
  return theNumbersBetweenEachOther;
}

const binaryConverter = (arrayNumbers) => {
  
  const convertToBinary = arrayNumbers.map((curr, index) => {
    return curr.toString(2)
  }).join("")

  return convertToBinary;
}

const countOnes = (left, right) => {
  const processNumbers = binaryConverter(getNumberBetween(left, right)).split('');
  const countNumbersOne = processNumbers.filter((elem, index) => {
    return elem === "1"
  })
  return countNumbersOne.length
  
}
console.log(countOnes(4, 7))