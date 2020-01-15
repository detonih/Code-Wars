function countingValleys(s) {
    var way = s.split("") //trasnforma string em array
    var down = -1
    var up = 1
    var forward = 0
    var countSteps = [] //cria um array para contar os passos
    var start = 0 //onde começa o caminho
    var isInValley = false //verifica se ainda esta dentro do vale, ou seja, que entrou e nao saiu
//cria um loop para colocar dentro de countSteps os numeros referentes a cada passo
//assim vai criar um array [1,0,-1,1]...
    for(let i=0;i<way.length;i++) {
      if(way[i] === 'U') {
        countSteps.push(up)
      } else if(way[i] === 'D') {
        countSteps.push(down)
      } else if(way[i] === 'F') {
        countSteps.push(forward)
      }
      
    }
    //vai contar o caminho se esta entrando ou saindo do vale e se esta no vale
    let path = 0
    for(let i in countSteps) {
        path += countSteps[i]
        if(path < 0 && !isInValley) {
            isInValley = true
        }
        if(path == 0 && isInValley) {
            start++
            isInValley = false
        }
    }
    
    return start
   
}