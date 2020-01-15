function smallEnough(a, limit){

    let minValue = Math.max(...a)
    
    return minValue <= limit
    
    
    }
    //se todos no array sao menor ou igual a limit, se um for maior, entao é false
    /*
    var found = a.find(function(element) {
      return element >= limit
      
    })
    return found ? true : false
    
    const reducer = a.reduce(function(accumulator, currentValue) {
      return (accumulator + currentValue) / a.length <= limit
      
      
      })
      */
    //a.length == limit || a.length < limit
    //verificar se todos os valores no array são menor ou iguais ao limite