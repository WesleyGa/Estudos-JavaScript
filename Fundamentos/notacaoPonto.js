const obj1 = {}
obj1.nome = "Wesley";
obj1.idade = "19";

function Obj (nome,idade){
       this.nome = nome;
       this.idade = idade;
}

const obj2 = new Obj('Jose', '10');
const obj3 = new Obj('Mari', '22');

console.log(obj1.nome + obj1.idade);
console.log(obj2.nome + obj2.idade);
console.log(obj3.nome + obj3.idade);

