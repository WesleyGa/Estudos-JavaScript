// pessoa -> 123 ->{...}
const pessoa = { nome: "Joao" };
pessoa.nome = "Eliel";
console.log(pessoa);

// pessoa -> 456 -> {...};
// pessoa = {nome: 'ana'};

Object.freeze(pessoa);

pessoa.nome = "MAria";
pessoa.end = "Rua ABC";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)