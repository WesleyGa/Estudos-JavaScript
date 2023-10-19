
const pessoa = {
   nome: 'Wesley',
    idade: '19',
    endereco: {
        lagradouro: "Rua Hellow Wold",
        numero: '12'
    }

};

// Destruturing
const {idade, nome} = pessoa; // tira atributos de dentro do obejeto.

console.log(nome, idade);

console.log(pessoa);

const {endereco : {lagradouro, numero}} = pessoa;

console.log(lagradouro, numero);