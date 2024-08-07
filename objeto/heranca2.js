// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0'; // Tomar muito cuidado com esse tipo de manipulação! 

const avo = { attr: 'A' };
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr0, filho.attr, filho.attr2, filho.attr3)



const carro = {
    modelo: '',
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    }, status() {
        return `${this.modelo}: ${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "f40",
    velMax: 324, // shadowing(sobrescrever)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${super.status()}`
    }
}
// estabelecendo as relações 
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())