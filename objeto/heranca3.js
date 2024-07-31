const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Cria um objeto filha que herda de pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// Além de passar o próprio objeto pai, consigo definir os atributos
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    // .hasOwnProperty verifica se uma propriedade pertence ao próprio objeto ou foi herdada de seu protótipo
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}