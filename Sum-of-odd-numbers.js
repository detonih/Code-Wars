function rowSumOddNumbers(n) {
    //criar um array que vai conter todos os numeros naturais impares
    //se o resto da divisão por 2 for diferente de zero então é impar
    //preciso que o array contenha n elementos. Se n for 42 precisa ter 42 elementos.
    //Portanto se eu colocar apenas os numeros impares de 42 vao aparecer apenas 21 
    //elementos. Assim o while vai até n*2...
    
      var oddNaturals = []
      for(let i = 0; i < n*2; i++) {
        if(i % 2 != 0) {
          oddNaturals.push(i)
        }
      }
    
    //Agora preciso somar todos os elementos desse array 
      var total = oddNaturals.reduce(function(acu, cur) {
      return acu + cur
    })
    
    //e multiplicar por n, pois, o enunciado pede que sejam somadas todas as linhas
    //do triango e não somente a linha de n
      return total * n
      
      console.log(oddNaturals)
      console.log(oddNaturals.length)
      console.log(total)
    }
    