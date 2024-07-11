const valores = [1.0 , 1.8, 3.9, 2.0, 4.9 ];
console.log(valores[0], valores[4]);
console.log(valores[10]); // não da erro no codigo, apenas informa que o valor esta indefinido(undefined)

const tamanho = valores.length;
console.log(tamanho);
valores[tamanho] = 10; // acrescenta normalmente
console.log(valores); 
console.log(valores.length); // informa a quantidade de elemntos do array 

valores.push({id: 3}, false, null, 'teste');
console.log(valores)

console.log(valores.pop()); // exclui e retorna o ultimo valor de um array

delete valores[0]; // exclui o valor do array na posicao informada 
console.log(valores);

console.log(typeof valores);

