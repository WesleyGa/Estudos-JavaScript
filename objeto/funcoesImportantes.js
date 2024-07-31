const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// usando o destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// definir a propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    // enumerable: propriedade para saber se vai listar ou não listar no objeto pessoa.
    enumerable: true,
    // writable: propriedade para saber se vai ser permitido a modificação.
    writable: false,

    value: '01/02/2019'  //valor fixo enquanto o writable for false.
})

pessoa.dataNascimento = '01/01/2017'; // Tentar modificar a propriedade 'dataNascimento' (não vai funcionar por causa do writable: false)

console.log(pessoa.dataNascimento) // [['dataNascimento', '01/02/2019']]

// Usando Object.entries para listar as propriedades e seus valores
console.log(Object.entries(pessoa))