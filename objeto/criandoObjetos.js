// notação literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object();
console.log(obj2);

// Funções construtoras 
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.getNomeCompleto = () => {
        return nome + " " + sobrenome;
    }
}
const p1 = new Pessoa("Wesley", "Gabriel", 22)
console.log(p1.getNomeCompleto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 7980, 2)

console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

const fromJson = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJson.info)



