const a = 1;
const b = 2;
const c = 3;

// antes da ES6
const obj1 = { a: a, b: b, c: c }

// com a ES6
const obj2 = { a, b, c }

// outra melhoria
const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4);

const obj5 = {
    //tradicional 
    funcao1: function () {
        //...
    },
    // nova forma reduzida.
    funcao2() {
        //...
    }
}
console.log(obj5)