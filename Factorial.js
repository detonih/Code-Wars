function factorial(n)
{
   if (n < 0 || n > 12) {
    throw new RangeError("RangeError!")
  } else {
    var factorial = 1
    for(let i = n; i > 1;i--) {
      factorial = factorial * i
      
    }
    return factorial
    
  }
}