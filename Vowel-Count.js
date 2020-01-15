function getCount(str) {
  
    var vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount === null ? 0 : vowelsCount.length;
    
    
    return vowelsCount;
  }
  
  //se length retornar o numero de caracteres em uma string, então posso
  /*
  let array = Array.from(str)
    let vowelsCount = array.filter(array => array.length == str.includes("aeiou"))
    
    //const result = words.filter(word => word.length > 6);
  
  function getCount(str) {
    var vowelsCount = 0;
    var validVowels = ["a", "e", "i", "o", "u"]
    for(let i = validVowels.indexOf(str); i != -1; i++) {
    vowelsCount++
    }
    return vowelsCount;
  }
  function getCount(str) {
    var vowelsCount = 0;
    //var validVowels = ["a", "e", "i", "o", "u"]
    for(let i = ["a", "e", "i", "o", "u"]; i != -1; i++) {
    vowelsCount++
    return vowelsCount;
    }
    
  }
  
  */
  
  //elemento é validVowels é o que eu quero pesquisar
  //array é str é onde eu quero pesquisar
  
  //estou procurando a str dentro do indexOf do validVowels
  //primeiro preciso achar em qual posição (i) as validVowels estão
  //quando encontrar uma somar + 1 no vowlesCount
  
  //tenho que achar o array valid na str
  /*
  var indices = [];
  var array = ['a', 'b', 'a', 'c', 'a', 'd'];
  var elemento = 'a';
  var idx = array.indexOf(elemento);
  while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(elemento, idx + 1);
  }
  console.log(indices);
  // [0, 2, 4]
  */