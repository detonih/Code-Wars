//return the total number of smiling faces in the array
function countSmileys(arr) {

    //cria uma regex que vai permitir [;:] e [)D], mas vai permitir ou nao uma unica
    //ou nenhuma vez aparecer os itens "~" e "-" ([~-]?)
    const regex = /[;:][~-]?[)D]/g
    
    //cria um função que filtra do array (arr.filter) os matchs de smiles que dão de 
    // acordo com a regex (smile.match(regex))
    
    const findSmile = arr.filter(smile => smile.match(regex))
    //se retornar null significa que não foi encontrado matchs de acordo com a regex
    //então retorna 0 (de acordo com o que foi pedido no exercício)
    //se não, retorna a quantidade de elementos (findSmile.length) no array retornado 
    //por filter (filter cria um novo array)
    return findSmile === null ? 0 : findSmile.length
      
    
    }
    
    // /:(?=[:~)D\-])[^>]|;(?=[:~)D\-])[^>]/g
    
    // /:(?=[:~)D\-])|;(?=[:~)D\-])/g
    // /(?![:;[$O>}{*])[:;~)D\-]/g
    //regex: (?![:;[$O>}{*]) -> (?!) especifica um grupo que não pode dar match
    //após a expressão principal e ignora tudo que está dentro do conjunto de caracteres
    // representados dentro do colchetes [] 
    //[:;~)D\-] -> conjunto de caracteres que devem ser buscados. o "\" antes do "-"
    //trasnforma um caractere reservado (-) em um caractere comum