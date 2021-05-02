def order_weight(string):
    
    if not string:
        return ""
    
    #remove espaços em branco no inicio e fim
    string_strip = string.strip()
    
    #quebra a string por espaço
    string_split = string_strip.split(" ")
    
    #remove em branco
    string_split = [string for string in string_split if string]
    
    #somar os itens em split e verificar se essa soma é igual a soma passada
    #se a soma for igual ordenar por string
    #preciso pegar somente os duplicados pra comparar
    seen = {}
    compare_list = []

    for x in string_split:
        if sum(map(int, x)) not in seen:
            seen[sum(map(int, x))] = 1
        else:
            if seen[sum(map(int, x))] == 1:
                compare_list.append(sum(map(int, x)))
            seen[sum(map(int, x))] += 1

    sort_by_string = []
    sort_by_num = []
    for string in string_split:
        if sum(map(int, string)) in compare_list:
            #se tem é duplicado
            #ordenar string
            sort_by_string.append(string)
        if sum(map(int, string)) not in compare_list:
            #sign que não tem
            #se não tem adiciona na lista de comparacao
            compare_list.append(sum(map(int, string)))
        
            sort_by_num.append(string)
    
    print("sort_by_string =>", sort_by_string)
    sorted_list_by_string = sorted(sort_by_string)
    
    print("sorted_list_by_string =>", sorted_list_by_string)
    
    weight_dict_by_numb = {string: sum(map(int, string)) for string in sort_by_num if string}
    sorted_dict_by_numb = sorted(weight_dict_by_numb)
    
    #lista concatenada com string e numerico
    weight_list =  sorted_list_by_string + sorted_dict_by_numb
    print("weight_list =>", weight_list)
    weight = ' '.join(map(str, weight_list))
    print("weight =>", weight)
    
    return weight 
    
#A lista pode estar vazia OK
# peso é a soma dos digitos de um numero em sequencia ok
# Se dois numeros tiverem peso iguais considerar como string para ordenar (alfabetico)
#pode acontecer que a string de entrada tenha espaços em branco à esquerda e à direita OK
#e mais do que um único espaço em branco entre dois números consecutivos OK