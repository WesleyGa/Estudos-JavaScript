function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log(obj1.__proto__ === obj2.__proto__) /* true: todos os objetos criados a partir de 
                                                  uma mesma função construtora apontam para o mesmo protótipo*/

console.log(MeuObjeto.prototype === obj1.__proto__)/*Quando um objeto é criado a partir de uma função construtora 
                                                     usando o 'new', o protótipo desse objeto automaticamente aponta 
                                                     para o objeto 'prototype' da função construtora (MeuObjeto.prototype). 
                                                     Isso permite que o objeto criado herde propriedades e métodos
                                                     definidos no protótipo da função construtora. */
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Wesley'
obj2.falar()

const obj3 = {}
//mudando a referência
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)// existe mas não aponta para nada.



