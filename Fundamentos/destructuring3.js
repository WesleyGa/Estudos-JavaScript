function rand({ min = 0, max = 1000 }) {

    // A função Math.random() retorna um número pseudo-aleatório no intervalo 0, 1,
    //ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo)

    const valor = Math.random() * (max - min) + min; //gera um valor aleatorio entre max '100' e min '0' 
    return Math.floor(valor) // A função Math.floor() retorna o menor número inteiro dentre o número passado para a função.
}
console.log(rand({ max: 200, min: 10 }));