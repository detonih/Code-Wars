function createPhoneNumber(numbers){

  const sliceFirstNumbersOfArray = numbers.slice(0, 3).join('');
  //console.log(sliceFirstNumbersOfArray)
  const sliceMiddleNumbersOfArray = numbers.slice(3, 6).join('');
  //console.log(sliceMiddleNumbersOfArray)
  const sliceLastNumbersOfArray =numbers.slice(6, 10).join('');
  //console.log(sliceLastNumbersOfArray)

  const phoneNumber = `(${sliceFirstNumbersOfArray}) ${sliceMiddleNumbersOfArray}-${sliceLastNumbersOfArray}`;

  return phoneNumber;

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));