function queueTime(customers, n) {
    let cTime = []
    
    for(let i = 0; i < n; i++) {
      cTime[i] = 0 //vai startar com zero pq nenhum tempo de custumer foi adiconado
    }
    
   //temos que adicionar os clientes a fila mais curta
   //vai adicionar o minimo math.min para o começo da lista ...cTime
  customers.forEach(e => {
    let index = cTime.indexOf(Math.min(...cTime))
    cTime[index] += e
  }) 
     
   
    //retorna o maior da lista
    return Math.max(...cTime)
  }
  
  
  //tills (n) são a quantidade de caixas para atender a fila (queue)
  // custumers é um array que representa a fila, cada espaço (index) no array é uma pessoa
  // e o valor desse espaço representa o tempo para o checkout