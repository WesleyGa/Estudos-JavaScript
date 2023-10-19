let valor;  // não inicializada;
console.log(valor); // undefined porque não foi passado nenhum valor para a variavel

valor = null; // null significa ausência de valor, mas mesmo assim, a variável 'valor' foi definida.
console.log(valor);

 // cuidados
 // console.log(valor.toString());  erro!

 const produto = {};
 console.log(produto.preco); // Undefined - O objeto tem um atributo, mas, o atributo não tem um valor.
 console.log(produto); // vazio;

 produto.preco = 3.50;

 console.log(produto); // será exibido o preco do produto

 produto.preco = undefined // evitar atribuir undefined

 console.log(!!produto.preco); // O preco retornara undefined e para o boolean é  falso porque não contem o valor 

 console.log(produto);

 produto.preco = null; // sem preço
 console.log(!!produto.preco); // false
 
 console.log(produto);

