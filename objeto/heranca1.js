const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.prototype)// retorna undefined porque o objeto não tem o atributo prototype, apenas o __proto__
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__); // Não há um protótipo acima de Object.prototype; o valor é null.

function MeuObjeto() { }
console.log(typeof Object, typeof MeuObjeto)
console.log(MeuObjeto.prototype)