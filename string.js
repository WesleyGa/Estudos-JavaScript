const escola = "Wesley1"


console.log(escola.charAt(4)); // charAt pega o caractere da pisicao definida
console.log(escola.charCodeAt(6)); // valor dentro da tabela unicode    
console.log(escola.indexOf(6)); // retorna o valor associado ao indice definido

console.log(escola.substring(4)); // retorna as caracteres a partir do indice inserido, até o final da frase.
console.log(escola.substring(4, 7)); // retorna do indice 4 ate o indice 7

console.log('Escola '.concat(escola) + (" !")); // função de concatenar
console.log(escola.replace('W', 'U')); // pega um valor e substitui

console.log('ana, maria, pedro'.split(",")); // converte a string em um array usando como separador o indice definido.